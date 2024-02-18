function create_car(manufacturer, modelName, options) {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        options: options
    };
}
var myCar = create_car('Mercedes', 'C63', { color: 'Black', year: 2009, sunroof: true });
console.log(myCar);
