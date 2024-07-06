interface Hero {
  items: string[];
  gold: number;
}

interface Shop {
  item: string;
  price: number;
}

function buyItem(hero: Hero, shop: Shop): Hero {
  if (hero.gold >= shop.price) {
    hero.items.push(shop.item);
    hero.gold -= shop.price;
  }
  return hero;
}

const hero1: Hero = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop1: Shop = {
  item: "armor",
  price: 20,
};

const hero2: Hero = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop2: Shop = {
  item: "legendary armor",
  price: 200,
};

console.log(buyItem(hero1, shop1)); 
console.log(buyItem(hero2, shop2)); 

module.exports = buyItem;

