import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <h1>404 - Không tìm thấy trang</h1>
            <p>Trang bạn đang tìm kiếm không tồn tại</p>
            <button onClick={() => navigate("/")}>Về trang chủ</button>
        </div>
    )
}

export default NotFound
