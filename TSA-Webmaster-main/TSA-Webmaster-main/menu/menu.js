'use strict'; 

/* 
Filename:   menu.js
*/

// Vegan Menu Items, Prices, Descriptions, and Images
const foodItem = [
  'Evergreen Bowl',
  'Wild Mushroom Risotto',
  'Garden Flatbread',
  'Seasonal Harvest Soup',
  'Rainbow Veggie Stir-Fry',
  'Chocolate Avocado Mousse',
  'Grilled Veggie Sandwich'
];

const foodPrice = [10.99, 17.50, 12.50, 15.00, 15.50, 11.99, 20.00];

const foodDesc = [
  'Baby kale, arugula, heirloom carrots, watermelon radish, toasted walnuts, and orange segments tossed with a maple-mustard vinaigrette.',
  'Creamy Arborio rice infused with garlic, fresh thyme, and white wine, topped with sautéed wild mushrooms and crispy shallots.',
  'Flatbread topped with fresh vegetables, herbs, and a light sauce, featuring ingredients like tomatoes, bell peppers, zucchini, spinach, onions, and basil on a thin, crispy crust.',
  'Winter: Roasted Butternut Squash Soup with sage oil and toasted pumpkin seeds. Spring: Asparagus and Green Pea Soup garnished with microgreens and cashew cream.',
  'A medley of farm-fresh veggies (zucchini, bell peppers, snap peas, carrots) stir-fried in a tangy ginger-soy glaze, served over organic brown rice or quinoa.',
  'Rich and creamy chocolate mousse made with ripe avocados and sweetened with maple syrup, served with coconut whipped cream.',
  'Charred zucchini, roasted bell peppers, caramelized onions, and hummus on a toasted whole-grain baguette, served with a side of fresh greens.'
];

const foodImg = [
  'bowl.jpg',
  'risotto.jpg',
  'flatbread.jpg',
  'papaya.jpg',
  'bowl4.jpg',
  'goofyahhgreensh.jpg',
  'overpricedsandwch.jpg'
];

window.addEventListener('load', () => {
  const menuTable = document.getElementById('menuTable');

  for (let i = 0; i < foodItem.length; i++) {
    let row = document.createElement('tr');

    let imageCell = document.createElement('td');
    let image = new Image();
    image.src = '../resources/' + foodImg[i];
    image.alt = foodItem[i];
    image.width = 150;
    image.height = 110;
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    let itemName = document.createElement('td');
    itemName.textContent = foodItem[i];
    let itemDesc = document.createElement('p');
    itemDesc.textContent = foodDesc[i];
    itemDesc.classList.add('itemDesc');
    itemName.appendChild(itemDesc);
    row.appendChild(itemName);
    
    let price = document.createElement('td');
    price.textContent = '$' + foodPrice[i].toFixed(2);
    price.classList.add('price');
    row.appendChild(price);

    menuTable.appendChild(row);
  }
});
