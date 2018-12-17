function validate () {
 var x = document.getElementById("number").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 10 || x > 100 || (x%10 != 0)){
     alert("Input must be a multiple of 10");
  } else {
     alert("SUCCESS");
  }
}
  
