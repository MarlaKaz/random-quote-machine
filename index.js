var quotes = [
    ['The way I see it, if you want the rainbow, you gotta put up with the rain.', 'Dolly Parton'],
    ['Act as if what you do makes a difference. IT DOES.', 'William James'],
    ['Feel what you need to feel and then let it go. Do not let it consume you.', 'Dhiman'],
    ['Not how long, but how well you have lived is the main thing.', 'Seneca'],
    ['You will face many defeats in life, but never let yourself be defeated.', 'Maya Angelou'],
    ['If you want to fly, give up everything that weighs you down.', 'Gurubogsa'],
    ['Sometimes you will never know the value of a moment, until it becomes a memory.', 'Dr. Seuss'],
    ['Forgive others, not because they deserve forgiveness, but because you deserve peace.', 'Jonathan Lockwood Huie'],
    ['Tomorrow is the first page of a 365 page book. Write a good one.', 'Brad Paisley'],
    ['We fall. We break. We fail.  But then.. We rise. We heal. We overcome.', 'Unknown'],
    ['Surround yourself with people who are only going to lift you higher.', 'Unknown'],
    ['Every next level of your life will demand a different you.', 'Unknown'],
    ['If opportunity does not knock, build a door.', 'Milton Berle'],
    ['Winners are not people who never fail but people who never quit.', 'Unknown'],
    ['Make everyday a little less ordinary.', 'Unknown'],
    ['Intellectual growth should commence at birth and cease only at death.', 'Albert Einstein'],
    ['Stay close to anything that makes you glad you are alive.', 'Hafez'],
    ['Do not let anyone dull your sparkle.', 'Unknown'],
    ['When women take care of their health, they become their best friend.', 'Maya Angelou'],
    ['Your only limit is your mind.', 'Unknown'] 
  ];
  
 
  function randomIndex() {
    return Math.floor((Math.random() * quotes.length));
  }
  
  function newQuote() {
    document.getElementById("text").innerHTML = "";
    document.getElementById("author").innerHTML = "";
    index = randomIndex(quotes);
    var str = quotes[index][0];
    var str2 = quotes[index][1];
    for(let i=0; i<=str.length; i++){
      setTimeout(function(){
      document.getElementById("text").innerHTML = str.substr(0,i);
      },500+i*80);
       setTimeout(function(){
      document.getElementById("author").innerHTML = "- " + str2;
    },5700);
    }
    $('#tweet-quote').attr(
'href',
'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
  encodeURIComponent('"' + str + '" ' + str2)
);
  }