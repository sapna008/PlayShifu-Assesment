import React from "react";
import "./App.css"; 
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import ProductPage from "./components/ProductPage";





const App = () => (
  <div className="app">
    <PromoBanner />
    <Header />
    <Navbar />
    <ProductPage/>
    <About/>
    <Footer/>
  </div>
);

export default App;