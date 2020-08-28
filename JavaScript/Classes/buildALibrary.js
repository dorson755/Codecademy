class media {
  constructor(title){
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = true;
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
  set isCheckedOut(status){
    this._isCheckedOut = status;
  }
  toggleCheckedOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
    /*if(this._isCheckedOut === false){
      this._isCheckedOut ===true;
    } else if (this._isCheckedOut === true) {
      this._isCheckedOut === false;
    }*/
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum/this.ratings.length;
  }
  addRating(rating){
    return this.ratings.push(rating);
  }
}

class book extends media{
  constructor (author, title, pages){
    super(title);
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

class movie extends media{
  constructor (director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything = new book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//historyOfEverything.isCheckedOut = false;
historyOfEverything.toggleCheckedOutStatus;
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckedOutStatus;
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

