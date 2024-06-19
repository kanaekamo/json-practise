document.addEventListener('DOMContentLoaded', () => fetch('data/product.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(list => {
      const table = document.getElementById('productTable');
      table.appendChild(Object.assign(document.createElement('tr'), {innerHTML: `<td>${list.id}</td><td>${list.name}</td><td>${list.price}</td><td>${list.description}</td>`}))
    })
  }) 
  .catch(error => console.error('エラー:', error))
);
