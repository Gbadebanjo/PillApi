import styled from "styled-components";
import Navbar from "../components/Navbar";
import DownloadOurApp from "../components/DownloadOurApp";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import { IoIosPin, IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import Map from "../assets/Map.png";

const Container = styled.div`
  height: auto;
  weight: 100%;
  overflow-x: hidden;
`;

const Sec1 = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  align-items: center;
  background-color: #008080;

  @media (max-width: 768px) {
    height: 50vh;
    padding-top: 30px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  font-family: inter;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const InputContainer = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding-left: 40px;
  background-color: #e3e3e7;
  font-size: 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 2%;
  top: 35%;

  @media (max-width: 1408px) {
    display: none;
  }
`;

const IconTag = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 2%;
  top: 35%;
  &:hover {
    cursor: pointer;
    color: #770000;
  }

  @media (max-width: 1408px) {
    display: none;
  }
`;

const CityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  position: relative;
  padding-top: 10px;
`;

const CityText = styled.div`
  font-size: 20px;
  color: #fff;
  font-family: inter;
  font-weight: 400;
  font-size: 23px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Dropdown = styled.div`
  width: 600px;
  background-color: #fff;
  color: #770000;
  border-radius: 7px;
`;

const DropdownItem = styled.div`
  padding: 3px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const MapContainer = styled.img`
  width: 100%;
  height: 80vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const SuggestPharmacyClose = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 500;
  font-family: inter;
  color: #000;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 0px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PharmacyImgcontainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  // gap: 20px;
  justify-content: space-around;
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 60%;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 200;
  font-family: inter;
  color: #000;
  margin: 0;
`;

const Review = styled.p`
  font-size: 10px;
  color: #b3b3b3;
  margin: 0;
`;

const SearchPage = () => {
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetch("https://geodata.solutions/restapi?country=ng")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLocations(Object.keys(data));
      })
      .catch((error) => {
        console.error("Error:", error);
        // set some default data
        setLocations(["Ikeja, Lagos", "Ajah, Lagos", "Ketu, Lagos"]);
      });
  }, []);

  const handleClick = () => {
    console.log(
      "handleClick was called, current value of showDropdown:",
      showDropdown
    );

    setShowDropdown(!showDropdown);
  };
  return (
    <Container>
      <Navbar />
      <Sec1>
        <Title>Pillfindr</Title>
        <InputContainer>
          <SearchIcon size={18} />
          <TitleInput
            type="search"
            placeholder="Search address, city, location"
          />
          <IconTag>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/bold/setting-5">
                <g id="setting-5">
                  <path
                    id="Vector"
                    d="M28.9631 13.5304C29.7327 13.5304 30.3485 12.9147 30.3485 12.145V4.98699C30.3485 4.21731 29.7327 3.60156 28.9631 3.60156C28.1934 3.60156 27.5776 4.21731 27.5776 4.98699V12.145C27.5776 12.8993 28.2088 13.5304 28.9631 13.5304Z"
                    fill="#1A1E25"
                  />
                  <path
                    id="Vector_2"
                    d="M18.9421 25.0757C18.1724 25.0757 17.5566 25.6914 17.5566 26.4611V33.6191C17.5566 34.3888 18.1724 35.0045 18.9421 35.0045C19.7117 35.0045 20.3275 34.3888 20.3275 33.6191V26.4611C20.3275 25.7068 19.7117 25.0757 18.9421 25.0757Z"
                    fill="#1A1E25"
                  />
                  <path
                    id="Vector_3"
                    d="M8.92058 13.5304C9.69026 13.5304 10.306 12.9147 10.306 12.145V4.98699C10.306 4.21731 9.69026 3.60156 8.92058 3.60156C8.1509 3.60156 7.53516 4.21731 7.53516 4.98699V12.145C7.53516 12.8993 8.1509 13.5304 8.92058 13.5304Z"
                    fill="#1A1E25"
                  />
                  <path
                    id="Vector_4"
                    d="M11.7837 16.4861H6.0573C5.28762 16.4861 4.67188 17.1018 4.67188 17.8715C4.67188 18.6412 5.28762 19.2569 6.0573 19.2569H7.53508V33.6191C7.53508 34.3888 8.15082 35.0046 8.9205 35.0046C9.69018 35.0046 10.3059 34.3888 10.3059 33.6191V19.2569H11.7837C12.5534 19.2569 13.1691 18.6412 13.1691 17.8715C13.1691 17.1018 12.538 16.4861 11.7837 16.4861Z"
                    fill="#1A1E25"
                  />
                  <path
                    id="Vector_5"
                    d="M31.8262 16.4861H26.0998C25.3301 16.4861 24.7144 17.1018 24.7144 17.8715C24.7144 18.6412 25.3301 19.2569 26.0998 19.2569H27.5776V33.6191C27.5776 34.3888 28.1933 35.0046 28.963 35.0046C29.7327 35.0046 30.3484 34.3888 30.3484 33.6191V19.2569H31.8262C32.5959 19.2569 33.2116 18.6412 33.2116 17.8715C33.2116 17.1018 32.5959 16.4861 31.8262 16.4861Z"
                    fill="#1A1E25"
                  />
                  <path
                    id="Vector_6"
                    d="M21.8052 19.3492H20.3274V4.98699C20.3274 4.21731 19.7117 3.60156 18.942 3.60156C18.1723 3.60156 17.5566 4.21731 17.5566 4.98699V19.3492H16.0788C15.3091 19.3492 14.6934 19.9649 14.6934 20.7346C14.6934 21.5043 15.3091 22.12 16.0788 22.12H21.8052C22.5749 22.12 23.1906 21.5043 23.1906 20.7346C23.1906 19.9649 22.5749 19.3492 21.8052 19.3492Z"
                    fill="#1A1E25"
                  />
                </g>
              </g>
            </svg>
          </IconTag>
        </InputContainer>
        <CityContainer>
          <CityText>
            Find a place in <IoIosPin size={25} color="#850101" />{" "}
            {selectedLocation}{" "}
            {showDropdown && (
              <Dropdown>
                {locations.map((location) => (
                  <DropdownItem
                    key={location}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowDropdown(false);
                    }}
                  >
                    {location}
                  </DropdownItem>
                ))}
              </Dropdown>
            )}
            <IoIosArrowDown size={20} onClick={handleClick} />
          </CityText>
        </CityContainer>
      </Sec1>
      <MapContainer src={Map} alt="Map" />
      <SuggestPharmacyClose>
        <Heading>Suggested Pharmacy close to you</Heading>
        <PharmacyImgcontainer>
          <ImgContainer>
            <Img src="https://via.placeholder.com/150" alt="Pharmacy" />
            <Name>Pharmacy Name</Name>
            <Review>4.5 (100 Reviews)</Review>
          </ImgContainer>
          <ImgContainer>
            <Img src="https://via.placeholder.com/150" alt="Pharmacy" />
            <Name>Pharmacy Name</Name>
            <Review>4.5 (100 Reviews)</Review>
          </ImgContainer>
          <ImgContainer>
            <Img src="https://via.placeholder.com/150" alt="Pharmacy" />
            <Name>Pharmacy Name</Name>
            <Review>4.5 (100 Reviews)</Review>
          </ImgContainer>
          <ImgContainer>
            <Img src="https://via.placeholder.com/150" alt="Pharmacy" />
            <Name>Pharmacy Name</Name>
            <Review>4.5 (100 Reviews)</Review>
          </ImgContainer>
          <ImgContainer>
            <Img src="https://via.placeholder.com/150" alt="Pharmacy" />
            <Name>Pharmacy Name</Name>
            <Review>4.5 (100 Reviews)</Review>
          </ImgContainer>
        </PharmacyImgcontainer>
      </SuggestPharmacyClose>
      <DownloadOurApp />
      <Footer />
    </Container>
  );
};

export default SearchPage;
