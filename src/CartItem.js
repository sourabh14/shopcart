import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div className="card cart-item">
                <img className="card-img-top" src="images/galaxy-m31.jpg" alt='cart item image'/>
                <div className="card-body">
                    <h6 className="card-title">Samsung Galaxy M31</h6>
                    <p className="card-text">64MP Quad Camera | 32MP Selfie Camera </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text cart-item-price">₹ 16,328 </p>
                        <a className="btn btn-primary btn-sm">Add</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;

