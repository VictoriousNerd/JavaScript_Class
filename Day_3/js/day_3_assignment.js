// BMI Calculator
function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    var bmi = weight / (height * height);

    var bmiCategory;
    if (bmi <= .185) {
        bmiCategory = "Underweight";
    } else if (bmi <= .249) {
        bmiCategory = "Normal weight";
    } else if (bmi <= .299) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese"
    }

    document.getElementById('BMI_result').innerText = bmi.toFixed(2) + " - " + bmiCategory;
}

// Age Calculator
function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();

    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff <= 0 || (monthDiff === 0 && today.getDate() <= birthdate.getDate())) {
        age--;
    }

    document.getElementById('age_result').innerText = age;
}

// Chessboard
document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById('chessboard');

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((row + col) % 2 === 0 ? 'light-square' : 'dark-square');
            chessboard.appendChild(square);

            if (row === 0 || row === 1 || row === 6 || row === 7) {
                let piece = document.createElement('div');
                piece.classList.add('piece');
                if (row === 0 || row === 7) {
                    switch (col) {
                        case 0:
                        case 7:
                            piece.innerHTML = '&#9820;'; // Rook
                            break;
                        case 1:
                        case 6:
                            piece.innerHTML = '&#9822;'; // Knight
                            break;
                        case 2:
                        case 5:
                            piece.innerHTML = '&#9821;'; // Bishop
                            break;
                        case 3:
                            piece.innerHTML = '&#9819;'; // Queen
                            break;
                        case 4:
                            piece.innerHTML = '&#9818;'; // King
                            break;
                    }
                } else {
                    piece.innerHTML = '&#9823;'; // Pawn
                }
                square.appendChild(piece);
            }
        }
    }
});