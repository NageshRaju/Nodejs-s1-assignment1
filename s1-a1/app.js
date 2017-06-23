/*function myImmediateFunction () {
    var foo = "bar";

    // Outputs: "bar"
    document.getElementById("hi").innerHTML=foo;
}*/
var hi = "Hello World!";
(function (innerFoo){
    // Outputs: "foo"
    
    alert(innerFoo);
})(hi);
