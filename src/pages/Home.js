import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <h1>Welcome to ProductStore</h1>
            <p>Manage and explore products for your needs</p>
            <button onClick={() => navigate("/products")}>View products</button>
        </div>
    )
}

export default Home
