const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
id:String,
title:String,
year:Number,
platforms:Array,

  }, { timestamps: true, });

const Game = model("Game", gameSchema);

module.exports = Game;