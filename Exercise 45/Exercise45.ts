function create_car(manufacturer: string, modelName: string, options: { [key: string]: any }): { manufacturer: string, modelName: string, options: { [key: string]: any } } {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        options: options
    };
}

let myCar = create_car('Mercedes', 'C63', { color: 'Black', year: 2009, sunroof: true });

console.log(myCar);