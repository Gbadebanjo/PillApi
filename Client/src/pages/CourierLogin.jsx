import ManOnBike from "../assets/ManOnBike.png";
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
import { Container, SignUpText, Heading, Button,LoginText,Link } from "./PharmacistLogin";

const CourierLogin = () => {
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
            Don&apos;t have an account? <Link href="/pharmacist/signup">Sign up</Link>
        </LoginText>
      </SignUpText>
      <SignUpImgBox>
        <SignUpImg src={ManOnBike} />
      </SignUpImgBox>
    </Container> 
  )
}

export default CourierLogin