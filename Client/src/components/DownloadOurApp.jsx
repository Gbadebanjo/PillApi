import styled from "styled-components";
import { Link } from "react-router-dom";
import Mobile from "../assets/Mobile.png";
import QRCode from "../assets/Link.png";

const Container = styled.div`
  height: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  display: flex;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SubContainer = styled.div`
  height: 66.5vh;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: #008080;
  border-radius: 16px 0px 0px 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
`;

const TextContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
  }
`;

const FirstText = styled.h2`
  width: 60%;
  height: auto;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 30px;
    width: 80%;
    padding-top: 20px;
  }
`;

const SecondText = styled.h4`
  width: 60%;
  height: auto;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 80%;
  }
`;

const ThirdText = styled.p`
  width: 60%;
  height: auto;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  padding-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const MobileContainer = styled.img`
  width: 80%;
  height: 67vh;
  object-fit: contain;
`;

const QRCodeContainer = styled.img`
  height: 40%;
  position: absolute;
  top: 50%;
  left: 10%;
  border: solid 7px white;
  border-radius: 10px;
`;

const DownloadOurApp = () => {
  return (
    <Container>
      <Title>Download Our App</Title>
      <SubContainer>
        <TextContainer>
          <FirstText>Search in Medication, in minutes.</FirstText>
          <SecondText>
            Scan the QR code with your phone camera to download the Pillfindr
            app. Available for iOS and Android devices.
          </SecondText>
          <ThirdText>
            Or you can{" "}
            <Link to="/" style={{ color: "white" }}>
              request a ride online
            </Link>
          </ThirdText>
        </TextContainer>
        <ImageContainer>
          {" "}
          <QRCodeContainer src={QRCode} />
          <MobileContainer src={Mobile} />
        </ImageContainer>
      </SubContainer>
    </Container>
  );
};

export default DownloadOurApp;
