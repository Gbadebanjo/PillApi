import Navbar from "../components/Navbar";
import {  FaLessThan } from "react-icons/fa";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #ebf2f7;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 35px  66px;
  height: 60px;
  width: 90%;
  
  background-color: #fff;
  border-radius: 10px;
`;

const Back = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  align-items: start;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`;

const PortalUpload = () => (
  <Container>
    <Navbar />
    <Header>
      < FaLessThan size={16} />
      <Back>Back</Back>
      <Title>Post Products</Title>
    </Header>

    <Footer />
  </Container>
);

export default PortalUpload;
