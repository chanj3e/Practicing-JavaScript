// Styling body
let body = document.querySelector("body");
body.style.cssText =
  "margin:0; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial";
// Creating Header
let header = document.createElement("header");
header.className = "website-head";
header.style.cssText =
  "display: flex; justify-content: space-between; padding: 20px; background-color: rgb(255, 255, 255); align-itmes: center";
// Creating div inside header
let divHeader = document.createElement("div");
divHeader.className = "logo";
divHeader.innerHTML = "Elzero";
divHeader.title = "website logo";
divHeader.style.cssText =
  "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";
// addind div to header
header.append(divHeader);
// Creating ul inside header
let ulHeader = document.createElement("ul");
ulHeader.className = "menu";
ulHeader.style.cssText =
  "padding: 0px; margin: 0px; display: flex; list-style: none;";
// Creating li insife ul inside header
let liHeader1 = document.createElement("li");
liHeader1.innerHTML = "Home";
liHeader1.className = "li";
liHeader1.style.cssText =
  "font-size: 15px; color: rgb(136, 136, 136); font-weight: normal; margin-right: 10px";
let liHeader2 = document.createElement("li");
liHeader2.innerHTML = "About";
liHeader2.className = "li";
liHeader2.style.cssText =
  "font-size: 15px; color: rgb(136, 136, 136); font-weight: normal; margin-right: 10px";
let liHeader3 = document.createElement("li");
liHeader3.innerHTML = "Service";
liHeader3.className = "li";
liHeader3.style.cssText =
  "font-size: 15px; color: rgb(136, 136, 136); font-weight: normal; margin-right: 10px";
let liHeader4 = document.createElement("li");
liHeader4.innerHTML = "contact";
liHeader4.className = "li";
liHeader4.style.cssText =
  "font-size: 15px; color: rgb(136, 136, 136); font-weight: normal; margin-right: 10px";
// addind lis to ul
ulHeader.append(liHeader1, liHeader2, liHeader3, liHeader4);
// addind ul to header
header.append(ulHeader);
// adding header to body
document.body.append(header);
// Creating content
let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh-142px); box-sizing: border-box;";
// Creating product
let productContent = document.createElement("div");
productContent.className = "product";
productContent.style.cssText =
  "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
// Creating span
let spanContent = document.createElement("span");
spanContent.style.cssText =
  "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
// adding span to product
productContent.append(spanContent);
productContent.append("Product");
// clonning product

// adding product to content
for (let i = 1; i <= 15; i++) {
  spanContent.innerHTML = `${i}`;
  content.append(productContent.cloneNode(true));
}
// adding content to body
document.body.append(content);
//  ظظظظظ تعبانييييييييييييييييييييييييييييييييييييين

// Creating Footer
let footer = document.createElement("footer");
footer.style.cssText =
  "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255); ";
footer.innerHTML = "Copyright 2024";
// adding footer to body
document.body.append(footer);
