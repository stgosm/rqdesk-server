const mongoose = require('mongoose');

const RequirementSchema = new mongoose.Schema({
    rqName: String,
    rqDescription: String,
    rqTags: String,
    rqStatus: String,
    rqArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area',
    },
    rqUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
},{
  timestamps: true,
});

const RequirementModel = mongoose.model('Requirements', RequirementSchema);
module.exports = { RequirementModel, RequirementSchema };