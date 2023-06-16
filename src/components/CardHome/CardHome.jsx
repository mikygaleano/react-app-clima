import style from '../CardHome/CardHome.module.css'

export default function CardHome ({data}) {

    const background = () => {
        if (data.day1.text === 'Cubierto con lluvias') {
            return style["lluvia"]
        } else if (data.day1.text === 'Cubierto') {
            return style["cubierto"]
        } else if (data.day1.text === 'Muy nuboso' || 'Nubes dispersas' || 'Parcialmente nuboso') {
            return style["nuboso"]
        } else if (data.day1.text === 'Despejado') {
            return style["soleado"]
        }
    }

    if (data.length === 0) {
        return (
            <section className={style.doaler}>
                <h1>Cargando...</h1>
            </section>
        ) // Si los datos no están disponibles, no renderizar el componente
      }
    return (
        <>
            <section className={background()}>
                <h1>{`📍🌍 ${data.locality.name} (${data.locality.country})`}</h1>
                <div className={style.containerCardHome}>
                    <figure className={style.figureHome}>
                        <span>{new Date(data.day1.date).toLocaleDateString("es-ES", { weekday: "long" })}</span>
                        <img src={`https://v5i.tutiempo.net/wi/01/50/${data.day1.icon}.png`} alt='icono' />
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