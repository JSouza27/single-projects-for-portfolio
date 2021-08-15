const inputBin = document.querySelector('.input-bin');
const btnConvert = document.querySelector('.btn-convert');
const spanError = document.querySelector('.error');
const spanResult = document.querySelector('.result');

function fail(msg) {
  spanError.innerHTML = msg;
}

function assignResult(sum) {
  spanResult.innerHTML = sum;
}

function convertBinaryToDecimal(input) {
  let sum = 0;

  if (/^[01]+$/.test(input.value)) {
    const valueBinary = input.value.split('');

    valueBinary.reverse().forEach((number, index) => {
      sum += 2 ** index * parseInt(number, 10);
    });

    return assignResult(sum.toFixed(2));
  }
  
  return fail('Digite um valor binário 0 ou 1');
}

btnConvert.addEventListener('click', () => {
  convertBinaryToDecimal(inputBin);
  inputBin.value = '';
});
