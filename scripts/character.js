/**
 * Created by aanderson on 11/28/2015.
 */
'use strict';

var character = {
    level :0,
    job: "squire",
    gender:0,
    HP:0,
    MP:0,
    CT:100,
    PA:0,
    MA:0,
    SP:0,
    move:0,
    jump:0,
    evade:0,
    RHP:0,
    RMP:0,
    RSP:0,
    RPA:0,
    RMA:0
};

var startingRawStats = {

    male : {
        RSP : 98304,
        RPA: 81920,
        RMA: 35536,
        RHP: function(){return   Math.floor(Math.random() * 32767) + 491520; },
        RMP: function(){return   Math.floor(Math.random() * 16383) + 229376; }
    },
    female :{
        RSP : 98304,
        RPA: 81920,
        RMA: 35536,
        RHP: function(){return   Math.floor(Math.random() * 32767) + 458752; },
        RMP: function(){return   Math.floor(Math.random() * 16383) + 245760 ; }
    }
};


//Initilizs the stats
character.create = function(gender){
    character.RSP = startingRawStats[gender].RSP;
    character.RPA = startingRawStats[gender].RPA;
    character.RMA = startingRawStats[gender].RMA;
    character.RHP = startingRawStats[gender].RHP();
    character.RMP = startingRawStats[gender].RMP();
    character.gender = gender;
};

//This is the base equation that determins the stats for the characters
function statAlgorithm( rawstat, jobMultiplier){
 return (rawstat * jobMultiplier) / 1638400;
}

// This will run though each stat and calculate it
function stats(){
    var statTypes = [ 'HP' , 'MP' , 'PA', 'MA', 'SP'];
    character.HP = statAlgorithm(character.RHP, character.job.HPMod  );
    character.MP = statAlgorithm(character.RMP, character.job.MPMod  );
    character.PA = statAlgorithm(character.RPA, character.job.PAMod  );
    character.MA = statAlgorithm(character.RMA, character.job.MAMod  );
    character.SP = statAlgorithm(character.RSP, character.job.SPMod  );
    character.move = character.job.move;
    character.jump = character.job.jump;
    character.evade = character.job.evade;

}

