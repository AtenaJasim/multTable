/* 
script.js file
Atena Jasim
This file generates a dynamic multiplication table from the 4 user inputs
It has input validation where it only allows numbers between -50 and 50
and doesn't allow for empty inputs
*/

function generateTable() {
    //Getting variables from user input
    const ids = ['horizontalInput1','horizontalInput2','verticalInput1','verticalInput2'];
    const errorEl = document.getElementById('errorMsg');
    const tableContainer = document.getElementById('tableContainer');
    errorEl.textContent = '';
    tableContainer.innerHTML = '';

    const nums = ids.map(id => document.getElementById(id).valueAsNumber);
    if (nums.some(Number.isNaN)) {
        errorEl.textContent = 'Please enter all 4 numbers.';
        return;
    }

    const MIN = -50;
    const MAX = 50;
    if (nums.some(n => n < MIN || n > MAX)) {
        errorEl.textContent = "Numbers must be between -50 and 50.";
        return;
    }

    let [hStart, hEnd, vStart, vEnd] = nums;

    if (hStart > hEnd) {
        [hStart, hEnd] = [hEnd, hStart];
    }
    if (vStart > vEnd) {
        [vStart, vEnd] = [vEnd, vStart];
    }

    //Building the table
    const table = document.createElement('table');
    table.classList.add('mult-table');
    table.style.borderCollapse = 'collapse';

    const headerRow = document.createElement('tr');
    const corner = document.createElement('th');
    corner.textContent = '';
    corner.style.border = '1px solid black';
    corner.style.padding = '6px';
    headerRow.appendChild(corner);

    for (let h = hStart; h <= hEnd; h++) {
        const th = document.createElement('th');
        th.textContent = h;
        th.style.border = '1px solid black';
        th.style.padding = '6px';
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let v = vStart; v <= vEnd; v++) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = v;
        th.style.border = '1px solid black';
        th.style.padding = '6px';
        row.appendChild(th);

        for (let h = hStart; h <= hEnd; h++) {
            const td = document.createElement('td');
            td.textContent = v * h;
            td.style.border = '1px solid black';
            td.style.padding = '6px';
            row.appendChild(td);
        }
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}