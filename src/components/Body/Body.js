import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Body.css'
const Body = () => {
    const [persons, setPerson] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    const handleCart = (person) => {
        const newCart = [...cart, person]
        setCart(newCart)
    }
    return (
        <div className='body-container  w-75 mx-auto'>
            <div className="card-container">
                {
                    persons.map(person => <Card
                        key={person.Name}
                        handleCart={handleCart}
                        person={person}></Card>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;


