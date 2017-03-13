/**
 * Created by aanderson on 12/5/2015.
 */


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