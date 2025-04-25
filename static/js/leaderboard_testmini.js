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
          <td class="js-sort-number"><strong>Parameters (in billions) </strong></td>

          <td class="js-sort-number"><strong><u>All</u></strong></td>
          <td class="js-sort-number"><strong>Daily</strong></td>
          <td class="js-sort-number"><strong>Research</strong></td>
          <td class="js-sort-number"><strong>Medical</strong></td>
          <td class="js-sort-number"><strong>Sub-Img</strong></td>
          <td class="js-sort-number"><strong>Remote</strong></td>
          <td class="js-sort-number"><strong>Art</strong></td>
          <td class="js-sort-number"><strong>Paper</strong></td>
          <td class="js-sort-number"><strong>Urban</strong></td>
      </tr>`;
      
      // get all keys in data
      var keys = Object.keys(data);

/*    Uncomment this to put "Humman" at Top

      // sort data to make sure the best model is on top
      first_row = '-' // "Human Performance*"
      console.log(data);

      // remove "Human Performance*" from keys
      var index = keys.indexOf(first_row);
      if (index > -1) {
        keys.splice(index, 1);
      }

      // add "Human Performance*" to the top of keys
      keys.unshift(first_row);
*/

      console.log(keys);

      // for (var key in data) {
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`
        table += `<td><b class="${entry.ModelType}-model">${entry.Model}</b></td>`;
        table += `<td><b>${entry.Params.toString()}</b></td>`;
        table += `<td><b>${entry.ALL.toString()}</b></td>`; // .toFixed(1): round to 1 decimal place

        // if entry.FQA is a number
        if (!isNaN(entry.FQA)) {
          table += `<td>${entry["daily"].toString()}</td>`;
          table += `<td>${entry["research"].toString()}</td>`;
          table += `<td>${entry["medical"].toString()}</td>`;
          table += `<td>${entry["sub-img"].toString()}</td>`;
          table += `<td>${entry["remote"].toString()}</td>`;
          table += `<td>${entry["art"].toString()}</td>`;
          table += `<td>${entry["paper"].toString()}</td>`;
          table += `<td>${entry["urban"].toString()}</td>`;
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
