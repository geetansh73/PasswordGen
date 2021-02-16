function generate()
{
  if (document.getElementById("choice").value.length>0)
  {
var range=document.getElementById("slider").value;
range=range-document.getElementById("choice").value.length;

if (range>0)
{
var values="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var password=document.getElementById("choice").value;
for(var i=0;i<range;i++)
{
  password=password+values.charAt(Math.floor(Math.random()*(values.length-1)));
}
document.getElementById("display").value=password;
document.getElementById("lastNums").innerHTML+=password+"<br/>";

}
else
{
document.getElementById("content1").append(" Please select range greater than your input ");
}

  }
else
{
document.getElementById("content2").append(" Please enter your choice ");
}
}
document.getElementById("rangeshow").innerHTML="Current Length:24";
document.getElementById("slider").oninput=function(){
  document.getElementById("rangeshow").innerHTML="Length:"+document.getElementById("slider").value;
}
function copy()
{
  document.getElementById("display").select();
  document.execCommand("Copy");
  if (  document.getElementById("display").value.length>0)
  {
  document.getElementById("content").append("Password copied to clipboard");
}
}