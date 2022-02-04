import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const {products} = props;
    return (
        <div className="cart">
            {
                products.map((product) => {
                    return <CartItem 
                        product={product} 
                        key={product.id} 
                        increaseQuantity={props.increaseQuantity} 
                        decreaseQuantity={props.decreaseQuantity}
                        removeProduct={props.removeProduct}
                    />
                })
            }
        </div>
    );
}

export default Cart;

            // PRODUCT 
            // <div className="card product-container">
            //     <img className="card-img-top" src="images/galaxy-m31.jpg" alt='cart item image'/>
            //     <div className="card-body">
            //         <h6 className="card-title">Samsung Galaxy M31</h6>
            //         <p className="card-text">64MP Quad Camera | 32MP Selfie Camera </p>
            //         <div className="d-flex justify-content-between align-items-center">
            //             <p className="card-text product-price">₹ 16,328 </p>
            //             <a className="btn btn-primary btn-sm">Add</a>
            //         </div>
            //     </div>
            // </div>