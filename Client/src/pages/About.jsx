import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Team1 from "../assets/Team1.png";
import Team2 from "../assets/Team2 (2).png";
import Team3 from "../assets/Team3.png";
import Team4 from "../assets/Team4.png";

const Container = styled.div`
  height: auto;
  width: 100%;
`;

const TextContainer = styled.div`
height: auto;
width : 90%;
display: flex;
text-align; center;
justify-content: center;
flex-direction: column;
margin: auto;
padding: 35px;

@media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  font-family: Segoe UI;
  text-align: center;

    @media (max-width: 768px) {
    font-size: 32px;
    }
`;

const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Segoe UI;
  text-align: center;
  width: 70%;
  align-self: center;

    @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    }
`;

const ImageContainer = styled.div`
  height: auto;
  width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 20px;

    @media (max-width: 768px) {
    gap: 20px;
    }
  `;

  const Image = styled.img`
    // height: 200px;
    width: 200px;
    object-fit: contain;

  `;
    

const About = () => {
  return (
    <Container>
      <Navbar />
      <TextContainer>
        <Title>We are on a Mission</Title>
        <Body>
          Our ultimate goal is to make health service easy, reliable and
          convenient for you, That’s why we are dedicated to create easy to use
          technology that empowers, protects, and impacts people , families and
          the community at large . We are a team of dedicated , product
          developers aiming to digitalise healthcare in Nigeria.
        </Body>
      </TextContainer>
      <TextContainer>
        <Title>Meet the Team</Title>
        <Body>Meet the amazing team members.</Body>
      </TextContainer>
        <ImageContainer>
            <Image src={Team1}/>
            <Image src={Team2}/>
            <Image src={Team3}/>
            <Image src={Team4}/>
            </ImageContainer>
      <Footer />
    </Container>
  );
};

export default About;
