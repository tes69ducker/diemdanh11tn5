const students = [
    { id: 1, name: "Lâm Bình An", status: "Chưa điểm danh", time: "" },
    { id: 2, name: "Hồ Châu Anh", status: "Chưa điểm danh", time: "" },
    { id: 3, name: "Hứa Tú Anh", status: "Chưa điểm danh", time: "" },
    { id: 4, name: "Nguyễn Thị Ngọc Anh", status: "Chưa điểm danh", time: "" },
    { id: 5, name: "Nguyễn Thị Quế Anh", status: "Chưa điểm danh", time: "" },
    { id: 6, name: "Võ Trần Quỳnh Anh", status: "Chưa điểm danh", time: "" },
    { id: 7, name: "Cao Trần Mỹ Duyên", status: "Chưa điểm danh", time: "" },
    { id: 8, name: "Nguyễn Châu Giang", status: "Chưa điểm danh", time: "" },
    { id: 9, name: "Võ Thị Quỳnh Giao", status: "Chưa điểm danh", time: "" },
    { id: 10, name: "Chung Gia Hân", status: "Chưa điểm danh", time: "" },
    { id: 11, name: "Lê Thị Ngọc Hân", status: "Chưa điểm danh", time: "" },
    { id: 12, name: "Nguyễn Ngọc Hân", status: "Chưa điểm danh", time: "" },
    { id: 13, name: "Đinh Thị Thu Hồng", status: "Chưa điểm danh", time: "" },
    { id: 14, name: "Trần Thu Kiều", status: "Chưa điểm danh", time: "" },
    { id: 15, name: "Phạm Ngọc Lan", status: "Chưa điểm danh", time: "" },
    { id: 16, name: "Lê Nguyễn Thảo Liên", status: "Chưa điểm danh", time: "" },
    { id: 17, name: "Phạm Phương Thảo Ly", status: "Chưa điểm danh", time: "" },
    { id: 18, name: "Võ Lê Kim Ngân", status: "Chưa điểm danh", time: "" },
    { id: 19, name: "Mai Hoàng Mỹ Ngọc", status: "Chưa điểm danh", time: "" },
    { id: 20, name: "Nguyễn Thị Kim Ngọc", status: "Chưa điểm danh", time: "" },
    { id: 21, name: "Nguyễn Diệu Như", status: "Chưa điểm danh", time: "" },
    { id: 22, name: "Vũ Ngọc Mai Phương", status: "Chưa điểm danh", time: "" },
    { id: 23, name: "Nguyễn Đỗ Tường Quy", status: "Chưa điểm danh", time: "" },
    { id: 24, name: "Phạm Huỳnh Hoài Thương", status: "Chưa điểm danh", time: "" },
    { id: 25, name: "Nguyễn Ngọc Bảo Thy", status: "Chưa điểm danh", time: "" },
    { id: 26, name: "Võ Nguyễn Anh Thy", status: "Chưa điểm danh", time: "" },
    { id: 27, name: "Nguyễn Như Hà Tiên", status: "Chưa điểm danh", time: "" },
    { id: 28, name: "La Thị Bảo Trân", status: "Chưa điểm danh", time: "" },
    { id: 29, name: "Nguyễn Ngọc Bảo Trân", status: "Chưa điểm danh", time: "" },
    { id: 30, name: "Hồ Thị Tú Trinh", status: "Chưa điểm danh", time: "" },
    { id: 31, name: "Ngô Thanh Trúc", status: "Chưa điểm danh", time: "" },
    { id: 32, name: "Nguyễn Kim Thiên Y", status: "Chưa điểm danh", time: "" },
    { id: 33, name: "Mai Thị Hồng Yến", status: "Chưa điểm danh", time: "" },
    { id: 34, name: "Hồ Hoài Anh", status: "Chưa điểm danh", time: "" },
    { id: 35, name: "Nguyễn Tuấn Bảo", status: "Chưa điểm danh", time: "" },
    { id: 36, name: "Trần Gia Bảo", status: "Chưa điểm danh", time: "" },
    { id: 37, name: "Hồ Thanh Duy", status: "Chưa điểm danh", time: "" },
    { id: 38, name: "Trần Phi Dương", status: "Chưa điểm danh", time: "" },
    { id: 39, name: "Nguyễn Văn Đức", status: "Chưa điểm danh", time: "" },
    { id: 40, name: "Huỳnh Duy Khang", status: "Chưa điểm danh", time: "" },
    { id: 41, name: "Nguyễn Đăng Khoa", status: "Chưa điểm danh", time: "" },
    { id: 42, name: "Nguyễn Ngọc Trung Kiên", status: "Chưa điểm danh", time: "" },
    { id: 43, name: "Lê Văn Phát", status: "Chưa điểm danh", time: "" },
    { id: 44, name: "Huỳnh Thanh Phú", status: "Chưa điểm danh", time: "" },
    { id: 45, name: "Nguyễn Tấn Phú", status: "Chưa điểm danh", time: "" },
    { id: 46, name: "Lại Hoàng Phúc", status: "Chưa điểm danh", time: "" }
];

const studentList = document.getElementById('student-list');

students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td class="status" onclick="toggleStatus(this)">${student.status}</td>
        <td>${student.time}</td>
    `;
    studentList.appendChild(row);
});

// Hàm để thay đổi trạng thái điểm danh
function toggleStatus(element) {
    if (element.innerText === "Chưa điểm danh") {
        element.innerText = "Đã điểm danh";
        element.style.backgroundColor = "#4caf50"; // Màu xanh lá cây
        const currentTime = new Date().toLocaleTimeString();
        element.nextElementSibling.innerText = currentTime; // Cập nhật thời gian
    } else {
        element.innerText = "Chưa điểm danh";
        element.style.backgroundColor = ""; // Trở về màu mặc định
        element.nextElementSibling.innerText = ""; // Xóa thời gian
    }
}
