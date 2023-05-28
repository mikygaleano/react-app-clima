import style from '../CardHome/CardHome.module.css'

export default function CardHome ({data, icon}) {

    if (data.length === 0) {
        return (
            <section className={style.sectionCardHome}>
                <h1>Cargando...</h1>
            </section>
        ) // Si los datos no están disponibles, no renderizar el componente
      }
    
    
    return (
        <>
            <section className={style.sectionCardHome}>
                <h1>{data.city.name}</h1>
                <div className={style.containerCardHome}>
                    <figure>
                        <img src={icon} alt={data.list[0].weather[0].description} />
                        <span>{data.list[0].weather[0].description}</span>
                    </figure>
                    <div>
                        <span>Temp {(data.list[0].main.temp).toString().slice(0, 2)}</span>
                        <span>Max {(data.list[0].main.temp_max).toString().slice(0, 2)}</span>
                        <span>Min {(data.list[0].main.temp_min).toString().slice(0, 2)}</span>
                        <span>Hum {(data.list[0].main.humidity).toString().slice(0, 2)}</span>
                    </div>
                </div>
            </section>
        </>
    )
}