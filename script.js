
/* ==========================================
   THÊM 200 LAPTOP - 5 THƯƠNG HIỆU
   Giá: 10 - 150 triệu VNĐ
   Mỗi thương hiệu: 40 sản phẩm
   ========================================== */

const laptopData200 = [
  {
    brand: "ASUS",
    models: [
      "Vivobook 15", "Vivobook Pro 16",
      "Zenbook 14 OLED", "Zenbook S 16",
      "ExpertBook B5", "ProArt P16",
      "TUF Gaming A15", "ROG Zephyrus G16"
    ],
    cpu: [
      "Intel Core i5", "Intel Core i7",
      "Intel Core Ultra 7", "Intel Core Ultra 9",
      "AMD Ryzen 9"
    ],
    gpu: [
      "Intel Iris Xe", "RTX 4050",
      "RTX 4060", "RTX 5070",
      "RTX 5080"
    ],
    screens: [
      "15.6 inch FHD", "16 inch WUXGA",
      "14 inch OLED", "16 inch OLED",
      "16 inch 240Hz"
    ]
  },
  {
    brand: "Acer",
    models: [
      "Aspire 5", "Aspire 7",
      "Swift Go 14", "Swift X 16",
      "TravelMate P6", "Nitro V 15",
      "Predator Helios 16", "Predator Triton 17"
    ],
    cpu: [
      "Intel Core i5", "Intel Core i7",
      "Intel Core Ultra 7", "Intel Core Ultra 9",
      "AMD Ryzen 9"
    ],
    gpu: [
      "Intel Iris Xe", "RTX 4050",
      "RTX 4060", "RTX 5070",
      "RTX 5080"
    ],
    screens: [
      "15.6 inch FHD", "16 inch WUXGA",
      "14 inch OLED", "16 inch OLED",
      "18 inch 240Hz"
    ]
  },
  {
    brand: "Lenovo",
    models: [
      "IdeaPad Slim 5", "IdeaPad Pro 5",
      "ThinkBook 16", "ThinkPad X1 Carbon",
      "ThinkPad P1", "Yoga Pro 9i",
      "Legion 5 Pro", "Legion 9i"
    ],
    cpu: [
      "Intel Core i5", "Intel Core i7",
      "Intel Core Ultra 7", "Intel Core Ultra 9",
      "AMD Ryzen 9"
    ],
    gpu: [
      "Intel Arc Graphics", "RTX 4050",
      "RTX 4060", "RTX 5070",
      "RTX 5080"
    ],
    screens: [
      "14 inch FHD", "16 inch WUXGA",
      "14 inch OLED", "16 inch OLED",
      "16 inch 240Hz"
    ]
  },
  {
    brand: "HP",
    models: [
      "HP 15", "HP Pavilion Plus",
      "OmniBook Ultra", "EliteBook 840",
      "ZBook Power", "ZBook Fury",
      "OMEN 16", "OMEN MAX 16"
    ],
    cpu: [
      "Intel Core i5", "Intel Core i7",
      "Intel Core Ultra 7", "Intel Core Ultra 9",
      "AMD Ryzen 9"
    ],
    gpu: [
      "Intel Iris Xe", "RTX 4050",
      "RTX 4060", "RTX 5070",
      "RTX 5080"
    ],
    screens: [
      "15.6 inch FHD", "16 inch WUXGA",
      "14 inch OLED", "16 inch OLED",
      "16 inch 240Hz"
    ]
  },
  {
    brand: "DELL",
    models: [
      "Dell 15", "Dell 16 Plus",
      "Dell Pro 14", "Dell Pro 16",
      "XPS 14", "XPS 16",
      "Alienware 16", "Alienware Area-51"
    ],
    cpu: [
      "Intel Core i5", "Intel Core i7",
      "Intel Core Ultra 7", "Intel Core Ultra 9",
      "AMD Ryzen 9"
    ],
    gpu: [
      "Intel Graphics", "RTX 4050",
      "RTX 4060", "RTX 5070",
      "RTX 5080"
    ],
    screens: [
      "15.6 inch FHD", "16 inch WUXGA",
      "14 inch OLED", "16 inch OLED",
      "18 inch 240Hz"
    ]
  }
];

// Các cấu hình RAM và ổ cứng
const ramOptions = [
  "8GB DDR5",
  "16GB DDR5",
  "16GB DDR5",
  "32GB DDR5",
  "64GB DDR5"
];

const storageOptions = [
  "256GB SSD",
  "512GB SSD",
  "1TB SSD",
  "1TB SSD",
  "2TB SSD"
];

const weightOptions = [
  "1.4kg", "1.6kg", "1.8kg", "2.2kg", "2.8kg"
];

// Tạo 40 sản phẩm cho mỗi thương hiệu
laptopData200.forEach((brandData, brandIndex) => {

  const products = [];

  brandData.models.forEach((model, modelIndex) => {

    for (let version = 0; version < 5; version++) {

      // Tạo giá khác nhau, từ 10.9 đến 149.9 triệu
      const price = Number((
        10 + (
          (brandIndex * 31 +
           modelIndex * 17 +
           version * 11) % 140
        ) + 0.9
      ).toFixed(1));

      const cpu = brandData.cpu[version];

      const gpu = brandData.gpu[version];

      const ram = ramOptions[version];

      const storage = storageOptions[version];

      const screen = brandData.screens[version];

      const weight = weightOptions[version];

      products.push([
        `${brandData.brand} ${model} - Phiên bản ${version + 1}`,
        price,
        cpu,
        ram,
        storage,
        gpu,
        screen,
        weight
      ]);
    }
  });

  // Thêm sản phẩm vào website
  addBrand(brandData.brand, products);

});

console.log("Đã thêm thành công 200 laptop!");
console.log("ASUS: 40 sản phẩm");
console.log("Acer: 40 sản phẩm");
console.log("Lenovo: 40 sản phẩm");
console.log("HP: 40 sản phẩm");
console.log("DELL: 40 sản phẩm");
