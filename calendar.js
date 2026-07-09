const months = {
    om: [
        "Amajjii","Guraandhala","Bitooteessa","Elba","Caamsaa","Waxabajjii",
        "Adooleessa","Hagayya","Fulbaana","Onkololeessa","Sadaasa","Muddee"
    ],
    am: [
        "ጥር","የካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰኔ",
        "ሐምሌ","ነሐሴ","መስከረም","ጥቅምት","ህዳር","ታህሳስ"
    ],
    en: [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ]
};

const days = {
    om: [
        "Dilbata","Wiixata","Qibxata","Roobii",
        "Kamisa","Jimaata","Sanbata"
    ],
    am: [
        "እሁድ","ሰኞ","ማክሰኞ","ረቡዕ",
        "ሐሙስ","ዓርብ","ቅዳሜ"
    ],
    en: [
        "Sunday","Monday","Tuesday","Wednesday",
        "Thursday","Friday","Saturday"
    ]
};

function changeLanguage(){

    let lang = document.getElementById("language").value;
    let today = new Date();

    document.getElementById("month").innerHTML =
        months[lang][today.getMonth()] + " " + today.getFullYear();

    document.getElementById("date").innerHTML =
        today.getDate();

    document.getElementById("day").innerHTML =
        days[lang][today.getDay()];
}

changeLanguage();