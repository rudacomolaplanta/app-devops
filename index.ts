import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola hola");
});

app.post("/calcular", (req, res) => {
  const op = req.body;
  if (op.op === "s") {
    return res.send({ res: op.a + op.b });
  } else if(op.op == "r"){
    return res.send({ res: op.a - op.b });
  } else if(op.op == "m"){
    return res.send({ res: op.a * op.b });
  } else if(op.op == "d"){
    return res.send({ res: op.a / op.b });
  }
  return res.send({ resultado: op });
});

app.listen(3000, () => {
  console.log("server started");
});
