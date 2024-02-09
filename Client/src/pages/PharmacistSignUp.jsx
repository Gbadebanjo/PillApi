import styled from "styled-components";
import Image1 from "../assets/Image1.png";
import Pillfindr from "../assets/Pillfindr.png";
import GoogleIcon from "../assets/Vector.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 110vh;
  background-color: #008080;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const SignUpText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Logo = styled.img`
  width: 300px;
  height: 100px;
  object-fit: contain;
  margin-left: 120px;
  // background-color: red;

  @media (max-width: 768px) {
    margin-left: 40px;
  }
`;

export const Heading = styled.p`
  font-size: 17px;
  font-weight: 500;
  padding-left: 220px;
  color: white;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    padding-left: 40px;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 1px;
  }
`;

export const PTag = styled.p`
  font-size: 15px;
  color: white;
  font-weight: 400;
  padding-left: 225px;
  margin-bottom: 7px;
  margin-top: 7px;

  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  id: props.id,
  name: props.name,
  placeholder: props.placeholder,
  required: props.required || false,
}))`
  width: 60%;
  height: 30px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid;
  margin-left: 220px;
  background-color: transparent;
  color: white;

  &::placeholder {
    color: #b3b3b3; /* Lighter shade of white */
  }

  @media (max-width: 768px) {
    margin-left: 40px;
    width: 80%;
  }
`;

export const PasswordInput = styled.input.attrs((props) => ({
  type: props.type,
  id: props.id,
  name: props.name,
  placeholder: props.placeholder,
  required: props.required || false,
}))`
  width: 100%;
  height: 30px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid;
  margin-bottom: 10px;
  background-color: #008080;
  color: white;

  &::placeholder {
    color: #b3b3b3; /* Lighter shade of white */
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
  width: 60%;
  height: 30px;
  margin-left: 220px;

  @media (max-width: 768px) {
    margin-left: 40px;
    width: 80%;
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 1px;
  cursor: pointer;
  color: #b3b3b3;
`;

export const Button = styled.button`
  width: 60%;
  margin-left: 220px;
  margin-top: 12px;
  padding: 5px;
  background-color: #89c5cc;
  color: #f8f8f8;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008080;
    color: #f8f8f8;
    border: 1px solid;
  }

  @media (max-width: 768px) {
    margin-left: 40px;
    width: 80%;
  }
`;

export const TermsAndConditions = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-right: 20px;
  margin-bottom: 10px;
  margin-left: 220px;

  @media (max-width: 768px) {
    margin-left: 40px;
    width: 80%;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin: 10px;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 15px;
  color: white;
  font-weight: 400;
`;

export const GoogleButton = styled.button`
  width: 60%;
  height: 40px;
  margin-left: 220px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: 1px solid;
  transition: background-color 0.3s ease;

  img {
    margin-right: 10px;
  }

  &:hover {
    background-color: #f8f8f8;
    color: #008080;
  }

  @media (max-width: 768px) {
    margin-left: 40px;
    width: 80%;
  }
`;

export const LoginText = styled.p`
  font-size: 15px;
  width: 60%;
  margin-left: 220px;
  color: white;
  font-weight: 400;
  padding-top: 10px;
  text-align: center;

  @media (max-width: 768px) {
    margin-left: 40px;
    width: 80%;
  }
`;

export const Link = styled.a`
  color: #f8f8f8;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    color: red;
  }
`;
export const SignUpImgBox = styled.div`
  width: 60%;
  height: 100%;
  padding: 30px 120px 70px 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SignUpImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const PharmacistSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <SignUpText>
        <Logo src={Pillfindr} />
        <Heading>Sign Up</Heading>
        <Heading>
          Are you a pharmacist? Get your free Pillfindr account now
        </Heading>
        <PTag>First Name</PTag>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          required
        />
        <PTag>Last Name</PTag>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter last name"
          required
        />
        <PTag>Pharmacy Name</PTag>
        <Input
          type="text"
          id="pharmacyName"
          name="pharmacyName"
          placeholder="Enter Pharmacy name"
          required
        />
        <PTag>Pharmacy Address</PTag>
        <Input
          type="text"
          id="pharmacyAddress"
          name="pharmacyAddress"
          placeholder="Enter Pharmacy address"
          required
        />
        <PTag>Email Address</PTag>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email address"
          required
        />
        <PTag>Password</PTag>
        <PasswordInputContainer>
          <PasswordInput
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter password"
            required
          />
          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </EyeIcon>
        </PasswordInputContainer>

        <Button type="submit">Create Account</Button>
        <TermsAndConditions>
          <Checkbox id="terms" name="terms" required />
          <Label htmlFor="terms">Agree to the Terms and Conditions</Label>
        </TermsAndConditions>

        <GoogleButton>
          <img src={GoogleIcon} />
          Sign up with Google
        </GoogleButton>
        <LoginText>
          Already have an account? <Link href="/pharmacist/login">Log in</Link>
        </LoginText>
      </SignUpText>
      <SignUpImgBox>
        <SignUpImg src={Image1} />
      </SignUpImgBox>
    </Container>
  );
};

export default PharmacistSignUp;
