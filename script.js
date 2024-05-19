// var tablinks=document.getElementsByClassName("tab-link");
// var tabcontents=document.getElementsByClassName("tab-content");

// function opentab(tabname){
//     for(tablink of tablinks){
//         tablink.classList.remove("active");
//     }

//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove("active");
//     }

//     event.currentTarget.classList.add("active");
//     document.getElementById(tabname).classList.add("active");
// }

// var tablinks = document.getElementsByClassName("tab-link");
// var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    updateTabText();
    for (tablink of tablinks) {
        if (tablink.classList.contains("active")) {
            tablink.classList.remove("active");
        }
    }

    for (tabcontent of tabcontents) {
        if (tabcontent.classList.contains("active")) {
            tabcontent.classList.remove("active");
        }
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");

}


// Function to update tab content based on conditions
var tabs = document.querySelectorAll('.tab-link');
var tabContents = document.querySelectorAll('.tab-content');

document.getElementById("submit-button").addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the updateTabText function when the submit button is clicked
    updateTabText();

});

function updateTabText() {
    var presentSituationTab = document.getElementById("presentSituationTab-content");
    var idealSituationTab = document.getElementById("idealSituationTab-content");
    var suggestionsTab = document.getElementById("suggestionsTab-content");

    const weekdaySleep = parseFloat(document.getElementById("sleep-hours-weekday").value);
    const weekendSleep = parseFloat(document.getElementById("sleep-hours-weekend").value);
    const studyHours = parseFloat(document.getElementById("study-hours").value);
    const performance = parseFloat(document.getElementById("Performace").value);

    // Update Ideal Situation Tab
    idealSituationTab.innerHTML = "<ul><li>While you're currently enjoying a good sleep routine, the ideal sleep duration is around 5 hours. Adjusting your sleep schedule to align with this recommendation can contribute to your overall health and vitality. Keep up the positive sleep habits.</li></ul>";
    idealSituationTab.innerHTML +="<ul><li>Getting more than 6 hours of sleep on the weekend is a fantastic way to nurture your well-being and recharge for the week ahead. Keep embracing those restful nights! </li></ul>";
    
    //update the tabs according to performance
    if(performance < 4){
        presentSituationTab.innerHTML = "<ul><li>Your Acadamic Performace is currently below the average range. Don't worry; we all face challenges. Let's work together to explore strategies for improvement and get you back on track to achieving your academic goals! </li></ul>";
        suggestionsTab.innerHTML = "<ul><li>Aiming for a Acadamic Performace of 4 or higher is like giving your academic journey a boost! It's a fantastic goal that can really amp up your overall achievements. Keep up the great work! </li></ul";
    } else if(performance >= 4){
        presentSituationTab.innerHTML = "<ul><li>Congratulations! Your Acadamic Performace is surpassing the average benchmark. This is a commendable achievement, and you should be proud of your hard work and dedication. </li></ul>";
        suggestionsTab.innerHTML = "<ul><li>Keep rocking that commendable GPA! Your continuous effort is the key to maintaining a stellar academic record and ensuring sustained excellence. You're on the right track—keep up the great work! </li></ul>";
    }

    //Update the tabs according to weekday sleep
    if (weekdaySleep < 5) {
        presentSituationTab.innerHTML +="<ul><li>You are currently experiencing challenges in achieving sufficient sleep.</li></ul>";
        suggestionsTab.innerHTML += "<ul><li>You should totally consider catching some extra zzz's. It's not just good for your well-being but can seriously boost your academic game too. </li></ul>";
    } else if (weekdaySleep >= 5) {
        presentSituationTab.innerHTML += "<ul><li>You're really making the most of your sleep! While that's awesome, it might be worth considering a balance for a healthier lifestyle.</li></ul>";
        suggestionsTab.innerHTML += "<ul><li>Enjoying ample sleep is fantastic! Consider adjusting your sleep duration slightly to maintain a balanced and healthy lifestyle. Your well-being will thank you!</li></ul> ";
    }
   
    //Update the tabs according to weekend sleep
    if (weekendSleep < 8) {
        presentSituationTab.innerHTML += "<ul><li>You are getting less sleep than the recommended 8 hours on the weekend.</li></ul>";
        suggestionsTab.innerHTML += "<ul><li>Try to increase your weekend sleep duration for better health and well-being.</li></ul>";
    } else if (weekendSleep >= 8) {
        presentSituationTab.innerHTML += "<ul><li>You are getting more sleep than the recommended 8 hours on the weekend.</li></ul>";
        suggestionsTab.innerHTML += "<ul><li>While it's good to get enough rest, consistently oversleeping may have its own set of health implications. Consider maintaining a more consistent sleep schedule.</li></ul>";
    }

    // Update Study per week conditions
    if (studyHours < 10) {
        presentSituationTab.innerHTML += "<ul><li>It seems that your current study routine involves less than 10 hours per week. Understanding your current habits is crucial for making positive changes.</li></ul>";
        idealSituationTab.innerHTML += "<ul><li>Ideally, a more effective study routine might involve dedicating at least 10 hours per week to your studies. This can contribute significantly to your academic success and overall understanding of the material.</li></ul>";
        suggestionsTab.innerHTML += "<ul><li>Consider setting a weekly study schedule with dedicated time slots, aiming for at least 10 hours. Break study sessions into manageable blocks and actively engage with the material for better retention.</li></ul>";
    } else if (studyHours > 10) {
        presentSituationTab.innerHTML += "<ul><li>Great job! You are studying more than the recommended 10 hours per week. Keep up the good work!</li></ul>";
        idealSituationTab.innerHTML += "<ul><li>Striving for around 10 hours of dedicated study per week is an excellent way to set yourself up for academic success.</li></ul>";
        suggestionsTab.innerHTML += "<ul><li>Try getting short intervals of breaks in between your studies.</li></ul>";
    } else {
        presentSituationTab.innerHTML += "<ul><li>Perfect! You are studying enough hours in a week. Keep up the good work!</li></ul>";
        idealSituationTab.innerHTML += "<ul><li>Striving for around 10 hours of dedicated study per week is an excellent way to set yourself up for academic success.</li></ul>";
        suggestionsTab.innerHTML += "<ul><li>Try getting short intervals of breaks in between your studies.</li></ul>";
    }
}

var tabs = document.querySelectorAll('.tab-link');
var tabContents = document.querySelectorAll('.tab-content');
var article = document.querySelector('.article');

tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        // Handle tab click
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        tabContents[index].classList.add('active');
        article.classList.add('active');
    });
});


// active-tab

var sections = document.querySelectorAll('section');
var navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // sticky navbar
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


//   contact form 

const scriptURL = 'https://script.google.com/macros/s/AKfycbz0sFLjBWiThFrq5xIG0CU69h--wnZrAxl3uboyofjyuhx-_vrg3fm3u5Ts8NJO9sZB/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Submitted Successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

// swiper js 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });