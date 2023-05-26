import CardHome from "../CardHome/CardHome";

import { useEffect, useState } from "react"


export default function Home () {

    const API_key = 'a778027f763862b1d99bef3a0a0c626d';

    const [apiData, setApiData] = useState([]);
    const [lat, setLat] = useState(undefined);
    const [lon, setLon] = useState(undefined);



    useEffect(()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            })};
    });

    useEffect(()=>{
        const fetchData = async () => {
            if (lat !== undefined && lon !== undefined) {
              let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
      
              try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setApiData(data);
              } catch (error) {
                console.log(error);
              }
            }
          };
        fetchData()
    /* aca le agrego como dependencia lat y lon para que no se acttualize indefinidamente
    y solo lo haga cuando se actualiza la ubicacion del geolocation */
    },[lat, lon]);


    return (
        
        <>
            <CardHome apiData={apiData}/>
        </>
        
    )
}