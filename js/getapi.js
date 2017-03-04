var champ = ["Ahri", "Akali", "Anivia", "Annie", "Azir", "Bard", "Caitlyn", "Camille", "Darius", "Diana", "Draven",
"Ekko", "Elise", "Evelynn", "Fiora", "Garen", "Graves", "Hecarim", "Illaoi", "Irelia", "Janna", "Jhin", "Jinx", "Karma",
"Katarina", "Kha Zix", "Kled", "Leblanc", "Leona", "Lissandra", "Lulu", "Lux", "Malzahar", "Miss Fortune", "Morgana",
"Nami", "Nautilus", "Orianna", "Quinn", "Riven", "Sejuani", "Sona", "Soraka", "Taliyah", "Tristana", "Twitch", "Veigar",
"Vi", "Viktor", "Xerath", "Xin Zhao", "Zyra"];

var adj = ["fudida(o)", "desgraçada(o)", "inútil", "rainha/rei", "dona(o)", "cagada(o)"]

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');
}
var lastname = '-----';

var nextname = '-----';

var rolls = 0;
var lastn, nextn = '';

function GetTheChamp() {
  var n = RandomNumber(champ.length);
  var x = RandomNumber(adj.length);
  $('#splash').attr('src', 'http://ddragon.leagueoflegends.com/cdn/7.4.3/img/champion/' + champ[n].replace(/\s|'&#39;'/g, '') + '.png');
  $('#name').text(champ[n] + ' ' + titleCase(adj[x]));

  if(rolls == 0) {
    $('#name').text(champ[n] + ' ' + titleCase(adj[x]));
    lastn = $('#name').text();
    rolls++;
  } else if(rolls == 1) {
    $('#name').text(champ[n] + ' ' + titleCase(adj[x]));
    $('#nextname').text(lastn);
    lastn = $('#name').text();
    nextn = $('#nextname').text();
    rolls++;
  } else {
    $('#name').text(champ[n] + ' ' + titleCase(adj[x]));
    $('#nextname').text(lastn);
    $('#lastname').text(nextn);
    lastn = $('#name').text();
    nextn = $('#nextname').text();
  }

  rolls = 2;

}

function RandomNumber(max) {
  return Math.floor((Math.random() * max));
}

var last = 'cyan';

function ChangeColor(color) {
  $('#body').removeClass(last).addClass(color);
  $('#but').removeClass(last).addClass(color);
  last = color;
}
