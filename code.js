const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
let word = document.querySelector(".input-text");

btn.addEventListener("click", vowelCount);

function vowelCount() {
  let count = 0;
  let wordVal = word.value.toLowerCase();

  for(let i = 0; i < wordVal.length; i++)
  {
    let letter = wordVal[i];
    if(letter.match(/([a,e,i,o,u])/))
    {
      count++;
    }
  }
      result.innerHTML = `${wordVal.toUpperCase()} contains ${count} vowels`;
}