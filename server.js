const express = require("express");
const app = express();

app.use(logger)
app.set('view engine', 'ejs')

//app.get("/", (req, res, next) => res.render("index", { text: 'World' }))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true })) //Allows you to use the body of the request
app.use(express.json())

const PORT = 3000; // const PORT = process.env.PORT || 3000;

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));