var navToggle = document.querySelector("#navToggle");
var overlay = document.querySelector(".overlay");
var body = document.querySelector("body");

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle("active");
    overlay.classList.toggle("open");
    // this line ▼ prevents content scroll-behind
    body.classList.toggle("locked"); 
});

var header = document.querySelector(".header");
var slideOne = document.querySelector(".slide-one");
var slideTwo = document.querySelector(".slide-two");
var toggleOne = document.querySelector(".toggle-one");
var toggleTwo = document.querySelector(".toggle-two");

slideTwo.style.display = "none";
toggleTwo.addEventListener('click', function() {
	slideOne.style.display = "none";
	slideTwo.style.display = "block";
	toggleOne.querySelector(".slider").classList.remove("active-slide");
	toggleTwo.querySelector(".slider").classList.add("active-slide");
	header.style.background  = "url(../img/bg2.jpg) no-repeat";
});
toggleOne.addEventListener('click', function() {
	slideTwo.style.display = "none";
	slideOne.style.display = "block";
	toggleTwo.querySelector(".slider").classList.remove("active-slide");
	toggleOne.querySelector(".slider").classList.add("active-slide");
	header.style.background  = "url(../img/bg.jpg) no-repeat";
});



