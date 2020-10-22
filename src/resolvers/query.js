const { UserModel } = require('../models/User');
const { RequirementModel } = require('../models/Requirement');
const { AreaModel } = require('../models/Area');

const Query = {
    status: () => {
      return `Welcome to RQdesk on GraphQL`;
    },
    users: async () => {
        const users = await UserModel.find();
        return users;
    },
    requirements: async () => {
        const requirements = await RequirementModel
            .find()
            .populate('rqArea') 
            .exec();
        console.log(requirements);
        return requirements;
    },
    areas: async () => {
        const areas = await AreaModel.find();
        return areas;
    },
  };
  
  module.exports = Query; 