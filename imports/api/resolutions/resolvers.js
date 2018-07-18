import resolutions from './resolutions';



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

  Mutation: {
    createResolution(obj, args, context){
      //console.log(obj,args,context);

      const resolutionId = resolutions.insert({
        name: args.name,
        userId: context.userId
      })
    }

  }
};
