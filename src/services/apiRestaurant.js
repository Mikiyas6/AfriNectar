const API_URL = "https://react-fast-pizza-api.onrender.com/api";
// const API_URL_LOCAL =
//   "https://perenual.com/api/v2/species-list?key=sk-VJwG68225987912da10398";

const flowerList = [
  {
    id: 1,
    name: "Rose",
    description:
      "Ethiopia's most exported flower, known for its elegance, variety of colors, and fragrance.",
    imageUrl:
      "https://images.unsplash.com/photo-1530906622963-8a60586a49c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXN8ZW58MHx8MHx8fDA%3D",
    unitPrice: 15,
    soldOut: false,
    taxRate: 0.15,
  },
  {
    id: 2,
    name: "Gypsophila",
    description:
      "Often called 'baby’s breath', used as a filler in bouquets for its tiny white blossoms.",
    imageUrl:
      "https://images.unsplash.com/photo-1596140233097-e637d44b4418?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3lwc29waGlsYXxlbnwwfHwwfHx8MA%3D%3D",
    unitPrice: 8,
    soldOut: false,
    taxRate: 0.1,
  },
  {
    id: 3,
    name: "Hypericum",
    description:
      "A berry-like filler flower with bright colors, used to complement bouquets.",
    imageUrl:
      "https://images.unsplash.com/photo-1714254258098-05246ccb6cbc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SHlwZXJpY3VtfGVufDB8fDB8fHww",
    unitPrice: 10,
    soldOut: true,
    taxRate: 0.12,
  },
  {
    id: 4,
    name: "Carnation",
    description:
      "A ruffled flower popular for its longevity and wide color variety.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661346003942-b50b97a25d90?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcm5hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    unitPrice: 11,
    soldOut: false,
    taxRate: 0.35,
  },
  {
    id: 5,
    name: "Statice",
    description:
      "A small, papery flower used in dried arrangements and bouquets.",
    imageUrl:
      "https://images.unsplash.com/photo-1683560146177-9b3f206c128b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhdGljZXxlbnwwfHwwfHx8MA%3D%3D",
    unitPrice: 7,
    soldOut: false,
    taxRate: 0.14,
  },
  {
    id: 6,
    name: "Alstroemeria",
    description:
      "Also called Peruvian Lily, known for streaked petals and long vase life.",
    imageUrl:
      "https://images.unsplash.com/photo-1676452578653-dcab49356f2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWxzdHJvZW1lcmlhfGVufDB8fDB8fHww",
    unitPrice: 13,
    soldOut: true,
    taxRate: 0.12,
  },
  {
    id: 7,
    name: "Lisianthus",
    description: "Elegant rose-like blooms popular in floral arrangements.",
    imageUrl:
      "https://images.unsplash.com/photo-1689155259057-c667689490cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGlzaWFudGh1c3xlbnwwfHwwfHx8MA%3D%3D",
    unitPrice: 14,
    soldOut: false,
    taxRate: 0.15,
  },
  {
    id: 8,
    name: "Calla Lily",
    description:
      "A stylish trumpet-shaped flower used in formal floral designs.",
    imageUrl:
      "https://images.unsplash.com/photo-1593897979450-1f735d57c156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbGxhJTIwbGlseXxlbnwwfHwwfHx8MA%3D%3D",
    unitPrice: 18,
    soldOut: true,
    taxRate: 0.16,
  },
  {
    id: 9,
    name: "Delphinium",
    description: "Tall spiked flowers adding height and color to arrangements.",
    imageUrl:
      "https://images.unsplash.com/photo-1602690923807-b07fc3a5f25b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERlbHBoaW5pdW18ZW58MHx8MHx8fDA%3D",
    unitPrice: 16,
    soldOut: false,
    taxRate: 0.17,
  },
  {
    id: 10,
    name: "Chrysanthemum",
    description:
      "Symbolizing longevity and optimism, widely grown in Ethiopian highlands.",
    imageUrl:
      "https://images.unsplash.com/photo-1536126080396-d775c5296e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hyeXNhbnRoZW11bXxlbnwwfHwwfHx8MA%3D%3D",
    unitPrice: 12,
    soldOut: false,
    taxRate: 0.16,
  },
  {
    id: 11,
    name: "Gerbera Daisy",
    description:
      "Bright and cheerful blooms popular in mixed flower arrangements.",
    imageUrl:
      "https://images.unsplash.com/photo-1597583995844-edce63cc1cb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2VyYmVyYSUyMERhaXN5fGVufDB8fDB8fHww",
    unitPrice: 10,
    soldOut: true,
    taxRate: 0.17,
  },
  {
    id: 12,
    name: "Aster",
    description: "Small daisy-like flower often used as filler in bouquets.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661721985893-fa40e1b330fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXN0ZXJ8ZW58MHx8MHx8fDA%3D",
    unitPrice: 9,
    soldOut: false,
    taxRate: 0.17,
  },
  {
    id: 13,
    name: "Veronica",
    description: "Slender spike-like flowers that add elegance and texture.",
    imageUrl:
      "https://images.unsplash.com/photo-1715109331967-e67a484f6a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFZlcm9uaWNhfGVufDB8fDB8fHww",
    unitPrice: 11,
    soldOut: true,
    taxRate: 0.14,
  },
  {
    id: 14,
    name: "Freesia",
    description: "Delicate, fragrant blooms used in wedding and gift bouquets.",
    imageUrl:
      "https://images.unsplash.com/photo-1666071035109-9c10e8f8395a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEZyZWVzaWF8ZW58MHx8MHx8fDA%3D",
    unitPrice: 14,
    soldOut: false,
    taxRate: 0.15,
  },
  {
    id: 15,
    name: "Snapdragon",
    description:
      "Vertical blooming flower that adds dramatic flair to designs.",
    imageUrl:
      "https://images.unsplash.com/photo-1508269757141-a5eaf8a31ef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25hcGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D",
    unitPrice: 13,
    soldOut: false,
    taxRate: 0.14,
  },
  {
    id: 16,
    name: "Solidago",
    description: "Yellow filler flower that adds contrast and texture.",
    imageUrl:
      "https://images.unsplash.com/photo-1600801507424-eeba28c741c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29saWRhZ298ZW58MHx8MHx8fDA%3D",
    unitPrice: 8,
    soldOut: false,
    taxRate: 0.19,
  },
  {
    id: 18,
    name: "Scabiosa",
    description:
      "Pincushion-like flower grown for its unique shape and gentle color.",
    imageUrl:
      "https://images.unsplash.com/photo-1625686174428-61ab1e561395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2NhYmlvc2F8ZW58MHx8MHx8fDA%3D",
    unitPrice: 12,
    soldOut: false,
    taxRate: 0.16,
  },
];

export async function getMenu() {
  return flowerList;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();

  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
