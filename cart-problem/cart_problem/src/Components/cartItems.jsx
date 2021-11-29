
import { CardContext } from '../Context/cartContext';

const {  useContext } = require('react');
function CartItems()
{
  
    const {cardData,cart}=useContext(CardContext)


    console.log(cardData)
    return (
        <div>
            
            hello cart
        </div>
    )
}

export {CartItems}