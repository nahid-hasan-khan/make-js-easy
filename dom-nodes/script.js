const nodes = document.body.childNodes[1].childNodes;
console.log(nodes);

const first = document.body.childNodes[1].firstChild;
console.log(first);

const elem = document.body.firstElementChild.childNodes;
console.log(elem);

const elem2 = document.body.childNodes[1].lastElementChild;
console.log(elem2);

const parent = document.body.childNodes[3].parentElement;
console.log(parent);
