const service = async() =>{
    console.log("Mock Service");
    return Promise.resolve({
        data:{
                    "place name": "Kissimmee",
                    "longitude": "-81.4242",
                    "state": "Florida",
                    "state abbreviation": "FL",
                    "latitude": "28.3051"
                }
    })
}

const serviceId = async(id) =>{
    console.log("Mock Service ID");
    return Promise.resolve({
        data: {
                    "place name": "Kissimmee",
                    "longitude": "-81.4242",
                    "state": "Florida",
                    "state abbreviation": "FL",
                    "latitude": "28.3051"
            }
    });
};

module.exports = {service, serviceId}