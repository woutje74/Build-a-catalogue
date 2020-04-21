class Catalog {
  constructor(){
     this._medium = [];
  }
    get medium(){
        return this._medium;
    }

    addMedia(media){
        this._medium.push(media);
    }
}

class Media {
    constructor(medium, title){
      this._mediaType = medium;
      this._title = title;
      this._isCheckedOut = false;
      this._numCheckedOut = 0;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    get ratings() {
      return this._ratings;
    }
    
    set isCheckedOut(status) {
        return this._isCheckedOut = true;
    }

    getAverageRating() {
        const totalNumberOfRatings = this._ratings.length;
        let totalRating = this._ratings.reduce((acc, curr) => acc + curr, 0);
        const averageRating = totalRating / totalNumberOfRatings;
        return averageRating;
    }
    
    toggleCheckOutStatus() {  //toggle the status of _isCheckedOut and add 1 to the counter numCheckedOut if the status changes from false to true (on checkout)
      if (!this._isCheckedOut){
        this._numCheckedOut++;
        return this._isCheckedOut = true;
        } else {
        return this._isCheckedOut = false;
        };  
    }
    
    addRating(newRating) {
        if (newRating >= 1 && newRating <= 5){
            this._ratings.push(newRating);
        } else {
          console.log('Please enter a rating between 1 and 5');
        }
    }
  }
  
  class Book extends Media {
    constructor(medium, title, author, pages){
      super('book', title);
      this._author = author;
      this._pages = pages;
    }
    
    get author(){
      return this._author;
    }
    
    get pages() {
      return this._pages;
    }
  }

  class Movie extends Media {
    constructor(medium, title, director, runTime){
      super('movie', title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = [];
    }
    
    get director(){
      return this._director;
    }
    
    get runTime() {
      return this._runtime;
    }

    addMovieCast(castmember){
        this._movieCast.push(castmember);
      }
  }

  class CD extends Media {
    constructor(medium, title, artist, songs){
      super('cd', title);
      this._artist = artist;
      this._songs = songs;
      this._songTitles = [];
    }
    
    get artist(){
      return this._artist;
    }
    
    get songs() {
      return this._songs;
    }

    get songTitles() {
        return this._songTitles;
    }

    addSongTitles(song){ // adds a song title to a CD object only if the array length for songTitles has not yet exceeded the number of songs
      if (this._songTitles.length < this._songs){
        this._songTitles.push(song);
      } else {
        console.log('Song cannot be added as it exceeds the number of tracks on this CD');
      }
    }

    shuffleSongs(songTitles){
        for (let i = this._songTitles.length -1; i>0 ; i--){
            let j = Math.floor(Math.random() * (i+1));
            [this._songTitles[i], this._songTitles[j]] = [this._songTitles[j], this._songTitles[i]]
        }
    }
  };

const bookCatalogue = new Catalog(); // creates an class instance of Catalog for storing books;
const movieCatalogue = new Catalog(); // creates an class instance of Catalog for storing movies;
const cdCatalogue = new Catalog(); // creates an class instance of Catalog for storing cd's;

const historyOfEverything = new Book('book', 'A short History of Nearly Everything', 'Bill Bryson', '544');
const berniniMystery = new Book('book', 'The Bernini Mystery', 'Dan Brown', '650');
const theFirm = new Book('book', 'The Firm', 'John Grisham', '750');
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.toggleCheckOutStatus(); 
historyOfEverything.toggleCheckOutStatus(); 
historyOfEverything.toggleCheckOutStatus(); 


//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
/*console.log(historyOfEverything);
console.log(historyOfEverything.getAverageRating());*/

const speed = new Movie ('movie','Speed', 'Jan de Bont', '116');
speed.toggleCheckOutStatus(); //toggle status from false to true; add 1 to counter
speed.toggleCheckOutStatus(); //toggle status from false to true; no add
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.addMovieCast('Sandra Bullock');
/*console.log(speed.isCheckedOut);
console.log(speed);
console.log(speed.getAverageRating());*/

const hello = new CD ('cd','Hello', 'Adele', 5);
hello.addRating(4);
hello.addRating(4);
hello.addRating(5);
hello.addSongTitles('Hello');
hello.addSongTitles('Love');
hello.addSongTitles('Sadness');
hello.addSongTitles('Divorce');
hello.addSongTitles('Marriage');
hello.addSongTitles('Died');
hello.addSongTitles('Born');
/*console.log('Original trackorder: ', hello.songTitles);
hello.shuffleSongs();
console.log('After 1st shuffle: ', hello.songTitles);*/


const catalogus = new Catalog();

bookCatalogue.addMedia(historyOfEverything);
bookCatalogue.addMedia(berniniMystery);
bookCatalogue.addMedia(theFirm);
cdCatalogue.addMedia(hello);
movieCatalogue.addMedia(speed);

console.log(bookCatalogue.medium);
console.log(movieCatalogue.medium);
console.log(cdCatalogue.medium);