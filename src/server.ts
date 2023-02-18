import app from "./app";
import { connectDataBase } from "./dataBase";
app.listen(3000, async () => {
  await connectDataBase();
  console.log("server is running");
});
