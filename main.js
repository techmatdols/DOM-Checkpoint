
const items = document.querySelectorAll('.item');
const totalElement = document.getElementById('total');

function updateTotal() {
  let total = 0;
  items.forEach((item) => {
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    const price = parseInt(item.querySelector('.item-price').textContent.slice(1));
    total += quantity * price;
  });
  totalElement.textContent = `Total: $${total}`;
}

function incrementQuantity(quantityElement) {
  const quantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = quantity + 1;
  updateTotal();
}

function decrementQuantity(quantityElement) {
  const quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantityElement.textContent = quantity - 1;
    updateTotal();
  }
}

function deleteItem(itemElement) {
  itemElement.remove();
  updateTotal();
}

function toggleLike(likeElement) {
  likeElement.classList.toggle('liked');
}

items.forEach((item) => {
  const incrementButton = item.querySelector('.increment');
  const decrementButton = item.querySelector('.decrement');
  const deleteButton = item.querySelector('.delete');
  const likeButton = item.querySelector('.like');

  incrementButton.addEventListener('click', () => incrementQuantity(item.querySelector('.quantity')));
  decrementButton.addEventListener('click', () => decrementQuantity(item.querySelector('.quantity')));
  deleteButton.addEventListener('click', () => deleteItem(item));
  likeButton.addEventListener('click', () => toggleLike(likeButton));
});

updateTotal();
