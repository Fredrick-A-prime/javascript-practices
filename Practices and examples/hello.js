var person = "doe"
console.log("hello", person);

console.log(2 < 2);

var a = 100
var b = 20
console.log(a / b);
console.log(a < b && a > b);
console.log(a % b || a == b);

var someone= "hi"
var person = "joe"
console.log(someone + person)
console.log("joe"+"jen");

var ab = "est"
var ac = "rva"
console.log(ab + ac);

var score = 8
console.log("Mid-level skills;", score > 0 && score < 10);

var timeRemaining = 0
var energy = 10
console.log("Game over:", timeRemaining == 0 || energy == 0);

var i = 7;
 i += 1;
 i += 2;
 console.log(i);
 if (score == i) {
    console.log("ok, right")
  } else (score < i); {
    console.log("playing");
  }

var i = 1
switch(i) {
    case i==1:
        console.log("-1")
        break;
    case i==2:
        console.log("-2")
        break;
    case i==3:
        console.log("-3")
        break;
    default:
        console.log("-2")
}

for (var at = 5; at >= 1; at--){
    console.log(at)
}
console.log("k")

al = 5
while(al >= 1){
    console.log(al)
    al-=1
}

for (var i = 1; i <=10; i++){
    if (i == 1 ){
        console.log("ye")
    } else if (i == 2){
        console.log("ney")
    } else if (i == 3){
        console.log("oh")
    } else {
    console.log(i)
    }
}

for (i = 1; i<=5; i++){
    for (j = 10; j>=1; j--){
        console.log(i +", ", j)
    }
}
for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}

if(i == 2 || i == 3) {
    console.log("Hello");
} else {
    console.log("Goodbye");
}

var i = 7;
var j = 2;
if(i < 7 || j < 5) {
    console.log("Helloi");
} else {
    console.log("Goodbye");
}

function letterfind(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log('---No match found at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterfind("test", "t")

function findnum(nen){
    for (var i = 0; i < 10; i++){
        if (i == nen){
            console.log("ok")
        } else {
            console.log("ito")
        }
    }
}
findnum(5)

function myarray(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i])
    if (arr[i] == "tc"){
        break;
    } else {
        console.log("continue")
    }
    }
}

var arry = ["ta", "tb", "tc", "tv"]
myarray(arry)
function abc(jc){
    for(var i = 0; i < jc; i++){
        console.log("oops")
        for (var j = 5; j > 0; j--){
            console.log("hi")
        }
    }
}
abc(5)

var obj1 = {}
obj1.first = 2
obj1["second"] = 3
console.log(obj1)

function letterFinder(match, word){
    condition1 = typeof(word) == 'string' && word.length >= 2
    condition2 = typeof(match) == 'string' && match.length <= 1
    if (condition1 == true && condition2 == true){
        for (i = 0; i < word.length; i++){
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else{
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder("cat", "c")

var bicycle = {
    wheels: 2,
    start: function() {

    },
    stop: function() {

    }
};
console.log(bicycle)

function add(a, b) {
    console.log(a + b)
}

add(3, "4");
var str = "Hello";
console.log(str.match("jello"));

var car = {
    speed: "10",
    excellent: true
}

car.performance = "working well"
console.log(car);
var battery = Object.create(car)
console.log(battery)
battery.charges = true
console.log(battery)
console.log(battery.speed);