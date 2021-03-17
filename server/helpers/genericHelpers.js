exports.milesToRadian = async function(miles){
        var earthRadiusInMiles = 3959;
        return miles / earthRadiusInMiles;
}