const Game 									        = require("../models/Game");
const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const dotenv 									    = require('dotenv');
const locationService                               = require('../services/location.service');
const DriverLocation                                = require("../models/DriverLocation");
const user                                          = require("../models/tbl_user");
const userService                                   = require("../services/user.service");
dotenv.config();


exports.user = async (req, res)=> {
    try{
        if(!req.body){
            return res.send(getFailureResponse('ETU_0001', "Please provide the required fields"));
        }
        const userCreate = await userService.createUser(req.body);
        return res.send(getSuccessResponse(userCreate));
    }catch(err){
        return res.send(getFailureResponse("ETU_0001",err.message));  
    }
}
exports.create = async (req, res) => {
	if(!req.body.name){
        return res.send(getFailureResponse('ETU_0001', "Game name is missing"));
	}
	const gameData = await Game.find({name:req.body.name});
    if(gameData.length>0){
        return res.send(getFailureResponse('ETU_0002', "Game name is already exist"));
    }
    const game  = new Game({
        name:req.body.name
    });
    const gameResponse = await game.save();
    if(gameResponse){
        return res.send(getSuccessResponse(gameResponse));
    }else{
        return res.send(getFailureResponse('ETU_0001', err.message+" Some error occurred"));
    }
}

exports.saveDriverLocation = async ( req, res) =>{
    try{
        if(!req.body){
            return res.send(getFailureResponse('ETU_0001', "driver name is missing"));
        }
        var paramBody = {
            name:req.body.name,
            location:{
                type: "Point",
                coordinates : [req.body.longitude, req.body.lattitude]
            }
        }
        const driverLocation =  new DriverLocation(paramBody);
        const driverLocationData =  await driverLocation.save();
        if(driverLocationData){
            return res.send(getSuccessResponse(driverLocationData));
        }else{
            return res.send(getFailureResponse('ETU_0001',"driver location issue"))
        }
    }catch(err){
        return res.send(getFailureResponse('ETU_0001',err.message));
    }
}

exports.getNearestDriverByDistance =  async (req, res) =>{
    try{
        if(req.body.radius==undefined || req.body.radius=='' || req.body.radius==null){
            return res.send(getFailureResponse("ETU_0001","Please provide the radius"));
        }
        if(req.body.lattitude==undefined || req.body.lattitude=='' || req.body.lattitude==null){
            return res.send(getFailureResponse("ETU_0001", "Please provide the lattitude"));
        }
        if(req.body.longitude==undefined || req.body.longitude=='' || req.body.longitude==null){
            return res.send(getFailureResponse("ETU_0001", "Please provide the longitude"));
        }
        const nearestDriverLocation = await locationService.getNearestLocation(req.body);
        if(nearestDriverLocation){
            return res.send(getSuccessResponse(nearestDriverLocation));
        }else{
            return res.send(getFailureResponse("ETU_0001","Some error occured"))
        }
    }catch(err){
        return res.send(getFailureResponse("ETU_0001",err.message));
    }
}