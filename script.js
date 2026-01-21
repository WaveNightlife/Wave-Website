const burger = document.getElementById("burger");
const mobile = document.getElementById("mobileMenu");

burger.onclick = () => {
  mobile.style.display = mobile.style.display === "flex" ? "none" : "flex";
};
