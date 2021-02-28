const Player 									    = require("../models/PlayerRegistration");
const { getSuccessResponse, getFailureResponse }    = require('../utils/helpers');
const dotenv 									    = require('dotenv');
dotenv.config();

exports.playerRegistration = async (req, res) => {
	if(!req.body.game_id){
        return res.send(getFailureResponse('ETU_0001', "game id is missing"));
    }
    if(!req.body.players){
        return res.send(getFailureResponse('ETU_0001', "Players is missing"));
	}
	const playerData = await Player.find({game_id:req.body.game_id});
    if(playerData.length>0){
        return res.send(getFailureResponse('ETU_0002', "For this game player is already exist"));
    }
    var playersDetails = req.body.players;
    if(playersDetails.length==0){
        return res.send(getFailureResponse('ETU_0002', "Please provide the players details for this"));
    }
    var playerList = [];
    for(var i=0;i<playersDetails.length;i++){
        playerList.push({"game_id":req.body.game_id,"name":playersDetails[i],"id":new Date().valueOf()+i})
    }
    //const player  =  await new Player(playerList);
    const playerResponse = await Player.insertMany(playerList);
    if(playerResponse){
        return res.send(getSuccessResponse(playerResponse));
    }else{
        return res.send(getFailureResponse('ETU_0001', err.message+" Some error occurred"));
    }
}

exports.play = async (req, res) =>  {
    try{
        var game_id     = req.params.game_id;
        var player_id   = req.params.player_id;
        if(game_id==undefined || player_id==null || player_id==''){
            return res.send(getFailureResponse('ETU_0001', "game id is missing"));
        }
        if(player_id==undefined || player_id==null|| player_id==''){
            return res.send(getFailureResponse('ETU_0001', "Player id is missing"));
        }
        if(req.body.score==undefined || req.body.score==null || req.body.score.length==0){
            return res.send(getFailureResponse('ETU_0001', "Please provide throw array"));
        }
        var scoreList = [];
        var playerData = await Player.findOneAndUpdate({"game_id":game_id,"id":player_id},{
            playerFrame:req.body.score
        }, {new:true});
        if(playerData){
            var playersScore = await Player.find({"game_id":game_id});
            for(var i=0;i<playersScore.length;i++){
                var playerFrame = playersScore[i].playerFrame;
                var scoreSum = 0;
                for(var j=0;j<playerFrame.length;j++){
                    if(playerFrame[j]==10 && j<playerFrame.length-2){
                        scoreSum = scoreSum+ playerFrame[j]+playerFrame[j+1]+playerFrame[j+2]
                    }else{
                        scoreSum = scoreSum+ playerFrame[j];
                    }
                }
                scoreList.push({"player_id":playersScore[i].player_id,"score":scoreSum})
            }
            return res.send(getSuccessResponse(scoreList));
        }else{
            //return res.send(getFailureResponse('ETU_0001'," Some error occurred"));
        }
    }catch(err){
        return res.send(getFailureResponse('ETU_0001',err+"Some error occurred"));
    }
    
}

exports.score = async (req, res) => {
    try{
        var game_id     = req.params.game_id;
        var player_id   = req.params.player_id;
        if(game_id==undefined || player_id==null || player_id==''){
            return res.send(getFailureResponse('ETU_0001', "game id is missing"));
        }
        if(player_id==undefined || player_id==null|| player_id==''){
            return res.send(getFailureResponse('ETU_0001', "Player id is missing"));
        }
        var scoreList = [];
        var playersScore = await Player.findOne({"game_id":game_id,"id":player_id});
        var playerFrame = playersScore.playerFrame;
        var scoreSum = 0;
        var frameWise = [];
        var k=0;
        for(var j=0;j<playerFrame.length;j++){
            if(playerFrame[j]==10 && j<playerFrame.length-2){
                scoreSum = scoreSum+ playerFrame[j]+playerFrame[j+1]+playerFrame[j+2];
            }else{
                scoreSum = scoreSum+ playerFrame[j];
            }
            if(playerFrame[k]==10){
                frameWise.push([playerFrame[k]]);
                k= k+1;
            }else{
                if(k<playerFrame.length-1)
                frameWise.push([playerFrame[k],playerFrame[k+1]])
                k = k+2;
            } 
        }
        scoreList.push({"frameWise":frameWise,"total_score":scoreSum})
        return res.send(getSuccessResponse(scoreList));
    }catch(err){
        return res.send(getFailureResponse('ETU_0001',err+"Some error occurred"));
    }
}