const { UserModel } = require('../models/User');
const { RequirementModel } = require('../models/Requirement');
const { AreaModel } = require('../models/Area');

const Mutation = {
    createUser: async (parent, { input }) => {
      const newUser = new UserModel({
        userName: input.userName,
        userFirstName: input.userFirstName,
        userLastName: input.userLastName,
        userEmail: input.userEmail,
        userPassword: input.userPassword,
        userRole: input.userRole,
      });
      await newUser.save();
      return newUser;
    },
    createRequirement: async (parent, { input }) => {
        const newRequirement = new RequirementModel({
            rqName: input.rqName,
            rqDescription: input.rqDescription,
            rqStatus: 'To do',
            rqTags: input.rqTags,
            rqArea: input.rqArea,
            rqUser: input.rqUser,
        });
        await newRequirement.save();
        return newRequirement;
      },
    createArea: async (parent, { input }) => {
        const newArea = new AreaModel({
          areaName: input.areaName,
          areaDescription: input.areaDescription,
        });
        await newArea.save();
        return newArea;
    },
  };
  
  module.exports = Mutation; 