import Navbar from "../components/Navbar";
import styled from "styled-components";
import DownloadOurApp from "../components/DownloadOurApp";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: auto;
  weight: 100%;
`;

const HeadingContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeadingTextContainer = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const NameOfPharmacy = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-family: inter;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const AboutPharmacy = styled.p`
  font-size: 20px;
  font-weight: 300;
  font-family: inter;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImgContainer = styled.div`
  width: 40%;
  height: 320px;
  margin: 20px;
  background-color: #d9d9d9;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 700;
  font-family: inter;
  text-align: center;
  margin-top: 40px;
`;

const Body = styled.p`
  font-size: 18px;
  font-weight: 300;
  font-family: inter;
  margin: auto;
  width: 90%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Reviewcontainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ReviewBox = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  cursor: pointer;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0px;
  }
`;

const ReviewerName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  font-family: inter;
`;

const Review = styled.p`
  font-size: 13px;
  font-weight: 300;
  font-family: inter;
`;

// const ReviewRating = styled.p`
// font-size: 14px;
// font-weight: 300;
// font-family: inter;
// `;

const ReviewDate = styled.p`
  font-size: 11px;
  font-weight: 300;
  font-family: inter;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const SeeMore = styled(Link)`
  font-size: 14px;
  font-weight: 300;
  font-family: inter;
  text-align: end;
  padding-left: 80%;
  justify-content: flex-end;
  align-items: flex-end;
  color: #008080;

  &:hover {
    color: #000;
  }
`;

const ContactButton = styled.button`
  height: 40px;
  background-color: #008080;
  display: flex;
  justify-content: center;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  font-family: inter;
  margin: 20px auto;
  padding: 10px 20px;
  align-items: center;

  &:hover {
    background-color: #fff;
    color: #008080;
    border: 1px solid #008080;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const MedicationSearch = () => {
  return (
    <Container>
      <Navbar />
      <HeadingContainer>
        <HeadingTextContainer>
          <NameOfPharmacy>Pharmacy Name</NameOfPharmacy>
          <AboutPharmacy>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            mollitia fuga aperiam sint ipsum. Magni eos neque recusandae
            asperiores, dignissimos exercitationem maxime fugiat! Doloribus sed
            ipsa eum dignissimos, quisquam ratione?
          </AboutPharmacy>
        </HeadingTextContainer>
        <ImgContainer></ImgContainer>
      </HeadingContainer>
      <Heading>About Pharmacy</Heading>
      <Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia
        fuga aperiam sint ipsum. Magni eos neque recusandae asperiores,
        dignissimos exercitationem maxime fugiat! Doloribus sed ipsa eum
        dignissimos, quisquam ratione? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugiat mollitia fuga aperiam sint ipsum. Magni eos
        neque recusandae asperiores, dignissimos exercitationem maxime fugiat!
        Doloribus sed ipsa eum dignissimos, quisquam ratione? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Fugiat mollitia fuga aperiam sint
        ipsum. Magni eos neque recusandae asperiores, dignissimos exercitationem
        maxime fugiat! Doloribus sed ipsa eum dignissimos, quisquam ratione?
      </Body>
      <Heading>Reviews</Heading>
      <Reviewcontainer>
        <ReviewBox>
          <ReviewerName>Ayotunde Daniels</ReviewerName>
          <Review>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, natus
            quasi blanditiis.
          </Review>
          <ReviewDate>23-2-2024</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>John Mark</ReviewerName>
          <Review>A very intresting web look</Review>
          <ReviewDate>17-1-2021</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>John Mark</ReviewerName>
          <Review>A very gdrdyuhi intresting web look</Review>
          <ReviewDate>17-1-2021</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>James Badi</ReviewerName>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            atque fugiat similique reprehenderit rerum blanditiis illum, nam a
            consectetur, ipsa quae delectus illo, voluptas perspiciatis
            inventore doloremque. Praesentium, fuga doloremque.
          </Review>
          <ReviewDate>Date</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>Elizabeth Joel</ReviewerName>
          <Review>All working seemlessly</Review>
          <ReviewDate>21-1-2024</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>John Mark</ReviewerName>
          <Review>A very intresting web look</Review>
          <ReviewDate>17-1-2021</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>Angel Mark</ReviewerName>
          <Review>
            {" "}
            Corrupti libero modi fuga esse nobis inventore blanditiis, quis
            suscipit.
          </Review>
          <ReviewDate>13-1-2021</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>Dan Mark</ReviewerName>
          <Review>Pariatur voluptatem maiores iure earum, harum esse!</Review>
          <ReviewDate>17-1-2021</ReviewDate>
        </ReviewBox>
        <ReviewBox>
          <ReviewerName>John Mark</ReviewerName>
          <Review>A very intresting web look</Review>
          <ReviewDate>17-1-2021</ReviewDate>
        </ReviewBox>
      </Reviewcontainer>
      <SeeMore to="/reviews">See More</SeeMore>
      <ContactButton>Contact Pharmacy</ContactButton>
      <DownloadOurApp />
      <Footer />
    </Container>
  );
};

export default MedicationSearch;
