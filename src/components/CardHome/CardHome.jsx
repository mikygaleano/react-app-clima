import style from '../CardHome/CardHome.module.css'

export default function CardHome ({data, icon}) {

    return (
        <>
            <h1>{data.city.name}</h1>
            <section className={style.sectionCardHome}>
                <figure>
                    <img src={icon} alt={data.list[0].weather[0].description} />
                </figure>
                <div>
                    <span>{data.list[0].weather[0].description}</span>
                    <span>Temp {data.list[0].main.temp}</span>
                    <span>Max {data.list[0].main.temp_max}</span>
                    <span>Min {data.list[0].main.temp_min}</span>
                    <span>Hum {data.list[0].main.humidity}</span>
                </div>
            </section>
        </>
    )
}