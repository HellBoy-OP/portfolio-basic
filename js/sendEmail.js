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

    let data = await response.json();
    if (response.status === 200) {
        displayPopup(data.message);
    } else {
        displayPopup("Something went wrong!");
    }

    form.reset();
})

const displayPopup = (message) => {
    const popupMessage = document.querySelector(".popup-text");
    popupMessage.innerText = message;
    popup.style.display = "block";

    // automatically close the popup after 5 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 5000);
}

popupCloseBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

