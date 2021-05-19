import "../App.css";
import Cart from './Cart.js';

function Shop(){
    const Maska = {ime:"SIGNATURE MASK - RED",price:"£15.00",cijena:15};
    const Maska2 = {ime:"SCAR T-SHIRT ",price:"£25.00",cijena:25};
    const Maska3 = {ime:"HAZARD HXXDIE",price:"£45.00",cijena:45};
    return(
        <div className="Shop">
            <h1 className="naslovi ">Merch shxp</h1>
            
            
            <div class="merch_item">
            <div class="item_img"></div>
            <br/>SIGNATURE MASK - WHITE <br/>£15.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img1"></div>
            <br/>SIGNATURE MASK - RED <br/>£15.00 <br/><button className="add">ADD TX CART</button>
    </div>
    <div class="merch_item">
            <div class="item_img2"></div>
            <br/>IMMXRTALISATIXN MASK - WHITE <br/>£15.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img3"></div>
            <br/>HAZARD MASK - WHITE <br/>£15.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img4"></div>
            <br/>SIGNATURE T-SHIRT <br/>£25.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img5"></div>
            <br/>SCAR T-SHIRT <br/>£25.00  <br/><button className="add">ADD TX CART</button>
    </div>
    <div class="merch_item">
            <div class="item_img6"></div>
            <br/>FULL MXXN T-SHIRT <br/>£25.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img7"></div>
            <br/>KING SCAR T-SHIRT <br/>£25.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img8"></div>
            <br/>HAZARD SWEATSHIRT - YELLXW <br/>£35.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img9"></div>
            <br/>SIGNATURE HXXDIE <br/>£45.00 <br/><button className="sold">SXLD XUT</button>
    </div>
    <div class="merch_item">
            <div class="item_img10"></div>
            <br/>HAZARD HXXDIE<br/>£45.00 <br/><button className="add">ADD TX CART</button>
    </div>
    <div class="merch_item">
            <div class="item_img11"></div>
            <br/>LIMITED EDITIXN FANTASY VXID HXXDIE<br/>£45.00 <br/><button className="sold">SXLD XUT</button>
    </div>

    <Cart item={Maska} item2={Maska2} item3={Maska3} id="doli"></Cart>
        </div>
    
    );
}
export default Shop;