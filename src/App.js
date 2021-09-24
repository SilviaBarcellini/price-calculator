import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { Switch } from "theme-ui";
import Input from "./components/switch/switch";

export default function App() {
  const [pricePerUser, setPricePerUser] = useState(2.91);
  const [licences, setLicences] = useState(50);
  const [isYearly, setIsYearly] = useState(false);

  const totalPricePerMonth = Math.round(pricePerUser * licences);

  const handleSlider = (value) => {
    // console.log(value);
    switch (value) {
      case 5:
        setPricePerUser(5.55);
        setLicences(5);
        break;
      case 25:
        setPricePerUser(4.22);
        setLicences(25);
        break;
      case 50:
        setPricePerUser(2.91);
        setLicences(50);
        break;
      case 75:
        setPricePerUser(2.83);
        setLicences(75);
        break;
      case 100:
        setPricePerUser(2.53);
        setLicences(100);
        break;
      case 150:
        setPricePerUser(2.33);
        setLicences(150);
        break;
      case 250:
        setPricePerUser(2.21);
        setLicences(250);
        break;
      case 500:
        setPricePerUser(0.99);
        setLicences(500);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="box">
        <h3>Anzahl Personen</h3>
        <div className="slider">
          <Slider
            min={5}
            max={500}
            defaultValue={50}
            marks={{
              5: 5,
              25: 25,
              50: 50,
              75: 75,
              100: 100,
              150: 150,
              200: 200,
              500: {
                style: {
                  color: "red"
                },
                label: <strong>500</strong>
              }
            }}
            step={null}
            dotStyle={{ display: "none" }}
            trackStyle={{
              backgroundColor: "#f5f2ed",
              height: 10
            }}
            handleStyle={{
              height: 36,
              width: 36,
              marginTop: -14,
              backgroundColor: "#ffd7ba",
              border: "none",
              boxShadow: "4px 8px 16px 4px rgba(254, 197, 187, 0.36)"
            }}
            railStyle={{
              backgroundColor: "#f5f2ed",
              height: 10
            }}
            style={{
              marginBottom: "2rem"
            }}
            onChange={(value) => handleSlider(value)}
          />
        </div>
      </div>
      <div className="price">
        {/* <p className="licences">{licences} Lizenzen</p> */}
        <h3>
          entspricht{" "}
          <span variant="priceTag" as="span">
            €{isYearly ? pricePerUser * 12 : pricePerUser}
          </span>{" "}
          je Nutzer:in pro
          <h5 variant="monthTag" as="span">
            {" "}
            {isYearly ? "Jahr" : "Monat"}
          </h5>{" "}
        </h3>
      </div>{" "}
      <div>
        {/* total price n licences per month : per year 
on the side? */}
        {/*         
        <div className="price">
          <h3>
            entspricht{" "}
            <h5 variant="priceTag" as="span">
              €{isYearly ? totalPricePerMonth * 12 * 0.25 : totalPricePerMonth}
            </h5>
            <h5 variant="monthTag" as="span">
              {" "}
              / {isYearly ? "year" : "month"}
            </h5>{" "}
            je Nutzer:in pro Monat
          </h3>
        </div> */}
        <div className="toggle">
          <Switch
            onLabel=" MONAT"
            offLabel="JAHR"
            onChange={(ev) => setIsYearly(ev.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}
