import Homebackgroundimg from "../assets/homebackground.png";
import Pillfindr from "../assets/Pillfindr.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaBars, FaSearch, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import ClapHands from "../assets/ClapHands.png";
import Rides from "../assets/rides.png";
import DeliveryVan from "../assets/delivery.png.png";
import Drug from "../assets/drug.png";
import Stethoscope from "../assets/stethoscope.png";
import Car from "../assets/car.png";
import CashAtHand from "../assets/cashathand.png";
import DrugBlog from "../assets/DrugBlog.png";
import PhoneBlog from "../assets/PhoneBlog.png";
import StetescopeBlog from "../assets/StetescopeBlog.png";
// import { keyframes } from 'styled-components';
// import { useInView } from 'react-intersection-observer';

const StyledButton = styled.button`
  background-color: #008080;
  border-radius: 20px;
  padding: 3px 25px;
  margin-right: 40px;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #008080;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchButton = styled.button`
  background-color: #008080;
  border-radius: 20px;
  padding: 5px 25px;
  margin: 50px 110px;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #008080;

    span {
      color: #008080;
    }
  }
  span {
    color: white;
  }

  @media (max-width: 768px) {
    margin: 90px 30px;
`;

const Sec2MainContainer = styled.div`
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sec2Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: 75%;
  width: 80%;
  // background-color: #008080;
`;

const Sec2Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Sec2Title = styled.div`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  display: flex;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Sec2ImgAndTestContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // background-color: #008080;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sec2ImgContainer = styled.img`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Sec2TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Services = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 310px;
  }
`;

const ServicesBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 75%;
  width: 80%;
`;

const ServicesBox = styled.div`
  display: flex;
  background-color: #f5f6f7;
  flex-direction: column;
  height: 180px;
  width: 360px;
  border-radius: 16px;
  margin: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin: 10px;
`;

const ServiceBoxTitle = styled.h4`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  margin: 19px;
`;

const ServiceBoxText = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 19px;
  color: gray;
`;

const ServiceBoxImg = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const NewsAndUpdatesContainer = styled.div`
  height: auto;
  width: 80%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

const NewsAndUpdatesHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  position: relative;
`;

const ViewAll = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  padding-top: 30px;
  position: absolute;
  right: 0;

  @media (max-width: 768px) {
    display: none;
  }
  
`;

const NewsAndUpdatesBoxContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding-top: 20px;
// background-color: #f5f6f7;
`;

const NewsAndUpdatesBox = styled.div`
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  height: auto;
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px;
`;

const NewsAndUpdatesBoxImg = styled.img`
  height: 208px;
  width: 370px;
  object-fit: contain;
  border-radius: 16px;
  display: flex;
`;

const NewsAndUpdatesBoxText = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  // color: gray;
  padding-top: 10px;
  display: flex;
`;

const NewsAndUpdatesBoxDate = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: gray;
`;

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  const handleSelect = (selectedKey) => {
    setSelectedCountry(selectedKey);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid vh-100 p-0 m-0 ">
      <div
        style={{
          backgroundImage: `url(${Homebackgroundimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="d-flex jusify-content-between align-items-center ">
          <div className="flex-grow-1">
            <img src={Pillfindr} alt="Pillfindr" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center flex-grow-1">
            <div className="flex-grow-1">
              <Dropdown onSelect={handleSelect} className="d-none d-md-block">
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  style={{
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  {selectedCountry ? (
                    <>
                      <img
                        src={
                          countries.find(
                            (country) => country.name.common === selectedCountry
                          ).flags.png
                        }
                        alt={selectedCountry}
                        width="20"
                        height="20"
                        style={{ marginRight: "10px", borderRadius: "50%" }}
                      />
                      {selectedCountry} (EN)
                    </>
                  ) : (
                    "Select a country"
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {countries.map((country) => (
                    <Dropdown.Item
                      eventKey={country.name.common}
                      key={country.name.common}
                    >
                      <img
                        src={country.flags.png}
                        alt={country.name.common}
                        width="20"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      {country.name.common} (EN)
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Link
              className="text-white-no-underline flex-grow-1 my-2 my-md-0 d-none d-md-block"
              to=""
            >
              Support
            </Link>
            <StyledButton>Sign Up</StyledButton>
            <FaBars
              color="white"
              size={16}
              className="flex-grow-1 my-2 my-md-0"
            />
          </div>
        </div>
        <div
          className="display-4 font-weight-bold"
          style={{
            fontFamily: "Segoe UI",
            fontWeight: 700,
            fontSize: isSmallScreen ? "30px" : "60px",
            lineHeight: isSmallScreen ? "36px" : "72px",
            width: isSmallScreen ? "450px" : "833px",
            height: "153px",
            marginTop: "-5px",
            color: "white",
            padding: isSmallScreen ? "30px 2px 0px 30px" : "30px 2px 0px 106px",
          }}
        >
          Get Medication Wherever and Whenever
        </div>
        <div>
          <div
            className="text-white"
            style={{
              fontFamily: "Segoe UI",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "28px",
              width: isSmallScreen ? "450px" : "935px",
              height: "141px",
              marginTop: "1px",
              padding: isSmallScreen
                ? "0px 0px 0px 30px"
                : "60px 0px 0px 110px",
            }}
          >
            &quot;Pillfindr, your ultimate health companion, effortlessly
            locates the nearest licensed pharmacy with your prescribed
            medication in stock. Choose between the convenience of doorstep
            delivery or a quick in-person pickup, putting your health choices
            right at your fingertips.&quot;
          </div>
          <SearchButton className="gap-5px">
            Search for Medicine
            <span>
              {" "}
              <FaSearch size={16} className="ms-2" />
            </span>
          </SearchButton>
        </div>
      </div>
      <Sec2MainContainer>
        <Sec2Container>
          <Sec2Title>Easy money with Pillfindr</Sec2Title>
          <Sec2Buttons>
            <Button
              variant="outline-secondary"
              size="sm"
              className="me-4 px-4 rounded-pill"
            >
              Pharmacy
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="me-4 px-4 rounded-pill"
            >
              Courier
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="me-4 px-4 rounded rounded-pill"
            >
              Store Owner
            </Button>
          </Sec2Buttons>
          <Sec2ImgAndTestContainer>
            <Sec2ImgContainer src={ClapHands} />
            <Sec2TestContainer>
              <h1>1. Pharmacy signup, earn more money</h1>
              <p>
                Over 1m users will search for medications around you per month,
                gain visibility by letting them know you have the medication
                they are looking for. When demand gets high you make more sales
                at your pharmacy outlets.
              </p>
              <p>-John Doe</p>
            </Sec2TestContainer>
          </Sec2ImgAndTestContainer>
        </Sec2Container>
      </Sec2MainContainer>
      <Services>
        <Sec2Title>Our services</Sec2Title>
        <ServicesBoxContainer>
          <ServicesBox>
            <ServiceBoxTitle>Pharmacy locator</ServiceBoxTitle>
            <ServiceBoxText>
              search in seconds, results in minutes.
            </ServiceBoxText>
            <ServiceBoxImg src={Rides} />
          </ServicesBox>
          <ServicesBox>
            <ServiceBoxTitle>Medication delivery</ServiceBoxTitle>
            <ServiceBoxText>
              Your favorite choice, delivery fast.
            </ServiceBoxText>
            <ServiceBoxImg src={DeliveryVan} />
          </ServicesBox>
          <ServicesBox>
            <ServiceBoxTitle>Telemedicine</ServiceBoxTitle>
            <ServiceBoxText>
              All the essentials whenever you need them.
            </ServiceBoxText>
            <ServiceBoxImg src={Drug} />
          </ServicesBox>
          <ServicesBox>
            <ServiceBoxTitle>Remote patient monitoribg</ServiceBoxTitle>
            <ServiceBoxText>Made easy.</ServiceBoxText>
            <ServiceBoxImg src={Stethoscope} />
          </ServicesBox>
          <ServicesBox>
            <ServiceBoxTitle>Medical loan</ServiceBoxTitle>
            <ServiceBoxText>Get quick loan for your healthy.</ServiceBoxText>
            <ServiceBoxImg src={CashAtHand} />
          </ServicesBox>
          <ServicesBox>
            <ServiceBoxTitle>Micro Health cover</ServiceBoxTitle>
            <ServiceBoxText>
              Lorem ipsum dolor sit, amet consectetur a.
            </ServiceBoxText>
            <ServiceBoxImg src={Car} />
          </ServicesBox>
        </ServicesBoxContainer>
      </Services>
      <NewsAndUpdatesContainer>
        <NewsAndUpdatesHeading>
          <Sec2Title>News and updates</Sec2Title>
          <ViewAll>
            View all
            <Link to="/">
           <FaArrowRight style={{margin: '10px'}}></FaArrowRight>
            </Link>
          </ViewAll>
        </NewsAndUpdatesHeading>
        <NewsAndUpdatesBoxContainer>
        <NewsAndUpdatesBox>
          <NewsAndUpdatesBoxImg src={PhoneBlog}></NewsAndUpdatesBoxImg>
          <NewsAndUpdatesBoxText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quibusdam voluptatum, quia, doloremque
          </NewsAndUpdatesBoxText>
          <NewsAndUpdatesBoxDate>12/12/2021</NewsAndUpdatesBoxDate>
        </NewsAndUpdatesBox>
        <NewsAndUpdatesBox>
          <NewsAndUpdatesBoxImg src={StetescopeBlog}></NewsAndUpdatesBoxImg>
          <NewsAndUpdatesBoxText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quibusdam voluptatum, quia, doloremque
          </NewsAndUpdatesBoxText>
          <NewsAndUpdatesBoxDate>12/12/2021</NewsAndUpdatesBoxDate>
        </NewsAndUpdatesBox>
        <NewsAndUpdatesBox>
          <NewsAndUpdatesBoxImg src={DrugBlog}></NewsAndUpdatesBoxImg>
          <NewsAndUpdatesBoxText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quibusdam voluptatum, quia, doloremque
          </NewsAndUpdatesBoxText>
          <NewsAndUpdatesBoxDate>12/12/2021</NewsAndUpdatesBoxDate>
        </NewsAndUpdatesBox>
        </NewsAndUpdatesBoxContainer>

      </NewsAndUpdatesContainer>
    </div>
  );
};

export default Home;
