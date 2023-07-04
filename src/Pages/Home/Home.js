// import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../Components/Header/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import HotelCard from '../List/HotelCard';
function Home() {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    const searchHotels = async () => {
      const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels',
        params: {
          geoId: '940855',
          checkIn: '2023-07-05',
          checkOut: '2023-07-29',
          pageNumber: '1',
          currencyCode: 'INR'
        },
        headers: {
          'X-RapidAPI-Key': '11117f64c0msh45af57cd5226927p158229jsn58936ea5a5f0',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log("response",response.data);
        setHotels(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    searchHotels();
  }, []);

  console.log("mera",hotels)
  return (
    <div>
      
      <Navbar/>
      <Header/>

  
      <div>
      <h1>Hotel List</h1>
     
      {hotels.data.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
   ))} 

    </div>
    </div>
  )
}

export default Home
