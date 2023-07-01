import socketInit from "./socket.js";

socketInit();

async function submitItem(item) {
  try {
    await fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
  } catch (error) {
    console.error(error);
  }
  
}

const formSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('#name');
  const price = form.querySelector('#price');
  
  const payload = {
    name: name.value,
    price: price.value
  }

  //addItem(payload);
  await submitItem(payload);
  name.value = '';
  price.value = '';
}

const form = document.querySelector('form');
form.addEventListener('submit', formSubmit);

/**
 * Add item to the list
 * @param {object} item 
 */
export const addItem = (item) => {
  const list = document.querySelector('#list');
  const itemElement = document.createElement('li');
  itemElement.id = `id_${item.id}`;
  itemElement.innerHTML = `${item.name} - ${item.price}`;
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.addEventListener('click', async () => {
    try {
      await fetch(`http://localhost:3000/items/${item.id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error(error);
    }
  });
  itemElement.appendChild(removeButton);
  list.appendChild(itemElement);
}

export const deleteItem = (id) => {
  const item = document.querySelector(`#id_${id}`);
  item.remove();
}


window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('http://localhost:3000/items');
    const items = await response.json();
    items.forEach(item => {
      addItem({id: item._id,  name: item.name, price: item.price});
    });
  } catch (error) {
    console.error(error);
  }
});