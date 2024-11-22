// Exercise 1
function fun1() {
    var a = parseInt(t1.value);
    var b = parseInt(t2.value);
    var c = a + b;
    document.getElementById('output').innerHTML = "Sum = " + c;
}
function fun2() {
    var a = parseInt(t1.value);
    var b = parseInt(t2.value);
    var c = a - b;
    document.getElementById('output').innerHTML = "Sub = " + c;
}
function fun3() {
    var a = parseInt(t1.value);
    var b = parseInt(t2.value);
    var c = a * b;
    document.getElementById('output').innerHTML = "Mul = =" + c;
}
function fun4() {
    var a = parseInt(t1.value);
    var b = parseInt(t2.value);
    var c = a / b;
    document.getElementById('output').innerHTML = "Div = " + c;
}

// Exercise 2
function fun() {
    document.getElementById('p1').innerHTML = "";
    var a = parseInt(t3.value);
    for (i=1; i<= 10; i++) {
        document.getElementById('p1').innerHTML += a + " x " + i + " = " + a * i + "<br>";
    }
}

// Exercise 3
function fun5() {
    var keycode = event.keycode;
    if ( keycode == '13') {
        fun6();
    }
}
function fun6() {
    var a = t4.value;
    var b = a.charAt(1);
    if (b == 'r') {
        document.getElementById('p2').innerHTML = "Hi " + a + " You are Gentleman.";
    } else {
        if (b == 's') {
            document.getElementById('p2').innerHTML = "Hi! " + a + " You are a Lady.";
        } else {
            document.getElementById('p2').innerHTML = "Input Name is no in correct format";
        }
    }
}

// Exercise 4  ---- Issue with this one
function fun7() {
    for (i = 18; i <= 60; i++) {
        document.getElementById('age').innerHTML += "<option>" + i + "</option>";
    }
}

// Exercise 5
function nameon() {
    document.getElementById('h2text').innerHTML = "Welcome!";
}
function nameout() {
    document.getElementById('h2text').innerHTML = "How are you today?";
}

// Exercise 6 --- appends to <body> and is overwritten by Bootstrap CSS
function color() {
    var f1 = document.getElementById('f1');
    var a = document.getElementById('a');
    document.body.style.backgroundColor = f1.a.value;
}

// Exercise 7
function greater() {
    var a = parseInt(t5.value);
    var b = parseInt(t6.value);
    var c = parseInt(t7.value);
    var output2 = document.getElementById("output2");
    if (a > b && a > c) {
        output2.innerHTML = a + " is greater";
    } else {
        if (b > a && b > c) {
            output2.innerHTML = b + " is greater";
        } else {
            output2.innerHTML = c + " is greater";
        }
    }
 }

 // Exercise 8
 function fun8() {
    var subjects = ["Maths", "English", "Computer Science", "Hindi", "Science"];
    document.getElementById("demo").innerHTML = subjects[2];
 }

 // Exercise 9
 var date = new Date();
 document.getElementById('demo').innerHTML = date;
 document.getElementById('demo').innerHTML = d.toDateString();