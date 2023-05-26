

export default function CardHome ({apiData}) {

    return (
        <>
           {
            apiData.length < 0? (
                <h1>Cargando...</h1>
            ): (
                <h1>{apiData.name}</h1>
            )
           }
        </>
    )
}