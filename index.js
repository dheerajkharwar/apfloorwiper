
function enqFormBlink(){
    document.getElementById("ContactUs100").style.backgroundColor = "#EEA47FFF";
    document.getElementById("ContactUs100").style.color = "white";
    setTimeout(enqFormBlink1, 3000);

}
function enqFormBlink1(){
    document.getElementById("ContactUs100").style.backgroundColor = "lightblue";
    document.getElementById("ContactUs100").style.color = "black";
    setTimeout(enqFormBlink, 3000);
}
document.getElementById("product_menu").addEventListener("click", function() {
  if(document.getElementById("icon_up").getAttribute("class").localeCompare("fa fa-angle-down") == 0){
    document.getElementById("icon_up").setAttribute("class", "fa fa-angle-up");
  }else if(document.getElementById("icon_up").getAttribute("class").localeCompare("fa fa-angle-up") == 0){
    document.getElementById("icon_up").setAttribute("class", "fa fa-angle-down");
  }
});

function ValidateForm(frm) {
  if (frm.Name.value == "") { alert('Name is required.'); frm.Name.focus(); return false; }
  if (frm.PhoneNumber.value == "") { alert('PhoneNumber is required.'); frm.PhoneNumber.focus(); return false; }
  if (!frm.PhoneNumber.value.match(/^\d{10}$/)) { alert('PhoneNumber should be a 10 digit number.'); frm.PhoneNumber.focus(); return false; }
  if (frm.EmailAddress.value.indexOf("@") < 1 || frm.EmailAddress.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.FromEmailAddress.focus(); return false; }
  if (frm.Message.value == "") { alert('Please enter comments or questions.'); frm.Message.focus(); return false; }
  return true;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}