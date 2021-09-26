import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import './Card.css'
const Card = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const element2 = <FontAwesomeIcon icon={faEnvelope} />

    // console.log(props.person)
    const { Name, img, position, age, Salary, Mobile } = props.person;

    return (
        <div className='card'>
            <img src={img} alt="" />
            <h5>Name: <small>{Name}</small>  </h5>
            <h6>Position: <small>{position}</small></h6>
            <h6>Mobile: <small>{Mobile}</small></h6>
            <h6>Salary: <small>{Salary}</small></h6>
            <h6>Age: <small>{age}</small></h6>
            <button onClick={() => props.handleCart(props.person)} className=' btn-regular'> {element}Add to Cart</button>

            <div className='a'> <h1>{element2}</h1></div>


        </div>
    );
};

export default Card;


