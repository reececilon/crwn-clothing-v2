import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.style.scss';
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div class='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div class="footer">
                <span class="name">{ name }</span>
                <span class="price">{ price }</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;