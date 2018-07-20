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
    },
    completed: resolution => {
      const goalsList = goals.find({
        resolutionId: resolution._id
      }).fetch();

      const completedGoals = goalsList.filter(goal => goal.completed);
      return goalsList.length > 0 && (goalsList.length === completedGoals.length) //if length == 0 -> !0 == true else !number == false
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
