/**
 * Created by aanderson on 11/28/2015.
 */
'use strict';

var character = {
    level :1,
    job: jobsDataObject[1],
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
        RMA: 65536,
        RHP: function(){return   Math.floor(Math.random() * 32767) + 491520; },
        RMP: function(){return   Math.floor(Math.random() * 16383) + 229376; }
    },
    female :{
        RSP : 98304,
        RPA: 65536,
        RMA: 81920,
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
    character.level = 1;
};

//This is the base equation that determins the stats for the characters
function statAlgorithm( rawstat, jobMultiplier){
 return Math.floor( ((rawstat * jobMultiplier) / 1638400));
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

function start(){
    var gender = getGender();
    character.create(gender);
    $("input[name=gender]").attr('disabled', true);
    stats();
}

function restart(){
    $("input[name=gender]").attr('disabled', false);

}

function getGender(){
    var gender =  $("input[name=gender]:checked").val();
    return gender;

}

function update(){

}

// This will update the stats
function levelUp(number){
    for(var i = 0; i < number; i++) {
        character.RHP = character.RHP + (character.RHP / (character.job.cHP + character.level) );
        character.RMP = character.RMP + (character.RMP / (character.job.cMP + character.level) );
        character.RPA = character.RPA + (character.RPA / (character.job.cPA + character.level) );
        character.RMA = character.RMA + (character.RMA / (character.job.cMA + character.level) );
        character.RSP = character.RSP + (character.RSP / (character.job.cSP + character.level) );
        character.level = character.level + 1;
    }
    stats();
    displayStats();
}

function levelDown(number){
    for(var i = 0; i < number; i++) {
        character.RHP = character.RHP - (character.RHP / (character.job.cHP + character.level) );
        character.RMP = character.RMP - (character.RMP / (character.job.cMP + character.level) );
        character.RPA = character.RPA - (character.RPA / (character.job.cPA + character.level) );
        character.RMA = character.RMA - (character.RMA / (character.job.cMA + character.level) );
        character.RSP = character.RSP - (character.RSP / (character.job.cSP + character.level) );
        character.level = character.level - 1;
    }
    stats();
    displayStats();
}

function displayStats(){
    $("#level").val(character.level);
    $("#hp").val(character.HP);
    $("#mp").val(character.MP);
    $("#ct").val(character.CT);
    $("#pa").val(character.PA);
    $("#ma").val(character.MA);
    $("#move").val(character.move);
    $("#jump").val(character.jump);
    $("#speed").val(character.SP);
}