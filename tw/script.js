const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.querySelector(".container");
const menuItems = document.querySelectorAll(".menu li a");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const leaves = [];
const numberOfLeaves = 50;
const snowflakes = [];
const numberOfSnowflakes = 100;

for (let i = 0; i < numberOfLeaves; i++) {
    const leaf = {
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height,
        size: Math.random() * 50 + 20,
        speed: Math.random() * 2 + 1
    };
    leaves.push(leaf);
}

// Các đoạn mã khác (tạo hiệu ứng lá rơi và tuyết rơi)

function drawLeaf(leaf) {
    ctx.fillStyle = "#33AA33";
    ctx.beginPath();
    ctx.moveTo(leaf.x, leaf.y);
    ctx.lineTo(leaf.x - 10, leaf.y + 20);
    ctx.lineTo(leaf.x + 10, leaf.y + 20);
    ctx.closePath();
    ctx.fill();
}

function drawSnowflake(snowflake) {
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
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

    for (const snowflake of snowflakes) {
        snowflake.y += snowflake.speed;
        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
        }
        drawSnowflake(snowflake);
    }

    requestAnimationFrame(draw);
}

function createFallingSnow() {
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            speed: Math.random() * 1 + 0.5
        };
        snowflakes.push(snowflake);
    }
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
