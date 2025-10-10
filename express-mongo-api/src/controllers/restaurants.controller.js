const { ObjectId } = require("bson");
const { getCollection } = require("../db");

exports.getAll = async (req, res) => {
  const { page, limit, borough, cuisine, name } = req.query;
  const col = getCollection();

  const filter = {};
  if (borough) filter.borough = borough;
  if (cuisine) filter.cuisine = cuisine;
  if (name) filter.name = { $regex: name, $options: "i" };

  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    col.find(filter).skip(skip).limit(limit).toArray(),
    col.countDocuments(filter)
  ]);

  res.json({
    total,
    page,
    pages: Math.ceil(total / limit),
    items
  });
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const col = getCollection();
  const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { restaurant_id: id };

  const doc = await col.findOne(query);
  if (!doc) return res.status(404).json({ message: "Restaurant not found" });
  res.json(doc);
};

exports.create = async (req, res) => {
  const col = getCollection();
  const result = await col.insertOne(req.body);
  const doc = await col.findOne({ _id: result.insertedId });
  res.status(201).json(doc);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const col = getCollection();

  const query = ObjectId.isValid(id)
    ? { _id: new ObjectId(id) }
    : { restaurant_id: id };

  const result = await col.updateOne(query, { $set: req.body });

  if (result.matchedCount === 0) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  const updated = await col.findOne(query);
  res.status(200).json(updated);
};

exports.remove = async (req, res) => {
  const id = req.params.id;
  const col = getCollection();
  const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { restaurant_id: id };

  const result = await col.deleteOne(query);
  if (!result.deletedCount) return res.status(404).json({ message: "Restaurant not found" });
  res.status(204).send();
};
