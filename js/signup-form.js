const main_container = document.querySelector(".signup__form");
const btn_signup = document.querySelector(".btn__signup");
const btn_close_signup = document.querySelector(".signup__close--btn");
const overlay = document.querySelector(".overlay");

const toggle_signup_form = () => {
    const disp = main_container.style.display;

    if (disp === "none") {
        main_container.style.display = "block";
        overlay.style.display = "block";
        return;
    }

    main_container.style.display = "none";
    overlay.style.display = "none";
}

btn_signup.addEventListener("click", () => { 
    main_container.style.display = "block";
    overlay.style.display = "block";
});

btn_close_signup.addEventListener("click", toggle_signup_form);
overlay.addEventListener("click", toggle_signup_form);
