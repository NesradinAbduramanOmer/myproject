function openImage(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

function like(button) {
    let count = button.nextElementSibling.querySelector("span");
    count.innerHTML = Number(count.innerHTML) + 1;
}