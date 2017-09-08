const DomNodeCollection = require("./dom_node_collection");

window.$l = function (arg) {

  let elementList;

  if (typeof arg === "string") {
    elementList = document.querySelectorAll(arg);
    elementList = Array.from(elementList);
    return new DomNodeCollection(elementList);
  } else if (arg instanceof HTMLElement) {
    return new DomNodeCollection([arg]);
  }
};

let some = document.getElementsByClassName('something');
console.log(document);
console.log("hi");
