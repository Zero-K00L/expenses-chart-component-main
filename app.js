// Gets data from json file and then loops through the data to create elements for the bar graph.

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var data = data;
    var tbody = document.getElementById("data");
    data.forEach(function(item) {
      var tr = document.createElement("tr");
      var day = document.createElement("td");
      var amount = document.createElement("td");
      var box = document.createElement("td");
      day.textContent = item.day;
      amount.textContent = item.amount;
      tr.appendChild(box)
      tr.appendChild(amount);
      tr.appendChild(day);
      tbody.appendChild(tr);
      day.textContent = item.day;
      amount.textContent = item.amount;
      box.textContent = '$' + item.amount;
      box.classList.add('hidden');
      amount.classList.add('amount');
      amount.style.height = item.amount*2.85 + 'px';  // Sets the height scale for the bar graph columns, higher numbers mean larger columns

      // Gets the elements that have the .amount class and adds an event listener 'click' to them.
      amount.addEventListener('click', function() {
        // Loops elements that have the .hidden class and toggles the 'hidden' class
        box.classList.toggle('hidden');
      });
    });
});






