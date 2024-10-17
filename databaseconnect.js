const mongoose=require('mongoose')
const monguri="mongodb://localhost:27017/nodejsapi";
const connectdb=async ()=>{
    try{
        await mongoose.connect(monguri,{
            useNewUrlparser:true,
            useUnifiedTopology:true
        });
        console.log('connected to the database successfully')
    }
    catch(err){
        console.log(`error while connecting the database ${err.message}`)
        process.exit()
    }
};




module.exports=connectdb