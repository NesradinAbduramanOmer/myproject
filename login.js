function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "ammar" && password === "1234"){
        document.getElementById("message").innerHTML =
        "✅ Baga Nagaan Dhuftte Ammar!";
        document.getElementById("message").style.color = "green";
    }else{
        document.getElementById("message").innerHTML =
        "❌ Username yookaan Password sirrii miti!";
        document.getElementById("message").style.color = "red";
    }

}