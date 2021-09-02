const myForm = document.getElementById("registration");
const bottom = document.getElementById("bottom");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const uname = document.getElementById("uname");
const pwd = document.getElementById("pwd");
const email = document.getElementById("mail");
const num = document.getElementById("mobile");
const city = document.getElementById("city");

myForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  bottom.append(
    `First Name: ${fname.value}  Last Name: ${lname.value}  Username: ${uname.value}  Password: ${pwd.value}  Email: ${email.value}  Phone Number: ${num.value}  City: ${city.value}`
  );
});
