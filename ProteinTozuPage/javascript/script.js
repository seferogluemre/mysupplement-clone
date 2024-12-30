const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const body = document.body;
menuIcon.addEventListener("click", function () {
  body.classList.toggle("menu-open");
});


// User account drop
document.addEventListener("DOMContentLoaded", function () {
  var accountElement = document.querySelector(".Meaccount");
  var dropdownContent = document.querySelector(".dropdown-content");

  let timeoutId;

  accountElement.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
    dropdownContent.style.display = "block";
  });

  accountElement.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(function () {
      dropdownContent.style.display = "none";
    }, 10);
  });

  dropdownContent.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
  });

  dropdownContent.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(function () {
      dropdownContent.style.display = "none";
    }, 2000);
  });
});

// Suplement İnfo Height

// MyCart Sidebar
const cartLink = document.getElementById("mycartLink");
const cartSidebar = document.getElementById("mycartSidebar");
const closeIcon = document.getElementById("close-iconOne");
const domBody = document.body;
cartLink.addEventListener("click", function () {
  body.classList.toggle("mycartLink");
  cartSidebar.style.zIndex = 1000;
});
closeIcon.addEventListener("click", () => {
  body.classList.remove("mycartLink");
});

// My Cart Top
document
  .getElementById("cartImgTwo")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var sidebar = document.getElementById("mycartSidebarTwo");
    sidebar.classList.add("active");
    document.body.style.overflow = "hidden";
  });
const closeIconTwo = document.getElementById("close-iconTwo");
closeIconTwo.addEventListener("click", () => {
  body.classList.remove("mycartSidebarTwo");
});
document
  .getElementById("close-iconTwo")
  .addEventListener("click", function () {
    var sidebar = document.getElementById("mycartSidebarTwo");
    sidebar.classList.remove("active");
    document.body.style.overflow = "auto";
  });

// Hover Template
const hoverLink = document.getElementById("proteinTozuDrop");
const templateSection = document.getElementById("templateSection");
let isHovering = false;

hoverLink.addEventListener("mouseover", () => {
  templateSection.style.display = "flex";
  isHovering = true;
});

hoverLink.addEventListener("mouseout", () => {
  isHovering = false;
  setTimeout(() => {
    if (!isHovering) {
      templateSection.style.display = "flex";
    }
  }, 100);
});

templateSection.addEventListener("mouseover", () => {
  templateSection.style.display = "flex";
  isHovering = true;
});

templateSection.addEventListener("mouseout", () => {
  isHovering = false;
  setTimeout(() => {
    if (!isHovering) {
      templateSection.style.display = "none";
    }
  }, 10);
});

document
  .getElementById("cartImgTwo")
  .addEventListener("click", function () {
    var sidebar = document.getElementById("mycartSidebar");
    sidebar.classList.toggle("active");
    sidebar.style.top = 0;
  });

// Kapamatmak  için close icona tıklama olayını gösterme
document
  .getElementById("close-icon")
  .addEventListener("click", function () {
    var sidebar = document.getElementById("mycartSidebar");
    sidebar.classList.remove("active");
  });

  // giriş yapma Form yönlendirme
  function girişFormYönlendirme(){
    window.location.href="/LoginPage/login.html";
  }

  function instagramYonlendirme(){
    window.location.href="https://www.instagram.com/emreseferoglu1/";
  }

  function anasayfyonlendirme(){
    window.location.href="/HomePage/index.html";
  }

  function contactYonlendirme(){
    window.location.href="/ContactPage/index.html";
  }