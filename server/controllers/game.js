const Game 									        = require("../models/Game");
const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const dotenv 									    = require('dotenv');
dotenv.config();

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