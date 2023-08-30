import './product-card.style.scss';
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div class='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div class="footer">
                <span class="name">{ name }</span>
                <span class="price">{ price }</span>
            </div>
            <Button buttonType="inverted">Add to cart</Button>
        </div>
    )
}

export default ProductCard;