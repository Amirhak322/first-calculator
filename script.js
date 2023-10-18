function multiply(){
  var input1=document.getElementById("input1");
  var input2=document.getElementById("input2");
  var resultElement=document.getElementById("result");

  var var1=parseFloat(input1.value);
  var var2=parseFloat(input2.value);

  var result= var1*var2;

  resultElement.innerHTML= result;
}
// console.log(123);
function divide(){
  var input1=document.getElementById("input1");
  var input2=document.getElementById("input2");
  var resultElement=document.getElementById("result");

  var var1=parseFloat(input1.value);
  var var2=parseFloat(input2.value);

  var result= var1/var2;

  resultElement.innerHTML= result;
}

function sum(){
  var input1=document.getElementById("input1");
  var input2=document.getElementById("input2");
  var resultElement=document.getElementById("result");

  var var1=parseFloat(input1.value);
  var var2=parseFloat(input2.value);

  var result= var1+var2;

  resultElement.innerHTML= result;
}

function substract(){
  var input1=document.getElementById("input1");
  var input2=document.getElementById("input2");
  var resultElement=document.getElementById("result");

  var var1=parseFloat(input1.value);
  var var2=parseFloat(input2.value);

  var result= var1-var2;

  resultElement.innerHTML= result;
}
