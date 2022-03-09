const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const movieRoute = require("./Routes/movie");
const listRoute = require("./Routes/lists");

dotenv.config();
// app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);

app.listen(8800, () => {
    console.log("Server started on port 8800");
});