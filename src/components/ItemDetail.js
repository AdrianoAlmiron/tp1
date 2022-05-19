import './style/ItemDetail.css';

export default function ItemDetail({item}) {

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            <div className='itemDetail__info'>
                <h3 className="itemDetail__title">{item.name}</h3>
                <p className="itemDetail__detail">{item.detail}</p>
                <button className="itemDetail__addBtn" >Agregar a tu MIX</button>
            </div>
        </div>
    );
}