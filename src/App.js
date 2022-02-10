import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"
import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
firebase.initializeApp(firebaseConfig);

// Get a list of products from database

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.db = firebase.firestore();
    }

    componentDidMount() {
        // Fetch products from database and store it in state
        this.db
            .collection("products")
            .onSnapshot((snapshot) => {
                const productList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                
                console.log("All data in 'products' collection", productList);

                this.setState({
                    products: productList
                })
            });
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
        // products[index].qty++;
        // this.setState({
        //     products: products
        // })
        const docRef = this.db
                    .collection("products")
                    .doc(products[index].id);

        docRef.update({qty: products[index].qty + 1})
                .then(()=> {
                    console.log("document updated successfully")
                })
                .catch((err) => {
                    console.log("Error: ", err);
                })
    }

    decreaseQuantity = (product) => {
        var {products} = this.state;
        const index = this.state.products.indexOf(product);
        if (products[index].qty > 0) {
            // products[index].qty--;
            // this.setState({
            //     products: products
            // })
            const docRef = this.db
                    .collection("products")
                    .doc(products[index].id);

            docRef.update({qty: products[index].qty - 1})
                .then(()=> {
                    console.log("document updated successfully")
                })
                .catch((err) => {
                    console.log("Error: ", err);
                })
        }
    }

    removeProduct = (product) => {
        var {products} = this.state;
        const index = this.state.products.indexOf(product);
        if (index > -1) {
            // products.splice(index, 1); 
            // this.setState({
            //     products: products
            // })

            const docRef = this.db
                .collection("products")
                .doc(products[index].id);

            docRef.delete()
                .then(()=> {
                    console.log("document deleted successfully")
                })
                .catch((err) => {
                    console.log("Error: ", err);
                })
        }
        
    }

    render() {
        const {products} = this.state;

        return ( 
            <div className = "App">
                <Navbar 
                totalItems={this.getTotalItems()}
                />
                <Cart 
                products={products} 
                increaseQuantity={this.increaseQuantity} 
                decreaseQuantity={this.decreaseQuantity}
                removeProduct={this.removeProduct}
                />
                <hr/>
                <div style= {{"fontSize":"1.5rem","marginBottom":"30px"}} >Total Price: Rs {this.getTotalCost()}</div>
            </div>
        );
    }
}






export default App;