import Navbar from "../components/Navbar";
import { FaTruck, FaLessThan } from "react-icons/fa";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: auto;
  width: 100%;
`;

const PageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebf2f7;
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
  margin-right: 90px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-top: 10px;
  }
`;

const InputField = styled.input`
  width: 90%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  background-color: #fff;
`;

const InputField2 = styled.textarea`
  width: 90%;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 0px 0px 0px 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  background-color: #fff;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  margin: 20px;
`;

const PriceContainerTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  font-family: poppins;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const StyledLi = styled.li`
  position: relative;
  padding-left: 50px;
  margin: 10px 0px;
  list-style-type: none;
  font-size: 26px;
  font-family: poppins;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  &:before {
    content: ""; /* This is necessary for the pseudo-element to work */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    background-color: #d9d9d9; /* Fill color */
    border: ${(props) => props.border || "5px solid #008080"};
    border-radius: 50%; /* Make the bullet point circular */

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

const PriceInputField = styled.input`
  width: 20%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

const DeliveryContainer = styled.div`
  height: auto;
  width: 90%;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
`;

const Delivery = styled.h4`
  font-size: 14px;
  font-weight: 400;
  font-family: poppins;
  padding: 20px 30px;
`;

const DeliveryInputField = styled.input`
  width: 40%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px 30px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  background-color: #fff;
`;

const Promote = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  margin: 20px;
  padding: 10px;
  background-color: #fff;
`;

const PromoteTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  font-family: poppins;
  margin: 5px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const PromoteText = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: poppins;
  margin: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: row;
  width: 100%;
  height: auto;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  width: 30%;
  height: 125px;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 0 10px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px 0;
  }
`;

const ButtonText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`;

const ButtonTextA = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: poppins;
`;

const ButtonTag = styled.button`
  background-color: #850101;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  border: none;
  margin-left: 20px;

  &:hover {
    background-color: #003c3c;
    color: white;
  }
`;

const SubmitButton = styled.button`
  width: 30%;
  margin: 20px 0px 40px 0px;
  padding: 10px;
  background-color: #008080;
  color: #f8f8f8;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:  #f8f8f8;
    color: #008080;
    border: 1px solid;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const PortalUpload = () => (
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
        <Title>Post Products</Title>
      </Header>
      <InputField type="text" placeholder="Title" />
      <InputField type="text" placeholder="Type" />
      <InputField type="text" placeholder="Brand" />
      <InputField type="text" placeholder="Location" />
      <InputField2 placeholder="Description" />
      <PriceContainer>
        <PriceContainerTitle>Price</PriceContainerTitle>
        <StyledLi>Contact for price</StyledLi>
        <StyledLi border="5px solid #828282 ">
          <PriceInputField type="text" placeholder="Price" />
        </StyledLi>
      </PriceContainer>
      <InputField type="text" placeholder="Your Phone Number" />
      <DeliveryContainer>
        <Delivery>
          <FaTruck size={18} color="#008080" />
          &nbsp; Delivery
        </Delivery>
        <DeliveryInputField type="text" placeholder="Add delivery option   >" />
      </DeliveryContainer>
      <Promote>
        <PromoteTitle>Promote you</PromoteTitle>
        <PromoteText>
          Choose a promotion type for your ad to post it
        </PromoteText>
        <InputField
          type="text"
          placeholder="No promo (Select to ask for free)"
        />
        <ButtonContainer>
          <Button>
            <ButtonText>
              <ButtonTextA>Top promo Ads</ButtonTextA>
              <ButtonTextA>N2,030</ButtonTextA>
            </ButtonText>
            <ButtonTag>7 days</ButtonTag>
          </Button>
          <Button>
            <ButtonText>
              <ButtonTextA>Boost Premium Ads</ButtonTextA>
              <ButtonTextA>N21,030</ButtonTextA>
            </ButtonText>
            <ButtonTag>1 month</ButtonTag>
          </Button>
        </ButtonContainer>
      </Promote>
      <SubmitButton>Post Ads</SubmitButton>
      <Footer />
    </PageContainer>
  </Container>
);

export default PortalUpload;
