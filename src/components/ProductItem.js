import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from "../datas/products"
import { Col, Row } from 'react-bootstrap';
function ProductItem() {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));
    if (!product) {
        return (
            <div>
                <h1>Not found product has ID : {id}</h1>
                <Link to={"/products"}>&larr; Return Products List</Link>
            </div>
        )
    }
    return (
        <div>
            <button onClick={() => navigate("/products")}>Quay lại danh sách</button>
            <Row>
                <Col className='mt-5'>
                    <img src="/images/elaicheesecake.jpg" alt="Ảnh banner" />
                </Col>
                <Col className='mt-5'>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',

                    }}>


                        <h2>{product.name}</h2>
                        <h3>ID: {product.id}</h3>
                        <h3>Danh mục: {product.category}</h3>
                        <h3>Giá: {product.price}</h3>

                        <p>---------------------------------------------------------------------------</p>
                        <h3>Mô tả: {product.description}</h3>



                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductItem
