const router = require("express").Router();

const { Biscuit } = require("../../db.config");

router.get("/", async (req, res) => {
   const biscuit = await Biscuit.findAll();
   res.json(biscuit);
});

router.get("/:id", async (req, res) => {
   const biscuit = await Biscuit.findOne({ where: { id: req.params.id}});
   res.json(biscuit);
});

router.post("/", async (req, res) => {
   const newBiscuit = await Biscuit.create(req.body);
   res.json(newBiscuit);
});

router.put("/:id", async (req, res) => {
   await Biscuit.update(req.body, {
      where: { id: req.params.id },
   });
   res.json({ success: "update-->" });
});

router.delete("/:id", async (req, res) => {
   await Biscuit.destroy({
      where: { id: req.params.id },
   });
   res.json({ success: "delete-->" });
});

module.exports = router;
