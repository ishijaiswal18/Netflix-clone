const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");
const List = require("../models/List");



// create
router.post("/", verify, async (req, res) => {
    
    if (req.user.isAdmin) {
      const newMovie = new Movie(req.body);
      const isSeries = req.body.isSeries;
      console.log(req.body);
      try{
          console.log("a");
        const savedMovie = await newMovie.save();
        
        console.log("b");
        // find one movie with isSeries = true
        // const movie = await Movie.findOne({isSeries: false});
        // console.log(movie);
        
        const list = await List.findOne({"type": isSeries ? "series" : "movie", "genre": req.body.genre});
        console.log("c");
        console.log(list);
        if (list) {
          list.content.push(savedMovie);
          await list.save();
        }
        else{
            // console.log("gbjdsn ");
            const newList = new List({
                title: isSeries ? "Series" : "Movies" + " " + req.body.genre,
                type: isSeries ? "series" : "movie",
                genre: req.body.genre,
                content: [savedMovie]
            });
            await newList.save();
        }
        res.status(200).json(savedMovie);
      }catch(err){
            res.status(500).json(err);
        }
        
    
    } else {
      res.status(403).json("You are not authorized to create a movie!");
    }
  });

// update
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id.at,
                {$set : req.body},
            {new : true});
            res.status(201).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not authorized to update a movie!");
    }
});

// delte
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not authorized to delete a movie!");
    }
});

// get
router.get("/find/:id", verify, async (req, res) => {
    
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
    
});

// get random 
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movies;
    try{
        if(type === "series"){
            movies = await Movie.aggregate([
                { $match: {isSeries: true} },
                { $sample: { size: 1 } },
            ]);
        }
        else{
            movies = await Movie.aggregate([
                { $match: {isSeries: false} },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movies);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.get("/", verify, async (req, res) => {
    
    if(req.user.isAdmin){
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You are not authorized to see all movies!");
    }
});

module.exports = router;
