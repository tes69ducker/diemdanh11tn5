const students = [
    // Danh sách học sinh như trước
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
    } else {
        element.innerText = "Chưa điểm danh";
        element.style.backgroundColor = ""; // Trở về màu mặc định
    }
}
