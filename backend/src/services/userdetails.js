const  addUser  = require('../dao/dataAccessLayer'); 

const handler = async (req,event,context,callback)=>{
    try{
        console.log("Inside Handler");
        const response = await addUser(event);
        console.log('line 7');
        

    }
    catch(err){
        console.log(err);
    }
}

module.exports = handler;
