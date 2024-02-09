import {
  SignUpText,
  Logo,
  Heading,
  PTag,
  Input,
  SignUpImgBox,
  SignUpImg,
  PasswordInputContainer,
  PasswordInput,
  EyeIcon,
  Button,
  TermsAndConditions,
  Checkbox,
  Label,
  GoogleButton,
  LoginText,
  Link,
} from "./PharmacistSignUp";
import styled from "styled-components";
import Pillfindr from "../assets/Pillfindr.png";
import User from "../assets/User.png";
import { useState } from "react";
import GoogleIcon from "../assets/Vector.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #008080;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
function UserSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <SignUpText>
        <Logo src={Pillfindr} />
        <Heading>Sign Up</Heading>
        <Heading>
          Do you desire our services? Get uour free Pillfindr account now
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
        <PTag>Email</PTag>
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
          Already have an account? <Link href="/user/login">Log in</Link>
        </LoginText>
      </SignUpText>
      <SignUpImgBox>
        <SignUpImg src={User} />
      </SignUpImgBox>
    </Container>
  );
}

export default UserSignUp;
