let total = 0;

function addToCart(name, price) {
    let li = document.createElement("li");

    li.innerHTML = `${name} - ${price} Birr
    <button onclick="removeItem(this, ${price})">🗑️ Haqi</button>`;

    document.getElementById("cart").appendChild(li);

    total += price;
    document.getElementById("total").innerHTML =
        "Waliigala: " + total + " Birr";
}

function removeItem(button, price) {
    button.parentElement.remove();

    total -= price;
    document.getElementById("total").innerHTML =
        "Waliigala: " + total + " Birr";
}