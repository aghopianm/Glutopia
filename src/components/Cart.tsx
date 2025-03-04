import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import type { RootState } from '../store/store';

const CartContainer = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  padding: 2rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RemoveButton = styled.button`
  padding: 0.5rem;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ee3333;
  }
`;

const Total = styled.div`
  text-align: right;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Cart = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <CartContainer>
      {items.map(item => (
        <CartItem key={item.id}>
          <ItemImage src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <QuantityInput
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => dispatch(updateQuantity({
              id: item.id,
              quantity: parseInt(e.target.value) || 1
            }))}
          />
          <div>${(item.price * item.quantity).toFixed(2)}</div>
          <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </RemoveButton>
        </CartItem>
      ))}
      <Total>Total: ${total.toFixed(2)}</Total>
    </CartContainer>
  );
};

export default Cart;