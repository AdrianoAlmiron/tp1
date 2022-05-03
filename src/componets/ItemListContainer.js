import { useEffect, useState } from "react";

const ItemListContainer = ({ saludo="saludo" }) => {
    console.log ("antes de renderizar")
    return(
        <div>
            {saludo}
        </div>
    )
}

export default ItemListContainer