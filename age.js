function calculateAge() {
    let birthDate = new Date(document.getElementById("birthDate").value);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML =
        "🎉 Umuriin kee: " + age + " waggaa";
}