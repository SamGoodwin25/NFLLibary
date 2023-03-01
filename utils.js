var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/NFL%20Teams.csv"

// takes a division and gets teams that are in that division
// Division {string} sees the teams that match the inputted division
// return {list} returns teams that match the parameter
function getTeamsInDivision(division){
var divisions = getColumn(url, 2);
var team = getColumn(url, 3);
var divisionlist = [];
for ( var i = 0; i < divisions.length; i++){
  if (divisions[i].toLowerCase().includes(division.toLowerCase()) && division.length > 0){
    divisionlist.push(team[i]);
  }
  }
if (divisionlist.length == 0) {
    return "There's no matches";
}
  return divisionlist;
}
console.log(getTeamsInDivision("south"));

//takes a confernce and returns teams in that conference
// Conference {string} sees the teams that match the inputted conference
// return {list} returns teams that match the parameter
function getTeamsInConference(Conference){
var confrences = getColumn(url, 1);
var team = getColumn(url, 3);
var Conferencelist = [];
for ( var i = 0; i < confrences.length; i++){
  if (confrences[i].toLowerCase() == Conference.toLowerCase() && Conference.length == 3){
    Conferencelist.push(team[i]);
  }
}
  if (Conferencelist.length == 0) {
    return "There's no matches";
}
return Conferencelist;
}
console.log(getTeamsInConference("NFC"));

//returns the coach of a inputted team
//team {string} finds the team that matches the inputed team
//return {string} returns the coaches of a team
function getTeamHeadCoach(team){
  if(typeof team != "string"){
    return "do it right, please"
  }
var headCoaches = getColumn(url, 7);
var teams = getColumn(url, 3);
for ( var i = 0; i < headCoaches.length; i++){
  if (teams[i].toLowerCase().includes(team.toLowerCase())) {
    return headCoaches[i];
  }
}
return "Theres no matches"
}
console.log(getTeamHeadCoach("Eagles"));

//finds the stadium and the stadiums capicity that thr inputted team plays at
//team {string} finds a team that matches the inputed team
//return {list} returns the stadium and stadium capacity
function getStadiumAndCapacity(team){
  var Stadium = getColumn(url, 5);
  var teams = getColumn(url, 3);
  var capacity = getColumn(url, 6);
var StadiumlistCapList = [];
for (var i=0; i<Stadium.length; i++){
  if(teams[i].includes(team)){
    StadiumlistCapList.push(capacity[i]);
    StadiumlistCapList.push(Stadium[i])
  }
    
  
}  
  if (StadiumlistCapList.length == 0) {
    return "This is not a valid team";
  }
  
  return StadiumlistCapList;

}
console.log(getStadiumAndCapacity("Dolphins"));

//returns the teams logo image url of the inputted team
//team {string} finds a team that matches the inputed team
//return {string} returns image url of that teams logo
function getTeamsImageUrl(team){
  var image=getColumn(url, 8);
  var teams = getColumn(url, 3);
  for (var i=0; i<image.length; i++){
    if(teams[i].toLowerCase().includes(team.toLowerCase())){
     return image[i];
    }
  }

  return "c'mon man put in a valid team"
  
}
console.log(getTeamsImageUrl("Ravens"));

function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

