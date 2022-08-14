const elPassInput = document.getElementById("pass")
const elPassConfirmationInput = document.getElementById("confirm-pass")
const elPassError = document.querySelector(".error")

elPassInput.addEventListener('input', passwordValidation)
elPassConfirmationInput.addEventListener('input', passwordValidation)

function passwordValidation() {
  if (elPassInput.value !== elPassConfirmationInput.value) {
    elPassError.classList.add("visible")
    elPassInput.setCustomValidity('Passwords must match')
    elPassConfirmationInput.setCustomValidity(' ')
  } else {
    elPassError.classList.remove("visible")
    elPassInput.setCustomValidity('')
    elPassConfirmationInput.setCustomValidity('')
  }
}