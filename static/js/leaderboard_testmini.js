function loadTables() {
  
  var table = generateTable(scores_testmini);
  document.getElementById('testmini_leaderboard').innerHTML = table;

  table = generateTable(scores_test);
  document.getElementById('test_leaderboard').innerHTML = table;

};


function generateTable(data) {

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Params (in billions) </strong></td>

          <td class="js-sort-number"><strong><u>ALL</u></strong></td>
          <td class="js-sort-number"><strong>daily</strong></td>
          <td class="js-sort-number"><strong>research</strong></td>
          <td class="js-sort-number"><strong>medical</strong></td>
          <td class="js-sort-number"><strong>sub-img</strong></td>
          <td class="js-sort-number"><strong>remote</strong></td>
          <td class="js-sort-number"><strong>art</strong></td>
          <td class="js-sort-number"><strong>paper</strong></td>
          <td class="js-sort-number"><strong>urban</strong></td>
      </tr>`;

      // sort data to make sure the best model is on top
      first_row = '-' // "Human Performance*"
      console.log(data);

      // get all keys in data
      var keys = Object.keys(data);

      // remove "Human Performance*" from keys
      var index = keys.indexOf(first_row);
      if (index > -1) {
        keys.splice(index, 1);
      }

      // add "Human Performance*" to the top of keys
      keys.unshift(first_row);

      console.log(keys);

      // for (var key in data) {
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`

        // for key = "1", "2", "3"
        top_ranks = ["1", "2", "3"]
        if (top_ranks.includes(key)) {
          table += `<td><b class="best-score-text" style="color:${entry.Color};">${entry.Model}</b></td>`;
          table += `<td>${entry.Params}</td>`;
          table += `<td><b class="best-score-text">${entry.ALL.toFixed(1).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
        }
        else {
          table += `<td><b style="color:${entry.Color};">${entry.Model}</b></td>`;
          table += `<td>${entry.Params}</td>`;
          table += `<td><b>${entry.ALL.toFixed(1).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
        }          

        // if entry.FQA is a number
        if (!isNaN(entry.FQA)) {
          table += `<td>${entry["daily"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["research"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["medical"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["sub-img"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["remote"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["art"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["paper"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["urban"].toFixed(1).toString()}</td>`;
        }
        else {
          table += `<td>${entry["daily"].toString()}</td>`;
          table += `<td>${entry["research"].toString()}</td>`;
          table += `<td>${entry["medical"].toString()}</td>`;
          table += `<td>${entry["sub-img"].toString()}</td>`;
          table += `<td>${entry["remote"].toString()}</td>`;
          table += `<td>${entry["art"].toString()}</td>`;
          table += `<td>${entry["paper"].toString()}</td>`;
          table += `<td>${entry["urban"].toString()}</td>`;
        }
        table += '</tr>';
    }

  table += '</table>';

  return table;
  
}

// Call the function when the window loads
window.onload = loadTables;
