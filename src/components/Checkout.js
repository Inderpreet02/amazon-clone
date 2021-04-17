import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__main">
                <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" className="checkout__image"/>
                
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>

                {basket.map( item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    
                    />
                ))}


            </div>

            </div>


            <div className="checkout__aside">
                <Subtotal/>
            </div>
        </div>
    );
}
 
export default Checkout;