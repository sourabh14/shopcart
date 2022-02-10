import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.title}>ShopCart</div>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="images/shopping-cart.png" alt="cart-icon" />
        <span style={styles.cartCount}>{props.totalItems}</span>
      </div>
    </div>
  );
}

const styles = {
  title: {"fontSize":"2rem","fontWeight":"bold","color":"white","marginLeft":"auto"},
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartIconContainer: {
    marginLeft: 'auto'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 5,
    top: 6
  }
};


export default Navbar;