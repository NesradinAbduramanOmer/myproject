function showMessage() {
    alert("Baga dhuftan website Ammar Nasradin!");
}
function searchProject() {

    let input = document.getElementById("search").value.toLowerCase();

    let items = document.querySelectorAll("#projectList li");

    items.forEach(item => {

        if (item.innerText.toLowerCase().includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

}
function filterProjects() {

    let value = document.getElementById("filter").value;

    let items = document.querySelectorAll("#projectList li");

    items.forEach(item => {

        if (value === "all" || item.dataset.type === value) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

}
function validateForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let result = document.getElementById("result");

    if(name === "" || email === "" || message === ""){
        result.innerHTML = "❌ Mee odeeffannoo hunda guuti.";
        result.style.color = "red";
        return false;
    }

    result.innerHTML = "✅ Ergaan kee milkaa'inaan ergameera!";
    result.style.color = "green";

    return false;
}