import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: ''
        }
    }

    increaseQuantity = () => {
        this.setState({
            qty: this.state.qty + 1
        });
    }

    decreaseQuantity = () => {
        if (this.state.qty > 0) {
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                <img src="images/galaxy-m31.jpg" style={styles.image} />
                </div>
                <div className="right-block">
                <div style={ { fontSize: 25 } }>{title}</div>
                <div style={ { color: '#777' } }>Rs {price} </div>
                <div style={ { color: '#777' } }>Qty: {qty} </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" onClick={this.increaseQuantity} src="images/increase.png" />
                    <img alt="decrease" className="action-icons" onClick={this.decreaseQuantity} src="images/decrease.png" />
                    <img alt="delete" className="action-icons" src="images/delete.png" />
                </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
      height: 124,
      width: 124,
      borderRadius: 4,
      background: '#ccc'
    }
}

export default CartItem;

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