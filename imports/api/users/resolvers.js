
export default {
  Query: {
    user(obj, args, context){
      let user;
      if(context.user){
        user = context.user;
      } else {
        user = {};
        //user._id = '-1';
      }
      console.log('user: ', user);
      return user;
    }
  },
  User: {
    email : user => user.emails[0].address
  }
}