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
    },
    toggleGoal(obj, args){
      const goal = goals.findOne(args._id);
      goals.update(args._id, {
        $set: {
          completed: !goal.completed
        }
      });
      return goals.findOne(args._id);
    }
  }
};
