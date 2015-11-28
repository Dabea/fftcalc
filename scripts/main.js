/**
 * Created by aanderson on 11/22/2015.
 */
'use strict';

var jobsDataObject = {
    1:  { name: "squire"    ,HPMod: 100 ,  MPMod : 75 ,  PAMod : 90 ,  MAMod : 80 , SPMod : 100 , move: 4 , jump: 3 , evade: 5, cHP :11,  cMP: 15,   cPA: 60,  cMA: 50, cSP:  100   },
    2:  { name: "chemist"   ,HPMod: 80 ,  MPMod : 75 ,  PAMod : 75 ,  MAMod : 80 , SPMod : 100 , move: 3 , jump: 3 , evade: 5, cHP :12,  cMP: 16,   cPA: 75,  cMA: 50, cSP:  100   },
    3:  { name: "knight"    ,HPMod: 120 , MPpMod : 80 ,  PAMod : 120 ,  MAMod : 80 , SPMod : 100 , move: 3 , jump: 3 , evade: 10, cHP :10,  cMP: 15,   cPA: 40,  cMA: 50, cSP:  100 },
    4:  { name: "archer"    ,HPMod: 100 , MPpMod : 65 ,  PAMod : 110 ,  MAMod : 80 , SPMod : 100 , move: 3 , jump: 4 , evade: 10, cHP :11,  cMP: 16,   cPA: 45,  cMA: 50, cSP:  100 },
    5:  { name: "monk"      ,HPMod: 135 , MPMod:   80, PAMod:  129, MAMod:  80, SPMod:  110, move:   3, jump:  4, evade:  20 , cHP:   9  , cMP: 13 ,  cPA:  48 ,  cMA:  50 , cSP: 100 },
    6:  { name: "priest"    ,HPMod:  80, MPMod:  120,  PAMod:  90, MAMod:  110, SPMod:  110 , move:  3,  jump:  3 , evade:  5 , cHP:   10 , cMP:  10,  cPA:   50,  cMA:   50, cSP:  100 },
    7:  { name: "wizard"    ,HPMod:  75, MPMod:  120,  PAMod:  60, MAMod:  150, SPMod:  100 , move:  3,  jump:  3 , evade:  5 , cHP:   12 , cMP:   9,  cPA:   60,  cMA:   50, cSP:  100 },
    8:  { name: "timeMage"  ,HPMod: 75 , MPMod: 120 ,  PAMod: 50 , MAMod: 130 , SPMod: 100  , move: 3 ,  jump: 3  , evade: 5  , cHP:   12 , cMP:  10,  cPA:   65,  cMA:   50, cSP:  100 },
    9:  { name: "summoner"  ,HPMod:  70, MPMod:  125,  PAMod:  50, MAMod:  125, SPMod:   90 , move:  3,  jump:  3 , evade:  5 , cHP:   13 , cMP:   8,  cPA:   70,  cMA:   50, cSP:  100 },
    10: { name: "thief"     ,HPMod:  90, MPMod:   50,  PAMod: 100, MAMod:   60, SPMod:  110 , move:  4,  jump:  4 , evade: 25 , cHP:   11 , cMP:  16,  cPA:   50,  cMA:   50, cSP:   90 },
    11: { name: "mediator"  ,HPMod:  80, MPMod:   70,  PAMod:  75, MAMod:   75, SPMod:  100 , move:  3,  jump:  3 , evade:  5 , cHP:   11 , cMP:  18,  cPA:   55,  cMA:   50, cSP:  100 },
    12: { name: "oracle"    ,HPMod:  75, MPMod:  110,  PAMod:  50, MAMod:  120, SPMod:  100 , move:  3,  jump:  3 , evade:  5 , cHP:   12 , cMP:  10,  cPA:   60,  cMA:   50, cSP:  100 },
    13: { name: "geomancer" ,HPMod: 110, MPMod:   95,  PAMod: 110, MAMod:  105, SPMod:  100 , move:  4,  jump:  3 , evade: 10 , cHP:   10 , cMP:  11,  cPA:   45,  cMA:   50, cSP:  100 },
    14: { name: "lancer"    ,HPMod: 120, MPMod:   50,  PAMod: 120, MAMod:   50, SPMod:  100 , move:  4,  jump:  3 , evade: 15 , cHP:   10 , cMP:  15,  cPA:   40,  cMA:   50, cSP:  100 },
    15: { name: "samurai"   ,HPMod:  75, MPMod:   75,  PAMod: 128, MAMod:   90, SPMod:  100 , move:  3,  jump:  3 , evade: 20 , cHP:   12 , cMP:  14,  cPA:   45,  cMA:   50, cSP:  100 },
    16: { name: "ninja"     ,HPMod:  70, MPMod:   50,  PAMod: 120, MAMod:   75, SPMod:  120 , move:  4,  jump:  4 , evade: 30 , cHP:   12 , cMP:  13,  cPA:   43,  cMA:   50, cSP:   80 },
    17: { name: "calculator",HPMod:  65, MPMod:   80,  PAMod:  50, MAMod:   70, SPMod:   50 , move:  3,  jump:  3 , evade:  5 , cHP:   14 , cMP:  10,  cPA:   70,  cMA:   50, cSP:  100 },
    18: { name: "bard"      ,HPMod:  55, MPMod:   50,  PAMod:  30, MAMod:  115, SPMod:  100 , move:  3,  jump:  3 , evade:  5 , cHP:   20 , cMP:  20,  cPA:   80,  cMA:   50, cSP:  100 },
    19: { name: "dancer"    ,HPMod:  60, MPMod:   50,  PAMod: 110, MAMod:   95, SPMod:  100 , move:  3,  jump:  3 , evade:  5 , cHP:   20 , cMP:  20,  cPA:   50,  cMA:   50, cSP:  100 },
    20: { name: "mime"      ,HPMod: 140, MPMod:   50,  PAMod: 120, MAMod:  115, SPMod:  120 , move:  4,  jump:  4 , evade:  5 , cHP:   6  , cMP: 30,  cPA:   35,  cMA:   40, cSP:  100 }
};

$(document).ready(function() {

$('#jobChoices').change(function() {
    changeJobImage();
});

$("input[name=gender]:radio").change(function () {
    changeJobImage();
});



});

function changeJobImage(){
    var value = $('#jobChoices').val();
    var currentJob =  $('#currentJob');
    var gender = $('input[name=gender]:checked').val();
    var fullJob = jobsDataObject[value].name + "-" + gender;
    character.job = jobsDataObject[value];

    currentJob.removeClass();
    currentJob.addClass(fullJob);
    console.log(jobsDataObject[value]);
    console.log(jobsDataObject);
}

function setUpHandlers() {
    this.onStartButtonClick = 1;
}