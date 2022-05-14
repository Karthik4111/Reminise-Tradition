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
            


         

            <h1>Latest Products</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} xs={3}  >
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
            <div class="column" >
            
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>
            <h2 style={{ fontSize: 16, color: "#800080", textAlign: "center" ,fontStyle: 'sans-serif', fontWeight: 'bold' }}>Thank You For Visiting Our " Reminise Tradition " WEBSITE </h2>
            <h1 style={{ fontSize: 18, color: "#32CD32", textAlign: "center" ,fontStyle: 'italic', fontWeight: 'bold' }}> **************** </h1>

            
            </div>
        </div>  
         
    )
}

export default HomeScreen
