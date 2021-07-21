
var ft = new Fetch();
var ui = new UI();



var search = document.getElementById("searchUser");
var button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
   
    ui.populateUI(data);
    
    ui.saveToLS(data);
  });
});



window.addEventListener("DOMContentLoaded", () => {
  var dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});