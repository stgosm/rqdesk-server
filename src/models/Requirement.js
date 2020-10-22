const mongoose = require('mongoose');

const RequirementSchema = new mongoose.Schema({
    rqName: String,
    rqDescription: String,
    rqStatus: String,
    rqTags: [String],
    rqArea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Areas',
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