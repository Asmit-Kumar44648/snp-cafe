export const menuCategories = [
  "Pizza's",
  "Burgers",
  "Sandwiches",
  "Momos & Wraps",
  "Fried Chicken & Korean",
  "Sizzlers & Combos",
  "Snacks & Pasta",
  "Drinks & Desserts",
  "Add-ons",
];

export const menuItems = [
  // CATEGORY: Pizzas
  // VEG PIZZAS
  { id: 1, name: "Margherita Pizza", category: "Pizza's", price: "79 / 149", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Classic cheese and tomato sauce base." },
  { id: 2, name: "OTC Pizza", category: "Pizza's", price: "99 / 189", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Topped with Onion, Tomato, and Capsicum." },
  { id: 3, name: "Golden Corn Pizza", category: "Pizza's", price: "109 / 199", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Topped with sweet corn." },
  { id: 330, name: "Mexican Veg Pizza", category: "Pizza's", price: "119 / 209", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Features Mexican-inspired toppings." },
  { id: 4, name: "Spicy Paneer Pizza", category: "Pizza's", price: "129 / 219", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Paneer, onion, tomato, capsicum, green chilli." },
  { id: 30, name: "Tandoori Paneer Pizza", category: "Pizza's", price: "139 / 239", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Tandoori paneer, onion, tomato, capsicum." },
  { id: 331, name: "Tandoori Baby Corn Pizza", category: "Pizza's", price: "139 / 239", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Tandoori baby corn, onion, tomato, capsicum." },
  { id: 332, name: "White Sauce Veg Pizza", category: "Pizza's", price: "149 / 259", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "White sauce, onion, tomato, capsicum, corn, mushroom." },
  { id: 333, name: "Veggie Farmhouse Pizza", category: "Pizza's", price: "169 / 299", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Onion, tomato, capsicum, corn, mushroom, black olive." },
  { id: 334, name: "Spicy Pasta Pizza", category: "Pizza's", price: "149 / 259", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Arrabbiata pasta, onion, tomato, capsicum, green chilli." },
  { id: 335, name: "Cheese Volcano Pizza", category: "Pizza's", price: "299", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "9-inch only: Cheese centre, paneer, corn, onion, tomato, capsicum." },
  { id: 31, name: "Veg Extravaganza Pizza", category: "Pizza's", price: "189 / 339", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Onion, tomato, capsicum, paneer, mushroom, corn, black olive, jalapeno." },
 
  // NON-VEG PIZZAS
  { id: 5, name: "Chicken Delight Pizza", category: "Pizza's", price: "129 / 219", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Chicken, onion, tomato, capsicum." },
  { id: 336, name: "Spicy Chicken Pizza", category: "Pizza's", price: "139 / 239", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Chicken, onion, tomato, capsicum, green chilli." },
  { id: 32, name: "Chicken Tikka Pizza", category: "Pizza's", price: "109 / 199", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Chicken tikka, onion, tomato, capsicum." },
  { id: 337, name: "Chicken Seekh Pizza", category: "Pizza's", price: "149 / 279", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Seekh chicken, onion, tomato, capsicum." },
  { id: 338, name: "Mexican Chicken Pizza", category: "Pizza's", price: "159 / 279", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Spicy pizza sauce, chicken, onion, tomato, capsicum, jalapeno, mexican herbs." },
  { id: 339, name: "White Sauce Chicken Pizza", category: "Pizza's", price: "159 / 279", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "White sauce, chicken, onion, tomato, capsicum, mushroom." },
  { id: 340, name: "Deluxe Chicken Pizza", category: "Pizza's", price: "159 / 279", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Chicken, onion, tomato, capsicum, corn, black olive." },
  { id: 341, name: "Chicken Farmhouse Pizza", category: "Pizza's", price: "179 / 319", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Chicken, onion, tomato, capsicum, corn, mushroom, black olive." },
  { id: 6, name: "Chicken Extravaganza Pizza", category: "Pizza's", price: "189 / 359", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Chicken, onion, tomato, capsicum, mushroom, corn, black olive, jalapeno, cheese." },
  { id: 342, name: "Chicken Cheese Volcano Pizza", category: "Pizza's", price: "319", isVeg: false, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "9-inch only: Cheese centre, chicken, corn, black olive, onion, tomato, capsicum." },

  // CATEGORY: Burgers
  { id: 7, name: "Aloo Tikki Burger", category: "Burgers", price: "79", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "The classic comforting potato patty burger." },
  { id: 60, name: "Crispy Veg Burger", category: "Burgers", price: "99", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Perfectly spiced veg patty with crunch in every bite." },
  { id: 61, name: "Hot & Chilli Veg Burger", category: "Burgers", price: "109", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "A fiery delight for the spice lovers!" },
  { id: 62, name: "Double Aloo Tikki Burger", category: "Burgers", price: "119", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Twice the comfort with two classic potato patties." },
  { id: 63, name: "Crispy Corn Burger", category: "Burgers", price: "119", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Golden corn and veg patty with secret sauces." },
  { id: 8, name: "Crispy Paneer Burger", category: "Burgers", price: "139", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Hand-breaded paneer patty with zesty dressing." },
  { id: 33, name: "Veg Double Patty Burger", category: "Burgers", price: "149", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Two crispy veg patties with cheese and special sauce." },
  { id: 64, name: "Peri Peri Veg Burger", category: "Burgers", price: "149", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Zesty Peri Peri flavor with a crunchy veg patty." },
  { id: 34, name: "Paneer Tikka Burger", category: "Burgers", price: "159", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Marinated paneer steak grilled to perfection." },
  { id: 65, name: "Triple Veg Loaded Burger", category: "Burgers", price: "169", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "The ultimate veg feast with triple patties and extra toppings." },
  
  // NON-VEG BURGERS
  { id: 9, name: "Crispy Chicken Burger", category: "Burgers", price: "119", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Juicy fried chicken patty with fresh lettuce and mayo." },
  { id: 66, name: "Crispy Chicken Surprise Burger", category: "Burgers", price: "129", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Classic crispy chicken with a delicious surprise sauce." },
  { id: 67, name: "Hot & Chilli Chicken Burger", category: "Burgers", price: "139", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Standard choice for spice seekers. Zesty and hot!" },
  { id: 68, name: "Crispy Corn & Chicken Burger", category: "Burgers", price: "149", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "The perfect crunch combo of chicken and sweet corn." },
  { id: 69, name: "Peri Peri Chicken Burger", category: "Burgers", price: "159", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Flame-grilled taste with our signature Peri Peri kick." },
  { id: 70, name: "Premium Fried Chicken Burger", category: "Burgers", price: "169", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Our elite tier fried chicken, hand-breaded and golden." },
  { id: 35, name: "Tandoori Chicken Burger", category: "Burgers", price: "169", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Smoky tandoori chicken patty with mint mayo." },
  { id: 71, name: "Chicken Double Patty Burger", category: "Burgers", price: "179", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Two juicy chicken patties for the ultimate appetite." },
  { id: 72, name: "Chicken Volcano Burger", category: "Burgers", price: "179", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "An explosion of spicy melted cheese and spicy chicken." },
  
  // CATEGORY: Sandwiches
  // VEG SANDWICHES
  { id: 100, name: "Grilled Veg Sandwich", category: "Sandwiches", price: "99", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Crispy grilled bread packed with fresh garden veggies and our signature herb spread." },
  { id: 101, name: "Cheese Corn Sandwich", category: "Sandwiches", price: "119", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "A sweet and savory delight featuring golden corn kernels and a double layer of melted cheese." },
  { id: 10, name: "Grilled Paneer Tikka Sandwich", category: "Sandwiches", price: "129", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Smoky clay-oven paneer cubes with spicy mint chutney in perfectly toasted bread." },
  { id: 102, name: "Cheese Burst Veg Sandwich", category: "Sandwiches", price: "129", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Prepare for a molten cheese explosion! Loaded with premium liquid cheese and crisp veggies." },
  { id: 103, name: "Chef's Special Veg Sandwich", category: "Sandwiches", price: "139", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Our kitchen's masterwork - a secret blend of exotic veggies, three cheeses, and unique spices." },

  // NON-VEG SANDWICHES
  { id: 104, name: "Grilled Chicken Sandwich", category: "Sandwiches", price: "119", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Classic herb-grilled chicken breast slices with fresh lettuce and creamy mayo." },
  { id: 36, name: "Grilled Chicken Tikka Sandwich", category: "Sandwiches", price: "139", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Succulent tandoori chicken tikka pieces with spicy spreads and grilled to perfection." },
  { id: 105, name: "Peri Peri Chicken Sandwich", category: "Sandwiches", price: "149", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Bold and fiery! Chicken tossed in our signature Peri Peri sauce with a zesty kick." },
  { id: 106, name: "Cheese Burst Chicken Sandwich", category: "Sandwiches", price: "159", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "The ultimate indulgence. Juicy chicken meets a volcanic core of melted premium cheese." },
  { id: 107, name: "Chef's Special Chicken Sandwich", category: "Sandwiches", price: "149", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "The Chef's pride - a premium multilayered chicken feast with exotic toppings and secret sauces." },

  // CATEGORY: Momos & Wraps
  // VEG & PANEER MOMOS
  { id: 12, name: "Veg Steamed Momos", category: "Momos & Wraps", price: "79", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Thin-crust dumplings filled with garden fresh veggies." },
  { id: 14, name: "Veg Fried Momos", category: "Momos & Wraps", price: "89", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Crispy fried version of our classic steamed veg momos." },
  { id: 38, name: "Paneer Steamed Momos", category: "Momos & Wraps", price: "89", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Delicate steamed momos with fresh malai paneer filling." },
  { id: 15, name: "Paneer Fried Momos", category: "Momos & Wraps", price: "99", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Crunchy fried momos with a delicious spiced paneer center." },
  { id: 120, name: "Kurkure Veg Momos", category: "Momos & Wraps", price: "119", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Extra crunchy exterior with a juicy veg surprise inside." },
  { id: 13, name: "Kurkure Paneer Momos", category: "Momos & Wraps", price: "129", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "The ultimate crunch! Paneer momos coated in a crispy Kurkure layer." },
  { id: 121, name: "Tandoori Veg Momos", category: "Momos & Wraps", price: "139", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Smoky and charred veg momos marinated in classic tandoori spices." },
  { id: 37, name: "Tandoori Paneer Momos", category: "Momos & Wraps", price: "149", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Elite tandoor-grilled paneer momos with a perfect smoky finish." },
  { id: 122, name: "Afghan Creamy Veg Momos", category: "Momos & Wraps", price: "139", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Veg momos tossed in a rich, velvety Afghan cream sauce." },
  { id: 123, name: "Afghan Creamy Paneer Momos", category: "Momos & Wraps", price: "149", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Indulgent paneer momos drenched in a smooth and creamy white gravy." },
  { id: 124, name: "Veg Pan Fried Dragon Momos", category: "Momos & Wraps", price: "139", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Fiery veg momos tossed in a spicy, tangy dragon sauce." },
  { id: 125, name: "Paneer Pan Fried Dragon Momos", category: "Momos & Wraps", price: "149", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Sizzling paneer momos with a bold and spicy ginger-garlic kick." },

  // CHICKEN MOMOS
  { id: 126, name: "Chicken Steamed Momos", category: "Momos & Wraps", price: "99", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Classic juicy chicken dumplings served with spicy schezwan dip." },
  { id: 127, name: "Chicken Fried Momos", category: "Momos & Wraps", price: "109", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Golden fried chicken momos with a crunchy bite and juicy core." },
  { id: 39, name: "Kurkure Chicken Momos", category: "Momos & Wraps", price: "139", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Fried chicken momos with an extra-crispy Kurkure crust." },
  { id: 128, name: "Tandoori Chicken Momos", category: "Momos & Wraps", price: "149", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Chicken momos grilled to perfection in a traditional tandoor." },
  { id: 129, name: "Afghan Creamy Chicken Momos", category: "Momos & Wraps", price: "149", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Chicken momos tossed in a luscious, spice-infused Afghan cream." },
  { id: 130, name: "Chicken Pan Fried Dragon Momos", category: "Momos & Wraps", price: "159", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Spicy and tangy chicken momos pan-fried in our signature dragon sauce." },

  // WRAPS
  { id: 131, name: "Crispy Aloo Wrap", category: "Momos & Wraps", price: "109", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Warm tortilla packed with crispy golden potatoes, fresh veggies, and zesty sauces." },
  { id: 132, name: "Crispy Paneer Wrap", category: "Momos & Wraps", price: "129", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Crunchy herbed paneer strips with fresh salad and creamy dressing in a soft wrap." },
  { id: 133, name: "Crispy Chicken Wrap", category: "Momos & Wraps", price: "149", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Juicy fried chicken breast strips with crisp lettuce and mayo rolled in a tortilla." },

  // CATEGORY: Fried Chicken & Korean
  // KOREAN SECTION
  { id: 40, name: "Veg Korean Ramen", category: "Fried Chicken & Korean", price: "149", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Authentic Korean style ramen with spicy Korean broth and vegetables." },
  { id: 150, name: "Spicy Veg Korean Ramen", category: "Fried Chicken & Korean", price: "159", isVeg: true, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Extra spicy and bold Korean broth with assorted garden vegetables." },
  { id: 17, name: "Chicken Korean Ramen", category: "Fried Chicken & Korean", price: "179", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Classic spicy Korean broth served with chicken chunks, egg, and vegetables." },
  { id: 41, name: "Spicy Chicken Korean Ramen", category: "Fried Chicken & Korean", price: "189", isVeg: false, image: "/src/assets/images/doodle_momo_80s_1781557657926.jpg", description: "Fiery Korean broth with double the spice, succulent chicken, and two eggs." },
  
  // FRIED CHICKEN
  { id: 151, name: "Fried Chicken Bowl (4 pc)", category: "Fried Chicken & Korean", price: "149", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "A satisfying bowl of our signature crunchy fried chicken (4 pieces)." },
  { id: 16, name: "Fried Chicken Bucket (6 pc)", category: "Fried Chicken & Korean", price: "399", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Share the joy with 6 pieces of our famous, perfectly seasoned fried chicken." },
  { id: 152, name: "KFC STYLE Fried Chicken Bucket (9 pc)", category: "Fried Chicken & Korean", price: "549", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Our elite tier 9-piece bucket - hand-breaded, golden, and ultra-crispy." },

  // CATEGORY: Sizzlers & Combos
  // VEG SIZZLERS
  { id: 19, name: "Schezwan Paneer Sizzler", category: "Sizzlers & Combos", price: "279", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Paneer chilli, chilli potato, schezwan sauce, sautéed vegetables. Base: Fried Rice or Noodles" },
  { id: 170, name: "Baby Corn Sizzler", category: "Sizzlers & Combos", price: "289", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Crispy baby corn, chilli potato, spicy sauce, sautéed vegetables. Base: Fried Rice or Noodles" },
  { id: 171, name: "Veg Manchurian Sizzler", category: "Sizzlers & Combos", price: "299", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Veg manchurian, chilli potato, Chinese gravy, vegetables. Base: Fried Rice or Noodles" },
  { id: 42, name: "Veg Chinese Exotic Sizzler", category: "Sizzlers & Combos", price: "349", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Chilli potato, veg manchurian, paneer chilli, mixed vegetables, exotic Chinese sauce. Base: Fried Rice or Noodles" },
  
  // CHICKEN SIZZLERS
  { id: 43, name: "Chicken Schezwan Sizzler", category: "Sizzlers & Combos", price: "319", isVeg: false, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Chicken chilli, chilli potato, schezwan sauce, sautéed vegetables. Base: Chicken Fried Rice or Chicken Noodles" },
  { id: 172, name: "Chicken Manchurian Sizzler", category: "Sizzlers & Combos", price: "339", isVeg: false, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Chicken manchurian, chilli potato, Chinese gravy, vegetables. Base: Chicken Fried Rice or Chicken Noodles" },
  { id: 20, name: "Chicken Chinese Exotic Sizzler", category: "Sizzlers & Combos", price: "369", isVeg: false, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Chicken chilli, chicken manchurian, chilli potato, mixed vegetables, exotic Chinese sauce. Base: Chicken Fried Rice or Chicken Noodles" },
  { id: 44, name: "Couple Combo", category: "Sizzlers & Combos", price: "499", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "The perfect date meal: 9-inch Regular Veg Pizza, Veg Burger, French Fries, Latte/Cappuccino, Brownie with Ice Cream, and a Soft Drink (Glass)." },
  { id: 160, name: "Family Combo", category: "Sizzlers & Combos", price: "899", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "A feast for four: Two 9-inch Regular Veg Pizzas, Two orders of French Fries, Veg Sizzler Platter, and Four Soft Drinks (Glass)." },

  // CATEGORY: Snacks & Pasta
  { id: 22, name: "French Fries", category: "Snacks & Pasta", price: "89", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Standard salted golden fries." },
  { id: 45, name: "Cheesy Fries", category: "Snacks & Pasta", price: "149", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Loaded with melted cheese." },
  { id: 46, name: "Cheesy Garlic Bread", category: "Snacks & Pasta", price: "99", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Toast with garlic butter and herbs topped with cheese." },
  { id: 23, name: "Chicken Popcorn", category: "Snacks & Pasta", price: "129", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Bite-sized chicken delights, perfect for snacking." },
  { id: 47, name: "Chicken Cheese Balls", category: "Snacks & Pasta", price: "159", isVeg: false, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Melty cheese inside crispy chicken snacks." },
  
  // VEG PASTA
  { id: 180, name: "Veg Red Sauce Pasta", category: "Snacks & Pasta", price: "109", isVeg: true, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "Tangy and spicy tomato-based red sauce pasta with Italian herbs." },
  { id: 24, name: "Veg White Sauce Pasta", category: "Snacks & Pasta", price: "129", isVeg: true, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "Creamy, velvety white sauce pasta with exotic vegetables." },
  { id: 181, name: "Veg Mix Sauce Pasta", category: "Snacks & Pasta", price: "139", isVeg: true, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "The best of both worlds - a perfect blend of red and white sauces." },
  { id: 48, name: "Veg Cheesy Mix Sauce Pasta", category: "Snacks & Pasta", price: "159", isVeg: true, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "Our signature mix sauce pasta loaded with multiple varieties of premium cheese." },

  // NON VEG PASTA
  { id: 182, name: "Chicken Red Sauce Pasta", category: "Snacks & Pasta", price: "119", isVeg: false, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "Classic spicy red sauce pasta served with juicy herb-grilled chicken chunks." },
  { id: 183, name: "Chicken White Sauce Pasta", category: "Snacks & Pasta", price: "139", isVeg: false, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "Rich and creamy white sauce pasta with tender chicken pieces and mushrooms." },
  { id: 184, name: "Chicken Mix Sauce Pasta", category: "Snacks & Pasta", price: "149", isVeg: false, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "Succulent chicken chunks tossed in a delicious blend of spicy red and creamy white sauce." },
  { id: 25, name: "Chicken Cheesy Mix Sauce Pasta", category: "Snacks & Pasta", price: "169", isVeg: false, image: "/src/assets/images/doodle_pasta_80s_1781557613543.jpg", description: "Elite level pasta experience with chicken, pink sauce, and an explosion of cheese." },

  // CATEGORY: Drinks & Desserts
  // DESSERTS
  { id: 200, name: "Ice Cream", category: "Drinks & Desserts", price: "49", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Your choice of pure bliss: Vanilla, Chocolate, Strawberry, or Butterscotch." },
  { id: 201, name: "Brownie", category: "Drinks & Desserts", price: "99", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Deep, dark, and fudgy homemade chocolate brownie." },
  { id: 202, name: "Brownie with Ice Cream", category: "Drinks & Desserts", price: "129", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "Warm brownie paired with a scoop of velvety cold vanilla ice cream." },
  { id: 28, name: "Sizzling Brownie with Ice Cream", category: "Drinks & Desserts", price: "179", isVeg: true, image: "/src/assets/images/doodle_sizzler_80s_1781557674342.jpg", description: "The ultimate showstopper. Warm brownie on a sizzling plate with cold vanilla ice cream and hot chocolate lava." },
  { id: 29, name: "Choco Lava Cake", category: "Drinks & Desserts", price: "129", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "A volcano of molten chocolate waiting to erupt inside a soft cake shell." },
  { id: 203, name: "Choco Lava Cake with Ice Cream", category: "Drinks & Desserts", price: "159", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Hot molten chocolate cake served with a perfect scoop of vanilla ice cream." },
  { id: 52, name: "Chocolate Donut", category: "Drinks & Desserts", price: "69", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Soft, airy, and topped with a thick layer of premium chocolate glaze." },

  // COFFEE
  { id: 204, name: "Hot Coffee", category: "Drinks & Desserts", price: "49", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Standard freshly brewed hot coffee to kickstart your day." },
  { id: 205, name: "Cappuccino", category: "Drinks & Desserts", price: "79", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Rich espresso topped with a thick, velvety layer of steamed milk foam." },
  { id: 206, name: "Latte", category: "Drinks & Desserts", price: "89", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Smooth and creamy espresso with a generous pour of steamed milk." },

  // COLD COFFEE
  { id: 49, name: "Cold Coffee", category: "Drinks & Desserts", price: "99", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Chilled and refreshing coffee blend, perfectly sweetened." },
  { id: 207, name: "Iced Latte", category: "Drinks & Desserts", price: "109", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "The cool version of our classic latte, served over ice." },
  { id: 208, name: "Cold Coffee with Ice Cream", category: "Drinks & Desserts", price: "129", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Our signature cold coffee topped with an indulgent vanilla scoop." },
  { id: 209, name: "Dalgona Coffee", category: "Drinks & Desserts", price: "129", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Velvety whipped coffee foam resting on a bed of chilled milk." },

  // MOCKTAILS
  { id: 26, name: "Blue Ocean", category: "Drinks & Desserts", price: "99", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Refreshing blue curacao blend that tastes like a tropical vacation." },
  { id: 210, name: "Mint Green", category: "Drinks & Desserts", price: "99", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Ultra-cool and revitalizing mint-based mocktail." },
  { id: 211, name: "Strawberry Blast", category: "Drinks & Desserts", price: "99", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "A sweet explosion of real strawberry flavor and fizz." },
  { id: 50, name: "Virgin Mojito", category: "Drinks & Desserts", price: "99", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "The classic legendary blend of fresh mint, lime, and soda." },

  // SHAKES
  { id: 212, name: "Chocolate Shake", category: "Drinks & Desserts", price: "129", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Thick, rich, and intensely chocolatey milkshake." },
  { id: 213, name: "Strawberry Shake", category: "Drinks & Desserts", price: "129", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Creamy and sweet milkshake bursting with strawberry goodness." },
  { id: 214, name: "Butterscotch Shake", category: "Drinks & Desserts", price: "129", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Smooth and decadent butterscotch flavored milkshake." },
  { id: 51, name: "Oreo Shake", category: "Drinks & Desserts", price: "149", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "The all-time favorite thick chocolate shake blended with Oreo chunks." },
  { id: 27, name: "KitKat Shake", category: "Drinks & Desserts", price: "159", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "An elite thick shake blended with crispy KitKat bars." },

  // SOFT DRINKS & WATER
  { id: 215, name: "Soft Drink (Glass)", category: "Drinks & Desserts", price: "40", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Chilled selection of popular soft drinks served in a glass." },
  { id: 216, name: "Masala Coke", category: "Drinks & Desserts", price: "59", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Standard Coke with a refreshing and spicy Indian masala twist." },
  { id: 217, name: "Mineral Water", category: "Drinks & Desserts", price: "20", isVeg: true, image: "/src/assets/images/doodle_drink_80s_1781557687761.jpg", description: "Pure and refreshing bottled mineral water." },

  // CATEGORY: Add-ons
  { id: 80, name: "Cheese Burst", category: "Add-ons", price: "45 / 75", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Add a molten cheese burst to your pizza crust." },
  { id: 84, name: "Extra Toppings", category: "Add-ons", price: "25", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Add extra vegetable or chicken toppings." },
  { id: 81, name: "Make it a Combo", category: "Add-ons", price: "89", isVeg: true, image: "/src/assets/images/doodle_burger_80s_1781557643419.jpg", description: "Add crispy golden Fries and a chilled Coke to your meal." },
  { id: 82, name: "Extra Cheese dip", category: "Add-ons", price: "25", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "A creamy and cheesy dip for your favorite snacks." },
  { id: 83, name: "Mayonnaise dip", category: "Add-ons", price: "25", isVeg: true, image: "/src/assets/images/doodle_pizza_80s_1781557627365.jpg", description: "Classic thick and creamy white mayo dip." },
];
