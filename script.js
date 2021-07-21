//inst classes//

var ft = new Fetch();
var ui = new UI();

//add event listeners//

var search = document.getElementById("searchUser");
var button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  var dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});