let total = 0;

function addToCart(name, price) {
    // Cart keessatti item haaraa uumi
    let li = document.createElement("li");
    li.innerHTML = `${name} - ${price} Birr`;

    // Cart irratti dabali
    document.getElementById("cart").appendChild(li);

    // Waliigala shallagi
    total += price;

    // Waliigala agarsiisi
    document.getElementById("total").innerHTML =
        "Waliigala: " + total + " Birr";
}