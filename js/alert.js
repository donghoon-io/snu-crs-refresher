
console.log("yaya");
try {
  setCookie("enter", "N");
  location.reload();
} catch (error) {
  console.log(`Unexpected error: ${error.message}`);
}
console.log(`Deleted cookie(s).`);

function setCookie(c_name, value, exdays) {

  var exdate = new Date();

  exdate.setDate(exdate.getDate() + exdays);

  var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());

  document.cookie = c_name + "=" + c_value;

}
