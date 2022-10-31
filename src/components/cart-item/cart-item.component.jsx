import { CartItemContainer, CartItemImage, CartItemDetails, CartItemName } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <CartItemName className="name">{name}</CartItemName>
                <span className="price">{quantity} X ${price}</span>
            </CartItemDetails>
            
        </CartItemContainer>
    );
}

export default CartItem;