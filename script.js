/**
 * Created with winns40.
 * User: hwinn
 * Date: 2015-08-10
 * Time: 12:20 AM
 * To change this template use Tools | Templates.
 */
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/18eaxyVm_F40vA5NXYDvfEoe-tZl52UxmKoeTc7LSqWg/pubhtml';
//var well_wishes = {};
$(document).ready(function() {
    console.log("ready");
    Tabletop.init({
        key: '18eaxyVm_F40vA5NXYDvfEoe-tZl52UxmKoeTc7LSqWg',
        callback: function(data, tabletop) {
            convertToDict(data)
        },
        simpleSheet: true
    })
});
// function showInfo(data, tabletop) {
//     alert("Successfully processed!")
//     console.log(data);
// }

function convertToDict(data, tabletop) {
    var well_wishes = {};
    console.log("convertToDict: " + data.length);
    for(i = 0; i < data.length; i++) {
        well_wishes[data[i]["First Name"]] = [data[i]["Last Initial"], data[i]["Note"]];
    }
    presentWishes(well_wishes);
}

function presentWishes(well_wishes) {
    //for(i = 0; i < Object.keys(well_wishes).length; i++) {
    var keys = [];
    //console.log(well_wishes);
    for(var index in well_wishes) {
        keys.push(index);
    }
    console.log("Keys: ", keys);
    for(i = 0; i < keys.length; i++) {
        
        var wish_message_HTML = "<div class='message' style='color:black; margin-top:20px;margin-bottom:0px;;'>" + well_wishes[keys[i]][1] + "</div><br>";
        var wish_name_HTML = "<div class='name' style='color:#862626;margin-bottom:10px; margin-top:0px; '>--" + keys[i] + " " + well_wishes[keys[i]][0] + "</div>";
        $(" #wishes").prepend(wish_message_HTML,wish_name_HTML);
    }
}