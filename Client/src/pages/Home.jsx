import Homebackgroundimg from "../assets/homebackground.png";
import Pillfindr from "../assets/Pillfindr.png";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";

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
        <div className="d-flex align-items-center">
          <div className="">
            <img src={Pillfindr} alt="Pillfindr" />
          </div>
          <div>
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                style={{ backgroundColor: "", borderColor: "yourColor" }}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
