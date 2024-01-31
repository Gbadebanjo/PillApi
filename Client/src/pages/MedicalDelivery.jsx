import Pillfindr from "../assets/Pillfindr.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaBars, FaSearch, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

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

const SearchButton = styled.button`
  background-color: white;
  border-radius: 20px;
  padding: 5px 25px;
  margin: 50px 110px;
  color: #008080;
  border: none;

  &:hover {
    background-color: #003c3c;
    color: white;

    span {
      color: white;
    }
  }
  span {
    color: #008080;
  }

  @media (max-width: 768px) {
    margin: 90px 30px;}
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
            lineHeight: isSmallScreen ? "36px" : "72px",
            width: isSmallScreen ? "450px" : "833px",
            height: "153px",
            marginTop: "-5px",
            color: "white",
            padding: isSmallScreen ? "30px 2px 0px 30px" : "30px 2px 0px 106px",
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
      </Sec1Container>
</Container>
  )
}
export default MedicalDelivery