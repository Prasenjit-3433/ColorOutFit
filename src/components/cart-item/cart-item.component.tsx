import { FC, memo } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { CartItemContainer, CartItemImage, CartItemDetails, CartItemName } from './cart-item.styles';

export type CartItemProps = {
    cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = memo(({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <CartItemName className="name">{name}</CartItemName>
                <span className="price">{quantity} X ${price}</span>
            </CartItemDetails>
            
        </CartItemContainer>
    );
})

export default CartItem;