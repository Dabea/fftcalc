/**
 * Created by aanderson on 11/22/2015.
 */

jobsDataObject = {
    1: "squire",
    2: "chemist",
    3: "knight",
    4: "archer"

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
    var fullJob = jobsDataObject[value] + "-" + gender;

    currentJob.removeClass();
    currentJob.addClass(fullJob);
    console.log(jobsDataObject[value]);
    console.log(fullJob);
}