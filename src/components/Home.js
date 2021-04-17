import './Home.css'
import Product from './Product'

const Home = () => {
    return (

        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB659468779_.jpg" alt=""/>
            </div>

            <div className="home__row">
                <Product
                    id="1"
                    title="Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    image="https://images-na.ssl-images-amazon.com/images/I/71T0KJFxCHL._SY606_.jpg"                
                    price={29999}
                    rating={5}
                />
                <Product
                    id="6"
                    title="boAt Bassheads 900 On Ear Wired Headphones(Carbon Black)"
                    image="https://images-na.ssl-images-amazon.com/images/I/61xeIT6UHrL._SX425_.jpg"
                    price={749}
                    rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                    id="2"
                    title="Logitech G213 Gaming Keyboard with Dedicated Media Controls, 16.8 Million Lighting Colors Backlit Keys, Spill-Resistant and Durable Design, Black"
                    image="https://images-na.ssl-images-amazon.com/images/I/61I52zZ-7qL._SX679_.jpg"
                    price={3000}
                    rating={5}
                />
                <Product
                    id="3"
                    title="Samsung 138 cm (55 inches)Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKBXL (Titan Gray) (2021 model)"
                    image="https://images-na.ssl-images-amazon.com/images/I/71wecY2MgfL._SX679_.jpg"
                    price={49999}
                    rating={4}
                />
                <Product
                    id="4"
                    title="The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living: Featuring new translations of Seneca, Epictetus, and Marcus Aurelius Paperback"
                    image="https://images-na.ssl-images-amazon.com/images/I/41q21DX9ROL._SX326_BO1,204,203,200_.jpg"
                    price={300}
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="5"
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SX679_.jpg"
                    price={153900}
                    rating={5}
                />
                
            </div>
        </div>
    );
}
 
export default Home;