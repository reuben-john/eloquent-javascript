// Build a table

// An HTML table is built with the following tag structure:

/* <table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table> */

// For each row, the < table > tag contains a < tr > tag.Inside of these < tr >
// tags, we can put cell elements: either heading cells( < th > ) or regular
// cells( < td > ).

// Given a data set of mountains, an array of objects with name, height, and
// place properties, generate the DOM structure
// for a table that enumerates the objects.It should have one column per key
// and one row per object, plus a header row with < th > elements at the top,
// listing the column names.

// Write this so that the columns are automatically derived from the objects,
// by taking the property names of the first object in the data.

// Add the resulting table to the element with an id attribute of "mountains"
// so that it becomes visible in the document.

// Once you have this working, right - align cells that contain number values
// by setting their style.textAlign property to "right".

/* <h1>Mountains</h1> */
/* <div id="mountains"></div> */

const MOUNTAINS = [
  {
    name: "Kilimanjaro",
    height: 5895,
    place: "Tanzania"
  },
  {
    name: "Everest",
    height: 8848,
    place: "Nepal"
  },
  {
    name: "Mount Fuji",
    height: 3776,
    place: "Japan"
  },
  {
    name: "Vaalserberg",
    height: 323,
    place: "Netherlands"
  },
  {
    name: "Denali",
    height: 6168,
    place: "United States"
  },
  {
    name: "Popocatepetl",
    height: 5465,
    place: "Mexico"
  },
  {
    name: "Mont Blanc",
    height: 4808,
    place: "Italy/France"
  }
];

function buildTable(table) {
  // construct table structure
  // add headers
  // loop through object and add each place to table
}
