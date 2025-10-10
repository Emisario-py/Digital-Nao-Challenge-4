const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/restaurants.controller");
const validate = require("../middlewares/validate");
const { restaurantSchema, querySchema } = require("../validators/restaurant.schema");

router.get("/", validate(querySchema, "query"), ctrl.getAll);
router.get("/:id", ctrl.getById);
router.post("/", validate(restaurantSchema), ctrl.create);
router.put("/:id", validate(restaurantSchema), ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
