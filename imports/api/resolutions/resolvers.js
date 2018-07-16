import resolutions from './resolutions';



export default {
  Query: {
    resolutions(obj, args, context){
      console.log('context:', context);
      return resolutions.find({}).fetch();
    }
  },

  Mutation: {
    createResolution(obj, args, context){
      console.log(obj,args,context);

      const resolutionId = resolutions.insert({
        name: args.name
      })
    }

  }
};
