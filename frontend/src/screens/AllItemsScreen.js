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
        
       
        <div>
            
            <h1 style={{ fontSize: 26, color: "orange", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> WELCOME TO REMINISE TRADITION </h1>

            <h1 style={{ fontSize: 18, color: "Red", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}>  EXCLUSIVE TRIBAL WORKS STORE </h1>

            <h1 style={{ fontSize: 14, color: "green", textAlign: "center" ,fontStyle: 'sans-serif', fontWeight: 'bold' }}> ***** SHOP WITH EXCLUSIVE OFFERS ***** </h1>


            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={6} md={4} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
            
        </div>
        
    )
}

export default HomeScreen
