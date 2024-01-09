const { connectDB, disconnectDB, getClient } = require('./db-connections');
const bcrypt = require('bcrypt');

const addUser = async (params) => {
    const client = getClient();
    const saltRounds = 10;
    console.log(params.password);
    let salt;
    try {
        salt = bcrypt.genSaltSync(saltRounds);
        pass = bcrypt.hashSync(params.password,salt);
        console.log("inside add user");
        console.log(pass);
        await connectDB(client);
        const result = await client.query(`Insert into users.user_details(name,email,phone,password) values ($1,$2,$3,$4)`, [params.name, params.email, params.phone,pass]);
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(JSON.stringify(err));
        throw err;
    }
    finally {
        console.log('inside finally');
        await disconnectDB(client);

    }


}

const getFlight = async (params) => {
    const client = getClient();
    try {
        console.log('inside getFlight');
        connectDB(client);
        const dept_city = params.departure_city.toLowerCase();
        const arr_city = params.arrival_city.toLowerCase();
        console.log(`SELECT id, flight_number, flight_company, departure_city, arrival_city
        FROM flights.flight_details where departure_city = '${dept_city}' and arrival_city = '${arr_city}';`)
        const result = await client.query(`SELECT id, flight_number, flight_company, departure_city, arrival_city
        FROM flights.flight_details where departure_city = '${dept_city}' and arrival_city = '${arr_city}';`);
        console.log('result', result.rows);
        return result.rows;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('inside finally');
        await disconnectDB(client);

    }
}


module.exports = { addUser, getFlight };