import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWUs0myM5bVkyOqqf8NJ2Do1tEDRZhYX0",
    authDomain: "cart-7c6e0.firebaseapp.com",
    projectId: "cart-7c6e0",
    storageBucket: "cart-7c6e0.appspot.com",
    messagingSenderId: "62565167502",
    appId: "1:62565167502:web:8174d1d0c4b7bcc035b4df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of products from database

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        // Fetch products from database
        const productsCol = collection(db, 'products');
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map(doc => {
            const docData = doc.data();
            docData['id'] = doc.id;
            return docData
        });
        this.setState({
            products: productList
        })
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