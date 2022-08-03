import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={require("./image/base1.jpg")}
          alt="unable to load image"
        />

        <div className="home__row">
          <Product
            title="Ankur Warikoo is an entrepreneur and content creator whose deep, witty and brutally honest thoughts "
            price={299}
            image={require("./image/bookimg.jpeg")}
            rating={5}
          />
          <Product
            title="Discover the innovative world of Applee and shop everything iPhonee, iPade, Applee Watche, Mace, and Applee TVe"
            price={10099}
            image={require("./image/apple.jpeg")}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="See Our Collection of Trendy Sunglasses Now. Shop a Variety of Colors and Designs Today! We Bring You a Variety of Sunglasses"
            price={999}
            image={require("./image/sunglas.jpeg")}
            rating={3}
          />
          <Product
            title="LCD (Liquid Crystal Display) is a type of flat panel display which uses liquid crystals in its primary form of operation"
            price={6799}
            image={require("./image/lcd.png")}
            rating={4}
          />
          <Product
            title="Grey Mens Shirts - Buy Grey Mens Shirts at India's Best Online Shopping Store. Check Price in India and Shop Online"
            price={1299}
            image={require("./image/greyshurt6.jpeg")}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Gift yourself comfort with a Greensoul Gaming Chair, now at an unbelievable 45% off."
            price={4399}
            image={require("./image/hu.jpeg")}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
