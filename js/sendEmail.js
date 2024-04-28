// required dom elements
const form = document.querySelector("#myForm");
const submitBtn = document.querySelector("#submit-btn");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup-close");

// API URL and API KEY
const APIURL = "https://api.web3forms.com/submit";
const APIKEY = myEnv.getVariable("web3FormsApiKey");

// form submit event
form.addEventListener("submit", async (e) => {
    const formData = new FormData(form);
    e.preventDefault();

    submitBtn.classList.add("disabled");
    submitBtn.textContent = "Sending...";

    const object = Object.fromEntries(formData.entries());
    object.access_key = APIKEY;
    const json = JSON.stringify(object);

    // send the form data
    let response = await fetch(APIURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: json
    })

    submitBtn.classList.remove("disabled");
    submitBtn.textContent = "Submit";

    let data = await response.json();
    if (response.status === 200) {
        displayPopup(data.message);
    } else {
        displayPopup("Something went wrong!");
    }

    form.reset();
})

// close the popup
const closePopup = () => {
    popup.style.display = "none";
}

// display the popup
const displayPopup = (message) => {
    const popupMessage = document.querySelector(".popup-text");
    popupMessage.innerText = message;
    popup.style.display = "block";

    // automatically close the popup after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

// close the popup when close button is clicked
popupCloseBtn.addEventListener("click", () => {
    closePopup();
});

