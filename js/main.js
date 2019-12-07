var loc = { lat: -33.891830, lng: 150.939130 };
var loc_title = "Cabramatta PCYC";
function initMap() { 
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });

    var marker = new google.maps.Marker({position: loc, map: map, title: loc_title});
}

function updateAddress(address_name, address, trainings) {
    document.getElementById("address-name").innerHTML = address_name;
    document.getElementById("address").innerHTML = address;
    document.getElementById("training-time").innerHTML = trainings;
}

document.getElementById("Cabramatta").addEventListener("click", function(event){
    event.preventDefault();
    loc = { lat: -33.891830, lng: 150.939130 };
    loc_title = "Fairfield-Cabramatta PCYC";
    initMap();
    updateAddress("Cabramatta-Fairfield PCYC",
        "Railway Parade & McBurney Rd, Cabramatta NSW 2166",
        "Saturday: <br> Juniours: 9AM - 11AM <br> Mens: 11AM - 1PM");
});
document.getElementById("Fairfield").addEventListener("click", function(event){
    event.preventDefault();
    loc = { lat: -33.875169, lng: 150.960087 };
    loc_title = "Fairfield Youth and Community Centre";
    initMap();
    updateAddress("Fairfield Youth and Community Centre",
        "55 Vine St, Fairfield NSW 2165",
        "Thursday 7:30PM - 9.30PM");
});
document.getElementById("EagleVale").addEventListener("click", function(event){
    event.preventDefault();
    loc = { lat: -34.034249, lng: 150.816128 };
    loc_title = "Eagle Vale Central";
    initMap();
    updateAddress("Eagle Vale Centre",
        "Emerald Dr, Eagle Vale NSW 2558",
        "Saturday: <br> Beach: depends oon the day");
});
document.getElementById("MacFields").addEventListener("click", function(event){
    event.preventDefault();
    loc = { lat: -33.989064, lng: 150.891551 };
    loc_title = "Youth Off the Streets, Macquarie Fields";
    initMap();
    updateAddress("Youth Off the Streets, Macquarie Fields",
        "86 Parliament Rd, Macquarie Fields NSW 2564",
        "Tuesday: <br> Juniours: 5.30PM - 7.30PM <br> Men: 7.30PM - 9.30PM");
});

var fname = document.getElementById("fname");
var message = document.getElementById("message");

document.getElementById("email").addEventListener("keypress", function(e){
    var email = this.value;
    if(!(email.includes('@')) || !(email.includes('.')) || !(email.length>5)) {
        document.getElementById("email-checker").innerHTML = "Please enter a valid email";
        this.style = "border: red solid 2px";
    } else {
        document.getElementById("email-checker").innerHTML = "";
        this.style = "border: 1px solid #ccc;";
    }
});

document.getElementById("send-btn").addEventListener("click", function(event){

    var alert_box = document.getElementById("alert-box");
    
    
    if(message.value.length < 2 && fname.length < 2) {
        alert_box.style.display = "block";
        alert_box.innerHTML = "Please enter your name and a message";
        event.preventDefault();
    } else if(message.value.length < 2 ) {
        alert_box.style.display = "block";
        alert_box.innerHTML ="Please enter a message";
        event.preventDefault();
    } else if(fname.length < 2) {
        alert_box.style.display = "block";
        alert_box.innerHTML ="Please enter your name";
        event.preventDefault();
    } else {
        alert_box.style.display = "none";
        alert_box.innerHTML ="";
    }
    
});

document.getElementById("woman").addEventListener('mouseover', function(event) {
    event.preventDefault();
    document.getElementById("woman-text").style.opacity = 1;
    document.getElementById("woman-text").style.transform = "translateY(-15rem) scale(1)";   

    document.getElementById("woman-info").style.opacity = 1;
    document.getElementById("woman-info").style.transform = "translateY(-15rem)";   
});

document.getElementById("woman").addEventListener('mouseout', function(event) {
    event.preventDefault();
    document.getElementById("woman-text").style.opacity = 0;
    document.getElementById("woman-text").style.transform = "translateY(15rem)";   

    document.getElementById("woman-info").style.opacity = 0;
    document.getElementById("woman-info").style.transform = "translateY(15rem)";   
});

document.getElementById("man").addEventListener('mouseover', function(event) {
    event.preventDefault();
    document.getElementById("man-text").style.opacity = 1;
    document.getElementById("man-text").style.transform = "translateY(-15rem)";   

    document.getElementById("man-info").style.opacity = 1;
    document.getElementById("man-info").style.transform = "translateY(-15rem)"; 
});

document.getElementById("man").addEventListener('mouseout', function(event) {
    event.preventDefault();
    document.getElementById("man-text").style.opacity = 0;
    document.getElementById("man-text").style.transform = "translateY(15rem)";   

    document.getElementById("man-info").style.opacity = 0;
    document.getElementById("man-info").style.transform = "translateY(-15rem)"; 
});

document.getElementById("junior").addEventListener('mouseover', function(event) {
    event.preventDefault();
    document.getElementById("junior-text").style.opacity = 1;
    document.getElementById("junior-text").style.transform = "translateY(-15rem)";  
    
    document.getElementById("juniour-info").style.opacity = 1;
    document.getElementById("juniour-info").style.transform = "translateY(-15rem)"; 
});

document.getElementById("junior").addEventListener('mouseout', function(event) {
    event.preventDefault();
    document.getElementById("junior-text").style.opacity = 0;
    document.getElementById("junior-text").style.transform = "translateY(15rem)"; 
    
    document.getElementById("juniour-info").style.opacity = 0;
    document.getElementById("juniour-info").style.transform = "translateY(-15rem)"; 
});

const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function(target) {
    observer.observe(target);
  });