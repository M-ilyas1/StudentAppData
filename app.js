let form = document.querySelector('form');
let table = document.querySelector('table');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let studentName = document.getElementById('studentName').value;
  let fatherName = document.getElementById('fatherName').value;
  let email = document.getElementById('email').value;
  let studentID = document.getElementById('studentID').value;
  let obtainedMarks = document.getElementById('obtainedMarks').value;
  let addNewRow = document.createElement('tr'); 
  addNewRow.innerHTML = `<td>${studentName}</td><td>${fatherName}</td>
                      <td>${email}</td><td>${studentID}</td><td>100</td><td>${obtainedMarks}</td>`;
  table.querySelector('tbody').appendChild(addNewRow);
  form.reset();
});


const searchButton = document.getElementById("search-btn");
const searchInputField = document.getElementById("searchInput");

searchButton.addEventListener("click", function () {
  let searchTerm = searchInputField.value.toLowerCase();
  let rows = table.querySelectorAll("tbody tr");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let studentname = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
    let fathername = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
    let studentID = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
    let searchData = studentname.includes(searchTerm) || fathername.includes(searchTerm) || studentID.includes(searchTerm);
    row.style.display = searchData ? "" : "none";
  }
});


const sort = document.getElementById("sort-select")
sort.addEventListener('change', () => {
  let sortDataBy = sort.value;
  let rows = Array.from(table.querySelectorAll('tbody tr'));
  rows.sort((rowA, rowB) => {
    let valueA = rowA.querySelector(`td:nth-child(${sortDataBy === 'name' ? 1 : sortDataBy === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
    let valueB = rowB.querySelector(`td:nth-child(${sortDataBy === 'name' ? 1 : sortDataBy === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
  });
  rows.map((row) => {
    table.querySelector('tbody').appendChild(row);
  });
});

























































// // Get references to the DOM elements
// const form = document.querySelector('form');
// const table = document.querySelector('table');
// const searchInput = document.getElementById('search');
// const sortSelect = document.getElementById('sort-select');

// // Listen for form submission
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form from submitting and refreshing the page

//   // Get the form data
//   const studentName = document.getElementById('studentName').value;
//   const fatherName = document.getElementById('fatherName').value;
//   const email = document.getElementById('email').value;
//   const studentID = document.getElementById('studentID').value;
//   const obtainedMarks = document.getElementById('obtainedMarks').value;

//   // Create a new row in the table with the form data
//   const newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td>${studentName}</td>
//     <td>${fatherName}</td>
//     <td>${email}</td>
//     <td>${studentID}</td>
//     <td>100</td>
//     <td>${obtainedMarks}</td>
//   `;
//   table.querySelector('tbody').appendChild(newRow);

//   // Reset the form
//   form.reset();
// });

// // Listen for search input changes
// searchInput.addEventListener('input', () => {
//   const searchTerm = searchInput.value.toLowerCase();
//   const rows = table.querySelectorAll('tbody tr');

//   // Loop through each row and hide/show based on search term
//   rows.forEach((row) => {
//     const studentName = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
//     const fatherName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
//     const studentID = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
//     const shouldShowRow = studentName.includes(searchTerm) ||
//                           fatherName.includes(searchTerm) ||
//                           studentID.includes(searchTerm);
//     row.style.display = shouldShowRow ? '' : 'none';
//   });
// });

// // Listen for sort select changes
// sortSelect.addEventListener('change', () => {
//   const sortType = sortSelect.value;
//   const rows = Array.from(table.querySelectorAll('tbody tr'));

//   // Sort the rows based on the selected option
//   rows.sort((rowA, rowB) => {
//     const valueA = rowA.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
//     const valueB = rowB.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
//     if (valueA < valueB) return -1;
//     if (valueA > valueB) return 1;
//     return 0;
//   });

//   // Reorder the rows in the table
//   rows.forEach((row) => {
//     table.querySelector('tbody').appendChild(row);
//   });
// });

