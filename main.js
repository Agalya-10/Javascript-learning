// external
function helloDate() {
    document.getElementById('dateDisplay').innerHTML = new Date();
}
// variables
var a=90;
var b=20;
console.log(a-b)

let price=1000;
var product = "laptop";
let tax=2500;
const total=price+tax;
console.log(product)
console.log(total)
 
 var fruitName="apple";
 var count=10;
 var apple=5;
 const totalprice=(count*apple);
 console.log(fruitName);
  console.log(totalprice);
//   operator
  var a=20;
  a++;
  console.log(a);

  var a=20;
  b=a++;
  console.log(b);
  
  var a=60;
  b=--a;
  console.log(b);
  
  var a=true;
console.log(typeof(a));
var name="agalya";
console.log("my name is",name)
console.log(typeof(name));
var c;

console.log(typeof(c));  

// function
function myNameIs()
{
   console.log( "I am Agalya from thanjavur")
}
myNameIs()

function fruit()
{
   console.log( "this is apple")}
   
function pen(){
   console.log( "this is pen") }
   
function lap(){
   console.log( "this is mouse")
}
fruit()
pen()
lap()

var a=40;
var b=50;
function sub()
{
    console.log(a*b)
}
sub()

var actor="surya";
var player="dhoni";
var movie="friends";
function favourite(){
    console.log(" My fav Hero : " + actor)
    console.log(" My fav Player : ",player )
    console.log(" My fav Movie : " ,movie )
}
favourite()

// parameter

function area(l,b){
    console.log(l+b);
}
area(55,75)
// return function
function myDept()
{
       return"computer science"
}
var c=myDept()
console.log(c)

function fruit(apple,orange)

{
    return apple+orange;
}
var totalValue=fruit(50,60);
console.log(totalValue);

// if else

if(true){
    console.log("its true")
}
else{
    console.log("its false")
}

var rain=false
if (rain)
{
    console.log("take an umbrella")
}
else{
    console.log("enjoy the sunshine")
    }
    
    var homework=true
    if(homework)
    {
        console.log("great job")
    }
    else
    {
        console.log("finish your homework before playing")
    }


    var color="yellow"
    if(color=="yellow")
    {
        console.log("get ready")
    }
    if (color=="red")
    {
       console.log("stop") 
    }
    if (color=="green")
    {
       console.log("go") 
    }
    
    var season="spring"
    
    if(season=="winter")
    {
        console.log("bundle up and stay warm")
    }
    if(season=="spring")
    {
        console.log("enjoy the blooming flowers")
    }
    if(season=="summer")
    {
        console.log("have fun in the sun")
    }
    if(season=="autumn")
    {
        console.log("admire the colorfull leaves")
    }


    var score = 80;

    if (score < 50) {
        console.log("You need to improve");
    } else if (score <= 70) {
        console.log("Good job");
    } else if (score > 70) {
        console.log("Excellent performance");
    }
    

    function checkEvenOrOdd(number) {
        if ( number % 4==0) {
            console.log("The number is even");
        } else {
            console.log("The number is odd");
        }
    }
    checkEvenOrOdd("9")

    function checkVowelsOrConsonant(str){
        if (str){
            console.log("It's a vowel")
        }
        else{
             console.log("It's a Consonant")
        }
    }
    checkVowelsOrConsonant("k")
    