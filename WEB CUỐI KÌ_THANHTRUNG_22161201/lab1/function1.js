document.addEventListener("DOMContentLoaded", function () {
    console.log("Trang biểu đồ đã tải hoàn tất!");

    // Xử lý sự kiện khi bấm vào nút quay về trang chính
    document.getElementById("back-button").addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
        window.location.href = "index.html"; // Chuyển hướng về trang chính
    });

    // Nếu bạn muốn hiển thị biểu đồ bằng Chart.js, thêm mã sau:
    /*
    const ctx1 = document.getElementById('bieudo1').getContext('2d');
    const myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D'],
            datasets: [{
                label: 'Dữ liệu 1',
                data: [10, 20, 30, 40],
                backgroundColor: 'blue'
            }]
        }
    });
    */
});
