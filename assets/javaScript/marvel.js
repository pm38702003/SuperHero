
// function getMarvelResponse(characterName) {
  function getMarvelResponse() {
      // you need a new ts every request                                                                                    
    var ts = new Date().getTime();
      //creates the
    var hash = CryptoJS.MD5(ts + "64db9fdab53906ac65de6ccadc60239d59f68cc1" + "3037032bf180053850405c0db9a5a3ce").toString();

    // character name for search, should be passed into function as above or grabbed from
    // html input object
    characterName = "Wolverine" 
    var superHeroObject;
    var url = 'http://gateway.marvel.com:80/v1/public/characters';

    $.ajax({
      url: url,
      method: "GET",
      data: { ts: ts, apikey: "3037032bf180053850405c0db9a5a3ce", hash: hash, name: characterName } //use data to pass attributes to query
    }).then(function (response) {

      console.log(response); //response
      console.log(response.data.results[0]);  // our serach result object
      superHeroObject =response.data.results[0];  // dril down into data to get superhero object

      
      console.log(superHeroObject.name);  //character name
      console.log(superHeroObject.description); //synopsis

      //array of urls from superhoro uses find method to find comic link url
      var comicLink =(superHeroObject.urls).find(o=> o.type ==="comiclink").url;  
      console.log(comicLink) //comiclink url, this is a cool site              
      
      //image url
      var thumbnail = superHeroObject.thumbnail.path + "."  + superHeroObject.thumbnail.extension;
      console.log(thumbnail) 

      var p = $("<p>");
      p.text("Name--> " + superHeroObject.name);  
      $("#sample-view").append(p);

      var p1 = $("<p>");
      p1.text("Description--> " + superHeroObject.description);
      $("#sample-view").append(p1);

      var p2 = $("<p>");
      p2.text("Comiclink--> " + comicLink);
      $("#sample-view").append(p2);
      
      var p3 = $("<p>");
      p3.text("Thumbnail--> " + thumbnail)
      $("#sample-view").append(p3)





        
    }).then(function (response) {
      // this is where we call the second API,  I havent test this but i think this is where we would do it...
      // we can also add some error handling a bit later to handle failed calls to API
    })
  };

  getMarvelResponse();