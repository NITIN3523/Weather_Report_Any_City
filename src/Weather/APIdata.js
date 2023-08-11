import Card from './WeatherApi'
import React, { useState, useEffect } from 'react'
import axios from "axios"



export default function APIdata() {


    const [cityname, setcityname] = useState("Nainital")
    const [apidata, setapidata] = useState({
        country: "",
        temval: "",
        tempmaxval: "",
        tempminval: ""
    })

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setcityname(event.target.value)
            document.getElementById("cityname").value = "";
        }
    }
    useEffect(() => {

        async function getdata() {
            try {
                let da = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=9b52c2a0374563b1b8b9ffb0a5879aeb`);
                setapidata(() => {
                    return {
                        country: da.data.sys.country,
                        temval: da.data.main.temp,
                        humidity: da.data.main.humidity,
                        speed: da.data.wind.speed,
                    }
                })
            }
            catch (err) {
                setcityname("")
                console.log(err)
            }
        }
        getdata();
    }, [cityname])
    return (
        <>
            <div>
                <Card
                    PhandleKeyDown={handleKeyDown}
                    Pcityname={cityname}
                    Pcountry={apidata.country}
                    Ptemval={apidata.temval}
                    Phumidity={apidata.humidity}
                    Pspeed={apidata.speed}
                />
            </div>
        </>
    )
}
