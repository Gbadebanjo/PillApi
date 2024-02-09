import styled from "styled-components";
import { Link } from "react-router-dom";
import Pillfindr2 from "../assets/Pillfindr2.png";
import World from "../assets/world.png";
import Nigeria from "../assets/nigeria.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Container = styled.div`
  height: 60vh;
  width: 90%;
  margin: 0px 40px 0px 60px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 0px 0px;
  }
`;

const CompanyDetailsContainer = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px 50px 0px 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 20px 0px 0px 0px;
  }
`;

const FirstContainer = styled.div`
  height: auto;
  width: 25%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const FirstContainerImg = styled.img`
  height: 50px;
  width: 200px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const FirstContainerText = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  gap: 5px;
  margin: 6px;
  background-color: #f4f4f6;

  @media (max-width: 768px) {
    width: 100%;
    margin: 6px 8px;
  }
`;

const FirstContainerTextImg = styled.img`
  height: 25px;
  width: 25px;
`;

const FirstContainerParagraph = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  padding-top: 8px;
`;

const SecondToFourthContainer = styled.div`
  height: auto;
  width: 25%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SecondToFourthContainerTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const SecondToFourthContainerLink = styled(Link)`
  font-size: 15px;
  font-weight: 400;
  color: #1f1f1f;
  text-decoration: none;
  padding-bottom: 15px;
  &:hover {
    color: #ac0000;
  }
`;

const SocialMediaContainer = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 0px 110px;
  border-bottom: 1px solid #f4f4f6;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 0px 0px 0px 0px;
    width: 100%;
  }
`;

const Iconcontainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 10px 0px 15px 0px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-color: #f4f4f6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #008080;
  }
`;

const ButtonContainer = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin: 20px 0px;
    gap: 20px;
  }
`;

const Button = styled.button`
  padding: 4px 20px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 700;
  background-color: #f4f4f6;
  border: none;

  &:hover {
    background-color: #008080;
  }
`;

const CCPage = styled.div`
  height: 8vh;
  display: flex;
  flex-direction: row;
  margin: 15px 0px 0px 100px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 0px 0px;
    flex-direction: column;
  }
`;

const CCPageText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: gray;
  width: 54%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const CCPageLinkContainer = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CCPageLink = styled(Link)`
  font-size: 15px;
  font-weight: 400;
  color: gray;
  text-decoration: none;
  &:hover {
    color: #ac0000;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <CompanyDetailsContainer>
        <FirstContainer>
          <FirstContainerImg src={Pillfindr2} />
          <FirstContainerText>
            <FirstContainerTextImg src={World} />
            <FirstContainerParagraph>English</FirstContainerParagraph>
          </FirstContainerText>
          <FirstContainerText>
            <FirstContainerTextImg src={Nigeria} />
            <FirstContainerParagraph>Nigeria</FirstContainerParagraph>
          </FirstContainerText>
        </FirstContainer>
        <SecondToFourthContainer>
          <SecondToFourthContainerTitle>Company</SecondToFourthContainerTitle>
          <SecondToFourthContainerLink to="/about">
            About Us
          </SecondToFourthContainerLink>
          <SecondToFourthContainerLink to="/">
            Careers
          </SecondToFourthContainerLink>
          <SecondToFourthContainerLink to="/">
            Brand guidelines
          </SecondToFourthContainerLink>
        </SecondToFourthContainer>
        <SecondToFourthContainer>
          <SecondToFourthContainerTitle>
            Partner with Pillfindr
          </SecondToFourthContainerTitle>
          <SecondToFourthContainerLink to="/pharmacist/signup">
            Sign up as a Pharmacist
          </SecondToFourthContainerLink>
          <SecondToFourthContainerLink to="/courier/signup">
            Sign up as a courier
          </SecondToFourthContainerLink>
        </SecondToFourthContainer>
        <SecondToFourthContainer>
          <SecondToFourthContainerTitle>Pillfindr</SecondToFourthContainerTitle>
          <SecondToFourthContainerLink to="/">
            Rides
          </SecondToFourthContainerLink>
          <SecondToFourthContainerLink to="/medicaldelivery">
            Med delivery
          </SecondToFourthContainerLink>
        </SecondToFourthContainer>
      </CompanyDetailsContainer>
      <SocialMediaContainer>
        <Iconcontainer>
          <Icon>
            <FaFacebook size={20} />
          </Icon>
          <Icon>
            <FaTwitter size={20} />
          </Icon>
          <Icon>
            <FaInstagram size={20} />
          </Icon>
          <Icon>
            <FaLinkedinIn size={20} />
          </Icon>
          <Icon>
            <FaTiktok size={20} />
          </Icon>
        </Iconcontainer>
        <ButtonContainer>
          <Button>Get the app</Button>
          <Button>Request a ride online</Button>
        </ButtonContainer>
      </SocialMediaContainer>
      <CCPage>
        <CCPageText>© 2024 pillfindr Technology OU</CCPageText>
        <CCPageLinkContainer>
          <CCPageLink to="/">Supplies</CCPageLink>
          <CCPageLink to="/">Terms & Conditions</CCPageLink>
          <CCPageLink to="/">Privacy</CCPageLink>
          <CCPageLink to="/">Cookies</CCPageLink>
          <CCPageLink to="/">Security</CCPageLink>
        </CCPageLinkContainer>
      </CCPage>
    </Container>
  );
};

export default Footer;
