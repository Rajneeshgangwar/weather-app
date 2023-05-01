import React, { useEffect, useState } from 'react';
import {Container,styled} from '@mui/material';
import "./Weather.css";
import {MdLocationOn} from "react-icons/md";





function Weather() {

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("mumbai");

    useEffect(()=>{
        
        const fetchApi= async ()=>{
            const key="123bb08eda4487a294f94c1d0c8b59c6"
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`
            const res=await fetch(url)
            // console.log(res);

            const resjson=await res.json();

            console.log(resjson);

            setCity(resjson.main);


        }

         fetchApi();

    },[search])

    return (

        <>
            <div className='main'>
           <div className='container'>      
          <Container maxWidth="sm">

                <input
                    type="search"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                ></input>
            </Container>
    {!city ? (
        <p>No Data Found</p>
        ) :
        (
            
            <div>
                <h2>
                   <MdLocationOn /> {search}
                </h2>
                
                <h3>Current {city.temp}<span>&#176;</span>C</h3>
                <h3>Min {city.temp_min} <span>&#176;</span>C / Max {city.temp_max}<span>&#176;</span> C</h3>
                <h4>Humidity {city.humidity}%</h4><br></br>
            </div>
           
          )
       } 
       </div>
                </div>
        </>
    )
}

export default Weather;