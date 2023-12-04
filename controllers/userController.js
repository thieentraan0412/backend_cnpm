const Order = require("../models/Order");
const User = require("../models/User");
const Price = require("../models/Price");
const File = require("../models/File");
const userController = {
  //GET ALL USER

  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  GetPrice: async (req, res) => {
    try {
      const { type_page } = req.body;
      const results = await Price.findOne({
        prices: { $elemMatch: { type_page: type_page } },
      }).exec();
      const foundObject = results.prices.find(
        (item) => item.type_page === type_page
      );
      res.json(foundObject.price);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  GetTypePage: async (req, res) => {
    try {
      const { type_page } = req.body;
      const results = await Price.findOne({
        prices: { $elemMatch: { type_page: type_page } },
      }).exec();
      const foundObject = results.prices.find(
        (item) => item.type_page === type_page
      );

      res.json(foundObject.price);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  AddOrder: async (req, res) => {
    try {
      const { number_page, type_page } = req.body;
      const results = await Price.findOne({
        prices: { $elemMatch: { type_page: type_page } },
      }).exec();
      const foundObject = results.prices.find(
        (item) => item.type_page === type_page
      );
      const value_price = Number(foundObject.price) * Number(number_page);
      const neworder = await new Order({
        username: req.user.username,
        number_page: number_page,
        type_page: type_page,
        price: value_price,
        status: "Đang Chờ",
      });
      await neworder.save();
      res.status(200).json("Success");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  HistoryOrder: async (req, res) => {
    try {
      const history = await Order.find({ username: req.user.username });
      res.status(200).json(history);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  Print: async (req, res) => {
    try {
      const { originalname, mimetype, buffer } = req.file;
      const newFile = new File({
        filename: originalname,
        contentType: mimetype,
        type_file: "pdf",
        status: "xuli",
        data: buffer,
      });

      await newFile.save();

      res.json({ message: "File uploaded successfully" });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  HistoryPrint: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
