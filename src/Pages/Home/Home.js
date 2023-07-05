import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import HotelCard from "../List/HotelCard";
import "./Home.css";
import SortBar from "./SortBar";
import LeftCheckboxes from "../List/LeftCheckboxes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBed } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  faPlane,
  faCab,
  faTaxi,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { Link } from "react-router-dom";

function Home() {
  const handleReload = () => {
    fetchHotels();

  };

  // Geoid
  const [Location, setLocation] = useState("Delhi");
  const [geoId, setGeoId] = useState("744301");
  const [geolocationData, setGeolocationData] = useState([]);
  const handleFilter = (event) => {
    setLocation(event.target.value);
  };
  useEffect(() => {
    const fetchHotels = async () => {
      const options = {
        method: "GET",
        url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation",
        params: { query: { Location } },
        headers: {
          "X-RapidAPI-Key":
            "e2c40580cemsh01e35dc943bba8bp1f14fbjsnd5691d21dc73",
          "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("Geolocation", response.data.data);
        setGeolocationData(response.data.data);

        if (geolocationData.length > 0) {
          console.log("hey");
          setGeoId(geolocationData[0].geoId);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotels();
  }, Location);

  console.log("id", geoId);
  console.log("geolocar", geolocationData);

  // hotels

  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    const options = {
      method: "GET",
      url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        geoId: geoId,
        checkIn: "2023-07-05",
        checkOut: "2023-07-29",
        pageNumber: "1",
        currencyCode: "INR",
      },
      headers: {
        "X-RapidAPI-Key": "a8ece70045msh508efb4152ab9fap1867f8jsn6571cd9fb74a",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setHotels(response.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // console.log("mera", hotels);

  // let type = prop.type;
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const handelOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };



  // const [reload, setReload] = useState(false);
  
  return (
    <div>
      <Navbar />
      {/* <Header /> */}

      <div>
        <div className="offerHeader mx-auto py-1 text-center d-flex justify-content-center  ">
          <FontAwesomeIcon
            className="display_inline"
            size="lg"
            icon={faPersonWalkingLuggage}
          />

          <span className="h6">
            Travelling to Malaysia? Read all updated requirements before you
            book.{" "}
          </span>
          <Link className="LearnMoreBtn h6 "> Learn More</Link>
        </div>
        <div className="header">
          <div className={"headerContainer"}>
            <>
              {" "}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faBed}
                    size="xl"
                    className="headerIcon"
                  />
                  <input
                    onChange={handleFilter}
                    type="text"
                    value={Location}
                    placeholder="where are you going?"
                    className="headerSearchInput"
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    size="xl"
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    size="xl"
                    icon={faPerson}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >
                    {`${options.adults} adult - ${options.children} children - ${options.room} room`}{" "}
                  </span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionsItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adults <= 1}
                            onClick={() => handelOption("adults", "d")}
                            className="optionCounterButton"
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adults}
                          </span>
                          <button
                            onClick={() => handelOption("adults", "i")}
                            className="optionCounterButton"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            onClick={() => handelOption("children", "d")}
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            onClick={() => handelOption("children", "i")}
                            className="optionCounterButton"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            onClick={() => handelOption("room", "d")}
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            onClick={() => handelOption("room", "i")}
                            className="optionCounterButton"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItemBtn">
                  <button onClick={handleReload} className="headerBtn">
                    Search
                  </button>
                </div>
              </div>
            </>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: "1080px" }}>
        <div className="row">
          <div className="col-3">
            <div className="headerSearchItem">
              {/* <FontAwesomeIcon
                    icon={faBed}
                    size="xl"
                    className="headerIcon"
                  /> */}
              <input
                onChange={handleFilter}
                type="text"
                value={Location}
                placeholder="where are you going?"
                className="headerSearchInput"
              />
            </div>

            <LeftCheckboxes />
          </div>
          <div className="col-9 ">
            <div className="hotelList align-center" >
              <SortBar />
              
              {hotels.length > 0 ? (
                hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))
              ) : (
                <p>Loading hotels...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
