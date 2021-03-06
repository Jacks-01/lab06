'use strict';
console.log('connected');

//our store hours are defined
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
let tFooter = document.getElementById('renderFooter');




//create constructor function for each store
//                ('seattle', 23 , 65, 6.3, [], [], 0);
function Stores(location, minCustomer, maxCustomer, avgCookies, custHour, cookiesHour, totalCookies){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.custPerHour = custHour;
  this.cookiesPerHour = cookiesHour;
  this.totalCookies = totalCookies;
  allStores.push(this);


}
console.log(allStores);
//find the customers per hour for each store.
Stores.prototype.customerPerHour = function(){

  for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(random(this.maxCustomer, this.minCustomer));
    //   console.log(this.custPerHour);
  }

};

Stores.prototype.avgCookie = function (){
  for(let i = 0; i < hours.length; i++){
    let randomCookies = Math.round(this.custPerHour[i] * this.avgCookies);
    //   console.log(randomCookies);
    this.cookiesPerHour.push(randomCookies);
    // console.log('type of totalCookies' + typeof this.totalCookies);
    this.totalCookies += randomCookies;
    // console.log(this.cookiesPerHour);
  }
};


/**
 *
 * @param {integer} maxCustomer max customer for each store
 * @param {integer} minCustomer min customer for each store
 * @returns random number for the functions in each object
 */
function random(maxCustomer, minCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);

}
let tBody = document.getElementById('renderTable');

Stores.prototype.renderTable = function(){
  let rowBody = document.createElement('tr');
  let storeName = document.createElement('td');
  storeName.textContent = this.location;
  rowBody.appendChild(storeName);

  for(let i = 0; i < hours.length; i++){
    let tableData = document.createElement('td');
    tableData.textContent = ` ${this.cookiesPerHour[i]}`;
    rowBody.appendChild(tableData);
  }
  //show the totals for the store
  let totalData = document.createElement('td');
  totalData.textContent = `${this.totalCookies}`;
  rowBody.appendChild(totalData);
  tBody.appendChild(rowBody);

  Stores.prototype.renderFooter();
};

Stores.prototype.renderFooter = function(){
  tFooter.innerHTML = '';
  let footerRow = document.createElement('tr');
  let footerData = document.createElement('td');
  footerData.textContent = 'Totals';
  footerRow.appendChild(footerData);
  //loop through the stores, add the 6am sales to the total variable
  for(let j = 0; j < hours.length; j++){

    let total = 0;
    for(let i = 0; i < allStores.length; i++){
      total += allStores[i].cookiesPerHour[j];
    }
    let footerTotal = document.createElement('td');
    footerTotal.textContent = total;
    footerRow.appendChild(footerTotal);
    tFooter.appendChild(footerRow);
  }//created a table data element for total

  let total = 0;
  for(let x = 0; x < allStores.length; x++){

    total += allStores[x].totalCookies;
    // console.log(total);

  }
  let cookieTotal = document.createElement('td');
  // console.log('142',cookieTotal);
  cookieTotal.textContent = total;
  // console.log('144',cookieTotal);
  footerRow.appendChild(cookieTotal);
  // console.log('146',footerRow);
  tFooter.appendChild(footerRow);
  // console.log('148',tFooter);
};

let seattle = new Stores('seattle',23 ,65, 6.3, [], [], 0);
seattle.customerPerHour();
seattle.avgCookie();
// seattle.renderTable();
// console.log(seattle);

let tokyo = new Stores('tokyo',3 ,24, 1.2, [], [], 0);
tokyo.customerPerHour();
tokyo.avgCookie();
// tokyo.renderTable();
// console.log(tokyo);


let dubai = new Stores('dubai', 11 , 38, 3.7, [], [], 0);
dubai.customerPerHour();
dubai.avgCookie();
// dubai.renderTable();
// console.log(dubai);

let paris = new Stores('paris', 20, 38, 2.3, [], [], 0);
paris.customerPerHour();
paris.avgCookie();
// paris.renderTable();
// console.log(paris);

let lima = new Stores('lima', 2, 16, 6.3, [], [], 0);
lima.customerPerHour();
lima.avgCookie();
// lima.renderTable();
// console.log(lima);

// let allStores = [seattle, tokyo, dubai, paris, lima];
// console.log(allStores);


function onFormSubmission(event){
  event.preventDefault();
  console.log(event.target);

  //grab store location
  const storeLocation = event.target.location.value;
  console.log(storeLocation);
  const minCust = Number(event.target.minCust.value);
  console.log(minCust);
  const maxCust = Number(event.target.maxCust.value);
  console.log(maxCust);
  const cookiesPerHour = Number(event.target.cookiesPerHour.value);
  console.log(cookiesPerHour);
  form.reset();

  let newStore = new Stores(storeLocation, minCust, maxCust, cookiesPerHour, [], [], 0);
  newStore.customerPerHour();
  newStore.avgCookie();
  Stores.prototype.renderAllStores();
  console.log(newStore);

}

let form = document.getElementById('new-store-form');
form.addEventListener('submit', onFormSubmission);
// form.reset;


Stores.prototype.renderAllStores = function (){
  console.log(allStores);
  tBody.innerHTML = '';
  for(let i = 0; i< allStores.length; i++){
    allStores[i].renderTable();
  }
};
Stores.prototype.renderAllStores();
// on form submission > run render header table, then append form data> render footer data
