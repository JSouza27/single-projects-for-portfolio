const inputBin = document.querySelector('.input-bin');
const btnConvert = document.querySelector('.btn-convert');
const spanError = document.querySelector('.error');
const spanResult = document.querySelector('.result');
const divInput = document.querySelector('.div-input');

function validation(e) {
  const pattern = /^[01]+$/;
  const valueInput = e.code.substring(5);

  if (valueInput.match(pattern)) {
    spanError.classList.add('valid');
    spanError.classList.remove('invalid');

    divInput.classList.add('input-valid');
    divInput.classList.remove('input-invalid');

    spanError.innerHTML = 'Valor válido';
  } else {
    spanError.classList.remove('valid');
    spanError.classList.add('invalid');

    divInput.classList.remove('input-valid');
    divInput.classList.add('input-invalid');

    spanError.innerHTML = 'Valor inválido, digite uma segquência de números com 0 ou 1';
  }
}

function assignResult(sum) {
  spanResult.innerHTML = sum;
}

function convertBinaryToDecimal(input) {
  let sum = 0;
  
  const valueBinary = input.value.split('');
  
  valueBinary.reverse().forEach((number, index) => {
    sum += 2 ** index * parseInt(number, 10);
  });
  
  return assignResult(sum.toFixed(1));
}

inputBin.addEventListener('keydown', validation);

btnConvert.addEventListener('click', () => {
  convertBinaryToDecimal(inputBin);
  inputBin.value = '';
});
