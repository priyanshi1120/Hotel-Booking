import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faBed,
  faPlane,
  faCab,
  faTaxi,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { Link } from "react-router-dom";

function Header(prop) {
  let type =prop.type;
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

  return (
    <div>
      <div className="header">
        <div className={type === 'list' ? "headerContainer listMode" : "headerContainer"}>
        
          {type !== 'list'&&  <>
             
              {/* <h1 className="headerTitle">
                A lifetime of Discounts ? It's Genius
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels- unlock instant savings of 10% or
                margin with free sccoint
              </p>
              <button className="headerBtn">Sign in / Register</button> */}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} size="xl" className="headerIcon" />
                  <input
                    type="text"
                    placeholder="where are you going?"
                    className="headerSearchInput"
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon  size="xl"
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
                  <FontAwesomeIcon size="xl" icon={faPerson} className="headerIcon" />
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
                <div className="headerSearchItem">
                  <Link to={'/hotels'}>
                  <button className="headerBtn">Search</button>
                  </Link>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
