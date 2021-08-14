const inputBin = document.querySelector('.input-bin');
const btnConvert = document.querySelector('.btn-convert');
const spanError = document.querySelector('.error');

function fail(msg) {
  spanError.innerHTML = msg;
}

function convertBinaryToDecimal(input) {
  if (/^[01]+$/.test(input.value)) {
    const valueBinary = input.value.split('');
    return console.log(valueBinary);
  }
  
  return fail('Digite um valor binário 0 ou 1');
}

btnConvert.addEventListener('click', () => {
  convertBinaryToDecimal(inputBin);
  inputBin.value = '';
});
