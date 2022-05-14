import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'


function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search
    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

 
    
    return (
        
        
        <div class="column" >

            <h1 style={{ fontSize: 26, color: "orange", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> WELCOME TO REMINISE TRADITION </h1>
            <div style={{ display: "flex",justifyContent: "center", alignItems: "center"}}>
                <img style={{ width:"100%", height:"350px" ,borderRadius: 10,textAlign:'left'}} src={"https://i.pinimg.com/736x/d2/24/5d/d2245dd14260625c37660e98a20a6429.jpg"}></img>
                <div class="container">
                    <h2>REMINISE TRADITION</h2>
                    <p class="title" style={{ fontSize: 20, color: "brown", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}>Redifines the Tradition of India </p>
                    <p style={{ fontSize: 16, color: "#ff00bf", textAlign: "center" ,fontStyle: 'Roboto', fontWeight: 'bold' }}>We Deliver A Unique and Wonderful Traditional as well as Excellent Handicrafts and also Good Fabrics and Well Sketched Paintings.</p>
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
          


            
            </div>




            
            <h1 style={{ fontSize: 26, color: "orange", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> TEAM LEADER  </h1>
            <div style={{ display: "flex",justifyContent: "center", alignItems: "center"}}>
            <img style={{ width:"25%", height:"250px" ,borderRadius: 10,textAlign:'left'}} src={"https://i.pinimg.com/originals/08/57/24/085724013c40fa4e4c254e26538812bc.png"}></img>
            <div class="container">
                <h2>Dasari Venkata Rama Karthik</h2>
                <p class="title">Team Leader & Front End Developer</p>
                <p>190030372</p>
                <p>190030372@kluniversity.in</p>
                <p><button class="button">Contact : +91-9879879879</button></p>
            </div>

            
            </div>


            <h1 style={{ fontSize: 26, color: "orange", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> FRONT-END DEVELOPER </h1>
            <div style={{ display: "flex",justifyContent: "center", alignItems: "center"}}>
            <img style={{ width:"25%", height:"250px" ,borderRadius: 10,textAlign:'left'}} src={"data:image/png;base64,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"}></img>
            <div class="container">
                <h2>JAKKAMPUDI GREESHMA</h2>
                <p class="title">FRONT-End Developer</p>
                <p>190030619</p>
                <p>190030619@kluniversity.in</p>
                <p><button class="button">Contact : +91-9876783458</button></p>
            </div>
            </div>


            <h1 style={{ fontSize: 26, color: "orange", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> BACK-END DEVELOPER </h1>
            <div style={{ display: "flex",justifyContent: "center", alignItems: "center"}}>
            <img style={{ width:"25%", height:"250px" ,borderRadius: 10,textAlign:'left'}} src={"https://i.pinimg.com/originals/08/57/24/085724013c40fa4e4c254e26538812bc.png"}></img>
            <div class="container">
                <h2>Y Rakesh Reddy</h2>
                <p class="title">BACK-End Developer</p>
                <p>190031388</p>
                <p>190031388@kluniversity.in</p>
                <p><button class="button">Contact : +91-9874562345</button></p>
            </div>
            
            </div>

            




        </div>

        

        
        
    )
}




export default HomeScreen
