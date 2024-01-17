import Homebackgroundimg from "../assets/homebackground.png";
import Pillfindr from "../assets/Pillfindr.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button }from "react-bootstrap";
import { FaBars } from 'react-icons/fa';
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          height: "110vh",
        }}
      >
        <div className="d-flex jusify-content-between align-items-center ">
          <div className="flex-grow-1">
            <img src={Pillfindr} alt="Pillfindr" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center flex-grow-1">
            <div className="flex-grow-1">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "",
                    borderColor: "yourColor",
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
            <Link className="text-white-no-underline flex-grow-1 my-2 my-md-0" to="">Support</Link>
            <Button size='sm' className="mt-3 mt-md-0 flex-grow-1" style={{backgroundColor: '#008080', borderRadius: '20px', padding: '6px 0px'}}>Sign Up</Button>
            <FaBars color="white" size={16} className="flex-grow-1 my-2 my-md-0"/>
          </div>
        </div>
        <div>Get Medication Wherever and Whenever</div>
      </div>
    </div>
  );
};

export default Home;
