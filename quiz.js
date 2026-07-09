function checkAnswer(answer){

    if(answer === "B"){
        document.getElementById("result").innerHTML =
        "✅ Deebiin sirrii dha! HTML = Markup Language";
        document.getElementById("result").style.color = "green";
    }else{
        document.getElementById("result").innerHTML =
        "❌ Deebiin sirrii miti!";
        document.getElementById("result").style.color = "red";
    }

}