const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});

app.get("/echo", (req, res) => {
  const responseText = `Here are some details of your request: 
    Base URL: ${req.baseUrl}
    HOST: ${req.hostname}
    Path: ${req.path}`;
  res.send(responseText);
});

app.get("/queryViewer", (req, res) => {
  console.log(req.query);
  res.end(); //do not send any data back to the client
});

app.get("/grettings", (req, res) => {
  const name = req.query.name;
  const race = req.query.race;
  if (!name) {
    return res.status(400).send("Please provide a name");
  }
  if (!race) {
    return res.status(400).send("Please provide a race");
  }

  const grettings = `Grettings ${name} the ${race} race, welcome to out kingdom.`;
  res.send(grettings);
});

app.get("/sum", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  if (num1 === NaN) {
    res.send("a must enter a valid number");
  }
  if (num2 === NaN) {
    res.send(" b must be a number");
  }
  const sum = num2 + num1;
  res.send(`${sum} is the total`);
});

app.get("/cipher", (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;
  let shiftNumber = parseInt(shift);
  textReturn = [];
  for (let i = 0; i < text.length; i++) {
    let holder = text.charCodeAt(i) + shiftNumber;
    textReturn.push(String.fromCharCode(holder));
  }
  const x = textReturn.join("");
  res.send(`${text} is now ${x}`);
});
