// Country JS
var options = ["United States", "Canada", "Mexico", "Panama"];
var select = document.getElementById("countries_select");
function countriesDropdown () {
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var elem = document.createElement("option");
        elem.textContent = opt;
        elem.value = opt;
        select.appendChild(elem);
}};
// State JS
var options1 = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var select1 = document.getElementById("states_select");
function statesDropdown () {
    for (var i = 0; i < options1.length; i++) {
        var opt1 = options1[i];
        var elem1 = document.createElement("option");
        elem1.textContent = opt1;
        elem1.value = opt1;
        select1.appendChild(elem1);
}};
// Display both on page load
function populateDropdowns () {
    countriesDropdown();
    statesDropdown();
};
window.onload = populateDropdowns;
// onResize
function displayWindowSize () {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("result").innerHTML = txt;
};
window.onresize = displayWindowSize;
// maths
function calculate() {
    var num = parseFloat(document.getElementById('numInput').value);
    var squared = num * num;
    var cubed = num * num * num;
    var squareroot = Math.sqrt(num);

    document.getElementById('squared').value = squared;
    document.getElementById('cubed').value = cubed;
    document.getElementById('squareroot').value = squareroot;
}