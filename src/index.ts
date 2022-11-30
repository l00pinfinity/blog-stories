import * as express from "express";

const app = express();

app.use('/', (req: express.Request, res: express.Response) => res.send("It contains my blog posts online, do you have any suggestions? A correction, perhaps? Make a pull request on Github or open an issue"));
app.listen(3000, ()=> console.log("Listening on http://localhost:3000"));