import { Request, Response, Router } from "express";

const router = Router();

const students = [
  {
    name: "anderson",
    mail: "anderson.silva@mail.com",
    document: "00500600780",
    password: "root",
    age: 22,
  },
  {
    name: "joao",
    mail: "joao.silva@mail.com",
    document: "00600700890",
    password: "root1",
    age: 23,
  },
  {
    name: "paulo",
    mail: "paulo.silva@mail.com",
    document: "00100200340",
    password: "root3",
    age: 24,
  },
  {
    name: "robson",
    mail: "robson.silva@mail.com",
    document: "00200300450",
    password: "root4",
    age: 25,
  },
];

router.get("/", (req: Request, res: Response) => {
  res.send(students);
});

router.get("/:document", (req: Request, res: Response) => {
  const student = students.find(
    (student) => student.document === req.params.document
  );
  if (!student)
    return res.status(400).send({ message: "Estudante não encontrado" });

  res.status(200).send(student);
});

router.post("/", (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({
      message: "Estudante não foi criado pois não tem a idade mínima(18 anos).",
    });
  }

  students.push(req.body);
  res.status(201).send({ message: "Estudante cadastrado com sucesso" });
});

router.put("/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.document === req.params.document
  );

  if (studentIndex === -1) {
    return res.status(400).send({ message: "Estudante não encontrado." });
  }

  students[studentIndex] = req.body;
  res.status(200).send({ message: "Informações atualizadas com sucesso." });
});

router.delete("/remove/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.document === req.params.document
  );

  if (studentIndex === -1) {
    return res.status(400).send({ message: "Estudante não encontrado." });
  }

  students.splice(studentIndex, 1);
  res.status(200).send({ message: "Estudante removido com sucesso." });
});

export default router;
