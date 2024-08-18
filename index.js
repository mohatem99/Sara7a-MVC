import express from "express";
import connectionDb from "./Db/connectionDb.js";
import session from "express-session";
import homeRouter from "./src/modules/home/home.routes.js";
import loginRouter from "./src/modules/login/login.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import messagesRouter from "./src/modules/messages/messages.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import mongoSession from "connect-mongodb-session";
const MongoDBStore = mongoSession(session);
const app = express();

var store = new MongoDBStore({
  uri: "mongodb://127.0.0.1/sara7a",
  collection: "mySessions",
});
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "Sara7a Encrption",
    resave: false,
    saveUninitialized: true,
    store,
  })
);
connectionDb();

app.use(express.static("public"));
app.use(homeRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(messagesRouter);
app.use(userRouter);
app.listen(3000, () => console.log(`Server up and runing`));
