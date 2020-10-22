const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
    areaName: String,
    areaDescription: String,
},{
  timestamps: true,
});

const AreaModel = mongoose.model('Areas', AreaSchema);
module.exports = { AreaModel, AreaSchema };