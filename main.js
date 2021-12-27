class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

get title(){
  return this._title;
}
get isCheckedOut(){
  return this._isCheckedOut;
}
get rating(){
  return this._ratings;
}
set isCheckedOut(newIsCheckedOut){
  this._isCheckedOut= newIsCheckedOut;
}
toggleCheckOutStatus(){
  this.isCheckedOut = !this.isCheckedOut;
}
getAverageRating(){
  let sumRatings = this._ratings.reduce((sumValue, rating)=> sumValue + rating);

  return sumRatings / this._ratings.length;  
}
addRating(value){
  return this._ratings.push(value);
}
}

class Book extends Media{

  constructor(title, author, pages){
    super (title);
    this._author = author;
    this._pages = pages;
  }

get author(){
  return this._author;
}

get pages(){
  return this._pages;
}
}

class Movie extends Media {

  constructor(director, title, runtime){
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get director(){
    this._director;
  }

  get runtime (){
    this._runtime;
  }
}


//Instance of Books
const historyOfEverything = new Book('A short History of Nearly Everything', 'Bill Bryson', 554);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

//Instance of Movie;
const speed = new Movie('Jan de Bont','Speed',116)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

