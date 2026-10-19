import React from 'react'
import { Button } from 'react-bootstrap';

function Pagination({ currentPage, totalPage, onPageChange }) {
    // Nếu chỉ có 1 trang hoặc không có trang nào thì không cần hiện phân trang
    if (totalPage <= 1) return null;

    return (
        <div className="d-flex align-items-center justify-content-center gap-2 mt-4">
            {/* Nút Trước */}
            <Button
                variant="secondary"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Trước
            </Button>

            {/* Các nút số trang */}
            {Array.from({ length: totalPage }, (_, index) => index + 1).map((pageNumber) => (
                <Button
                    key={pageNumber}
                    variant={pageNumber === currentPage ? 'primary' : 'outline-primary'}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </Button>
            ))}

            {/* Nút Sau */}
            <Button
                variant="secondary"
                disabled={currentPage === totalPage}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Sau
            </Button>
        </div>
    );
}

export default Pagination
