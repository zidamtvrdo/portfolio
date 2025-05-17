const yearElement= document.getElementById('years');
const birthday = Date.parse("26 September 2000 12:00:00");

function getAge () {
    const now = Date.now();
    return Math.floor((now - birthday) / (365 * 24 * 60 * 60 * 1000));
};

let currentAge = getAge();
yearElement.innerHTML = currentAge;
setInterval(() => {
    const newAge = getAge();
    if (newAge !== currentAge) {
        currentAge = newAge();
        yearElement.innerHTML = newAge();
    }
}, 86400000);