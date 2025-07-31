// Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log(`DB Connected`);
})()(
  //Named iffe
  (function Named(name) {
    console.log(`DB CONNECTED TWO ${name}`);
  })("Nahid")
)(
  // arrow iffe
  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
  }
)("Nahid");
