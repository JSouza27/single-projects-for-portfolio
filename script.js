const inputBin = document.querySelector('.input-bin');
const btnConvert = document.querySelector('.btn-convert');
const spanError = document.querySelector('.error');

function fail(msg) {
  spanError.innerHTML = msg;
}

function validation(input) {
  if (/^[01]+$/.test(input.value)) {
    return console.log('sem');
  }
  
  return fail('Digite um valor binário 0 ou 1');
}

btnConvert.addEventListener('click', () => {
  validation(inputBin);
  inputBin.value = '';
});
