const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

window.addEventListener('click', (e) => {
  if(e.target === loginModal){
    loginModal.style.display = 'none';
  }
});

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.game-card');

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();

    if(name.includes(value)){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

let count = 0;
const cartCount = document.getElementById('cartCount');

document.querySelectorAll('.buyBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    cartCount.innerText = count;
    alert(btn.dataset.name + ' adicionado ao carrinho!');
  });
});
