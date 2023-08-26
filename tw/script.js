const background = document.getElementById("background");
const menuItems = document.querySelectorAll(".menu li a");

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

    background.style.backgroundImage = `url('${season}.jpg')`;
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "center";

    menuItems.forEach(item => {
        if (item.textContent === "Trang Chủ") {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    if (effect === "falling-leaves") {
        createFallingLeaves();
    } else if (effect === "snow") {
        createFallingSnow();
    }
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function createFallingLeaves() {
    // Thêm mã JavaScript cho hiệu ứng lá rơi ở đây
}

function createFallingSnow() {
    // Thêm mã JavaScript cho hiệu ứng tuyết rơi ở đây
}

setBackground();
