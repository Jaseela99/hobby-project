

const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

//when submit is clicked 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
})

function checkInput() {
    //trim-it trims out the extra space with in the input fields
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = passwordtwo.value.trim();
  //if any of the fields is empty then error message pops up
  if (userNameValue === "") {
      setErrorFor(username, "Username cannot be blank");
      //if any of the fields is not empty then value is set
    } else {
        setSuccessFor(username);
    }
  if (emailValue === "") {
    setErrorFor(email, "email cannot be blank");
  } else if(!isEmail(emailValue)){
     setErrorFor(email," invalid Email" )
  }else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
  if (password2Value === "") {
    setErrorFor(passwordtwo, "Password cannot be blank");
    /* to compare two passwords */
  } else if(password2Value!==passwordValue){
  setErrorFor(passwordtwo," Password doesn't match")
  }
  
  else {
    setSuccessFor(passwordtwo);
  }
  alert("form submitted")
}
//if fields are blank
function setErrorFor(input, message) {
  //accessing form-control
  const formControl = input.parentElement;
  //innertext of small is set as the message given
  const small = formControl.querySelector("small");
  small.innerText = message;
//   classname of forma-control is changed
  formControl.className = "form-control error";
}
//when input felds are filled
function setSuccessFor(input) {
    //classname of form control success is added
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
