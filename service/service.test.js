const {service, serviceId} = require ('../service/service')

describe('Testing Service', () => {
    test('Testing Service ', async () => {;
        const result = await service();
        expect(result.data.country).toEqual("United States");
        console.log(result.data);
    });
    
    test('Testing Service by Id', async () => {
        const result = await serviceId(32789);
        expect(result.data.places).toEqual([{"latitude": "28.5978", "longitude": "-81.3534", "place name": "Winter Park", "state": "Florida", "state abbreviation": "FL"}])
    })
});

