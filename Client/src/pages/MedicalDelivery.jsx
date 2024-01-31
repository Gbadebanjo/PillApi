import Pillfindr from "../assets/Pillfindr.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Courier from "../assets/courier.webp.png";
import Boxes from "../assets/bolt-food-bag.webp.png";
import RectanglePhones from "../assets/Rectangle 36.png";
import DownloadOurApp from "../components/DownloadOurApp";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Sec1Container = styled.div`
  background-color: #008080;
  
`;

const StyledButton = styled.button`
  background-color: white;
  border-radius: 20px;
  padding: 3px 25px;
  margin-right: 40px;
  color: #003c3c;
  border: none;

  &:hover {
    background-color: #003c3c;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  background-color: white;
  border-radius: 20px;
  padding: 5px 25px;
  margin: 50px 110px;
  color: #000;
  border: none;

  &:hover {
    background-color: #000;
    color: white;
  }

  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    margin: 90px 20px;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 21%;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1408px) {
    display: none;
  }
`;

const Sec2Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
  }
`;

const Sec2TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 150px;
  padding-top: 55px;
  background-color: #f5f5f5;

  @media (max-width: 1100px) {
    width: 100%;
    padding-left: 50px;
    padding-top: 40px; 
    justify-content: center;
`;

const Sec2TextHeading = styled.div`
  font-size: 40px;
  font-weight: 700;
  font-family: "Segoe UI";

  @media (max-width: 768px) {
    font-size: 30px;
  }
    
`;

const StyledUl = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 19px;
    padding: 10px 0px;  
`;

const StyledLi = styled.li`
  position: relative;
  padding-left: 30px; /* Make room for the custom bullet point */
  margin-bottom: 10px; /* Add space between list items */

  &:before {
    content: ""; /* This is necessary for the pseudo-element to work */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #008080;
    border-radius: 50%; /* Make the bullet point circular */
  }
`;

const StyledLiText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  font-family: "Segoe UI";
  padding-left: 30px;
  width: 80%;
  color: #6e6e6e;
`;

const Sec2Img = styled.img`
  width: 50%;
  height: 80%;
  object-fit: contain;
  margin-top: 10vh;
  // margin-left: 15vh;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
`;

const MedicalDelivery = () => {
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
    <Container>
      <Sec1Container>
        <div className="d-flex jusify-content-between align-items-center ">
          <div className="flex-grow-1 px-0">
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
            lineHeight: isSmallScreen ? "33px" : "72px",
            width: isSmallScreen ? "400px" : "833px",
            height: isSmallScreen ? "120px" : "153px",
            marginTop: "-5px",
            color: "white",
            padding: isSmallScreen ? "10px 2px 0px 30px" : "30px 2px 0px 115px",
          }}
        >
          We deliver fast to your Door step
        </div>
        <div>
          <div
            className="text-white"
            style={{
              fontFamily: "Segoe UI",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "28px",
              width: isSmallScreen ? "400px" : "935px",
              height: "141px",
              marginTop: "1px",
              padding: isSmallScreen
                ? "0px 0px 0px 30px"
                : "60px 0px 0px 120px",
            }}
          >
            &quot;Pillfindr, your ultimate health companion, effortlessly
            locates the nearest licensed pharmacy with your prescribed
            medication in stock. Choose between the convenience of doorstep
            delivery or a quick in-person pickup, putting your health choices
            right at your fingertips.&quot;
          </div>
          <SearchWrapper>
            <SearchInput type="text" placeholder="Search for Medicine" />
            <SearchIcon size={16} />
          </SearchWrapper>{" "}
        </div>
      </Sec1Container>
      <Sec2Container>
        <Sec2TextContainer>
          <Sec2TextHeading>Make money with Medical delivery</Sec2TextHeading>
          <StyledUl>
            <StyledLi>Earn extra income, fast! </StyledLi>
            <StyledLiText>
              There&apos;s no subscription fee. You&apos;ll receive your
              earnings at the end of each week.{" "}
            </StyledLiText>
            <StyledLi>Make money whenever you like </StyledLi>
            <StyledLiText>
              You decide when and how often you deliver - weekdays, evenings,
              weekends, or just the occasional hour - it&apos;s up to you.
            </StyledLiText>
            <StyledLi>Deliver your way</StyledLi>
            <StyledLiText>
              Bike, scooter or car - you choose how to make deliveries.{" "}
            </StyledLiText>
          </StyledUl>
        </Sec2TextContainer>
        <Sec2Img src={Courier} />
      </Sec2Container>
      <Sec2Container>
        <Sec2Img src={Boxes} />
        <Sec2TextContainer>
          <Sec2TextHeading>Boost your sales</Sec2TextHeading>
          <StyledUl>
            <StyledLi>Increase your revenues </StyledLi>
            <StyledLiText>
              Millions of our users are ordering from businesses just like
              yours. Join Pillfindr Med, expand your reach and increase sales.{" "}
            </StyledLiText>
            <StyledLi>Gain valuable business insights </StyledLi>
            <StyledLiText>
              Unconver the data behind your sales, ratings, and orders. Compare
              current performance against previous weeks and months.{" "}
            </StyledLiText>
            <StyledLi>Let us handle delivery</StyledLi>
            <StyledLiText>
              We&apos;ll take care of the logistics, while you focus on running
              business.{" "}
            </StyledLiText>
          </StyledUl>
        </Sec2TextContainer>
      </Sec2Container>
      <Sec2Container>
        <Sec2TextContainer>
          <Sec2TextHeading>
            Discover, order, and track in the app
          </Sec2TextHeading>
          <StyledUl>
            <StyledLi>Discover local restaurants </StyledLi>
            <StyledLiText>
              Taste the flavours of the world with our wide selection of
              restaurants - be it your favorite local spot or a hidden gem.{" "}
            </StyledLiText>
            <StyledLi>Order and pay with ease </StyledLi>
            <StyledLiText>
              Tap, tap, done! Place the order with just a few clicks and pay
              with your preferred method - cash, card or Pillfindr balance.{" "}
            </StyledLiText>
            <StyledLi>Track your order </StyledLi>
            <StyledLiText>
              Follow your order&apos;s journey from store to door. Stay updated
              at every stage with real-time notifications.{" "}
            </StyledLiText>
          </StyledUl>
        </Sec2TextContainer>
        <Sec2Img src={RectanglePhones} />
      </Sec2Container>
      <DownloadOurApp />
      <Footer />
    </Container>
  );
};
export default MedicalDelivery;
