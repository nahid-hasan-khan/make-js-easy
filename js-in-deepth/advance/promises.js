//promise 1
const promiseOne = new Promise(function (resolve, reject) {
  //do an any async task supp: DB calls,cryptography,network call

  setTimeout(function () {
    console.log("async tasks is complete");
    resolve(); // if you connect any promise.than,you must call resolve()
  }, 1000);
});

//promise Two
promiseOne.than(function () {
  //this function automatically received an argument that is in the result of promise function.

  console.log("promise consumed");
});

//promise Three
new promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task Two");
    resolve();
  }, 1000);
}).than(function () {
  console.log("async Two resolved");
});

// promise Four
const promiseThree = new promise(function (resolve, reject) {
  setTimeout(function () {}, 1000);
  resolve({ userName: "Nahid", email: "nahidkhan@gmail.com" }); //you can pass any object,array etc.
});
promiseThree.than(function (user) {
  //when you pass any object or array than you can received that in than callback function.

  console.log(user.email);
});

//promise Five
// chaining of .than
const promiseFive = new promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        userName: "Nahid Khan",
        password: "5246",
        email: "nahidkhan@gmail.com",
      });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});

promiseFive
  .than(function (user) {
    console.log(user);
    return user.userName;
  })
  .than(function (userName) {
    //if you caught first than value that get in second than.

    console.log(userName);
  })
  .catch(function (error) {
    //if you declare reject,when you must use catch for error

    console.log(error);
  })
  .finally(function () {
    console.log("the promise ether resolved or rejected");
  });

// promise six
// without use .than.catch,use async and await
const promiseSix = new promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        userName: "JavaScript",
        password: "5246",
        email: "javascript@gmail.com",
      });
    } else {
      reject("ERROR:- JavaScript Went Wrong");
    }
  }, 1000);
});
async function consumePromiseSix() {
  try {
    let response = await promiseSix;
    console.log(response);
  } catch {
    console.log("its an error");
  }
}

// promise seven
// use url for data, Formula 1
const promiseSeven = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = false;
    if (!err) {
      resolve("https://jsonplaceholder.typicode.com/users");
    } else {
      reject("Data Not Found");
    }
  }, 1000);
});

async function usePromiseUrl() {
  try {
    let res = await promiseSeven;
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Operation Done");
  }
}

usePromiseUrl();

// promise Eight
//use url and async function Formula 2
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // come data is take some time so we use await.
    const data = await response.json(); // also parse data of json in take time so here we use await.
    console.log(data);
  } catch (error) {
    console.log("Error is:-", error);
  }
}

getUsers();

// formula 3, and we most of the time use this formula

fetch("https://api.github.com/users/hiteshchoudhary")
  .than((response) => {
    return response.json();
  })
  .than((data) => {
    console.log(data);
    
  })
  .catch((err) => {
    console.log(err);
    
  });
