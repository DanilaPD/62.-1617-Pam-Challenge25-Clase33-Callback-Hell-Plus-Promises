//* General Callback:
const dividing = (num1, num2, cb) => {
  if (num1 === 0 || num2 === 0) {
    cb(console.log("Oh, no!"), null);
  } else {
    cb(null, num1 / num2);
  }
};

dividing(50, 3, (error, result1) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result1);
    console.log(typeof result1);
  }
});

//* Callback Hell:
dividing(48, 2, (error, result1) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result1);
    dividing(result1, 5, (error, result2) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result2);
        dividing(result2, 5, (error, result3) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result3);
          }
        });
      }
    });
  }
});
