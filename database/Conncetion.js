import mongoose from 'mongoose';

const DBMS_URL="mongodb+srv://janardhanchowdary03:Janardhan%4003@cluster0.7k1f8uh.mongodb.net/project_complete?retryWrites=true&w=majority"
const Connect = async ()=>{
await mongoose.connect(DBMS_URL, {
    useNewUrlParser: true,
  }).then(console.log("Connected with database.")).catch(err=> console.log("Error :",err));
}

export default Connect;