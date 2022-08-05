const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Pokemon = require("./models/pokemon");
const pokemonData = require("./utilities/pokemonData");

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Seed route
app.get("/pokemon/seed", async (req, res) => {
  //Clear database
  await Pokemon.deleteMany({});
  // Create a list of pokemon into our database
  await Pokemon.create(pokemonData);
  res.redirect("/pokemon");
});

// Homepage
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Index route
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemon: allPokemon,
    });
  });
});

// New route
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// Post route
app.post("/pokemon/", (req, res) => {
  req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
  Pokemon.create(req.body, (error, pokemon) => {
    res.redirect("/pokemon");
  });
});

// Show route
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

// Edit route
app.get("/pokemon/:id/edit", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    if (!error) {
      res.render("Edit", {
        pokemon: foundPokemon,
      });
    } else {
      res.send({
        message: error.message,
      });
    }
  });
});

// Update route
app.put("/pokemon/:id", (req, res) => {
  req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
  Pokemon.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updatedPokemon) => {
      res.redirect(`/pokemon/${req.params.id}`);
    }
  );
});

// Delete route
app.delete("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect("/pokemon");
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
