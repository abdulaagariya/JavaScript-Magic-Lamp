let btn = document.querySelector("#btn");
let light = document.querySelector("#light");
let lampText = document.querySelector("#lampText");

function toggleBtn() {
    btn.classList.toggle("active");
    light.classList.toggle("on");

    if (btn.classList.contains("active")) {
        lampText.textContent = "Abdul Aagariya"; // Replace with your actual name
    } else {
        lampText.textContent = "";
    }
}
