import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'


function MainScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search
    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    
    return (
        
       
        <div>
            
            <div class="column" >
            
            <h1 style={{ fontSize: 26, color: "orange", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> WELCOME TO REMINISE TRADITION </h1>
            <h1 style={{ fontSize: 18, color: "Red", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}>  EXCLUSIVE TRIBAL WORKS STORE </h1>
            <h1 style={{ fontSize: 14, color: "green", textAlign: "center" ,fontStyle: 'sans-serif', fontWeight: 'bold' }}> ***** SHOP WITH EXCLUSIVE OFFERS ***** </h1>

            <div style={{ display: "flex",justifyContent: "center", alignItems: "center"}}>
                <img style={{ width:"100%", height:"350px" ,borderRadius: 10,textAlign:'left'}} src={"https://cdn.shopify.com/s/files/1/0030/9759/1872/files/Product_Banner-_54_1080_x_900_px_5_1080x.png?v=1650866638"}></img>
                <div class="container">
                    <h2> REMINISE TRADITION</h2>
                    <p class="title" style={{ fontSize: 20, color: "brown", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}>Redifines the Tradition of India </p>
                    <p style={{ fontSize: 16, color: "#ff00bf", textAlign: "center" ,fontStyle: 'Roboto', fontWeight: 'bold' }}>We Deliver A Unique and Wonderful Traditional as well as Excellent Handicrafts and also Good Fabrics and Well Sketched Paintings.</p>
                </div>

            
            </div>
            </div>


            <div class="column" >
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>
            <h1 style={{ fontSize: 18, color: "Red", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> HANDCRAFTED IN INDIA </h1>
            <p style={{ fontSize: 16, color: "#008B8B", textAlign: "center" ,fontStyle: 'sans-serif', fontWeight: 'bold' }}>ExclusiveLane is an online craft brand started with a vision to promote Indian handicrafts globally & help small artisans based in different parts of India earn a living out of it. Amazing Traditional Indian Handicrafts You will Love. </p>
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>
          

            <h1 style={{ fontSize: 18, color: "#9ACD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>
            <h1 style={{ fontSize: 18, color: "#CD853F", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> OUR MISSION</h1>
            <p style={{ fontSize: 16, color: "#4169E1", textAlign: "center" ,fontStyle: 'sans-serif', fontWeight: 'bold' }}>Our mission is to curate beautifully handcrafted products from across the globe. We preserve the traditional art of India handed down to us by our ancestors, helping our talented artisans gain global recognition through the products that can be used on a daily basis in the urban market. Our vision is to be an International Brand synonym to craft. We are well on our way with a solemn goal to provide economic upliftment of the rural artisans that are involved in preserving the heritage of the handicrafts industry in India.</p>
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>
          


            <div style={{ display: "flex",justifyContent: "center", alignItems: "center"}}>
                <img style={{ width:"100%", height:"350px" ,borderRadius: 10,textAlign:'left'}} src={"https://cdn.shopify.com/s/files/1/0030/9759/1872/files/Product_Banner-_54_1080_x_900_px_5_f0186e0a-2a9d-46f6-af29-1fbc105ee61c_1080x.png?v=1652337071"}></img>
                <div class="container">
                    <h2>SOOTHING SYMPHONIES</h2>
                    <p class="title" style={{ fontSize: 20, color: "brown", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}>Redifines the Tradition of India </p>
                    <p style={{ fontSize: 16, color: "#ff00bf", textAlign: "center" ,fontStyle: 'Roboto', fontWeight: 'bold' }}>Hand-Painted and Handcrafted collection of wind chimes.Amazing Traditional Indian Handicrafts You will Love.</p>
                </div>

            
            </div>
            </div>


            <div class="column" >
            
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>
            <h2 style={{ fontSize: 16, color: "#800080", textAlign: "center" ,fontStyle: 'sans-serif', fontWeight: 'bold' }}>Fabulous Traditional Indian Handicrafts which can beautify your space with decorative and Excellent Handicrafts. You will definitely fall in love with it </h2>
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>

            
            </div>
            <div class="column" >
            
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>
            <h2 style={{ fontSize: 16, color: "#800080", textAlign: "center" ,fontStyle: 'sans-serif', fontWeight: 'bold' }}>Thank You For Visiting Our " Reminise Tradition " WEBSITE </h2>
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>

            
            </div>
        </div>  
         
    )
}

export default MainScreen
