// script.js

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    console.log("Las 3 Hermanas Catering cargado correctamente");

});
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

document.querySelectorAll(".gallery-image").forEach(img => {

img.addEventListener("click", () => {

    modalImage.src = img.src;
    modal.classList.add("active");

});

});

modal.addEventListener("click", () => {

modal.classList.remove("active");

});