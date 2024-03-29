// for (i=1; i<=5 ;i++) {
//  for (j=1; j<=i ;j++){
//     document.write(i+ "")
//  }   
//  document.write( "<br>")
// }
// for (i=1; i<=5 ;i++) {
//     for (j=1; j<=i ;j++){
//        document.write(j+ "")
//     }   
//     document.write( "<br>")
//    }
//    for (i=5; i>=1 ;i--) {
//     for (j=1; j<=i ;j++){
//        document.write(i+ "")
//     }   
//     document.write( "<br>")
//    }

//    for (i=5; i>=1 ;i--) {
//     for (j=i; j<=1 ;j--){
//        document.write(i+ "")
//     }   
//     document.write( "<br>")
//    }


//................................assigment of loop.....................//


                //    question 1
// var  multiArray = [[]]; 


                 //  question 2
//  var multiArray= [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
//  console.log(multiArrary)
                 
                 //  question 3

//  for (i=1; i<=10;i++){
//     document.write(i+"<br>")
//  }                


//                      //question 4
// var tableNo = prompt("Enter a number to show its multiplication table")
// var tableLength = prompt("Enter length of table")
// for(i=1; i<=tableLength; i++){
// document.write( $[tableNo]  x $[i] = $[tableNo*i] <br> );
// }      

                          // question 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(i=0; i<fruits.length; i++){
//     document.write(`${fruits[i]}<br>`);
// }
// for(i=0; i<fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]}<br>`);
// }
                     
                        // question 6

// document.write("<b>Counting:</b><br>")
// for(i=1; i<=15; i++){
//  document.write(i + "," );
// }
// document.write("<br><b>Reverse Counting</b><br>")
// for(i=15; i>=1; i--){
//  document.write(i + "," );
// }
// document.write("<br><b>Even Counting</b><br>")
// for(i=0; i<=20; i=i+2){
//  document.write(i + "," );
// }
// document.write("<br><b>Odd Counting</b><br>")
// for(i=1; i<=20; i=i+2){
//  document.write(i + "," );
// }
// document.write("<br><b>Series:</b><br>")
// for(i=2; i<=20; i=i+2){
//  document.write(i + "k," );
// }                        
                       //  question 7
// var items = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase()
// var match = false

// for(i=0; i<=items.length; i++){
//     if(user == items[i]){
//         document.write(`${user} is found at index ${i}`);
//         match = true
//         break
//     }
// }if(!match){
//     document.write(`We are sorry ${user} is not available in our bakery`);
// }

                      // question 8

// var numberArray = [24,54,78,91,12]
// var largestNumber = Math.max(...numberArray)
// document.write(`Array items: ${numberArray}<br>The Largest number is ${largestNumber}<br><br>`);                      
                     
                      // question 9

// var numberArrayMin = [24,54,78,91,12]
// var smalesttNumber = Math.min(...numberArrayMin)
// document.write(`Array items: ${numberArrayMin}<br>The Largest number is ${smalesttNumber}<br><br>`);
                      
                     // question 10

 var num = 5
for(i=1; i<=20; i++){
    document.write(`${num*i}, `)
}                    