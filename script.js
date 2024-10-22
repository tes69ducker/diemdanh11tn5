const students = [
    { id: 1, name: "Lâm Bình An", status: "Chưa điểm danh", time: "", rollNumber: "179501" },
    { id: 2, name: "Hồ Châu Anh", status: "Chưa điểm danh", time: "", rollNumber: "179502" },
    { id: 3, name: "Hứa Tú Anh", status: "Chưa điểm danh", time: "", rollNumber: "179503" },
    { id: 4, name: "Nguyễn Thị Ngọc Anh", status: "Chưa điểm danh", time: "", rollNumber: "179504" },
    { id: 5, name: "Nguyễn Thị Quế Anh", status: "Chưa điểm danh", time: "", rollNumber: "179505" },
    { id: 6, name: "Võ Trần Quỳnh Anh", status: "Chưa điểm danh", time: "", rollNumber: "179506" },
    { id: 7, name: "Cao Trần Mỹ Duyên", status: "Chưa điểm danh", time: "", rollNumber: "179507" },
    { id: 8, name: "Nguyễn Châu Giang", status: "Chưa điểm danh", time: "", rollNumber: "179508" },
    { id: 9, name: "Võ Thị Quỳnh Giao", status: "Chưa điểm danh", time: "", rollNumber: "179509" },
    { id: 10, name: "Chung Gia Hân", status: "Chưa điểm danh", time: "", rollNumber: "179510" },
    { id: 11, name: "Lê Thị Ngọc Hân", status: "Chưa điểm danh", time: "", rollNumber: "179511" },
    { id: 12, name: "Nguyễn Ngọc Hân", status: "Chưa điểm danh", time: "", rollNumber: "179512" },
    { id: 13, name: "Đinh Thị Thu Hồng", status: "Chưa điểm danh", time: "", rollNumber: "179513" },
    { id: 14, name: "Trần Thu Kiều", status: "Chưa điểm danh", time: "", rollNumber: "179514" },
    { id: 15, name: "Phạm Ngọc Lan", status: "Chưa điểm danh", time: "", rollNumber: "179515" },
    { id: 16, name: "Lê Nguyễn Thảo Liên", status: "Chưa điểm danh", time: "", rollNumber: "179516" },
    { id: 17, name: "Phạm Phương Thảo Ly", status: "Chưa điểm danh", time: "", rollNumber: "179517" },
    { id: 18, name: "Võ Lê Kim Ngân", status: "Chưa điểm danh", time: "", rollNumber: "179518" },
    { id: 19, name: "Mai Hoàng Mỹ Ngọc", status: "Chưa điểm danh", time: "", rollNumber: "179519" },
    { id: 20, name: "Nguyễn Thị Kim Ngọc", status: "Chưa điểm danh", time: "", rollNumber: "179520" },
    { id: 21, name: "Nguyễn Diệu Như", status: "Chưa điểm danh", time: "", rollNumber: "179521" },
    { id: 22, name: "Vũ Ngọc Mai Phương", status: "Chưa điểm danh", time: "", rollNumber: "179522" },
    { id: 23, name: "Nguyễn Đỗ Tường Quy", status: "Chưa điểm danh", time: "", rollNumber: "179523" },
    { id: 24, name: "Phạm Huỳnh Hoài Thương", status: "Chưa điểm danh", time: "", rollNumber: "179524" },
    { id: 25, name: "Nguyễn Ngọc Bảo Thy", status: "Chưa điểm danh", time: "", rollNumber: "179525" },
    { id: 26, name: "Võ Nguyễn Anh Thy", status: "Chưa điểm danh", time: "", rollNumber: "179526" },
    { id: 27, name: "Nguyễn Như Hà Tiên", status: "Chưa điểm danh", time: "", rollNumber: "179527" },
    { id: 28, name: "La Thị Bảo Trân", status: "Chưa điểm danh", time: "", rollNumber: "179528" },
    { id: 29, name: "Nguyễn Ngọc Bảo Trân", status: "Chưa điểm danh", time: "", rollNumber: "179529" },
    { id: 30, name: "Hồ Thị Tú Trinh", status: "Chưa điểm danh", time: "", rollNumber: "179530" },
    { id: 31, name: "Ngô Thanh Trúc", status: "Chưa điểm danh", time: "", rollNumber: "179531" },
    { id: 32, name: "Nguyễn Kim Thiên Y", status: "Chưa điểm danh", time: "", rollNumber: "179532" },
    { id: 33, name: "Mai Thị Hồng Yến", status: "Chưa điểm danh", time: "", rollNumber: "179533" },
    { id: 34, name: "Hồ Hoài Anh", status: "Chưa điểm danh", time: "", rollNumber: "179534" },
    { id: 35, name: "Nguyễn Tuấn Bảo", status: "Chưa điểm danh", time: "", rollNumber: "179535" },
    { id: 36, name: "Trần Gia Bảo", status: "Chưa điểm danh", time: "", rollNumber: "179536" },
    { id: 37, name: "Hồ Thanh Duy", status: "Chưa điểm danh", time: "", rollNumber: "179537" },
    { id: 38, name: "Trần Phi Dương", status: "Chưa điểm danh", time: "", rollNumber: "179538" },
    { id: 39, name: "Nguyễn Văn Đức", status: "Chưa điểm danh", time: "", rollNumber: "179539" },
    { id: 40, name: "Huỳnh Duy Khang", status: "Chưa điểm danh", time: "", rollNumber: "179540" },
    { id: 41, name: "Nguyễn Đăng Khoa", status: "Chưa điểm danh", time: "", rollNumber: "179541" },
    { id: 42, name: "Nguyễn Ngọc Trung Kiên", status: "Chưa điểm danh", time: "", rollNumber: "179542" },
    { id: 43, name: "Lê Văn Phát", status: "Chưa điểm danh", time: "", rollNumber: "179543" },
    { id: 44, name: "Huỳnh Thanh Phú", status: "Chưa điểm danh", time: "", rollNumber: "179544" },
    { id: 45, name: "Nguyễn Tấn Phú", status: "Chưa điểm danh", time: "", rollNumber: "179545" },
    { id: 46, name: "Lại Hoàng Phúc", status: "Chưa điểm danh", time: "", rollNumber: "179546" }
];

// Hàm để thêm danh sách học sinh vào bảng
function loadStudents() {
    const studentList = document.getElementById("student-list");
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td> <!-- Thêm ô số báo danh -->
            <td onclick="toggleStatus(this)" style="cursor: pointer;">${student.status}</td>
            <td>${student.time}</td>
        `;
        studentList.appendChild(row);
    });
}

// Hàm để chuyển đổi trạng thái điểm danh
function toggleStatus(element) {
    const currentStatus = element.innerText;
    element.innerText = currentStatus === "Chưa điểm danh" ? "Đã điểm danh" : "Chưa điểm danh";
    element.classList.toggle("animated");
}

// Hàm tìm kiếm học sinh
function searchStudents() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#student-list tr");
    rows.forEach(row => {
        const name = row.cells[1].innerText.toLowerCase();
        row.style.display = name.includes(searchValue) ? "" : "none";
    });
}

// Tải danh sách học sinh khi trang được tải
window.onload = loadStudents;
