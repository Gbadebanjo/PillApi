const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
const genericRepo = require("../repository");
const { Professional } = require("../models");
const { comparePasswords, hashPassword } = require("../utils/password.utils");

class ProfessionalService {
    async signUp({ title, firstname, lastname, profession, email, password, confirmPassword, phone, location }) {
        const professional = await genericRepo.setOptions('Professional', {
          selectOptions: [
            'title',
            'firstname',
            'lastname',
            'profession',
            'email',
            'password',
            'phone',
            'location'
          ],
          condition: { email },
        }).findOne();
        abortIf(professional, httpStatus.BAD_REQUEST, 'Professional already exists');
        abortIf(password !== confirmPassword, httpStatus.BAD_REQUEST, 'Password mismatch');
        const hashedPassword = await hashPassword(password);
        let createProfessional = await genericRepo.setOptions('Professional', {
          data: { title, firstname, lastname, profession, email, phone, location, password: hashedPassword }
        }).create();
        createProfessional = createProfessional.toJSON();
        delete createProfessional.password;
        const token = generateToken(createProfessional);
        return { professional: createProfessional, token };
      }
    
      async signIn({ email, password }) {
        let professional = await genericRepo.setOptions('Professional', {
          condition: { email },
        }).findOne();
        abortIf(!professional, httpStatus.BAD_REQUEST, 'Invalid Credentials');
        const match = await comparePasswords(password, professional.password);
        abortIf(!match, httpStatus.BAD_REQUEST, 'Invalid Credentials');
        delete professional.toJSON().password;
        const token = generateToken(professional.toJSON());
        return { professional, token };
      }

      async getDoctors() {
        return this.getProfessionalByProfession('Doctor');
      }
    
      async getDentists() {
        return this.getProfessionalByProfession('Dentist');
      }
    
      async getPhysiotherapists() {
        return this.getProfessionalByProfession('Physiotherapist');
      }
    
      async getProfessionalByProfession(profession) {
        try {
        const professionals = await genericRepo.setOptions('Professional', {
          selectOptions: [
            'title',
            'firstname',
            'lastname',
            'profession',
            'email',
            'phone',
            'location'
          ],
          condition: { profession },
        }).findAll();
        return professionals;
      } catch (error) {
        console.log('Error getting professionals:', error);
        throw new Error('Error getting professionals');
      }
      }

      async updateProfessionalDetails(professionalId, details) {
        const professional = await Professional.findOne({ where: { professional_id: professionalId } });
        console.log('Found professional:', professional);
    
        if (!professional) {
            throw new Error('Professional not found'); // Throw an error if the professional is not found
        }
        let updatedProfessional;
        try {
          updatedProfessional = await professional.update(details); 
        } catch (error) {
          console.log('Updated professional:', updatedProfessional);
          throw new Error('Error updating professional details');
        }
    
        return updatedProfessional;
    }

    async getProfessionalById(professionalId) {
      const professional = await Professional.findOne({ where: { professional_id: professionalId } });
      if (!professional) {
          throw new Error('Professional not found');
      }
      return professional;
    }

    async getAllProfessionals() {
      const professionals = await Professional.findAll();
      if (!professionals) {
          throw new Error('No professionals found');
      }
      return professionals;
    }
}

    module.exports = ProfessionalService;