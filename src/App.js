
import Block from './components/Block';
import Navbar from './components/Navbar';
import  "./App.css";
import styles from "./css.module.css";
import {Slider } from "./components/Slider";
import { Carousel } from './components/Craousel';
import Flighthome from './components/Flighthome';
import { Bookingcss } from './components/Bookingcss';
import { Icondiv } from './components/Icondiv';
import { Fromto } from './components/Fromto';
import { Fare } from './components/Fare';
import { Wrap } from './components/Wrap';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Wrap>
        {/* <Icondiv className="icondiv"></Icondiv> */}
        <br />
        <br />
        <Bookingcss>
          <br />

          <Fromto />
          <Fare />
        </Bookingcss>
        <div className="button">
          <button>SEARCH</button>
        </div>
      </Wrap>
      <Block />
      <div className={styles.container} style={{ boxSizing: "border-box" }}>
        <Slider />
        <div style={{ marginTop: 50 }}>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;
