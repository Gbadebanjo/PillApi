import Pillfindr from "../assets/Pillfindr.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  background-color: #008080;
  height: 156.5px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const StyledButton = styled.button`
  border-radius: 20px;
  padding: 3px 25px;
  margin-right: 40px;
  color: white;
  border: none;

  &:hover {
    background-color: #003c3c;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Navbar = () => {
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
    <Navbar>
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
    </Navbar>
  );
};
export default Container;
