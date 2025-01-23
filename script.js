let body = document.querySelector('body');
const bt2 = document.querySelector('.bt2');
const bt1 = document.querySelector('.bt1');
let cssCopy = document.querySelector('.cssCopy');

//first function -->
function randomCode1() {
  let op1 = (Math.random()).toFixed(1);

  let ar = [];
  for (let i = 0; i < 3; i++) {
    let vl = Math.floor(((Math.random()).toFixed(2)) * 258);

    ar.push(vl);
  }
  ar.push(Number(op1));

  return ar;
}


let a = [108, 242, 25, 1];
let b = [208, 143, 25, 1];

//function textcontent -->
function textcontent() {
  bt1.textContent = `rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;

  bt2.textContent = `rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`;

  cssCopy.textContent = `background-image: linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}),
  rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]}) );`;

}

//function -->
function handelarBt1() {
  a = randomCode1();

  body.style.backgroundImage = `linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}), 
  rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]}) )`;

  bt1.style.background = `rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;

  textcontent();

}

//function -->
function handelarBt2() {
  b = randomCode1();

  body.style.backgroundImage = `linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}),
  rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})
   )`;

  bt2.style.background = `rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`;

  textcontent();

}

//dome event handelar -->
bt1.onclick = handelarBt1;
bt2.onclick = handelarBt2;

//copy css linear gradient -->
bt2.nextElementSibling.addEventListener('click', () => {
  navigator.clipboard.writeText(cssCopy.textContent);

  alert(`copy done..\n \n${cssCopy.textContent}`);
});