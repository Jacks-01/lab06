'use strict';
console.log('are we connected.');
/* Problem Domain --> calculate number of cookies by location every day
1. create objects for each store.
    - attributes (given to us in description)
        - min/max hourly customers
        - avg cookies per customer
2. Use a method with that object to generate a random number.
3. Calculate and store amount of cookies purchased each hour at each
    location using avg cookies purchased and random number of customers generated.
4. Store results for each location in a separate array.
    - property of the object representing that location
5. Display the values of each array as a <ul> on the browser
6. Calculate the sum of hourly totals for each location.
*/

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  customerPerHour: [],
  cookiesPerHour : [],
  totalCookies : 0,

  rngCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(random(this.maxCustomer, this.minCustomer));
    //   console.log(this.customerPerHour);
    }
  },
  randomCookie : function (){
    this.rngCustomer();
    for(let i = 0; i < hours.length; i++){
      let cookieHour = Math.round(this.customerPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(cookieHour);
      //   console.log(cookieHour);
      this.totalCookies += cookieHour;
      //   console.log(cookieHour);

    }
  },
  render(){
    this.randomCookie();
    let unorderedList = document.getElementById('seattle');

    for(let i = 0; i < hours.length; i++){
        let listItem = document.createElement('li');
        listItem.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cornz per hour`
        unorderedList.appendChild(listItem);
    }
    //show the totals for the store
    let totalList = document.createElement('li');
     totalList.textContent = `${this.totalCookies} total corn cookies per hour`;
     unorderedList.appendChild(totalList);
  }


};//closes object seattle.

seattle.render();
console.log(seattle);




let tokyo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,

  rngCustomer: function () {
    this.rng = randomCustomer(minCustomer, maxCustomer) + 'amount of customers';


  },
  customerPerHour: [],
  cookiesPerHour : [],
  totalCookies : 0,

  rngCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(random(this.maxCustomer, this.minCustomer));
      console.log(this.customerPerHour);
    }
  },
  randomCookie : function (){
    this.rngCustomer();
    for(let i = 0; i < hours.length; i++){
      let cookieHour = Math.round(this.customerPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(cookieHour);
      console.log(cookieHour);
      this.totalCookies += cookieHour;
      console.log(cookieHour);

    }
  },
  render(){
    this.randomCookie();
    let unorderedList = document.getElementById('tokyo');

    for(let i = 0; i < hours.length; i++){
        let listItem = document.createElement('li');
        listItem.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cornz per hour`
        unorderedList.appendChild(listItem);
    }
    //show the totals for the store
    let totalList = document.createElement('li');
     totalList.textContent = `${this.totalCookies} total corn cookies per hour`;
     unorderedList.appendChild(totalList);
      }
};// closes object tokyo

let tokyoHead = document.getElementById('tokyoHead')
tokyoHead.textContent = 'Tokyo Sales';

tokyo.render();
console.log(tokyo);

let dubai = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,

  rngCustomer: function () {
    this.rng = randomCustomer(minCustomer, maxCustomer) + 'amount of customers';


  },
  customerPerHour: [],
  cookiesPerHour : [],
  totalCookies : 0,

  rngCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(random(this.maxCustomer, this.minCustomer));
      console.log(this.customerPerHour);
    }
  },
  randomCookie : function (){
    this.rngCustomer();
    for(let i = 0; i < hours.length; i++){
      let cookieHour = Math.round(this.customerPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(cookieHour);
      console.log(cookieHour);
      this.totalCookies += cookieHour;
      console.log(cookieHour);

    }
  },
  render(){
    this.randomCookie();
    let unorderedList = document.getElementById('dubai');
    console.log(seattle);
  }

};

let paris = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,


  rngCustomer: function () {
    this.rng = randomCustomer(minCustomer, maxCustomer) + 'amount of customers';


  },

  customerPerHour: [],
  cookiesPerHour : [],
  totalCookies : 0,

  rngCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(random(this.maxCustomer, this.minCustomer));
      console.log(this.customerPerHour);
    }
  },
  randomCookie : function (){
    this.rngCustomer();
    for(let i = 0; i < hours.length; i++){
      let cookieHour = Math.round(this.customerPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(cookieHour);
      console.log(cookieHour);
      this.totalCookies += cookieHour;
      console.log(cookieHour);

    }
  },
  render(){
    this.randomCookie();
    let unorderedList = document.getElementById('paris');
    console.log(seattle);
  }

};

let lima = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,

  rngCustomer: function () {
    this.rng = randomCustomer(minCustomer, maxCustomer) + 'amount of customers';


  },
  customerPerHour: [],
  cookiesPerHour : [],
  totalCookies : 0,

  rngCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(random(this.maxCustomer, this.minCustomer));
      console.log(this.customerPerHour);
    }
  },
  randomCookie : function (){
    this.rngCustomer();
    for(let i = 0; i < hours.length; i++){
      let cookieHour = Math.round(this.customerPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(cookieHour);
      console.log(cookieHour);
      this.totalCookies += cookieHour;
      console.log(cookieHour);

    }
  },
  render(){
    this.randomCookie();
    let unorderedList = document.getElementById('lima');
    console.log(seattle);
  }
};


function random(maxMonth, minMonth) {
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);

}

// render things to the dom.
const li = document.createElement('li');


