const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString ('pt-BR' , { dataStyle: 'full' });
h1.innerHTML = data.toLocaleString ({ timeStyle: 'full'});
