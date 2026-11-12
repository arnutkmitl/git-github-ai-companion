const menu = [
  { name: "Espresso", price: 3 },
  { name: "Latte", price: 4 },
  { name: "Cappuccino", price: 4 },
  { name: "Americano", price: 3.5 },
  { name: "Thai Iced Tea", price: 2.5 }
];

function renderMenu(items) {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
    list.appendChild(li);
  }
}

function sortByPrice() {
  const sorted = [...menu].sort((a, b) => a.price - b.price);
  renderMenu(sorted);
}

document.getElementById("sort-btn").addEventListener("click", sortByPrice);
renderMenu(menu);
