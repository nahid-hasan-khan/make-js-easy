// For Loops

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log("Now in number 5");
  }
  console.log(element);
}

for (let i = 0; i <= 20; i++) {
  console.log(`Outer loop ${i}`);

  for (let j = 0; j <= 20; j++) {
    console.log(`inner loop ${j} and inner loop ${i}`);
  }
}

for (let i = 1; i <= 20; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 20; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

// array loop
const mySupHeros = ["Flash", "Superman", "Batman", "Thor", "Ironman"];
console.log(mySupHeros.length);

for (let i = 0; i < mySupHeros.length; i++) {
  const element = mySupHeros[i];
  console.log(`my Super Hero is ${element}`);
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < myArr.length; i++) {
  const element = array[i];
}

//break and continue

//break
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log(`index is ${i}`);
    break;
  }
}

// continue
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log(`detect ${i}`);
    continue;
  }
}



