export class DataClima {
    "city":{
        "id": number,
        "name": string,
        "country": string
    }; 
    "cnt": number;
    "list": [
        {
            temp : {
                min: any;
                max: any;
            },
            weather : [{
                "main": string,
                "icon": any
            }]
        }          
    ]
}