import React from "react"

export default function WeatherApi(probs) {
    const gettimedetails = () => {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        const monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const d = new Date();
        let day = weekday[d.getDay()];
        let month = monthname[d.getMonth()];
        let year = d.getFullYear();
        let hour = d.getHours();
        let Min = d.getMinutes();
        let period = 'AM';
        if (hour > 11) {
            period = 'PM'
            if (hour > 12) {
                hour -= 12;
            }
        }
        if (Min < 10) {
            Min = '0' + Min;
        }
        return `${day} | ${month} | ${year} | ${hour}:${Min} ${period}`;
    }
    return (
        <div className='flex flex-col h-screen justify-center items-center bg-gray-900'>
            <input type="search"
                id='cityname'
                placeholder='Enter City Name'
                className='p-2 rounded-lg text-xl outline-8 outline-blue-500'
                onKeyDown={probs.PhandleKeyDown} />
            <div className="content bg-blue-300 h-96 w-72 flex justify-center relative  rounded-lg mt-5 overflow-hidden">
                {!probs.Pcityname ?
                    <h1 className="text-5xl text-center font-semibold mt-20">Error 404 (City Not Found)</h1>
                    :
                    <div className="innercontent">
                        <img src="https://img.icons8.com/clouds/100/000000/clouds.png"
                            className='h-32 w-32 mt-5'
                            alt="Cloud" />
                        <div className="box bg-red-400 w-96 rounded-t-full h-full absolute top-40 -left-12 flex flex-col items-center">
                            <h2 className="location text-4xl font-semibold mt-12 flex gap-2">
                                <img src="https://img.icons8.com/external-gradak-royyan-wijaya/24/000000/external-location-gradak-travel-solidarity-gradak-royyan-wijaya.png" className="h-10 w-10" />{probs.Pcityname} {probs.Pcountry}
                                </h2>
                            <p id="datetime" className="text-xl">{gettimedetails()}</p><br />
                            <h1 className="temp text-4xl font-semibold">{probs.Ptemval}°C</h1>
                            <h3 className="tempminmax text-base">Humidity {probs.Phumidity}% | Wind Speed {probs.Pspeed}km/hr</h3>
                        </div>
                    </div >
                }
            </div>
        </div >
    )
}
