import styled from "styled-components";
import Image1 from "../assets/Image1.png";
import Pillfindr from "../assets/Pillfindr.png";
import GoogleIcon from "../assets/Vector.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {
  Logo,
  PTag,
  Input,
  PasswordInput,
    PasswordInputContainer,
  EyeIcon,
  TermsAndConditions,
  GoogleButton,
  SignUpImgBox,
  SignUpImg,
} from "./PharmacistSignUp";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #008080;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const SignUpText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  padding-top: 100px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Heading = styled.p`
  font-size: 19px;
  font-weight: 500;
  padding-left: 220px;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding-left: 40px;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 1px;
  }
`;

export const Button = styled.button`
  width: 60%;
  margin-left: 220px;
  margin-top: 30px;
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

const PharmacistLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (

    <Container>
      <SignUpText>
        <Logo src={Pillfindr} />
        <Heading>Log in to continue on Pillfindr</Heading>
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

        <Button>Log In</Button>
        <TermsAndConditions>
          or</TermsAndConditions>
          <GoogleButton>
          <img src={GoogleIcon} />
          Sign up with Google
        </GoogleButton>
        <LoginText>
            Don&apos;t have an account? <Link href="/courier/signup">Sign up</Link>
        </LoginText>
      </SignUpText>
      <SignUpImgBox>
        <SignUpImg src={Image1} />
      </SignUpImgBox>
    </Container>
  );
};

export default PharmacistLogin;
