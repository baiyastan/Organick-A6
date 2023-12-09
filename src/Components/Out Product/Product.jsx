import React from 'react'
import "./Product.css"
import AbountImage from "./Image/Photo__42_-removebg-preview.png";
import Star__1_ from "./Image/Star__1_-removebg-preview.png";
import AbountImage1 from "./Image/Photo__43_-removebg-preview.png";
import AbountImage2 from "./Image/Photo__44_-removebg-preview.png";
import AbountImage3 from "./Image/image_13__3_-removebg-preview.png";
import AbountImage4 from "./Image/image_14__1_-removebg-preview.png";
import AbountImage5 from "./Image/Photo__45_-removebg-preview.png";
import AbountImage6 from "./Image/Photo__46_-removebg-preview.png";
import AbountImage7 from "./Image/Photo__47_-removebg-preview.png";
import Aerrow from "./Image/Aerrow__1_-removebg-preview.png"
import Null from "./Image/Photo (49).png"
import Nulla from "./Image/Photo (50).png"
import AboutImage from "./Image/Photo (28).jpg"
import Navigation from "./Image/Navigation.png"

function Product() {
  return (
    <div className="App">
      <div className="main">
       <p>Categories </p>
      <h2>Our Products</h2>
      </div>
          
      <div className="Product">
      <div className="vegetable">
      <button>Vegetable</button>
      <img src={AbountImage} alt="image" />
      <h4>Calabrese Broccoli</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$13.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
  
    </div>

    <div className="vegetable">
      <button>Fresh</button>
      <img className="image" src={AbountImage1} alt="image" />
      <h4>Fresh Banana Fruites</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$14.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
    </div>

    <div className="vegetable">
      <button>Millets</button>
      <img src={AbountImage2} alt="image" />
      <h4>White Nuts</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$15.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
    </div>

    <div className="vegetable">
      <button>Vegetable</button>
      <img src={AbountImage3} alt="image" />
      <h4>Vegan Red Tomato</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$17.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
    </div>
</div>



<div className="Producs">
      <div className="vegetable">
      <button>Health</button>
      <img src={AbountImage4} alt="image" />
      <h4>Mung Bean</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$11.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
    </div>

    <div className="vegetable">
    <button>Nuts</button>
      <img src={AbountImage4} alt="image" />
      <h4>Brown Hazelnut</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$12.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
    </div>


    <div className="vegetable">
      <button>Fresh</button>
      <img className="image" src={AbountImage6} alt="image" />
      <h4>Eggs</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$17.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
    </div>

    <div className="vegetable">
      <button>Fresh</button>
      <img className="imagee" src={AbountImage7} alt="image" />
      <h4>Zelco Suji Elaichi Rusk</h4>
     <h5></h5>
     <div className="back">
      <p className="broccoli ">$20.00</p>
      <p className="nall">$15.00</p>
      <img src={Star__1_} alt="image"/>
      </div>
    </div>
</div>

   <div className="load">
    <div className="More">
      <button>Load More
      <img src={Aerrow} alt="image"/></button>
    </div>
   </div>

   <div className="container">
    <div className="ralls">
      <img src={Null} alt="image"/>
      <img src={Nulla} alt="image"/>
 </div>
  <div className="news">
    <div className="Customer">
        <p className="Test">Testimonial</p>
        <h2 className="aboutt">What Our Customer Saying?</h2>
        <img className="about" src={AboutImage} alt="image"/>
        <div className="Lorem">
        <img src={Star__1_} alt="image"/>
           <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br/> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
           <h4>Sara Taylor</h4>
           <p>Consumer</p>
           <img className="Navigat" src={Navigation} alt="image"/>
     </div>
    </div>
  </div>
  <div className="Ipsun"></div>
    <div className="Simply">
     <div className="dummy">
      <h1>100%</h1>
      <p>Organic</p>
     </div>

     <div className="dummy">
      <h1>285</h1>
      <p>Active Product</p>
     </div>

     <div className="dummy">
      <h1>350+</h1>
      <p>Organic Orchads</p>
     </div>

    <div className="dummy">
      <h1>25+</h1>
      <p>Years of Farming</p>
     </div>

     </div>
   </div>

    </div>
  )
}

export default Product
