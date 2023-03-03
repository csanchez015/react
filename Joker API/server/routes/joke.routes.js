const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.getAll);
    app.get("/api/jokes/random", JokeController.randomJoke);
    app.get("/api/jokes/:_id", JokeController.getOne);
    app.post("/api/jokes/new", JokeController.create);
    app.put("/api/jokes/update/:_id", JokeController.updateOne);
    app.delete("/api/jokes/delete/:_id", JokeController.deleteOne);
}