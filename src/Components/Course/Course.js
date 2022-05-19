import React, { useState } from 'react';
import fakeData from '../../fakeData/CourseData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Course.css';


const Course = () => {
    const [course, setCourse] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handelClick = ((cartCourse) => {
        const newCart = [...cart, cartCourse];
        setCart(newCart);
    });
    return (
        <div className='shop-continer'>
            <div className="course">
                {
                    course.map((course) => (
                        <Product product={course} handelClick={handelClick}></Product>
                    ))
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;