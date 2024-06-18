import express from "express";
import router from "./routes";

const app = express();
const PORT = 1245;

app.use(router);
app.listen(PORT, () => {
  process.stdout.write(`Server listening at -> http://localhost:${PORT}\n`);
});

export default app;
module.exports = app;
