import React from 'react'
import Header from '../components/Header'
import { products } from "../datas/products"
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { Button, Container, Table } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
function ProductList() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // 1. Lấy tham số từ URL
    const keyword = searchParams.get('keyword') || '';
    const category = searchParams.get('category') || 'all';
    const sort = searchParams.get('sort') || 'none';
    const page = Math.max(1, Number(searchParams.get('page')) || 1);

    // 2. Lấy danh sách danh mục (Category) độc nhất từ mảng dữ liệu
    const categories = Array.from(new Set(products.map((item) => item.category).filter(Boolean)));

    // 3. Logic Lọc dữ liệu (Theo Keyword VÀ Category)
    let filteredDishes = products.filter((dish) => {
        const matchesKeyword = dish.name.toLowerCase().includes(keyword.toLowerCase());
        const matchesCategory = category === 'all' || dish.category === category;
        return matchesKeyword && matchesCategory;
    });
    // 4. Logic Sắp xếp
    if (sort === 'price-asc') {
        filteredDishes.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
        filteredDishes.sort((a, b) => b.price - a.price);
    }

    // 5. Logic Phân trang (3 món/trang = 2 hàng x 2 cột)
    const pageSize = 3;
    const totalPage = Math.max(1, Math.ceil(filteredDishes.length / pageSize));
    const currentPage = Math.min(page, totalPage);
    const displayDishes = filteredDishes.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Hàm cập nhật URL
    function updateParams(changes) {
        const nextParam = new URLSearchParams(searchParams);
        Object.entries(changes).forEach(([key, value]) => {
            if (value === '' || value === 'none' || value === 'all' || value === null) {
                nextParam.delete(key); // Xóa khỏi URL nếu là giá trị mặc định
            } else {
                nextParam.set(key, String(value));
            }
        });
        setSearchParams(nextParam);
    }
    return (
        <div>
            <Header />
            <Container className="mt-4">


                {/* Bộ Tìm kiếm, Lọc Loại & Sắp xếp */}
                <SearchBar
                    keyword={keyword}
                    category={category}
                    categories={categories}
                    sort={sort}
                    onSearchChange={(newKeyword) => updateParams({ keyword: newKeyword, page: 1 })}
                    onCategoryChange={(newCategory) => updateParams({ category: newCategory, page: 1 })}
                    onSortChange={(newSort) => updateParams({ sort: newSort, page: 1 })}
                />
                {/* Hiển thị danh sách */}
                {displayDishes.length === 0 ? (
                    <p className="text-muted text-center my-4">Không tìm thấy sản phẩm phù hợp.</p>
                ) : (
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên sản phẩm</th>
                                <th>Danh mục</th>
                                <th>Giá</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayDishes.map((p) => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.category}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            onClick={() => navigate(`/products/${p.id}`)}
                                        >
                                            Xem chi tiết
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}

                {/* Bộ Phân trang */}
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    onPageChange={(newPage) => updateParams({ page: newPage })}
                />


            </Container>

        </div>
    )
}

export default ProductList
