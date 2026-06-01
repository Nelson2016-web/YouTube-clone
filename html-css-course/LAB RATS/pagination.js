const products = Array.from({ length: 50 }, (_, i) => `Product ${i + 1}`);

let currentPage = 1;
const itemsPerPage = 5;

function renderProducts() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = products.slice(start, end);

  document.getElementById("products").innerHTML =
    currentItems.map(p => `<p>${p}</p>`).join("");

  document.getElementById("page").textContent = `Page ${currentPage}`;
}

function nextPage() {
  if (currentPage * itemsPerPage < products.length) {
    currentPage++;
    renderProducts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
}

renderProducts();
