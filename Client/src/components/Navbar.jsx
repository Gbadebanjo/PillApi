import Pillfindr from "../assets/Pillfindr.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #008080;
`;

const LogoContainer = styled.div`
  flex-grow: 1;
  padding: 0;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const DropdownContainer = styled.div`
  flex-grow: 1;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SupportLink = styled(Link)`
  color: white;
  text-decoration: none;
  flex-grow: 1;
  margin: 2rem 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  border-radius: 20px;
  padding: 3px 25px;
  margin-right: 40px;
  color: white;
  background-color: #00cccc;
  border: none;

  &:hover {
    background-color: #003c3c;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledFaBars = styled(FaBars)`
  color: white;
  flex-grow: 1;
  margin: 2rem 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Navbar = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          setError("Network response was not ok");
          setLoading(false);
          return;
        }
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError(error.toString());
        setLoading(false);
      }
    };

    fetchCountries();
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
      <LogoContainer>
        <img src={Pillfindr} alt="Pillfindr" />
      </LogoContainer>
      <NavContainer>
        <DropdownContainer>
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
        </DropdownContainer>
        <SupportLink to="">Support</SupportLink>
        <StyledButton>Sign Up</StyledButton>
        <StyledFaBars size={18} />
      </NavContainer>
    </Container>
  );
};

export default Navbar;
