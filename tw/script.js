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

function drawLeaf(leaf) {
    ctx.fillStyle = "#33AA33";
    ctx.beginPath();
    ctx.moveTo(leaf.x, leaf.y);
    ctx.lineTo(leaf.x - 10, leaf.y + 20);
    ctx.lineTo(leaf.x + 10, leaf.y + 20);
    ctx.closePath();
    ctx.fill();
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

function setBackground() {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;

    let season = "";
    let effect = "";

    if (currentMonth >= 3 && currentMonth <= 5) {
        season = "spring";
        effect = "none";
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        season = "summer";
        effect = "none";
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        season = "autumn";
        effect = "falling-leaves";
    } else {
        season = "winter";
        effect = "snow";
    }

    container.classList = "container " + season;

    setActiveMenuItem();

    if (effect === "falling-leaves") {
        draw();
    } else if (effect === "snow") {
        createFallingSnow();
        draw();
    }
}

setBackground();
draw(); // Bắt đầu hiệu ứng lá rơi ngay khi tải trang
