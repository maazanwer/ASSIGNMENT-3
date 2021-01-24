// var time = new Date()
// document.write(time)

// var arr = ["january", "febuary", "march", "april", "may", "june", "july", "august" ]
// var d = new Date()
// var m = d.getMonth()
// var final = arr[m]
// document.write(final)

// var arr = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"]
// var d = new Date()
// var m = d.getDay()
// var final = arr[m]
// document.write(final)

// var a = new Date()
// var m = a.getDay()
// document.write(m)
// if(
//     m === "5" || m === "6"
// ){
//     alert("ITS FUN DAY")
// }else{alert("Well better to wait")}

// var d = new Date()
// var a = d.getDate()
// if(a  < 16 ){
//     alert("FIRST FIFTEEN DAYS OF THE MONTH")

// }else if(a > 15 ){
//     alert("LAST FIFTEEN DAYS OF THE MONTH!!")
// }

// // var a = new Date()
// var d = new Date("January 1,1970")
// var m = d.getTime()
// document.write(m)

// var a = new Date()
// var m = a.getHours();
// if(m  > 0 && m < 13){alert("ITS AM")}
// else if(m > 12 && m <= 24){alert("ITS PM")}

// var dooms = new Date(2020, 11, 31)
// document.write(dooms.toString())

// var a =new Date()
// var r = new Date(2015, 5, 18)
// var ab = a.getTime()
// var rb = r.getTime()
// var ba = ab - rb;
// var tot = ((((ba / 1000) / 60)  / 60) / 24)
// var fin = tot.toString()
//  document.write(Math.floor(fin))

// var a = new Date(2015, 11, 5)
// var b = new Date(2015, 0, 1)
// var ab = a.getTime()
// var ba = b.getTime()
// var tot = ab - ba
// var to = (tot / 1000)
// var pera = "This much time has passed in seconds on the given Time "
// document.write(pera + to)
 
// var a = new Date(1920, 0)
// document.write(a)

// var a = prompt("Enter Your birth age")
// var b = new Date()
// var c = b.getFullYear() - 1;
// var tot = a - c
// document.write(tot)

// var n = prompt("Your name?")
// var m = n.toUpperCase()
// var a = prompt("PLEASE SPECIFY THE NUMBER OF UNITS PRESENT IN YOUR BILL")
// var charge = 20
// var fee = 850
// var net = a * charge
// var late = net + fee
// var arr = ["JANUARY" , "FEBUARY" , "MARCH" , "APRIL" , "MAY" , "JUNE"]
// var da = new Date()
// var mon = arr[da.getMonth()]
// var total = ("YOUR NAME :     "  + m   + "</br>" + "YOUR MONTH : " + mon + "</br>" + "YOUR UNITS :   " + a + "</br>" + "CHARGE PER UNIT :   " + charge + "</br>" + "</br>" + "NET AMOUNT PAYABLE WITHIN DUE DATE :   " + net + "</br>" + "LATE PAYMENT SURCHARGE :   " + fee + "</br>" + "NET AMOUNT PAYABLE AFTER DUE DATE :" + late)
// document.write(total)



// CHAP 35-38

// function time(){
//     var a = new Date()
//     document.write(a)
// }
// time()

// function name(){
//     var a =prompt("Please Enter Your First Name")
//     var b =prompt("Pleae ENter Your Last Name")
//     document.write(a + "&nbsp;" + b)
// }
// name()

// function name(){
//     var a = prompt("enter a number ")
//     var b = prompt("Enter another number")
//   var d = parseInt(a)
//   var v = parseInt(b)
//     var c = d + v
//     alert(c)
// }
// name()

// function square(x){
//     var x = prompt("Enter the no. you would like to be doubled")
// alert(x * x)
// }
// square()

// function theorem (){
//     var a = prompt("Enter base value")
//     var b = prompt("Enter perpendicular value")
//     var az = a * a 
//     var bz = b * b 
//     var c = az + bz 
//     alert ("The value when it is being squared is: " + c)
//     var d = Math.sqrt(c)
//     var e =Math.round(d)
// alert("The value when it's square is rooted is: " + e)
    
// }
// theorem()




// function area(width , height){
//     var a = width * height;
//     return "area is: " + a;
// }


// alert(Area(prompt("Enter Width"), prompt("Enter Height")));

// function area(height , width){
//     var b = width * height;
//     var c = "area is: " + b;
// }

// var x = prompt("Enter Width")
// var y = prompt("Enter Height")

// alert(Area(x , y));

// var c = prompt("What is the radius")
// function Calcircumference(){
//     var a = 3.142 * 2 * c
// alert("The circumference of the circle is: " + a)
// }
// Calcircumference()
// function Calarea(){

//     var area = 3.142 * (c * c)
//     alert("The area is: " + area)
// }
// Calarea()


// Chap 38-42

// function POWER(){
//     var a = prompt("Enter number")
//     var b = prompt("Enter number you would like to be the exponent")
//     var c = parseInt(a)
//     var c2 = parseInt(b)
//     var d = Math.pow(c, c2)
//     alert(d)
// }
// POWER()

// function year(){
//     var a = prompt("Would you be so kind to enter the year")
//     if(a % 4){
//         alert("well its a leap year")
//     }
//     else{alert("NOT A LEAP YEAR")}
// }
// year()

// var a =prompt("A VALUE")
// var b =prompt("B VALUE")
// var c =prompt("C VALUE")
// function cal(){
//     var S = (a + b + c) / 2
//     var Formula = ( S * ((S - a) * (S - b) * (S - c))
//     document.write(Formula)
// }
// cal()

// function avg(){
//     var a = prompt("Enter your marks")
//     var b = prompt("Enter the second marks")
//     var c = prompt("Enter the third subject's marks")
//     var tot = (a + b + c ) / 3
// return(Math.floor(tot))}


// function percentage(){

//     var per = (a / 100) * 100;
//     var per_b = (b / 100) * 100;
//     var per_c = (c / 100) * 100;
//     var fin = (per + per_b + per_c) / 3
    
//     return(fin)}

// function main() {
//     var percentage = percentage()
//     var AVERAGE = avg()
// document.write("YOUR AVERAGE IS: " + AVERAGE + "<br/>" + "YOUR PERCENTAGE IS: " + percentage)
// }
// main()