
import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" 
                alt="" 
                />

                <div className="home__row">
                    <Product 
                        id="1"
                        title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback" 
                        price= {11.96} 
                        image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating = {5}
                    />
                    <Product 
                        id="2"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater,
                        Dough Hook and Whisk, 5 Litre Glass Bowl" 
                        price= {239.0} 
                        image = "https://www.telegraph.co.uk/content/dam/food-and-drink/2017/04/10/kitchenaid_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=480"
                        rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="3"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price= {199.99} 
                        image = "data:image/jpeg;base64,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"
                        rating = {3}
                    />
                    <Product 
                        id="4"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
                        price= {98.99} 
                        image = "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/D/154242_1591542484.jpg"
                        rating = {5}
                    />
                    <Product 
                        id="5"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                        price= {598.99} 
                        image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-silver-202003_GEO_CA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583447926266"
                        rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="6"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor-Super Ultra Wide Dual WQHD 5120 x 1440" 
                        price= {1094.98} 
                        image = "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                        rating = {4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home