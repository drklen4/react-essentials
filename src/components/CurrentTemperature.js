import {useEffect, useState} from "react";

const CurrentTemperature = () => {

    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("Krakow");

    useEffect(() => {
            setLoading(true);
            const response = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=XXXXXXXXXXXXXXXXXXXXXXXXXXX`)
                .then(response1 => response1.json())
                .then((re) => {
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${re[0] ? re[0].lat : undefined}&lon=${re[0] ? re[0].lon : undefined}&units=metric&appid=XXXXXXXXXXXXXXXXXXX`)
                        .then((response) => response.json())
                        .then(setTemperature)
                        .then(() => setLoading(false))
                })
    }, [city])

    return (
        <p style={{textAlign: "center", position: "relative", width: "100%", marginTop: 50, bottom: 20}}>
            <label>
                Your location:&nbsp;
                <input type="text" value={city} onChange={(event) => {
                    setCity(event.target.value);
                }}/>
            </label>
            <label>
                {city} temperature is:
                {temperature ?
                    ' ' + temperature?.main?.temp + ' °C' :
                    (loading ? ' loading...' : undefined)}
            </label>
        </p>
    )
}


export default CurrentTemperature
