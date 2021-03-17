const Location          = require("../models/DriverLocation");
const radiusCalculation =  require("../helpers/genericHelpers")

exports.getNearestLocation = async function(params){
    var radius = await radiusCalculation.milesToRadian(params.radius);
    var query = {
        "location" : {
            $geoWithin : {
                $centerSphere : [[params.longitude,params.lattitude], radius ]
            }
        }
    };
    var result = await Location.find(query);
    return result;
}