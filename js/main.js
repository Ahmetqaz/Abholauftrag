// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };
// // -----------------------------------------------------------
// // scroll start
// let header = document.getElementById("header");
// function scrollFunc() {
//   if (window.pageYOffset >= 112) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// const links = document.querySelectorAll(".links");
// const sections = document.querySelectorAll(".anchor");
// function changeLinkState() {
//   let index = sections.length;
//   while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
//   links.forEach((link) => link.classList.remove("active"));
//   links[index]?.classList.add("active");
// }
// links.forEach((e) => {
//   onLinkClick(e);
// });


// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// window.onscroll = function () {
//   changeLinkState();
//   scrollFunc();
// };
// // wow start
// var wow = new WOW({
//   boxClass: "wow",
//   animateClass: "animated",
//   offset: 0,
//   mobile: true,
//   live: true,
//   scrollContainer: null,
//   resetAnimation: true,
// });
// wow.init();
// // wow end
// const tabBtn = document.querySelectorAll(".tabBtn");
// const tabEvent = document.querySelectorAll(".tabEvent");
// tabBtn.forEach((e) => {
//   onTabClick(tabBtn, tabEvent, e);
// });
// function onTabClick(tabBtns, tabItems, item) {
//   item.addEventListener("click", function (e) {
//     let currentBtn = item;
//     let tabId = currentBtn.getAttribute("data-tab");
//     let currentTab = document.querySelector(tabId);
//     if (currentBtn.classList.contains("active")) {
//       console.log("now active");
//       const faq = currentBtn.parentElement.querySelector(".tabEvent");
//       if (faq) {
//         faq.classList.remove("active");
//         currentBtn.classList.remove("active");
//       }
//     } else if (!currentBtn.classList.contains("active")) {
//       tabBtns.forEach(function (item) {
//         item.classList.remove("active");
//       });

//       tabItems.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       currentBtn.classList.add("active");
//       currentTab.classList.add("active");
//     }
//   });
// }


// function mobileOnlySlider() {
//   $(".slider").slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     arrows:false,
//   });
  
// }
// if (window.innerWidth < 541) {
//   mobileOnlySlider();
// }
// function resizeListener(e) {
//   if (window.innerWidth < 541) {
//     $(".slider").addClass("sliderMob");
//     if (!$(".slider").hasClass("slick-initialized")) {
//       mobileOnlySlider();
//     }
//   } else {
//     $(".slider").removeClass("sliderMob");
//     if ($(".slider").hasClass("slick-initialized")) {
//       $(".slider").slick("unslick");
//     }
//   }
// }
// resizeListener();
// $(window).resize(resizeListener);


// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });