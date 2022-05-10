import { Image } from "../elements"

const VideoDetails = ({ isWatched, title, description }) => {
    return (
        <div>
             <a href="https://www.youtube.com/hashtag/bzrap" ><p> #BZRAP </p></a>
            <h3>{title}</h3>
            <p>{description}</p> 
            <hr />
            {isWatched
            ?
            
            <Image
                src="assets/imagenes/ok.jpg" height={'42px'} margin={'5px'} border-radius={'50px'} alt="ok"
            />
           
            :
            <Image
                src='assets/imagenes/ok.jpg' height={'42px'} margin={'5px'} border-radius={'50px'} alt="nok"
            />
            }
           
        </div>
    );
}

export default VideoDetails;