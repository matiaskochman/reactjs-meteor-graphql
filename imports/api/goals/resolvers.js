import goals from './goals';

export default {
  Mutation: {
    createGoal(obj, args, context){
      if(context.userId){
        const goalId = goals.insert({
          name: args.name,
          resolutionId: args.resolutionId,
          completed: false
        });
        return goals.findOne(goalId)
      } else {
        throw new Error('Unauthorized')
      }
    },
    toggleGoal(obj, args, context){
      if(context.userId){
        const goal = goals.findOne(args._id);
        goals.update(args._id, {
          $set: {
            completed: !goal.completed
          }
        });
        return goals.findOne(args._id);
      } else {
        throw new Error('Unauthorized')
      }

    }
  }
};
