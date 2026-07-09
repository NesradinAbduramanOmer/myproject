function convert(){

    let amount = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("currency").value);

    if(amount <= 0){
        document.getElementById("result").innerHTML =
        "⚠️ Maallaqa sirrii galchi!";
        return;
    }

    let total = amount * rate;

    document.getElementById("result").innerHTML =
    "💰 Bu'aan: " + total.toFixed(2) + " Birr";
}