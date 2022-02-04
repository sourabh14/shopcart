import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
                    title: 'Mobile phone',
                    qty: 1,
                    price: 999,
                    img: "",
                    id: 1
                },
                {
                    title: 'Laptop',
                    qty: 1,
                    price: 1999,
                    img: "",
                    id: 2
                },
                {
                    title: 'T shirt',
                    qty: 1,
                    price: 400,
                    img: "",
                    id: 3
                }
            ]
        }
    }

    getTotalItems = () => {
        const {products} = this.state;
        var totalItems = 0;
        var prod;
        for (prod of products) {
          totalItems += prod.qty;
        }

        return totalItems;
    }

    getTotalCost = () => {
        const {products} = this.state;
        var totalCost = 0;
        for (var prod of products) {
            totalCost += (prod.qty * prod.price);
        }
        return totalCost;
    }

    increaseQuantity = (product) => {
        var {products} = this.state;
        const index = this.state.products.indexOf(product);
        products[index].qty++;
        this.setState({
            products: products
        })
    }

    decreaseQuantity = (product) => {
        var {products} = this.state;
        const index = this.state.products.indexOf(product);
        if (products[index].qty > 0) {
            products[index].qty--;
            this.setState({
                products: products
            })
        }
    }

    removeProduct = (product) => {
        var {products} = this.state;
        const index = this.state.products.indexOf(product);
        if (index > -1) {
            products.splice(index, 1); 
            this.setState({
                products: products
            })
        }
    }

    render() {
      const {products} = this.state;

      return ( 
        <div className = "App">
            <h1>ShopCart</h1>
            <Navbar 
              totalItems={this.getTotalItems()}
            />
            <Cart 
              products={products} 
              increaseQuantity={this.increaseQuantity} 
              decreaseQuantity={this.decreaseQuantity}
              removeProduct={this.removeProduct}
             />
             <div>Total Price: {this.getTotalCost()}</div>
        </div>
      );
    }
}






export default App;