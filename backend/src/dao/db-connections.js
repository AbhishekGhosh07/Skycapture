const { Client }  = require('pg');

const getClient = ()=>{
    return  new Client({
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "0211",
        database: "skycapture" 
    }) 
    
}

const connectDB = async (client)=>{
    try{
        await client.connect();
        console.log("database connected");
    }
    catch(err){
        console.log(err);

    }
}

const disconnectDB = async (client)=>{
    try{
        await client.end();
        console.log("database disconnected");
    }
    catch(err){
        console.log(err);

    }
}
module.exports = {getClient,disconnectDB,connectDB};



