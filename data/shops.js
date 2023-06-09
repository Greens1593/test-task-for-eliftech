export const shops = [
  {
    name: "Shop 1",
    id: 1,
    logo: "data:image/png;base64,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",
    goods: [
      {
        name: "Burger",
        price: 10,
        image:
          "https://papa-joe.com.ua/wp-content/uploads/2020/09/IMG_5167.jpg",
        id: 2,
      },
      {
        name: "Pizza",
        price: 20,
        image:
          "https://pizza.od.ua/upload/iblock/c38/c3892880079c75e426a603d95ba7d874.jpg",
        id: 3,
      },
    ],
  },
  {
    name: "Shop 2",
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png",
    goods: [
      {
        name: "Burger",
        price: 12,
        image:
          "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_Cheeseburger:1-4-product-tile-desktop",
        id: 5,
      },
      {
        name: "Coffee",
        price: 5,
        image:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201906_7659_MediumIcedMocha_Glass_A1_832x472:1-4-product-tile-desktop",
        id: 6,
      },
    ],
  },
];
