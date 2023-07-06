import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import HotelCard from "../List/HotelCard";
import "./Home.css";
import SortBar from "./SortBar";
import LeftCheckboxes from "../List/LeftCheckboxes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "./cites.json";
import { faBed, faExchange } from "@fortawesome/free-solid-svg-icons";
import Autosuggest from "react-autosuggest";
import { useNavigate } from "react-router-dom";
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
  // Geoid
  const [Location, setLocation] = useState("Delhi");
  const [geoId, setGeoId] = useState("744301");
  const [geolocationData, setGeolocationData] = useState([]);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [type, setType] = useState("ONE_WAY");
  const [departureDate, setDepartureDate] = useState("");

  const [fromValue, setFromValue] = useState({
    city: "",
    latitude: "",
    longitude: "",
  });
  const [toValue, setToValue] = useState("");
  const [AirportsData, setAirportsData] = useState([]);
  const navigate = useNavigate();
  const airportsData = data;

  useEffect(() => {
    setAirportsData(data);
  }, []);
  const handleFilter = (event) => {
    setLocation(event.target.value);
  };
  const swapValuehandler = () => {
    let temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
  };

  const fetchSuggestions = (value) => {
    const inputValue = value ? value.trim().toLowerCase() : "";

    if (!airportsData) {
      return [];
    }

    const filteredSuggestions = airportsData.filter(
      (airport) =>
        airport.city.toLowerCase().includes(inputValue) ||
        airport.state.toLowerCase().includes(inputValue)
    );
    return filteredSuggestions.slice(0, 5);
  };
  const getSuggestionValue = (suggestion) => suggestion.city;

  const renderSuggestion = (suggestion) => (
    <div className="suggestion-item border-none" >
      <div className="suggestion-content">
        <span className="suggestion-name">{suggestion.city}</span>
        <span className="suggestion-details">{suggestion.state}</span>
      </div>
      <hr className="suggestion-divider" />
    </div>
  );

  const onFromSuggestionsFetchRequested = ({ value }) => {
    setFromSuggestions(fetchSuggestions(value));
  };

  const onToSuggestionsFetchRequested = ({ value }) => {
    setToSuggestions(fetchSuggestions(value));
  };

  const onFromSuggestionsClearRequested = () => {
    setFromSuggestions([]);
  };

  const onToSuggestionsClearRequested = () => {
    setToSuggestions([]);
  };

  const onFromChange = (event, { newValue }) => {
    setFromValue((prevValue) => ({
      ...prevValue,
      city: newValue, // Update the city name
    }));

    const selectedSuggestion = fromSuggestions.find(
      (suggestion) => suggestion.city === newValue
    );

    if (selectedSuggestion) {
      // Store the latitude and longitude in state
      setFromValue((prevValue) => ({
        ...prevValue,
        latitude: selectedSuggestion.latitude,
        longitude: selectedSuggestion.longitude,
      }));
    }
  };

  const onToChange = (event, { newValue }) => {
    setToValue(newValue);
  };

  const fromInputProps = {
    placeholder: "From",
    value: fromValue.city, // Pass the city property of fromValue
    onChange: onFromChange,
  };

  const shouldRenderSuggestions = (value) => {
    // Check if the value is a string and has a length greater than 0
    return typeof value === "string" && value.trim().length > 0;
  };

  const toInputProps = {
    placeholder: "To",
    value: toValue,
    onChange: onToChange,
  };

  const renderSuggestionsContainer = ({ containerProps, children }) => (
    <div
      {...containerProps}
      className="custom-suggestions-container"
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );

 

  const [hotels, setHotels] = useState([]);

  const handleReload = () => {
    fetchHotels();
  };

  const fetchHotels = async () => {
    const options = {
      method: "GET",
      url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation",
      params: {
        latitude: fromValue.latitude,
        longitude: fromValue.longitude,
        checkIn: "2023-07-19",
        checkOut: "2023-07-20",
        pageNumber: "1",
        currencyCode: "INR",
        // geoId: geoId,
        // checkIn: "2023-07-05",
        // checkOut: "2023-07-29",
        // pageNumber: "1",
        // currencyCode: "INR",
      },
      headers: {
        "X-RapidAPI-Key": "a8ece70045msh508efb4152ab9fap1867f8jsn6571cd9fb74a",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("hotel", response.data);
      setHotels(response.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchHotels();
  // }, [fromValue]);

  console.log("mera", hotels);

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

  console.log("From Value:", fromValue);

  // const [reload, setReload] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  // Simulating a delay before displaying the hotels
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);


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
                  {/* <input
                    onChange={handleFilter}
                    type="text"
                    value={Location}
                    placeholder="where are you going?"
                    className="headerSearchInput"
                  /> */}
                  <Autosuggest className="opo"
                    suggestions={fromSuggestions}
                    onSuggestionsFetchRequested={
                      onFromSuggestionsFetchRequested
                    }
                    onSuggestionsClearRequested={
                      onFromSuggestionsClearRequested
                    }
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    renderSuggestionsContainer={renderSuggestionsContainer}
                    inputProps={fromInputProps} // Pass fromInputProps as inputProps
                    shouldRenderSuggestions={shouldRenderSuggestions}
                    id="from"
                  />
                  <button onClick={swapValuehandler}>
                    {/* <i className="fa fa-exchange"></i> */}
                    <FontAwesomeIcon
                    icon={faExchange}
                    size="xl"
                    // className="headerIcon"
                  />
                  </button>
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
                    onClick={() => {setOpenOptions(!openOptions)}}
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
            <div className="hotelList align-center">
              <SortBar />

              {/* {hotels.length > 0 ? (
                hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))
              ) : (
                <div className="text-center mt-5 pt-5">
                <p className="lead">Searching best hotels for you...</p>
                <p>Please wait while we find the perfect options for you.</p>
                <p>This may take a moment.</p>
              </div>              )} */}


{isLoading ? (
  <div className="text-center mt-5 pt-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <p className="mt-2">Searching best hotels for you...</p>
  </div>
) : (
  hotels.length > 0 ? (
    hotels.map((hotel) => (
      <div key={hotel.id} className="hotel-card">
        <HotelCard hotel={hotel} />
      </div>
    ))
  ) : (
    <div className="text-center mt-5 pt-5">
      <p className="h4"><strong>No hotels found.</strong></p>
      <p className="lead">Please add some valid Location</p>

    </div>
  )
)}




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
