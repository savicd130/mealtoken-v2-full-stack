const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    shortDesc: { type: String, required: true },
    fullDesc: { type: String, required: true },
    imgPath: { type: String, required: true },
    available: { type: Boolean, required: true, default: true },
    category: { type: String, required: true },
    hotSales: { type: Boolean, required: true, default: false },
    reviews: [
      { grade: { type: Number, required: true } },
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
      { comment: { type: String } },
      { data: { type: Date, default: Date.now } },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
