'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

// old Code
// const sepirate = function () {
// const text = document.querySelector('textarea').value;
// let [fText, sText] = text.trim().toLowerCase().split('_');
// sText = sText[0].toUpperCase() + sText.slice(1);
// const sentence = fText + sText;
// console.log(fText);
// console.log(sText);
// console.log(sentence);
// };

// button.addEventListener('click', sepirate);

// new Code
const sepirateNew = function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    let [fText, sText] = row.trim().toLowerCase().split('_');
    const sentence = `${fText}${sText.replace(
      sText[0],
      sText[0].toUpperCase()
    )}`;
    console.log(`${sentence.padEnd(20)} ${'🆗'.repeat(i + 1)}`);
  }
};
button.addEventListener('click', sepirateNew);

/* underscore_case
first_name
Some_Variable
    calculate_AGE
delay_departure
*/
