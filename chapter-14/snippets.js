// search html document for text

function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

// console.log(talksAbout(document.body, "book"));

let link = document.body.getElementsByTagName("a")[0];
// console.log(link.href);

let ostrich = document.getElementById("gertrude");
// console.log(ostrich.src);
let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);

function replaceImages() {
  let images = document.body.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}

// can create solid collection of nodes instead of live

let arrayish = {
  0: "one",
  1: "two",
  length: 2
};
let array = Array.from(arrayish);
// console.log(array.map(s => s.toUpperCase()));

// can create nodes with createlement
function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

document
  .getElementById("quote")
  .appendChild(
    elt(
      "footer",
      "—",
      elt("strong", "Karl Popper"),
      ", preface to the second editon of ",
      elt("em", "The Open Society and Its Enemies"),
      ", 1950"
    )
  );

let paras = document.body.getElementsByTagName("p");
for (let para of Array.from(paras)) {
  if (para.getAttribute("data-classified") == "secret") {
    para.remove();
  }
}

let para = document.body.getElementsByTagName("p")[paras.length - 1];
console.log("clientHeight:", para.clientHeight);
console.log("offsetHeight:", para.offsetHeight);

function time(name, action) {
  let start = Date.now(); // current time in milliseconds
  action();
  console.log(name, "took", Date.now() - start, "ms");
}

time("naive", () => {
  let target = document.getElementById("one");
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode("X"));
  }
});

time("clever", () => {
  let target = document.getElementById("two");
  target.appendChild(document.createTextNode("XXXXX"));
  let total = Math.ceil(2000 / (target.offsetWidth / 5));
  target.firstChild.nodeValue = "X".repeat(total);
});
