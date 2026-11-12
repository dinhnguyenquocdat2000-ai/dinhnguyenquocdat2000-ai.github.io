
const images = [
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=700",
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=700",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700"
];

const products = [];

function addBrand(brand, rows) {
    rows.forEach((r, i) => {
        products.push({
            id: products.length + 1,
            brand,
            name: r[0],
            price: r[1] * 1000000,
            cpu: r[2],
            ram: r[3],
            storage: r[4],
            gpu: r[5],
            screen: r[6],
            weight: r[7],
            os: "Windows 11",
            warranty: "12 tháng",
            image: images[products.length % images.length],
            stock: 5,
            description: `Laptop ${brand} ${r[0]}, phù hợp cho học tập, làm việc và giải trí.`
        });
    });
}

// ================= ASUS: 10 MÁY =================
addBrand("ASUS", [
    ["Vivobook 15 OLED", 15, "Intel Core i5-13420H", "16GB", "512GB SSD", "Intel UHD", "15.6 inch OLED FHD", "1.7 kg"],
    ["Vivobook S 14 OLED", 22, "Intel Core Ultra 5 125H", "16GB", "512GB SSD", "Intel Arc", "14 inch OLED 2.8K", "1.3 kg"],
    ["Zenbook 14 OLED", 27, "Intel Core Ultra 7 155H", "16GB", "1TB SSD", "Intel Arc", "14 inch OLED 3K", "1.2 kg"],
    ["TUF Gaming A15", 25, "AMD Ryzen 7 7435HS", "16GB", "512GB SSD", "RTX 4050 6GB", "15.6 inch FHD 144Hz", "2.2 kg"],
    ["TUF Gaming F16", 32, "Intel Core i7-13650HX", "16GB", "1TB SSD", "RTX 4060 8GB", "16 inch WUXGA 165Hz", "2.3 kg"],
    ["ROG Zephyrus G14", 45, "AMD Ryzen 9 8945HS", "32GB", "1TB SSD", "RTX 4060 8GB", "14 inch OLED 3K 120Hz", "1.5 kg"],
    ["ROG Strix G16", 48, "Intel Core i9-14900HX", "32GB", "1TB SSD", "RTX 4070 8GB", "16 inch QHD 240Hz", "2.5 kg"],
    ["Vivobook Pro 15 OLED", 35, "Intel Core i7-13700H", "16GB", "1TB SSD", "RTX 4050 6GB", "15.6 inch OLED 2.8K", "1.8 kg"],
    ["ExpertBook B5", 30, "Intel Core Ultra 7 155U", "16GB", "1TB SSD", "Intel Graphics", "14 inch WUXGA", "1.3 kg"],
    ["ProArt P16", 50, "AMD Ryzen AI 9 HX 370", "32GB", "1TB SSD", "RTX 4060 8GB", "16 inch OLED 4K", "1.8 kg"]
]);

// ================= ACER: 10 MÁY =================
addBrand("Acer", [
    ["Aspire 5", 12, "Intel Core i5-13420H", "16GB", "512GB SSD", "Intel UHD", "15.6 inch FHD", "1.8 kg"],
    ["Aspire 7", 17, "Intel Core i5-12450H", "16GB", "512GB SSD", "RTX 2050 4GB", "15.6 inch FHD", "2.1 kg"],
    ["Swift Go 14 OLED", 20, "Intel Core Ultra 5 125H", "16GB", "512GB SSD", "Intel Arc", "14 inch OLED 2.8K", "1.3 kg"],
    ["Swift X 14", 30, "Intel Core Ultra 7 155H", "16GB", "1TB SSD", "RTX 4050 6GB", "14.5 inch OLED", "1.5 kg"],
    ["Nitro V 15", 22, "Intel Core i5-13420H", "16GB", "512GB SSD", "RTX 4050 6GB", "15.6 inch FHD 144Hz", "2.1 kg"],
    ["Nitro 16", 32, "AMD Ryzen 7 7840HS", "16GB", "1TB SSD", "RTX 4060 8GB", "16 inch WQXGA 165Hz", "2.6 kg"],
    ["Predator Helios Neo 16", 40, "Intel Core i7-14650HX", "16GB", "1TB SSD", "RTX 4060 8GB", "16 inch WQXGA 165Hz", "2.6 kg"],
    ["Predator Triton Neo 16", 48, "Intel Core Ultra 9 185H", "32GB", "1TB SSD", "RTX 4070 8GB", "16 inch 3.2K 165Hz", "2.1 kg"],
    ["Swift Edge 16", 35, "AMD Ryzen 7 7840U", "16GB", "1TB SSD", "Radeon 780M", "16 inch OLED 3.2K", "1.2 kg"],
    ["TravelMate P4", 25, "Intel Core Ultra 7 155U", "16GB", "512GB SSD", "Intel Graphics", "14 inch WUXGA", "1.5 kg"]
]);

// ================= LENOVO: 10 MÁY =================
addBrand("Lenovo", [
    ["IdeaPad Slim 5", 15, "AMD Ryzen 7 7735HS", "16GB", "512GB SSD", "Radeon 680M", "16 inch WUXGA", "1.9 kg"],
    ["IdeaPad Pro 5", 25, "Intel Core Ultra 5 125H", "16GB", "1TB SSD", "Intel Arc", "14 inch OLED 2.8K", "1.5 kg"],
    ["Yoga Slim 7", 28, "AMD Ryzen 7 8840HS", "16GB", "1TB SSD", "Radeon 780M", "14.5 inch OLED", "1.4 kg"],
    ["ThinkBook 14+", 24, "Intel Core Ultra 7 155H", "16GB", "1TB SSD", "Intel Arc", "14.5 inch 3K", "1.5 kg"],
    ["ThinkPad E14 Gen 6", 23, "AMD Ryzen 7 7735U", "16GB", "512GB SSD", "Radeon 680M", "14 inch WUXGA", "1.4 kg"],
    ["ThinkPad T14 Gen 5", 38, "Intel Core Ultra 7 155U", "32GB", "1TB SSD", "Intel Graphics", "14 inch WUXGA", "1.4 kg"],
    ["LOQ 15", 26, "Intel Core i7-13650HX", "16GB", "512GB SSD", "RTX 4050 6GB", "15.6 inch FHD 144Hz", "2.4 kg"],
    ["Legion 5", 38, "AMD Ryzen 7 8845HS", "16GB", "1TB SSD", "RTX 4060 8GB", "16 inch WQXGA 165Hz", "2.4 kg"],
    ["Legion Pro 5", 47, "Intel Core i9-14900HX", "32GB", "1TB SSD", "RTX 4070 8GB", "16 inch WQXGA 240Hz", "2.5 kg"],
    ["Yoga Pro 9i", 50, "Intel Core Ultra 9 185H", "32GB", "1TB SSD", "RTX 4060 8GB", "16 inch Mini LED 3.2K", "2.0 kg"]
]);

// ================= HP: 10 MÁY =================
addBrand("HP", [
    ["15-fd Series", 12, "Intel Core i5-1334U", "16GB", "512GB SSD", "Intel Iris Xe", "15.6 inch FHD", "1.6 kg"],
    ["Pavilion Plus 14", 20, "Intel Core i5-13500H", "16GB", "512GB SSD", "Intel Iris Xe", "14 inch OLED 2.8K", "1.4 kg"],
    ["Envy x360 14", 27, "AMD Ryzen 7 8840HS", "16GB", "1TB SSD", "Radeon 780M", "14 inch OLED 2.8K", "1.4 kg"],
    ["ProBook 440 G11", 25, "Intel Core Ultra 5 125U", "16GB", "512GB SSD", "Intel Graphics", "14 inch WUXGA", "1.4 kg"],
    ["EliteBook 840 G11", 38, "Intel Core Ultra 7 155U", "32GB", "1TB SSD", "Intel Graphics", "14 inch WUXGA", "1.4 kg"],
    ["Victus 15", 22, "AMD Ryzen 7 8845HS", "16GB", "512GB SSD", "RTX 4050 6GB", "15.6 inch FHD 144Hz", "2.3 kg"],
    ["Victus 16", 30, "Intel Core i7-14650HX", "16GB", "1TB SSD", "RTX 4060 8GB", "16.1 inch FHD 165Hz", "2.3 kg"],
    ["OMEN 16", 42, "Intel Core i7-14700HX", "32GB", "1TB SSD", "RTX 4070 8GB", "16.1 inch QHD 240Hz", "2.4 kg"],
    ["Spectre x360 14", 45, "Intel Core Ultra 7 155H", "32GB", "1TB SSD", "Intel Arc", "14 inch OLED 2.8K", "1.4 kg"],
    ["ZBook Power 15 G10", 48, "Intel Core i7-13700H", "32GB", "1TB SSD", "RTX A1000 6GB", "15.6 inch FHD", "2.0 kg"]
]);

// ================= DELL: 10 MÁY =================
addBrand("DELL", [
    ["Inspiron 15", 13, "Intel Core i5-1334U", "16GB", "512GB SSD", "Intel Iris Xe", "15.6 inch FHD", "1.7 kg"],
    ["Inspiron 14 Plus", 24, "Intel Core Ultra 7 155H", "16GB", "1TB SSD", "Intel Arc", "14 inch 2.5K", "1.6 kg"],
    ["Inspiron 16 Plus", 30, "Intel Core Ultra 7 155H", "16GB", "1TB SSD", "RTX 4050 6GB", "16 inch 2.5K", "2.0 kg"],
    ["Vostro 15", 17, "Intel Core i7-1355U", "16GB", "512GB SSD", "Intel Iris Xe", "15.6 inch FHD", "1.7 kg"],
    ["Latitude 5450", 28, "Intel Core Ultra 5 135U", "16GB", "512GB SSD", "Intel Graphics", "14 inch FHD+", "1.4 kg"],
    ["Latitude 7450", 42, "Intel Core Ultra 7 165U", "32GB", "1TB SSD", "Intel Graphics", "14 inch QHD+", "1.3 kg"],
    ["G15 Gaming", 27, "Intel Core i7-13650HX", "16GB", "1TB SSD", "RTX 4060 8GB", "15.6 inch FHD 165Hz", "2.8 kg"],
    ["G16 Gaming", 38, "Intel Core i9-13900HX", "16GB", "1TB SSD", "RTX 4070 8GB", "16 inch QHD 240Hz", "2.9 kg"],
    ["XPS 13", 45, "Intel Core Ultra 7 155H", "32GB", "1TB SSD", "Intel Arc", "13.4 inch OLED 3K", "1.2 kg"],
    ["XPS 14", 50, "Intel Core Ultra 7 155H", "32GB", "1TB SSD", "RTX 4050 6GB", "14.5 inch OLED 3.2K", "1.7 kg"]
]);

// ================= HÀM CHUNG =================

function formatMoney(value) {
    return value.toLocaleString("vi-VN") + "đ";
}

function getFilteredProducts() {
    const keyword = document.getElementById("search").value
        .trim().toLowerCase();

    const brand = document.getElementById("brandFilter").value;
    const price = document.getElementById("priceFilter").value;
    const sort = document.getElementById("sortFilter").value;

    let result = products.filter(p => {
        const matchSearch =
            p.name.toLowerCase().includes(keyword) ||
            p.brand.toLowerCase().includes(keyword) ||
            p.cpu.toLowerCase().includes(keyword);

        const matchBrand = brand === "all" || p.brand === brand;

        let matchPrice = true;

        if (price !== "all") {
            const [min, max] = price.split("-").map(Number);
            matchPrice =
                p.price >= min * 1000000 &&
                p.price <= max * 1000000;
        }

        return matchSearch && matchBrand && matchPrice;
    });

    if (sort === "low") {
        result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        result.sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
}

function renderProducts() {
    const result = getFilteredProducts();

    document.getElementById("resultCount").textContent =
        result.length + " sản phẩm";

    document.getElementById("productList").innerHTML =
        result.map(p => `
            <article class="product-card">
                <img class="product-image"
                    src="${p.image}"
                    alt="${p.name}"
                    onclick="showDetail(${p.id})"
                    onerror="this.src='https://placehold.co/600x400?text=Laptop'">

                <div class="product-info">
                    <span class="brand-name">${p.brand}</span>
                    <h3>${p.name}</h3>

                    <div class="short-spec">
                        CPU: ${p.cpu}<br>
                        RAM: ${p.ram} | SSD: ${p.storage}<br>
                        GPU: ${p.gpu}
                    </div>

                    <div class="price">${formatMoney(p.price)}</div>

                    <div class="card-buttons">
                        <button class="detail-button"
                            onclick="showDetail(${p.id})">
                            Xem cấu hình
                        </button>

                        <button class="add-button"
                            onclick="addToCart(${p.id})">
                            🛒 Thêm
                        </button>
                    </div>
                </div>
            </article>
        `).join("") || "<p>Không tìm thấy sản phẩm phù hợp.</p>";
}

// ================= XEM CHI TIẾT LAPTOP =================

function showDetail(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    document.getElementById("detailContent").innerHTML = `
        <div class="detail-layout">
            <div>
                <img src="${p.image}" alt="${p.name}"
                    onerror="this.src='https://placehold.co/600x400?text=Laptop'">
            </div>

            <div>
                <span class="brand-name">${p.brand}</span>
                <h2>${p.name}</h2>
                <div class="price">${formatMoney(p.price)}</div>

                <p class="detail-description">
                    ${p.description}
                </p>

                <p><strong>Tình trạng:</strong> Còn hàng</p>
                <p><strong>Bảo hành:</strong> ${p.warranty}</p>
                <p><strong>Số lượng demo:</strong> ${p.stock}</p>

                <button class="buy-button"
                    style="margin-top:20px"
                    onclick="addToCart(${p.id}); closeDetail();">
                    🛒 THÊM VÀO GIỎ HÀNG
                </button>
            </div>
        </div>

        <div class="specs">
            <h3 style="margin:20px 0">THÔNG SỐ KỸ THUẬT</h3>

            ${[
                ["Thương hiệu", p.brand],
                ["Tên sản phẩm", p.name],
                ["Bộ vi xử lý (CPU)", p.cpu],
                ["Bộ nhớ RAM", p.ram],
                ["Ổ cứng", p.storage],
                ["Card đồ họa (GPU)", p.gpu],
                ["Màn hình", p.screen],
                ["Hệ điều hành", p.os],
                ["Trọng lượng", p.weight],
                ["Bảo hành", p.warranty]
            ].map(s => `
                <div class="spec-row">
                    <span>${s[0]}</span>
                    <strong>${s[1]}</strong>
                </div>
            `).join("")}
        </div>
    `;

    document.getElementById("detailModal").classList.add("show");
}

function closeDetail() {
    document.getElementById("detailModal").classList.remove("show");
}

// ================= GIỎ HÀNG =================

let cart = [];

function addToCart(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({...p, quantity: 1});
    }

    renderCart();
    alert("Đã thêm " + p.name + " vào giỏ hàng!");
}

function removeCart(id) {
    cart = cart.filter(p => p.id !== id);
    renderCart();
}

function renderCart() {
    const count = cart.reduce(
        (sum, p) => sum + p.quantity, 0
    );

    const total = cart.reduce(
        (sum, p) => sum + p.price * p.quantity, 0
    );

    document.getElementById("cartCount").textContent = count;
    document.getElementById("cartTotal").textContent =
        formatMoney(total);

    document.getElementById("cartItems").innerHTML =
        cart.length === 0
        ? "<p>Giỏ hàng hiện đang trống.</p>"
        : cart.map(p => `
            <div class="cart-row">
                <div>
                    <strong>${p.name}</strong>
                    <p>${p.quantity} x ${formatMoney(p.price)}</p>
                </div>

                <button onclick="removeCart(${p.id})">
                    Xóa
                </button>
            </div>
        `).join("");
}

function toggleCart() {
    document.getElementById("cartModal").classList.toggle("show");
}

// ================= ĐẶT HÀNG DEMO =================

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }

    const total = cart.reduce(
        (sum, p) => sum + p.price * p.quantity, 0
    );

    const summary = cart.map(p =>
        `${p.name} x ${p.quantity}`
    ).join("\n");

    alert(
        "ĐƠN HÀNG DEMO\n\n" +
        summary +
        "\n\nTổng tiền: " + formatMoney(total) +
        "\n\nWebsite chưa kết nối hệ thống thanh toán thực tế."
    );
}

// ================= BỘ LỌC =================

document.getElementById("search").addEventListener(
    "input", renderProducts
);

document.getElementById("brandFilter").addEventListener(
    "change", renderProducts
);

document.getElementById("priceFilter").addEventListener(
    "change", renderProducts
);

document.getElementById("sortFilter").addEventListener(
    "change", renderProducts
);

document.querySelectorAll(".brand-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".brand-btn")
            .forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        document.getElementById("brandFilter").value =
            button.dataset.brand;

        renderProducts();
    });
});

// Đóng cửa sổ khi bấm ra ngoài
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});

// HIỂN THỊ 50 SẢN PHẨM
renderProducts();
renderCart();
