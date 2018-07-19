import resolutions from './resolutions';
import goals from '../goals/goals';


export default {
  Query: {
    resolutions(obj, args, context){
      console.log('context:', context);
      if(!context.userId){
        return [];
      }
      const res = resolutions.find({
        userId: context.userId
      }).fetch();
      console.log('res: ',res)
      return res;
    }
  },

  Resolution: {
    goals: (resolution) => {
      return goals.find({resolutionId: resolution._id}).fetch();
    }
  },

  Mutation: {
    createResolution(obj, args, context){
      //console.log(obj,args,context);

      const resolutionId = resolutions.insert({
        name: args.name,
        userId: context.userId
      });
      return resolutions.findOne(resolutionId);
    }

  }
};
