import goals from './goals';



export default {
  Mutation: {
    createGoal(obj, args){
      //console.log(obj,args,context);

      const goalId = goals.insert({
        name: args.name,
        resolutionId: args.resolutionId,
        completed: false
      });
      return goals.findOne(goalId)
    }

  }
};
