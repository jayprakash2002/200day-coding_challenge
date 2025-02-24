const mongoose = require('mongoose');



//mongoose.connect('mongodb://127.0.0.1:27017/test');


main()
.then ((res) =>{
    console.log("connection successful");
})
    
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // 
}
const userSchema =new mongoose.Schema({
    name: String,
    email:String,
    age:Number,
});
const User =mongoose.model("User",userSchema);


const user2=new User({
    name: "adam",
    email:"adam@soo",
    age:4.8,
});
   user2.save()
   .then((res)=>{
    console.log(res);
   })
   .catch((err)=>{
    console.log(err);
   });