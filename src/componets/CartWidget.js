import './CartWidget.css';


export default function CartWidget() {
    return (
        <button className="cart">
            <a href="#List" className="cart__link">
                <span className="cart__icon"><i class="bi bi-bag"></i></span>
                <span className="cart__counter">0</span>
            </a>
        </button>
    );
}