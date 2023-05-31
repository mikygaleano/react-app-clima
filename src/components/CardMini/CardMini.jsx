

export default function CardMini ({dato}) {

    


        return (
            
            <>
               {
                dato.days.map(e => {
                    return (
                        <div>
                        <figure>
                            <img src={`https://v5i.tutiempo.net/wi/01/40/${e.icon}.png`} alt="icono" />
                            <span>{e.text}</span>
                        </figure>
                        <div>
                            <span>Max {e.temperature_max}Cº</span>
                            <span>Min {e.temperature_min}Cº</span>
                            <span>hum {e.humidity}%</span>
                        </div>
                        </div>
                    )
                })
               }
            </>
        )
}