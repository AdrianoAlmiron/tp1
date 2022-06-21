import { Link } from "react-router-dom";

import './style/BuyButtons.css';

export default function BuyButtons() {
    
    return (
        <div className="buyButtons">
            <Link to='/cart'>
                <button className="buyButtons__goToCart">Ver mi Lista</button>
            </Link>
            <Link to='/'>
                <button className="buyButtons__goToMenu">Volver al menú</button>
            </Link>
        </div>
    );

}