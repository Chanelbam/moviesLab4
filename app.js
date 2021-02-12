/*
 Authors:
 Your name and student #: Kya (Chanel Bam A01248645)
*/
const express = require("express");
const fs = require('fs');

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
  console.log(req.body)
  const Entermovies = req.body.movies.split(',')
  console.log(Entermovies)
  res.render(_dirname = "/views/pages/index", { Entermovies})
});
  


app.get("/myListQueryString", (req, res) => {
  let movielist = new movieList();
  res.render(_dirname = "/views/pages/index",{
    listvariable: date
  });
});


app.get("/search/:movieName", (req, res) => {
  console.log(req.body)
  fs.readfile('movieDescriptions.txt', (err, data) => {
    if (err){
      console.error(err)
      return("Movie could not be found")
    }
    console.log(data);
    const lookMovies = req.body.lookMovies.split(',')
  console.log(lookMovies)
  res.render(_dirname = "/views/pages/searchResult.ejs", { lookMovies })
  });

//use  .find or  .includes for the search part
});


app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});