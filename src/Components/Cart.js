import "../App.css";
import sl from '../imgs/mask3.png';
import sl1 from '../imgs/shirt4.png';
import sl2 from '../imgs/shirt7.png';

function Cart({item,item2,item3}){
    let ukupno = item.cijena + item2.cijena + item3.cijena;
    return(
        <div className="Cart">
            <h1 className="naslovi">Your cart</h1>
           <div className="lista">
                <div className="tx">
                    <img src={sl} className="slicica"/>
                    <p className="txt">{item.ime} <br/>  Price: {item.price}</p>
                </div>
                <div className="tx">
                    <img src={sl1} className="slicica"/>
                    <p className="txt">{item2.ime} <br/>  Price: {item2.price}</p>
                </div>
                <div className="tx">
                    <img src={sl2} className="slicica"/>
                    <p className="txt">{item3.ime} <br/>  Price: {item3.price}</p>
                </div>
                
           </div>
           <div>Txtal price: £{ukupno}.00</div>
        </div>
    );
}
export default Cart;