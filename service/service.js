const axios = require('axios');
require("dotenv").config();


const service = async() =>{
    console.log("Real Service");
    return await axios.get(`${process.env.URL}`)
}

const serviceId = async(id) =>{
    console.log("Real Service By ID");
    return await axios.get(`${process.env.URL}${id}`)
};

module.exports = {service, serviceId}