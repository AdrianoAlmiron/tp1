

export default function Formulario({saludo}) {

    return(
        <div>
            <form>
                <imput type="text" />
                <button onClick={saludo}>Buscar</button>
            </form>
        </div>
    )
}