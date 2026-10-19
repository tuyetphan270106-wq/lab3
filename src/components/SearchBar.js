import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function SearchBar({
    keyword,
    category,
    categories = [],
    sort,
    onSearchChange,
    onCategoryChange,
    onSortChange
}) {
    return (
        <div>
            <Row className="mb-4 g-3">
                {/* 1. Ô Tìm kiếm */}
                <Col md={4}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Tìm tên sản phẩm:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập từ khóa..."
                            value={keyword}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </Form.Group>
                </Col>

                {/* 2. Ô Lọc theo Loại (Category) */}
                <Col md={4}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Loại:</Form.Label>
                        <Form.Select
                            value={category}
                            onChange={(e) => onCategoryChange(e.target.value)}
                        >
                            <option value="all">Tất cả loại</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>

                {/* 3. Ô Sắp xếp theo giá */}
                <Col md={4}>
                    <Form.Group>
                        <Form.Label className="fw-bold">Sắp xếp theo giá:</Form.Label>
                        <Form.Select
                            value={sort}
                            onChange={(e) => onSortChange(e.target.value)}
                        >
                            <option value="none">Mặc định</option>
                            <option value="price-asc">Giá tăng dần</option>
                            <option value="price-desc">Giá giảm dần</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </div>
    )
}

export default SearchBar
