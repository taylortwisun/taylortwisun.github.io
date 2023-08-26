const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const seasons = {
    spring: "#86c232",
    winter: "#0099cc"
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const setBackground = (season) => {
    canvas.style.backgroundColor = seasons[season];
};

const drawLeaf = (x, y) => {
    const leafImage = new Image();
    leafImage.src = "leaf.png"; // Đường dẫn đến tệp ảnh lá

    leafImage.onload = () => {
        ctx.drawImage(leafImage, x, y, 20, 20);
    };

    y += 1; // Dịch chuyển lá xuống dưới
    if (y > canvas.height) {
        y = 0; // Đặt lại vị trí y khi lá vượt qua khung
    }
};

const drawSnowflake = (x, y) => {
    ctx.fillStyle = "#ffffff"; // Màu trắng cho tuyết rơi
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    y += 2; // Dịch chuyển tuyết rơi xuống dưới
    if (y > canvas.height) {
        y = 0; // Đặt lại vị trí y khi tuyết vượt qua khung
    }
};

let leafPosition = 0; // Vị trí ban đầu của lá
let snowflakePosition = 0; // Vị trí ban đầu của tuyết

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (canvas.style.backgroundColor === seasons.spring) {
        drawLeaf(canvas.width / 2, leafPosition);
        leafPosition += 1;
        if (leafPosition > canvas.height) {
            leafPosition = 0;
        }
    } else if (canvas.style.backgroundColor === seasons.winter) {
        drawSnowflake(canvas.width / 2, snowflakePosition);
        snowflakePosition += 2;
        if (snowflakePosition > canvas.height) {
            snowflakePosition = 0;
        }
    }

    requestAnimationFrame(animate);
};

const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
};

setBackground("spring");
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
