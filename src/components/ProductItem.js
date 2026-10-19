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
                <Col>
                    <img src="/images/elaicheesecake.jpg" alt="Ảnh banner" />
                </Col>
                <Col>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>


                        <h1>{product.name}</h1>
                        <h2>ID: {product.id}</h2>
                        <h2>Danh mục: {product.category}</h2>
                        <h2>Giá: {product.price}</h2>

                        <p>----------------------------------------------------</p>
                        <h2>Mô tả: {product.description}</h2>



                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductItem
