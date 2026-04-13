const MENU = [
  {
    id:  "cafeteria",
    name: "Cafetería",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/3/cafeteria-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Expreso chico", price: 2000, desc: "Solo o cortado" },
      { name: "Expreso mediano", price: 2300, desc: "Solo, cortado o con leche" },
      { name: "Expreso doble", price: 2800, desc: "Solo, cortado o con leche" },
      { name: "Cappuccino", price: 3400, desc: "Leche, chocolate, crema y canela" },
      { name: "Macchiato", price: 3200 },
      { name: "Dolce", price: 3400, desc: "Dulce de leche, praliné, salsa de chocolate y crema" },
      { name: "Irlandés", price: 3400, desc: "Crema y whisky" },
      { name: "Latte de Vainilla", price: 3400 },
      { name: "Latte de Avellanas", price: 3400 },
      { name: "Latte de Frutos Rojos", price: 3400 },
      { name: "Latte Caramel", price: 3400 },
      { name: "Latte de Pistachos", price: 3400 },
      { name: "Submarino", price: 3200 },
      { name: "Chocolatada", price: 2600 },
      { name: "Té", price: 2800, desc: "Clásico, frutales o de hierbas" },
      { name: "Té con leche o limón", price: 3100 },
      { name: "Bomba de Avellanas", price: 3500, desc: "Café, leche y pasta de avellanas" },
      { name: "Baileys", price: 3400, desc: "Café, baileys, crema y chips de chocolate negro" },
      { name: "Baires", price: 3500, desc: "Café, leche, dulce de leche y pasta de avellanas" },
      { name: "Mocaccino", price: 3400, desc: "Café, chocolate y espuma de leche" },
      { name: "Cold Brew", price: 3600, desc: "Café frío decorado con naranja seca" },
      { name: "Espreso Tonic", price: 3600, desc: "Expreso, tónica y caramelo, decorado con piel de limón" },
      { name: "Café Frío con leche", price: 3600, desc: "Caramel / chocolate / vainilla / avellanas / pistachos" },
      { name: "Café Frío de Coco", price: 3600, desc: "Café con leche, coco y dulce de leche" },
      { name: "Adicional: Crema", price: 1200 },
      { name: "Adicional: Leche de Almendras", price: 1600 },
    ]
  },
  {
    id: "cafe-frappe",
    name: "Café Frappé",
    img: "https://tse2.mm.bing.net/th/id/OIP.2UL55137uk4B1oVKN-DhEgHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      { name: "Frappuccino Americana", price: 5700, desc: "Helado de americana, cappuccino y chips de chocolate", badge: "pop" },
      { name: "Frappuccino Frutilla", price: 5700, desc: "Helado de frutilla, cappuccino, crema y salsa de frutilla" },
      { name: "Coffee-Choc", price: 5700, desc: "Helado de chocolate, café, salsa de caramelo, crema y cacao" },
    ]
  },
  {
    id: "jugos",
    name: "Jugos",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/34/jugos-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Exprimido de Naranja", price: 4000 },
      { name: "Fresco", price: 4300, desc: "Kiwi, albahaca, apio y azúcar", badge: "veg" },
      { name: "Ligero", price: 4300, desc: "Naranja y frutilla" },
      { name: "D-Tox", price: 4300, desc: "Naranja, apio, espinaca, manzana verde, jengibre y edulcorante", badge: "veg" },
      { name: "Limonada", price: 4300, desc: "Limón, albahaca y jengibre", badge: "veg" },
      { name: "Antioxidante", price: 4300, desc: "Espinaca, pepino, manzana verde, limón y edulcorante", badge: "veg" },
    ]
  },
  {
    id: "jugos-botellones",
    name: "Jugos Botellones",
    img: "https://i.pinimg.com/originals/85/63/b3/8563b3f9a43d7cfec308ef60a2f85343.jpg",
    items: [
      { name: "Ananá, limón y jengibre", price: 6500 },
      { name: "Limón y albahaca", price: 6500 },
      { name: "Frutos rojos y naranja", price: 6500 },
      { name: "Kiwi, manzana verde y frutilla", price: 6500 },
      { name: "Frutilla, jengibre y limón", price: 6500 },
    ]
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    img: "https://www.queensleeappetit.com/wp-content/uploads/2020/10/classic-chocolate-milkshake-recipe-queensleeappetit.com-0.jpg",
    items: [
      { name: "Frutilla", price: 5800, desc: "Helado de frutilla y leche" },
      { name: "Chocolate", price: 5800, desc: "Helado de chocolate y leche" },
      { name: "Americana", price: 5800, desc: "Helado de crema americana y leche" },
    ]
  },
  {
    id: "licuados",
    name: "Licuados",
    img: "https://th.bing.com/th/id/OIP.vuUYNvSwWZLd23zbkHvEBAHaFI?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      { name: "Banana o durazno", price: 4400, desc: "Con agua o leche" },
      { name: "Frutilla y kiwi", price: 4400, desc: "Con agua o leche" },
      { name: "Yogurt con frutas y granola", price: 3200 },
      { name: "Yogurt con cereales", price: 3100 },
    ]
  },
  {
    id: "opciones-verano",
    name: "Opciones de Verano",
    img: "https://tse4.mm.bing.net/th/id/OIP._3X_HxL-mKErr9RTKsJG8AHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      { name: "Copa Helada Frutos Rojos", price: 8000, desc: "Helado de americana, frutos rojos, crema moca y salsa de chocolate" },
      { name: "Copa Helada Frutal", price: 8000, desc: "Frutas, crema, helado de frutilla, salsa de chocolate y frutilla" },
      { name: "Copa Helada Oreo", price: 8000, desc: "Oreo, helado de chocolate, salsa de chocolate, crema y frutos secos" },
      { name: "Té Frío Melón y Menta", price: 6500, desc: "Melón, menta, kiwi y azúcar" },
      { name: "Té Frío Rosa Mosqueta", price: 6500, desc: "Frutilla, sandía y azúcar" },
    ]
  },
  {
    id: "bebidas",
    name: "Bebidas",
    img: "https://th.bing.com/th/id/OIP.LyNa7r4GFhoNp60wD5xc1AHaDs?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      { name: "Agua mineral", price: 2500, desc: "Con o sin gas, 500cc" },
      { name: "Agua con gas", price: 2500 },
      { name: "Coca Cola", price: 3500, desc: "Zero, Sprite Zero o Fanta, 375cc" },
      { name: "Schweppes", price: 3500, desc: "Pomelo o tónica, 354cc" },
      { name: "Aquarius", price: 3500, desc: "Pomelo, manzana, naranja o pera, 500cc" },
    ]
  },
  {
    id: "cervezas",
    name: "Cervezas",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/22/cervezas-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Ortuzar Honey", price: 4200, desc: "Lata, 473cc" },
      { name: "Ortuzar Golden Ale", price: 4200, desc: "Lata, 473cc" },
      { name: "Ortuzar Scottish Export", price: 4200, desc: "Lata, 473cc" },
      { name: "Ortuzar IPA", price: 4200, desc: "Lata, 473cc" },
      { name: "Ortuzar Porter", price: 4200, desc: "Negra, 473cc" },
      { name: "Ortuzar Dubbel", price: 4200, desc: "Lata, 473cc" },
      { name: "Ortuzar Premium Lager", price: 4200, desc: "Rubia, 473cc" },
    ]
  },
  {
    id: "desayuno",
    name: "Desayuno o Merienda",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/4/desayuno-o-merienda-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Croissant", price: 3000 },
      { name: "Croissant con Chocolate", price: 3000 },
      { name: "Tostadas pan de molde", price: 2900, desc: "Con mermelada, manteca, dulce de leche o queso crema" },
      { name: "Medialunas dulces o saladas", price: 900 },
      { name: "Medialuna salada de torno", price: 1000 },
      { name: "Medialuna de croissant", price: 3000 },
      { name: "Nueva York", price: 3700, desc: "Huevos revueltos, 2 tostadas, guacamole y panceta ahumada", badge: "pop" },
      { name: "Huevo revuelto", price: 800, desc: "Cada uno" },
    ]
  },
  {
    id: "cualquier-momento",
    name: "Cualquier Momento del Día",
    img: "https://tse4.mm.bing.net/th/id/OIP.E6ZN4D7DzADn_4iQXii59gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      { name: "Croissant jamón y queso", price: 3200 },
      { name: "Croissant crudo y queso", price: 3500 },
      { name: "Croissant pollo", price: 3900, desc: "Cebolla morada, morrón, verdeo, mayonesa de ajo, queso crema, rúcula y cherrys" },
      { name: "Croissant huevos revueltos", price: 3900, desc: "Huevos revueltos y palta" },
      { name: "Croissant salchichas", price: 3900, desc: "Salchichas, salsa cheddar y verdeo" },
      { name: "Medialuna jamón y queso", price: 2500 },
      { name: "Croissant Frutal", price: 3900, desc: "Frutas de estación, crema moca y salsa de frutilla" },
      { name: "Croissant Frutilla", price: 3900, desc: "Crema, frutillas y salsa de chocolate" },
    ]
  },
  {
    id: "tostados",
    name: "Tostados",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/27/tostados-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Jamón cocido y queso", price: 6300 },
      { name: "Primavera", price: 6800, desc: "Lechuga, tomate, jamón cocido o queso" },
      { name: "Jamón crudo y queso", price: 6800 },
      { name: "Tostones Guacamole", price: 6300, desc: "Con guacamole y huevos revueltos" },
      { name: "Tostones Jamón Crudo", price: 6800, desc: "Jamón crudo, rúcula, cherry, oliva, ajo y queso Tybo" },
      { name: "Tostado de Chipá jamón y queso", price: 6300 },
      { name: "Tostado de Chipá jamón crudo y queso", price: 6800 },
      { name: "Tostado de Chipá primavera", price: 6800 },
    ]
  },
  {
    id: "sandwiches-frios",
    name: "Sandwiches Fríos",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/29/sandwiches-frios-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Lyon", price: 7100, desc: "Jamón crudo, queso tybo, rúcula y cherry en pan baguette con finas hierbas" },
      { name: "Estambul", price: 7100, desc: "Tomates confitados, rúcula, parmesano en pan de salvado y miel", badge: "veg" },
      { name: "Nairobi", price: 7100, desc: "Pollo, guacamole, cherrys, lechuga y cebolla morada en pan de molde" },
    ]
  },
  {
    id: "sandwiches-tibios",
    name: "Sandwiches Tibios",
    img: "https://tse2.mm.bing.net/th/id/OIP.VbkUs8Ize4Iklb3ilIH0WAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      { name: "Mónaco", price: 7100, desc: "Pan árabe con panceta, cheddar, lechuga, tomate y palta" },
      { name: "Vegetariano", price: 7100, desc: "Berenjenas y tomates grillados, queso, huevo y mayonesa de ajo en pan de salvado", badge: "veg" },
      { name: "Francis", price: 7100, desc: "Cebolla caramelizada, panceta y mix de quesos grillados en pan de molde" },
      { name: "Memphis", price: 7100, desc: "Verduras grilladas de estación y queso tybo gratinado", badge: "veg" },
      { name: "Munich", price: 7100, desc: "Pollo, tybo, cebolla morada, cherrys y aderezo clásica" },
      { name: "Zúrich", price: 7100, desc: "Bondiola braseada en barbacoa con verduras, queso verdeo y alioli" },
    ]
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/30/quesadillas-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Dubai", price: 5400, desc: "Carne, champignones, nueces y queso crema" },
      { name: "Jalisco", price: 5100, desc: "Jamón crudo, rúcula, palta, cherry y parmesano" },
      { name: "Palermo", price: 5100, desc: "Berenjena, zucchini, zanahoria, cherrys, espinaca y queso", badge: "veg" },
      { name: "Turín", price: 5400, desc: "Cerdo, zanahoria, cebolla, morrón, mostaza y miel" },
      { name: "Estocolmo", price: 5400, desc: "Pollo, verdeo, queso crema, cherrys y aceite de ajo" },
    ]
  },
  {
    id: "burgers",
    name: "Burgers",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/36/hamburguesas-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Niza", price: 9000, desc: "Carne, jamón cocido, tybo, cebolla morada, tomate y pepinos en pan árabe" },
      { name: "Clásica", price: 9500, desc: "Carne, cheddar, panceta, huevo, lechuga y tomate con barbacoa", badge: "pop" },
      { name: "Berlín", price: 9500, desc: "Carne, tybo, guacamole, cebolla morada y huevo en pan árabe" },
      { name: "Veggie", price: 9000, desc: "Hamburguesa vegetariana, lechuga, tomate y tybo en pan árabe", badge: "veg" },
      { name: "Génova", price: 10500, desc: "Doble hamburguesa, salsa cheddar, huevo, panceta y barbacoa", badge: "pop" },
    ]
  },
  {
    id: "ternera",
    name: "Sándwiches de Ternera",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/37/lomitos-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Cardiff", price: 11000, desc: "Ternera tiernizada, morrón, panceta, tybo, huevo, lechuga y tomate en pan árabe" },
      { name: "Bondiola Oslo", price: 11000, desc: "Bondiola, juliana de morrones, tybo, huevo, cebolla morada y alioli en pan figazza" },
      { name: "Singapur", price: 11000, desc: "Carne desmechada, rúcula y queso parmesano en pan árabe" },
      { name: "Boston", price: 11000, desc: "Ternera tiernizada, queso finas hierbas, cherrys, cheddar y rúcula en pan árabe" },
      { name: "Verona de Pollo", price: 10400, desc: "Pollo, bechamel, zucchini, cebolla morada, morrones, zanahoria y parmesano" },
      { name: "Nápoles Bondiola", price: 11000, desc: "Bondiola braseada en mostaza y cerveza, verduras, huevo y alioli en pan árabe" },
    ]
  },
  {
    id: "milanesas",
    name: "Milanesas",
    img: "https://tse2.mm.bing.net/th/id/OIP.p1jHjr347RLIM0oDSpiWPwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    items: [
      { name: "Mila Luxor en baguette", price: 10800, desc: "Milanesa, lechuga, tomate, jamón, queso y huevo con papas fritas" },
      { name: "Mila Madrid", price: 9800, desc: "Milanesa al plato con gajos de limón y papas fritas" },
      { name: "Mila Barcelona", price: 10800, desc: "Milanesa al plato con 2 huevos y papas fritas" },
      { name: "Mila Napo", price: 10800, desc: "Milanesa con salsa de tomate, jamón cocido, tybo, tomate y orégano" },
    ]
  },
  {
    id: "papas",
    name: "Nuestras Papas",
    img: "https://th.bing.com/th/id/R.7d55a10939cfd33461649019450c94f9?rik=eHISH1arKFOeWQ&pid=ImgRaw&r=0",
    items: [
      { name: "Kansas", price: 4700, desc: "Con cheddar y panceta" },
      { name: "Brujas", price: 4700, desc: "Huevo revuelto, jamón cocido y verdeo" },
      { name: "Papas fritas solas", price: 4500 },
    ]
  },
  {
    id: "pancho",
    name: "Super Pancho",
    img: "https://img-global.cpcdn.com/recipes/689c483388f76a9e/1502x1064cq70/super-pancho-big-mac-foto-principal.jpg",
    items: [
      { name: "Chicago", price: 5300, desc: "Huevo revuelto, jamón cocido, verdeo y mayonesa con papas fritas" },
      { name: "Dallas", price: 5300, desc: "Panceta y cheddar con papas fritas" },
    ]
  },
  {
    id: "empanadas",
    name: "Empanadas",
    img: "https://handletheheat.com/wp-content/uploads/2015/06/beef-empanadas-SQUARE.jpg",
    items: [
      { name: "Carne", price: 1200 },
      { name: "Jamón y queso", price: 1200 },
    ]
  },
  {
    id: "ensaladas",
    name: "Ensaladas",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/24/ensaladas-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Praga", price: 6700, desc: "Tomates confitados, berenjenas grilladas, hojas verdes y queso tybo", badge: "veg" },
      { name: "Valencia", price: 7100, desc: "Rúcula, jamón crudo, palta y cherry" },
      { name: "Lisboa", price: 7100, desc: "Hojas verdes, morrones, tomates, huevo duro y pollo" },
      { name: "Pekín", price: 7700, desc: "Hojas verdes, roquefort, calabaza grillada y nueces" },
      { name: "César de Pollo", price: 7700, desc: "Lechuga, parmesano, pollo, croutones y aderezo cesar", badge: "pop" },
      { name: "Ensalada cinco ingredientes", price: 7900, desc: "A elección: hojas verdes, tomate, zanahoria, queso tybo, huevo, choclo, jamón o pollo" },
    ]
  },
  {
    id: "omelette",
    name: "Omelette",
    img: "https://www.simplyrecipes.com/thmb/S_UML7GX7JQDl5wLTAmKKNh1rjs=/2000x1334/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg",
    items: [
      { name: "Dublín", price: 4500, desc: "Jamón crudo, queso tybo, cherrys y rúcula" },
      { name: "Clásica", price: 4500, desc: "Panceta ahumada, cheddar, cherrys y cebolla morada" },
      { name: "Sevilla", price: 4200, desc: "Jamón cocido y queso tybo" },
      { name: "Roma", price: 4500, desc: "Queso tybo, verduras de estación salteadas con oliva y orégano", badge: "veg" },
    ]
  },
  {
    id: "waffles",
    name: "Waffles Dulces",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/40/waffles-dobles-clasica-panaderia-bahia-blanca-desktop.jpeg",
    items: [
      { name: "Clásica", price: 4800, desc: "Frutas de estación, crema, salsa de frutos rojos y chocolate" },
      { name: "Banana Split", price: 4800, desc: "Banana, dulce de leche, crema, chips de chocolate y salsa de chocolate" },
      { name: "Frutos Rojos", price: 5100, desc: "Frutos rojos, helado de americana y salsa de chocolate" },
      { name: "Oreo", price: 5100, desc: "Pasta de avellanas, helado de chocolate negro, frutos secos y oreos", badge: "pop" },
      { name: "Manzana", price: 4700, desc: "Manzanas caramelizadas al whisky y crema chantilly" },
      { name: "Pistacho", price: 5100, desc: "Masa de chocolate, crema moca, frutos rojos y pistachos" },
    ]
  },
  {
    id: "delicatessen",
    name: "Delicatessen Clásica",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/23/delicatessen-clasica-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Scón de queso", price: 2900 },
      { name: "Alfajores", price: 2200 },
      { name: "Cuadradito de brownie o lemonies", price: 2900 },
      { name: "Cookies", price: 2300 },
      { name: "Cookie chocolate con chips blancos", price: 5000, desc: "Rellenas de pasta de avellanas y lluvia de almendras", badge: "pop" },
      { name: "Cookie Red Velvet", price: 5000, desc: "Rellenas de chocolate blanco con chips blancos y pistachos" },
      { name: "Cookie vainilla con chips de chocolate", price: 5000, desc: "Rellenas de ganache de chocolate y lluvia de nueces" },
      { name: "Roll de canela con nuez", price: 3000 },
      { name: "Porción Ricota", price: 3300 },
      { name: "Muffins", price: 2900 },
      { name: "Crumble de manzana tibio", price: 5400, desc: "Con helado de crema americana" },
      { name: "Cake Pop", price: 2700 },
    ]
  },
  {
    id: "pasteleria",
    name: "Pastelería",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/8/pasteleria-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Torta Imperial", price: 4900 },
      { name: "Lemon Pie", price: 4900 },
      { name: "Tiramisú", price: 4900 },
      { name: "Chocotorta", price: 4900 },
      { name: "Torta Brownie", price: 5400, desc: "Brownie, dulce de leche y merengue", badge: "pop" },
      { name: "Tarteleta Frutilla", price: 5800 },
      { name: "Torta Oreo", price: 5400, desc: "Bizcochuelo de chocolate relleno con crema con Oreo" },
      { name: "Choco Oreo", price: 5400, desc: "Oreo, dulce de leche y crema" },
      { name: "Bomba Clásica", price: 5800, desc: "Bizcochuelo de chocolate relleno con ganache de chocolate" },
      { name: "Cheesecake", price: 5400 },
      { name: "Strudel de Manzana", price: 3000 },
      { name: "Red Velvet", price: 4900 },
      { name: "Selva Negra", price: 4900 },
      { name: "Balcarce", price: 4900 },
    ]
  },
  {
    id: "pizzetas",
    name: "Pizzetas",
    img: "https://www.panaderiaclasica.com.ar/public/img/categorias/31/pizzetas-clasica-panaderia-bahia-blanca-desktop.jpg",
    items: [
      { name: "Mozzarella", price: 6500, desc: "Mozzarella, aceitunas verdes y orégano", badge: "veg" },
      { name: "Napolitana", price: 6700, desc: "Mozzarella, tomate, orégano y aceite de ajo", badge: "veg" },
      { name: "Vegetariana", price: 6700, desc: "Salteado de verduras de estación y mozzarella", badge: "veg" },
      { name: "Especial", price: 6600, desc: "Jamón cocido, mozzarella, morrón y orégano" },
      { name: "Clásica", price: 6700, desc: "Panceta ahumada, mozzarella, huevo a la plancha y verdeo" },
    ]
  },
];
 
// ── BUILD NAV ──
const navEl = document.getElementById('cat-nav-inner');
MENU.forEach(cat => {
  const a = document.createElement('a');
  a.className = 'cat-btn';
  a.href = '#' + cat.id;
  a.dataset.cat = cat.id;
  a.textContent = cat.name;
  navEl.appendChild(a);
});
 
// ── BUILD MENU ──
const mainEl = document.getElementById('main-content');
const BADGES = { veg: ['badge-veg', '🌱 Veggie'], pop: ['badge-pop', '⭐ Popular'], new: ['badge-new', '✨ Nuevo'] };
 
function buildMenu(filter = '') {
  mainEl.innerHTML = '';
  let total = 0;
  const q = filter.toLowerCase().trim();
 
  MENU.forEach(cat => {
    const items = q
      ? cat.items.filter(i =>
          i.name.toLowerCase().includes(q) ||
          (i.desc || '').toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        )
      : cat.items;
 
    if (items.length === 0) return;
    total += items.length;
 
    const sec = document.createElement('section');
    sec.className = 'cat-section';
    sec.id = cat.id;
 
    const headerHTML = cat.img
      ? `<div class="cat-header">
           <img src="${cat.img}" alt="${cat.name}" loading="lazy" onerror="this.style.display='none'"/>
           <div class="cat-header-text">
             <h2>${cat.name}</h2>
             <p>${items.length} opciones</p>
           </div>
         </div>`
      : `<div class="cat-header">
           <div class="cat-header-text">
             <h2>${cat.name}</h2>
             <p>${items.length} opciones</p>
           </div>
         </div>`;
 
    const cardsHTML = items.map(item => {
      const b = item.badge ? BADGES[item.badge] : null;
      const badgeHTML = b ? `<span class="badge ${b[0]}">${b[1]}</span>` : '';
      return `
        <div class="product-card">
          <div class="product-name">${item.name}</div>
          ${item.desc ? `<div class="product-desc">${item.desc}</div>` : ''}
          <div class="product-footer">
            <span class="product-price">$${item.price.toLocaleString('es-AR')}</span>
            <div class="product-badges">${badgeHTML}</div>
          </div>
        </div>`;
    }).join('');
 
    sec.innerHTML = headerHTML + `<div class="cat-divider"></div><div class="product-grid">${cardsHTML}</div>`;
    mainEl.appendChild(sec);
  });
 
  const noRes = document.getElementById('no-results');
  const countEl = document.getElementById('search-count');
  if (total === 0 && q) {
    noRes.style.display = 'block';
    mainEl.style.display = 'none';
  } else {
    noRes.style.display = 'none';
    mainEl.style.display = '';
  }
  if (q) {
    countEl.style.display = 'block';
    countEl.textContent = `${total} resultado${total !== 1 ? 's' : ''} para "${filter}"`;
  } else {
    countEl.style.display = 'none';
  }
}
 
buildMenu();
 
// ── SEARCH ──
document.getElementById('search-input').addEventListener('input', e => {
  buildMenu(e.target.value);
});
 
// ── CAT NAV ACTIVE ──
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.dataset.cat === 'all') {
      e.preventDefault();
      document.getElementById('search-input').value = '';
      buildMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
 
// Active cat on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === id);
      });
    }
  });
}, { threshold: 0.3 });
 
document.querySelectorAll('.cat-section').forEach(s => observer.observe(s));
 
// ── SCROLL TOP ──
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 300);
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
 