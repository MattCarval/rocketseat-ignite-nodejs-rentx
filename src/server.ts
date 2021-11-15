import express from "express";

const PORT = 3333;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(
    `\n🚀 Server is running! 🚀\n🚀 Check server in http://localhost:${PORT} 🚀\n`
  );
});
