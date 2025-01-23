// addProduct.js: Formdan ma'lumotlarni olib mahsulot qo'shadi
import { addProduct } from './db';

// DOM elementlarini olish
const nomiInput = document.getElementById('nomi');
const narxiInput = document.getElementById('narxi');
const brendInput = document.getElementById('brend');
const rasmInput = document.getElementById('rasm');
const addButton = document.getElementById('addPr');


addButton.addEventListener('click', () => {
    const nomi = nomiInput.value.trim();
    const narxi = parseFloat(narxiInput.value);
    const brend = brendInput.value.trim();
    const rasm = rasmInput.value.trim();

  
    if (!nomi ||  !narxi || !brend || !rasm) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }

   
    addProduct(nomi, narxi, brend, rasm);

    nomiInput.value = '';
    narxiInput.value = '';
    brendInput.value = '';
    rasmInput.value = '';

    alert('Mahsulot muvaffaqiyatli qo\'shildi!');
});
