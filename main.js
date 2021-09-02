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
    `First Name: ${fname.value} "\n" Last Name: ${lname.value} \n Username: ${uname.value} \n Password: ${pwd.value} \n Email: ${email.value} \n Phone Number: ${num.value} \n City: ${city.value}`
  );
});
