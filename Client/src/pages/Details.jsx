import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaLessThan, FaBars } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Container = styled.div`
  height: auto;
  weight: 100%;
`;

const PageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebf2f7;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 35px 66px;
  height: 60px;
  width: 90%;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 20px 20px;
  }
`;

const BackContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  text-align: center;
  justify-content: center;

  
`;

const Back = styled.h5`
  font-size: 16px;
  font-weight: 400;
  font-family: poppins;
  align-items: start;
  padding-left: 20px;
  padding-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 10px;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  font-family: poppins;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-top: 10px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  gap: 20px;
  width: 20%;
  height: 100%;
  margin: 0px 20px;
`;

const ImgContainer = styled.div`
  width: 94%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px 0px 50px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
`;

const Img = styled.img`
  width: 45%;
  height: 60vh;
  margin: auto;
  object-fit: cover;
  background-color: #d9d9d9;

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
  }
`;

const DrugHeadingContainer = styled.div`
  width: 90%;
  height: auto;
`;

const DrugNameContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const DrugName = styled.h2`
  font-size: 32px;
  font-weight: 500;
  font-family: poppins;
`;

const DrugKey = styled.h4`
  font-size: 12px;
  font-weight: 400;
  font-family: poppins;
  padding-top: 10px;
  color: #770000;
`;

const PharmacyNameContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PharmacyName = styled(Link)`
  font-size: 15px;
  font-weight: 400;
  font-family: inter;
  color: #008080;

  &:hover {
    color: #770000;
  }
`;

const PharmacyIconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const IconTag = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #770000;
  }
`;

const DrugDescription = styled.h2`
  font-size: 32px;
  font-weight: 500;
  font-family: poppins;
  padding-top: 20px;
`;

const DrugDescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: inter;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Report = styled(Link)`
  font-size: 15px;
  font-weight: 400;
  font-family: inter;
  color: #008080;
  padding: 5px;

  &:hover {
    color: #770000;
  }
`;

const ButtonContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0px;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Button = styled.button`
  width: 30%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.color || "#008080"};
  color: ${(props) => props.textColor || "#fff"};
  font-size: 16px;
  font-weight: 500;
  font-family: poppins;
  margin: 0px 20px;
  cursor: pointer;
  transition: background-color 0.7s ease;


  &:hover {
    background-color: ${props => props.color === "#008080" ? "#770000" : "#008080"};
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Details = () => {
  return (
    <Container>
      <Navbar />
      <PageContainer>
        <Header>
          <BackContainer>
            <Link to="/medicaldelivery">
              <FaLessThan size={12} color="black" />
            </Link>
            <Back>Back</Back>
          </BackContainer>
          <Title>Details</Title>
          <IconContainer>
            <IoMdCart size={22} color="black" />{" "}
            <FaBars size={20} color="black" />
          </IconContainer>
        </Header>
        <ImgContainer>
          <Img />
          <Img />
        </ImgContainer>
        <DrugHeadingContainer>
          <DrugNameContainer>
            <DrugName>Paracetamol</DrugName>
            <DrugKey>(Precription required)</DrugKey>
          </DrugNameContainer>
          <PharmacyNameContainer>
            <PharmacyName to="/details">Orange Health Pharmacy</PharmacyName>
            <PharmacyIconContainer>
              <IconTag>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>
              </IconTag>
              <IconTag>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </IconTag>
            </PharmacyIconContainer>
          </PharmacyNameContainer>
          <DrugDescription>Drug description</DrugDescription>
          <DrugDescriptionText>
            Paracetamol is a common painkiller used to treat aches and pain. It
            can also be used to reduce a high temperature. It's available
            combined with other painkillers and anti-sickness medicines. It's
            also an ingredient in a wide range of cold and flu remedies. It is
            also known as acetaminophen. Paracetamol is used to treat many
            conditions such as headache, muscle aches, arthritis, backache,
            toothaches, colds, and fevers. It relieves pain in mild arthritis
            but has no effect on the underlying inflammation and swelling of the
            joint. Paracetamol may also be used for other purposes not listed in
            this medication guide.
          </DrugDescriptionText>
          <Report to="/report">Report incorrect product information</Report>
        </DrugHeadingContainer>
        <ButtonContainer>
          <Button color="#008080" textColor="#fff">
            <IoMdCart />{"  "}
            Order Now
          </Button>
          <Button color="#770000" textColor="#fff">
            <IoMdCart />{"  "}
            Add to Cart
          </Button>
        </ButtonContainer>
        <Footer />
      </PageContainer>
    </Container>
  );
};

export default Details;
