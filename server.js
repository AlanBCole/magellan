var express = require("express"),
    app = express(),
    port = 3000;

  app.get("/main.css", (req,res)=>{
    res.sendFile("main.css", {root: "./"})
  });
  
  app.get("/", (req, res)=>{
    res.sendFile("seville.html", {root : "./"});
  });

  app.get("/canary-islands", (req, res)=>{
    res.sendFile("canary-islands.html", {root : "./"});
  });

  app.get("/cape-verde", (req, res)=>{
    res.sendFile("cape-verde.html", {root : "./"});
  });

  app.get("/straight-of-magellan", (req, res)=>{
    res.sendFile("straight-of-magellan.html", {root : "./"});
  });

  app.get("/guam", (req, res)=>{
    res.sendFile("guam.html", {root : "./"});
  });

  app.get("/phillipines", (req, res)=>{
    res.sendFile("phillipines.html", {root : "./"});
  });



app.listen(port, ()=>{
  console.log(`server running on 127.0.0.1:${port}...`);
})
