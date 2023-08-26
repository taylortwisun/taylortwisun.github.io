const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.querySelector(".container");
const menuItems = document.querySelectorAll(".menu li a");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const leaves = [];
const numberOfLeaves = 50;

for (let i = 0; i < numberOfLeaves; i++) {
    const leaf = {
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height,
        size: Math.random() * 50 + 20,
        speed: Math.random() * 2 + 1
    };
    leaves.push(leaf);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const leaf of leaves) {
        leaf.y += leaf.speed;
        if (leaf.y > canvas.height) {
            leaf.y = -leaf.size;
        }
        drawLeaf(leaf);
    }

    requestAnimationFrame(draw);
}

function drawLeaf(leaf) {
    const leafImage = new Image();
    leafImage.src = "leaf.png"; // Đường dẫn đến hình ảnh leaf.png

    // Chờ hình ảnh tải xong trước khi vẽ
    leafImage.onload = function() {
        // Vẽ hình ảnh lá tại vị trí (x - size / 2, y) với kích thước size x size
        ctx.drawImage(leafImage, leaf.x - leaf.size / 2, leaf.y, leaf.size, leaf.size);
    };
}

function setActiveMenuItem() {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
    menuItems[0].classList.add("active");
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

setBackground();
draw(); // Bắt đầu hiệu ứng lá rơi ngay khi tải trang
