import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Poet.css'

const Poet = (props) => {
    const {name, img, age, profession, fans, country} = props.poet;

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="poet-fiexed">
             <div>
             <h3>Name: {name}</h3>
             <img className="img-fixed" src={img} alt="" />
             <h4>Age: {age}</h4>
             <h4>Profession: {profession}</h4>
             <h4>Fans: {fans}</h4>
             <h4>Country: {country}</h4>
             <button onClick={() => props.handleAddToCart(props.poet)} className="btn-reguler">{cartIcon} Add to Cart</button>
             </div>
             
        </div>
    );
};

export default Poet;