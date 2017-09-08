class DomNodeCollection {
  constructor(elements) {
    this.elements = elements;

  }
  html(str) {
    if (str) {
      this.elements.forEach((el) => {
        el.innerHTML = str;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty () {
    this.elements.forEach((el) => {
      el.innerHTML = "";
    });
  }

  append (arg) {
    this.elements.forEach( (el)=> {
      if (arg instanceof DomNodeCollection) {
        arg.forEach ( (el2)=> {
          el.innerHTML += el2.outerHTML;
        });
      } else {
        el.innerHTML += arg.outerHTML;
      }
    });
  }
}

module.exports = DomNodeCollection;
