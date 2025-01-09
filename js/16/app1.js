async function greet() {
  //async function returns promise
  //   throw "404 error";
  return "hello";
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was: ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with an error: ", err);
  });

let demo = async () => {
  return 5;
};

h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function col() {
  await changeColor("red", 1000); //jb tk await wali call poori nhi hogi tbtk ye aage nhi jaayega
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
}
col();