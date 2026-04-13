const INVENTARIO = [
  { name: "Alfajores chocolate" },
  { name: "Alfajores coco" },
  { name: "Alfajores maicena o cordobés" },
  { name: "Alfajores hojaldre" },

  { name: "Ayuyas (kg)" },
  { name: "Baybiscuit (kg)" },
  { name: "Biscochos comunes (kg)" },
  { name: "Biscochos saborizados" },

  { name: "Brownies" },
  { name: "Budín cereza y dulce" },
  { name: "Budín con frutas" },
  { name: "Cake pop" },

  { name: "Cañoncitos" },
  { name: "Chipa (kg)" },
  { name: "Copitos" },
  { name: "Coquitos" },

  { name: "Cremona" },
  { name: "Croc. de manzana" },
  { name: "Cuadraditos de limón/naranja" },

  { name: "Empanadas (docena)" },
  { name: "Facturas (docena)" },

  { name: "Galletas de avena (kg)" },
  { name: "Grisines (kg)" },

  { name: "Hojaldritos" },
  { name: "Marineras (kg)" },

  { name: "Masas surtidas" },
  { name: "Masas elegidas" },

  { name: "Niditos" },
  { name: "Palmeritas (kg)" },

  { name: "Pan (kg)" },
  { name: "Pan de miga (kg)" },
  { name: "Pan árabe" },

  { name: "Pan para hamburguesa" },
  { name: "Pionono" },

  { name: "Pizza lista" },
  { name: "Pizzetas (kg)" },

  { name: "Roll de canela" },
  { name: "Scon de queso" },

  { name: "Strudel" },
  { name: "Tortas materas" },

  { name: "Tostadas (kg)" },
  { name: "Vainillas (kg)" }
];

const cards = document.querySelectorAll(".product-card");
const input = document.getElementById("search-input");
const count = document.getElementById("search-count");
const noResults = document.getElementById("no-results");

function normalize(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

input.addEventListener("input", () => {
  const q = normalize(input.value);
  let visible = 0;

  cards.forEach((card) => {
    const name = normalize(card.querySelector(".product-name").textContent);

    if (name.includes(q)) {
      card.style.display = "flex";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  // contador
  if (q.length > 0) {
    count.textContent = `${visible} resultado(s)`;
  } else {
    count.textContent = "";
  }

  // sin resultados
  if (visible === 0 && q.length > 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
});

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});