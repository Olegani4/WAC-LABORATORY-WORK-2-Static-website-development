function openHome() {
    window.open("index.html", "_self");
}

function openServices() {
    window.open("services.html", "_self");
}

function openAboutUs() {
    window.open("about_us.html", "_self");
}

function openContactUs() {
    window.open("contact_us.html", "_self");
}

function openEmployees() {
    window.open("employees.html", "_self");
}

function openAd(adNum) {
    window.open("../static/media/ad_" + adNum + ".jpg", "_self");
}

function openSmallApp() {
    window.open("services-small_appliances.html", "_self");
}

function openMajorApp() {
    window.open("services-major_appliances.html", "_self");
}

function openConElec() {
    window.open("services-consumer_electronics.html", "_self");
}

function openNewMemb() {
    window.open("new_member.html", "_self");
}

function openServRepApp() {
    window.open("services-repair_application.html", "_self");
}

function openServRepAppSub() {
    window.open("services-repair_application-submitted.html", "_self");
}

function getHoursFormat(today) {
    if (today.getHours() < 10) {
        return "0" + today.getHours();
    }
    else
        return today.getHours();
}

function getMinutesFormat(today) {
    if (today.getMinutes() < 10) {
        return "0" + today.getMinutes();
    }
    else
        return today.getMinutes();
}

function getTodayDateTime() {
    let today = new Date();
    document.getElementById('date').valueAsDate = new Date();
    let todayDate = document.getElementById('date').value;
    document.getElementById('date').setAttribute("min", todayDate);

    let time = getHoursFormat(today) + ":" + getMinutesFormat(today);
    document.getElementById('time').value = time;
}

function checkCheckBox1() {
    if (document.getElementById("inOffice").checked) {
        document.getElementById("atAdress").checked = false;
        document.getElementById("dateTime").style.display = 'none';
    }
}

function checkCheckBox2() {
    document.getElementById("dateTime").style.display = 'none';
    if (document.getElementById("atAdress").checked) {
        document.getElementById("inOffice").checked = false;
        document.getElementById("dateTime").style.display = '';
        getTodayDateTime();
    }
}

function formValidation() {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /[+]{1}[0-9]{8,15}$/;

    let emailValue = document.getElementById("e-mail").value;
    let phoneValue = document.getElementById("phone-num").value;

    document.getElementById("e-mail_error").style.display = 'none';
    document.getElementById("phone-num_error").style.display = 'none';
    document.getElementById("break").style.display = '';

    submitCheck = "true";
    if (!regexEmail.test(emailValue)) {
        document.getElementById("e-mail_error").style.display = '';
        document.getElementById("break").style.display = 'none';
        submitCheck = "false";
    }
    if (!regexPhone.test(phoneValue)) {
        document.getElementById("phone-num_error").style.display = '';
        submitCheck = "false";
    }
    if (submitCheck == "false") {
        return false;
    }
    alert('Thank you for your application! Our team will contact you after receiving it within 10 minutes during business hours. If this does not happen, please call us +371 67 100 661.')
}
