// global variable
var x = "10"; 
//    outer function A
function A() {
      let y = 5
        console.log("outer Function A: x = " + x)

    // inner function
    function A1() { 
        console.log("Inner Function A1: x = " + x);
    
    }
    // Inner function 
    function A2() {
         console.log("Inner Function A2: x = " + y);
    }
    // Inner function
    function A3() {
      console.log("Inner Function A3: x = " + x);
    }
    // Inner function
    function A4() {
         console.log("Inner Function A4: x = " + x);
    }
    
    // Inner function
    function A5() {
     console.log("Inner Function A5: x = " + x);
    }
    
    // Inner function
    function A6() {
        console.log("Inner Function A6: x = " + x);
    }

    //  Calling the inner functions here
    A1();
    A2();
    A3();
    A4();
    A5();
    A6();
}

//  Calling  the outer function A
A();  



