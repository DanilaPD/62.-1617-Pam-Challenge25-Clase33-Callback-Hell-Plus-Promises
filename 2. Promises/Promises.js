const dividing = (num1, num2) => {
  return new Promise((resolve, reject) => {
    num1 === 0 && reject(new Error("You've made a mistake."));
    num2 === 0 && reject(new Error("You've made a mistake."));

    resolve(num1 / num2);
  });
};

dividing(100, 2)
  .then((result1) => {
    console.log(result1);
    return dividing(result1, 2);
  })
  .then((result2) => {
    console.log(result2);
    return dividing(result2, 0);
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((err) => console.log(err))
  .finally(console.log("That's all, folks!"));
