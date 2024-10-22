document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    if (studentName) {
        const listItem = document.createElement('li');
        listItem.textContent = studentName;

        document.getElementById('studentList').appendChild(listItem);

        document.getElementById('studentName').value = ''; // Xóa nội dung input sau khi submit
    }
});
