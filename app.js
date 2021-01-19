                        // DATE METHODS Question.1


// var date =new Date();
// document.write(date);

                        // DATE METHODS Question.2

// var arrr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var monthDate = new Date()
// var month = monthDate.getMonth();
// var index = arrr[month];
// document.write("Current Month :" + " " + index)



                        // DATE METHODS Question.3



// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var Date = new Date();
// var week =arr[Date.getDay()];
// document.write("Today is " + " " + week )

                        // DATE METHODS Question.4



// var day = new Date();
//  var indexOf = day.getDay();
//  if(indexOf ===6 ||indexOf ===5){
//          document.write(" It is Fun Day ")
//  }
// else{
// document.write("it's not fun day")
// }


                        // DATE METHODS Question.5


// var formonth =new Date();
// var month =formonth.getDate();
// if (month <=15){
// document.write("first fifteen days of the month")
// }
// else{
// document.write("last days of the month")
// }


                        // DATE METHODS Question.6

// var date = new Date();
// var milliseconds = date.getTime();
// var minutes = milliseconds / (1000*60);
// document.write("Current Date :" + date + "<br />");
// document.write("Elapsed milliseconds since January 1, 1970" + " " + milliseconds + "<br />");
// document.write("Elapsed minutes since January 1, 1970" + " " + minutes + "<br />")


                        // DATE METHODS Question.7

// var date =new Date();
// var hours=date.getHours();
// if(hours <12){
// document.write("it's AM")
// }
// else{
// document.write("it's PM")
// }


                        // DATE METHODS Question.8



// var date =new Date("31 DEC 2020");
// document.write("laterdate:"+" " +date )


                        // DATE METHODS Question.9

//  var ramadan =new Date("june 18, 2015")
//  var date =new Date();
//  var change =ramadan.getTime();
//  var collect=date.getTime();
//  var diff=change-collect;
//  var convert =Math.floor(diff / (1000*60*60*24))
//  document.write(convert +"days have passed since 1st Ramdan 2015")


                        // DATE METHODS Question.10

// var reference =new Date();
// var date =new Date("jan 1, 2015")
// var get =reference.getTime();
// var newget = date.getTime();
// var diff =get-newget;
// var convert=Math.floor(diff / (1000))
// document.write("On reference date " + " " + reference + " ," + "<br />");
//  document.write(convert + " seconds had passed since beginning of 2015")


                        // DATE METHODS Question.11

// var date =new Date();
// var time =new Date();
// time.setHours(time.getHours() -1)
// document.write("currenttime:" +" " + date +"<br/>" )
// document.write("1 Hour ago , it was " + " " + time)


                        // DATE METHODS Question.12


// var date = new Date();
//  var time = new Date();
//  time.setFullYear(time.getFullYear()-100);
//  document.write("Current Date " + " " + date +"<br/>")
//  document.write("100 years back , it was " + " " + time)


                        // DATE METHODS Question.13



// var age =prompt("enter your age");
// var birth =new Date();
// diff =birth.getFullYear()-age;
// document.write("your age"+" "+age +"<br/>")
// document.write("your birth"+" "+diff)

                        // DATE METHODS Question.14

// var Username = prompt('Enter you name')
// var date = new Date()
// var months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December']
// document.write('Customer Name : '+ ' ' + Username +  '<br/>')
// document.write('Month : ' +  months[date.getMonth()]+ "<br/>")
// document.write(' number of units =410'+"<br/>" )
// document.write("charges per units =16"+"<br/>")
// var units =410
// var  per =16
// document.write("Net Amount Payable(within Due Date):" + units * per + "<br />")
// document.write("Late Payment Surcharge" + " " + 350 + "<br />")
// var units=6560
// var after=350
// var c=(units+after)
// document.write("Gross Amount Payable(after Due Date):" + c )




                                    // FUNCTION



                        // DATE METHODS Question.1

// function datetime (){
// document.write(new Date())
// }
// datetime()

                        // DATE METHODS Question.2

// function greet (){
//     document.write(prompt("first name"))
// document.write(prompt("last name"))
// }
// greet();

                        // DATE METHODS Question.3.

// function add (a,b){
// a =5
// b =89
// return a+b
// }
// document.write(add())

                        // DATE METHODS Question.4


// function calculator(val1,ope,val2){
//       val1 = +prompt("Enter first value")
//       ope = prompt("Enter operator")
//       val2 = +prompt("Enter Second value")
//     if(ope === "+"){
//             return val1 + val2
//     }
//     else if(ope === "-"){
//             return val1 - val2
//     }
//     else if(ope === "*"){
//             return val1 * val2
//     }
//     else if(ope === "/"){
//             return val1 / val2
//     }
//     else if(ope === "%"){
//             return val1 % val2
//     }
//     else{
//             return "Enter correct operator"
//     } 

// }

// alert(calculator())


                        // DATE METHODS Question.5
// function squares(a){
//           document.write(a*a)
//     }
//     squares(4)


                        // DATE METHODS Question.6
    

// function factorial(n){
//         var h = 1
//         for(var i = 1; i <= n; i++){
//              h = h*i
//         }
//         return h
// }
// alert(factorial(5))

                        // DATE METHODS Question.7
    
// function count(start,end){
//             start = prompt("Enter start number")
//             end = prompt("Enter end number") 
//             for(var i=start; i<=end; i++){
//             document.write(i +"<br/>")
// }    
//     }
//     count()



                        // DATE METHODS Question.9
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function area(width,height){
//             var A  = width * height
//  width =2
// height =20
//             return A  = width * height
//     }
// document.write(area())

                        // DATE METHODS Question.10
    

                        
// function pan(){
//             var inp = prompt("Enter word") 
//             var b = ""
//             for(var i = inp.length-1; i >= 0; i--){
//                     b += inp[i]
//             }
//             if(inp === b){
//                     alert("yes")
//             }
//             else{
//                     alert("no")
//             }
//     }
//     pan()


                        // DATE METHODS Question.11



// const toCapital = str => {
// const grape = str.split(" ")
//  return  grape.map(grape => grape[0].toUpperCase() + grape.slice(1).toLowerCase()).join(" ");
// }
// alert(toCapital("shazeel ali zain shazeel khan"));



                            // FUNCTIONS, SWITCH
                            // STATEMENTS, WHILE… DOWHILE LOOPS



                         // FUNCTIONS, SWITCH
                         // STATEMENTS, WHILE… DOWHILE LOOPS question 1




// function power(a,b){
//      var contain = 1;
//      for(var i=1; i <= b;i++){
//          contain = contain*a
//      }
  
//      alert("The answer is " + " " + contain)
// }
// var inp1 = prompt("Enter First value");
// var inp2 = prompt("Enter Second value");
// power(inp1,inp2)



                         // FUNCTIONS, SWITCH
                         // STATEMENTS, WHILE… DOWHILE LOOPS question 2



// function leapYear(year){
//       if(year % 4 === 0){
//               alert("This is Leap Year")
//       }
//       else{
//               alert("This is not Leap Year")
//       }
// }
// var leap = +prompt("Enter yer to cheak the leap year");
// leapYear(leap)



                         // FUNCTIONS, SWITCH
                         // STATEMENTS, WHILE… DOWHILE LOOPS question 3


// var firstVal = +prompt("Enter First Value");
// var SecondVal = +prompt("Enter Second Value");
// var ThirdVal = +prompt("Enter Third Value");
// function side(a,b,c){
//         var sideA = ( a + b + c ) / 2;
//         return sideA
// }
// var S = side(firstVal,SecondVal,ThirdVal);
// function area(sum,a,b,c){
//         var areaA = sum*(sum - a)*(sum - b)*(sum - c);
//         return areaA
// }
// alert(area(S,firstVal,SecondVal,ThirdVal));







                         // FUNCTIONS, SWITCH
                         // STATEMENTS, WHILE… DOWHILE LOOPS question 4




// var a = +prompt("Enter the marks of first subject");
// var b = +prompt("Enter the marks of second subject");
// var c = +prompt("Enter the marks of third subject");
// var d = +prompt("Enter total marks in all subjects")
// function average(firstMarks,secondMarks,thirdMarks){
//        var avg = (firstMarks+secondMarks+thirdMarks)/3;
//        return avg
// }  
// function percentage(firstMarks,secondMarks,thirdMarks,totalMarks){
//        var per = (firstMarks+secondMarks+thirdMarks)*100/totalMarks;
//        return per
// }
// function mainFunc(){
//      alert("Average is" + " " + average(a,b,c));
//      alert("Percentage is" + " " + percentage(a,b,c,d))
// }
// mainFunc();

                         // FUNCTIONS, SWITCH
                         // STATEMENTS, WHILE… DOWHILE LOOPS question 5



// var a = prompt("string")
// var b = prompt("Enter letter to check its index number")
// function checking(str,val){
//         for(var i = 0;i < str.length ; i++){
//                 if(str.slice(i,i+1) === val){
//                 alert("Index number : " + " " + i);
//                 }
//         }
// }
// checking(a,b)




                         // FUNCTIONS, SWITCH
                         // STATEMENTS, WHILE… DOWHILE LOOPS question 9

// var enter = prompt("enter hours")                     
// var overTime = 12*enter;
// alert(overTime)






