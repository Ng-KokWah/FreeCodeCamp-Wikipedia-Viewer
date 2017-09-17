var site = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=return&search=';
var callback = '&callback=?';

var temp;

function clicked() {
  temp = document.getElementById("content").value;
  
   $.getJSON(site + temp + callback, function(data)    {
     
     //fills in all the titles in the table
      for(var i =0; i<data[1].length; i++) {
        var t = i+1; 
        document.getElementById("title"+t).innerHTML = JSON.stringify(data[1][i]).replace(/['"]+/g, '');
      }
     
     //fills in all the description in the table
     for(var j=0; j<data[2].length; j++) {
       var u = j+1;
       document.getElementById("desc"+u).innerHTML = JSON.stringify(data[2][j]).replace(/['"]+/g, '');
     }
     
     var sizeofdata = data.length -1;
     //fills in all the linkes in the table
     for(var k=0; k<data[sizeofdata].length + 1; k++) {
       var v = k+1;
       var link = JSON.stringify(data[sizeofdata][k]).replace(/['"]+/g, '');
       document.getElementById("link"+v).innerHTML = "<a href=\""+link+"\" target=\"_blank\">Click here to go to the page!</a>";
        
       
     }
   });
}