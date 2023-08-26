const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasContainer = document.getElementById("canvas-container");
const seasons = {
    spring: "#86c232",
    winter: "#0099cc"
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const setBackground = (season) => {
    canvas.style.backgroundColor = seasons[season];
};

// Hàm vẽ lá
const drawLeaf = (x, y) => {
    // Đoạn mã vẽ lá ở đây
};

// Hàm vẽ tuyết rơi
const drawSnowflake = (x, y) => {
    // Đoạn mã vẽ tuyết rơi ở đây
};

// Hàm tạo hiệu ứng
const animate = () => {
    // Xoá canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gọi hàm vẽ lá hoặc tuyết rơi tùy theo mùa
    if (canvas.style.backgroundColor === seasons.spring) {
        drawLeaf();
    } else if (canvas.style.backgroundColor === seasons.winter) {
        drawSnowflake();
    }

    requestAnimationFrame(animate);
};

// Hàm hiển thị/ẩn menu
const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
};

// Đặt màu nền ban đầu cho mùa xuân và bắt đầu hiệu ứng
setBackground("spring");
animate();

// Xử lý sự kiện thay đổi kích thước màn hình
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
