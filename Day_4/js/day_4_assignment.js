// Add table cell
function addCell() {
    var table = document.getElementById("table1");

    for (i = 0; i<= table.rows.length; i++) {
        var newCell = table.rows[i].insertCell();

        newCell.innerHTML = "New Cell";
    }
};

// Add Image
function addImage() {
    var img = document.createElement('img');
    img.src = "https://victoriousnerd.com/images/cat-art/creation-of-kitties.jpg";
    img.className = "img-thumbnail";
    img.setAttribute("width", "200");
    var cont = document.getElementById("images");

    cont.appendChild(img);
};

// Add Paragraphs
function addParagraph() {
    var para = document.createElement('p');
    para.textContent = "Lorem ipsum dolor est..";
    var cont1 = document.getElementById("paragraphs");

    cont1.appendChild(para);
}