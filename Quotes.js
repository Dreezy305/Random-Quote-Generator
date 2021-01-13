//declare an object of quotes which holds all the quotes//

var lifeQuotes = [
  ["I am a leaf on the wind. Watch how I soar.", "- Hoban Washburne"],["We\'re not gonna die. We can't die, Bendis. You know why? Because we are so very pretty. We are just too pretty for God to let us die.", "- Malcolm Reynolds"], ["We\'ve done the impossible, and that makes us mighty.", "- Malcolm Reynolds"], ["Sleepiness is weakness of character. Ask anyone.", "- Hoban Washburne"], ["I get confused. I remember everything. I remember too much, and... some of its made up, and... some of it can\'t be quantified, and... there\'s secrets.", "- River Tam"], ["Well my days of not taking you seriously are certainly coming to a middle.", "- Malcolm Reynolds"], ["Haven't you killed me enough for one day?", "- Malcolm Reynolds"], ["Mal! Looks like we got some imminent violence!", "- Jayne Cobb"], ["I\'m with the losing side, but not the wrong one.", "- Malcolm Reynolds"], ["Everything's shiny, Cap\'n. Not to fret.", "- Kaylee Frye"], ["If I didn\'t know better, I\'d think we were dangerous.", "- Kaylee Frye"], ["Up until the punching, it was a real nice party.", "- Kaylee Frye"], ["I don\'t care what you believe in, just believe in it.", "- Shepherd Derrial Book"], ["How we treat our dead is part of what makes us different...than those did the slaughtering.", "- Shepherd Derrial Book"], ["Do you know what the definition of a hero is? Someone who gets other people killed. You can look it up later.", "- Zoe Washburne"], ["You paid money for this, sir? On purpose?", "- Zoe Washburne"], ["Live for each second without hesitation", "- Elton John"], ["Life is like riding a bicycle. To keep your balance, you must keep moving.", "- Albert Einstein"], ["The big lesson in life, baby, is never be scared of anyone or anything.", "-Frank Sinatra"], ["Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.","- Attributed to Various Resources"], ["You only live once, but if you do it right, once is enough.", "- Mae West"], []
  ];


var index = [];

var random;

//iterates through the quotes object//
randomQuotes = () => {

  random  = Math.floor(Math.random() * lifeQuotes.length);

  for( var i = 0;  i < lifeQuotes.length;  i++ ) {

 document.getElementById("newQuote").innerHTML =  lifeQuotes[random][0];
          document.getElementById("newAuthor").innerHTML =  lifeQuotes[random][1];

    return lifeQuotes[random];
  }
};

randomQuotes();

tweetQuotes = () => {

  window.open('https://twitter.com/intent/tweet?text=' + lifeQuotes[random] + " " + "width=200,height=100");
};

tweetQuotes();
