import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = (props) => {
    const { name, image, price, instructor } = props.product;
    return (
        <div>
            <div className='product-container'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h4>{name || <Skeleton />}</h4>
                    <h6>{instructor || <Skeleton count={4} />}</h6>
                    <p>${price}</p>
                    <Button variant="warning" className='enroll-btn' onClick={() => props.handelClick(props.product)}>Enroll Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Product;