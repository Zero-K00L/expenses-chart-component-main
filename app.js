fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var data = data;
    var tbody = document.getElementById("data");
    data.forEach(function(item) {
      var tr = document.createElement("tr");
      var day = document.createElement("td");
      var amount = document.createElement("td");
      day.textContent = item.day;
      amount.textContent = item.amount;
      tr.appendChild(day);
      tr.appendChild(amount);
      tbody.appendChild(tr);
      day.textContent = item.day;
      amount.textContent = item.amount;
      amount.classList.add('amount');
      amount.style.height = item.amount + 'px';
    });
});  