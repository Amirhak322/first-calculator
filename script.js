function multiply(){
  let input1=document.getElementById("input1");
  let input2=document.getElementById("input2");
  let resultElement=document.getElementById("result");

  let let1=parseFloat(input1.value);
  let let2=parseFloat(input2.value);

  let result= let1*let2;

  resultElement.innerHTML= result;
}
// console.log(123);
function divide(){
  let input1=document.getElementById("input1");
  let input2=document.getElementById("input2");
  let resultElement=document.getElementById("result");

  let let1=parseFloat(input1.value);
  let let2=parseFloat(input2.value);

  let result= let1/let2;

  resultElement.innerHTML= result;
}

function sum(){
  let input1=document.getElementById("input1");
  let input2=document.getElementById("input2");
  let resultElement=document.getElementById("result");

  let let1=parseFloat(input1.value);
  let let2=parseFloat(input2.value);

  let result= let1+let2;

  resultElement.innerHTML= result;
}

function substract(){
  let input1=document.getElementById("input1");
  let input2=document.getElementById("input2");
  let resultElement=document.getElementById("result");

  let let1=parseFloat(input1.value);
  let let2=parseFloat(input2.value);

  let result= let1-let2;

  resultElement.innerHTML= result;
}

function date(){
  const d=new Date();
  document.getElementById("result").innerHTML=d;

}
function datetoyear()
{
  let input1=document.getElementById('date1').value;
  let result=document.getElementById('result');

  let mydate = new Date(input1);

  let year=mydate.getFullYear();
  document.getElementById('result').innerHTML=year;
}
function datetomonth()
{
  let input1=document.getElementById('date1').value;
  let result=document.getElementById('result');

  let mydate = new Date(input1);

  let month=mydate.getMonth();
  const months=['January','February','March','April','May','June','July'
  ,'August','September','October','November','December'];
  document.getElementById('result').innerHTML=months[month];
}

