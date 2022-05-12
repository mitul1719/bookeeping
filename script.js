/**
 * variables
 */

let textInput;
let array = [];

function add_note() {
  let element = document.getElementById("notes");
  let insert_div = document.createElement("div");
  element.appendChild(insert_div);
  insert_div.setAttribute("id", "note_elem");

  insert_div.innerHTML = array.push(`<h1>${textInput}</h1>`);
  function map() {
    array.map((item, i) => {
      insert_div.innerHTML = `${i} ${item}`;
    });
  }
  map();
}

function getinput() {
  document
    .getElementsByTagName("textarea")[0]
    .addEventListener("input", function (e) {
      textInput = e.target.value;
    });
}

function _clear(){
    array.length = 0
    document.getElementById("note_elem").remove()
}
