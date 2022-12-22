const listCategories = document.querySelectorAll(".js-item");
console.log(`Number of categories: ${listCategories.length}`);
console.log(" ");
listCategories.forEach((listItem) => {
  console.log(`Category: ${listItem.firstElementChild.textContent}`);
  console.log(`Elements: ${listItem.lastElementChild.children.length}`);
  console.log(" ");
});
