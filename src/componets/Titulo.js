import './Titulo.css'

export default function Titulo ({ titulo = ' Titulo', subTit='Subtitulo'}){
    console.log(titulo)
    return(

        <>
            <h1>{titulo}</h1>
            <h2>{subTit}</h2>
        </>
    )
}