const months = {
    om: ["Amajjii","Guraandhala","Bitooteessa","Elba","Caamsaa","Waxabajjii","Adooleessa","Hagayya","Fulbaana","Onkololeessa","Sadaasa","Muddee"],
    am: ["ጥር","የካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰኔ","ሐምሌ","ነሐሴ","መስከረም","ጥቅምት","ህዳር","ታህሳስ"],
    en: ["January","February","March","April","May","June","July","August","September","October","November","December"]
};

let currentDate = new Date();

function renderCalendar(){

    let lang = document.getElementById("language").value;

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    document.getElementById("monthYear").innerHTML =
        months[lang][month] + " " + year;

    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();

    let days = "";

    for(let i = 0; i < firstDay; i++){
        days += "<div></div>";
    }

    let today = new Date();

    for(let i = 1; i <= lastDate; i++){

        if(
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){
            days += `<div class="today">${i}</div>`;
        }else{
            days += `<div>${i}</div>`;
        }

    }

    document.getElementById("calendarDays").innerHTML = days;
}

function prevMonth(){
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth(){
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

function changeLanguage(){
    renderCalendar();
}

renderCalendar();