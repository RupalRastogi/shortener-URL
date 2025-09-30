const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const {connectMongooseToMongoDB} = require('./connect');
const { checkForAuthentication, restrictTo  } = require('./middleware/auth');

const URL = require('./models/url'); // model

const urlRoutes = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRoutes = require('./routes/user');

const app = express();

const port = 8000;


// connect to mongoDB using mongoose
connectMongooseToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("Mongoose connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});


app.set("view engine", "ejs"); // setting view engine to ejs
app.set("views", path.resolve("./views") )

app.use(express.json()); // to parse json body
app.use(express.urlencoded({extended: true})); // to parse urlencoded body 
app.use(cookieParser()); // to parse cookies 
app.use(checkForAuthentication);



//Hey Express, for every request starting with /url, use the routes defined in urlRoutes
app.use("/url", restrictTo(["NORMAL", "ADMIN"]) ,urlRoutes);
app.use("/user", userRoutes);
app.use("/", staticRouter);

app.get("/url/:shortId", async(req, res)=>{
  const shortID = req.params.shortId;
   
   const entry = await URL.findOneAndUpdate(
    { shortId: shortID }, // filter as object
    { $push: { visitHistory: { timestamp: Date.now() } } },
    { new: true } // return the updated document
  );
  
   res.redirect(entry.redirectUrl);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});