import style from '../CardHome/CardHome.module.css'

export default function CardHome ({data}) {

    const background = () => {
        if (data.day1.text === 'Cubierto con lluvias') {
            return style["lluvia"]
        } else if (data.day1.text === 'Cubierto') {
            return style["cubierto"]
        } else if (data.day1.text === 'Muy nuboso') {
            return style["nuboso"]
        } else if (data.day1.text === 'Soleado') {
            return style["soleado"]
        }
    }

    if (data.length === 0) {
        return (
            <section>
                <h1>Cargando...</h1>
            </section>
        ) // Si los datos no están disponibles, no renderizar el componente
      }
    return (
        <>
            <section className={background()}>
                <h1>{`📍🌍 ${data.locality.name} (${data.locality.country})`}</h1>
                <div className={style.containerCardHome}>
                    <figure>
                        <img src={`https://v5i.tutiempo.net/wi/03/50/${data.day1.icon}.png`} alt='icono' />
                        <span>{data.day1.text}</span>
                    </figure>
                    <div>
                        <span>{`Max ${data.day1.temperature_max}Cº`}</span>
                        <span>{`Min ${data.day1.temperature_min}Cº`}</span>
                        <span>{`Hum ${data.day1.humidity}%`}</span>
                    </div>
                </div>
            </section>
        </>
    )
}