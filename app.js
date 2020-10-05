/* const inputs = document.querySelectorAll(".form__input--field");

inputs.forEach(e => e.addEventListener("input", function() {
    if (this.value === "") {
        this.parentElement.classList.add('invalid');
    } else {
      this.parentElement.classList.remove('invalid');
    }
  }));  */


/* function isLastCharacterN(str) {
  let regex = /n$/;
  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
}
 */
const REGEXP = str => console.log(str.match(/\D/g));

REGEXP("242Edabit23 45can344 3be3 254324addictive!");