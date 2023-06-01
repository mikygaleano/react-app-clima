import { useEffect, useState } from "react"

import CardHome from "../CardHome/CardHome";
import CardMini from "../CardMini/CardMini";
import style from '../Home/Home.module.css'

class datos {
  constructor(country,city,days) 
      {
      this.country = country;
      this.city = city;
      this.days = days;
      }
};

export default function Home () {



    const API_key = 'XCTXz4q4zXqN7yu';

    const [apiData, setApiData] = useState([]);
    const [ll, setLl] = useState(undefined);
    const [array, setArray] = useState(new datos("", "", []));

    useEffect(()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
            setLl(position.coords.latitude +','+ position.coords.longitude);
            })}
    });

    useEffect(()=>{
        const fetchData = async () => {
            if (ll !== undefined) {
              let url = `https://api.tutiempo.net/json/?lan=es&apid=${API_key}&ll=${ll}`;
      
              try {
                const response = await fetch(url);
                const data = await response.json();

                const arrayData = new datos(
                  data.locality.country,
                  data.locality.name,
                  [data.day2, data.day3, data.day4,data.day5, data.day6, data.day7],
                );

                setApiData(data);
                setArray(arrayData)
                console.log(data)
                console.log(arrayData)
              } catch (error) {
                return error;
              }
            }
          };
      fetchData()
    /* aca le agrego como dependencia lat y lon para que no se acttualize indefinidamente
    y solo lo haga cuando se actualiza la ubicacion del geolocation */
    },[ll]);

  
    

    return (
        
        <main>
            <CardHome data={apiData}/>
            <CardMini dato={array}/>
        </main>
        
    )
}