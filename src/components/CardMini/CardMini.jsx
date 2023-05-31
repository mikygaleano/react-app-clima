import style from '../CardMini/CardMini.module.css'

export default function CardMini ({dato}) {



        return (
            
            <section className={style.sectionMiniCards}>
               {
                dato.days.map(e => {
                    
                    return (
                        <div className={style.containerMiniCards}>
                            <figure>
                                <span>{new Date(e.date).toLocaleDateString("es-ES", { weekday: "long" })}</span>
                                <img src={`https://v5i.tutiempo.net/wi/01/40/${e.icon}.png`} alt="icono" />
                                <span className={style.spanText}>{e.text}</span>
                            </figure>
                            <div>
                                <span>Max {e.temperature_max}Cº</span>
                                <span>Min {e.temperature_min}Cº</span>
                            </div>
                        </div>
                    )
                })
               }
            </section>
        )
}