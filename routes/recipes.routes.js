const express = require("express");
const router = express.Router();
module.exports = router;

router.post("/addRecipe", async (req, res) => {
  console.log("Add recipe");
});

router.get("/getRecipes", async (req, res) => {
  console.log("Get recipes");
  res.json("Get recipes");
});

router.get("/getRecipes/:id", async (req, res) => {
  console.log("Get recipe by id");
  const id = req.params.id;
  res.json("Get recipe" + id);
});

router.patch("/updateRecipes/:id", async (req, res) => {
  console.log("Update recipe");
});

router.delete("/deleteRecipes/:id", async (req, res) => {
  console.log("Delete recipe");
});
