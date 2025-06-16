import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-yellow-500">
          Xiaomi TWS Bluetooth Earphones
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          True wireless freedom – Crystal-clear sound, perfect for sports & daily life
        </p>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-lg px-8 py-4 rounded-full shadow">
          Mua ngay với giá 499.000₫
        </button>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <img
          src="https://cdn.tgdd.vn/Products/Images/54/317032/bluetooth-tai-nghe-true-wireless-xiaomi-redmi-buds-4-lite-thumb-600x600.jpg"
          alt="Xiaomi Bluetooth Earphones"
          className="w-full rounded-2xl shadow-xl"
        />

        <div className="space-y-4 text-lg">
          <p>
            Featuring cutting-edge Bluetooth 5.0, these earbuds deliver seamless connectivity, immersive stereo sound, and ergonomic in-ear comfort — ideal for gym, commute, or relaxing.
          </p>
          <ul className="space-y-3 list-disc pl-5">
            <li><strong>Bluetooth 5.0:</strong> Fast, stable & low energy.</li>
            <li><strong>20h Battery:</strong> Music all day without worry.</li>
            <li><strong>IPX4 Water Resistance:</strong> Sweatproof, rainproof.</li>
            <li><strong>Touch Control:</strong> Tap to play, pause or call.</li>
          </ul>
        </div>
      </section>

      <img
        src="https://cdn.tgdd.vn/Files/2022/10/10/1477719/14_800x450.jpg"
        alt="Ưu đãi hot"
        className="w-full rounded-xl shadow-xl mb-12"
      />

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Vì sao nên chọn Xiaomi TWS?
        </h2>
        <ul className="space-y-6 text-lg">
          <li><strong>Âm thanh chất lượng cao:</strong> Bass mạnh, âm rõ, sống động.</li>
          <li><strong>Thiết kế hiện đại:</strong> Gọn nhẹ, cá tính, nhiều màu lựa chọn.</li>
          <li><strong>Giá cực tốt:</strong> Công nghệ cao cấp, giá chỉ 499K.</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 TaiNgheXiaomi.vn - Premium Wireless Audio by Xiaomi
      </footer>
    </div>
  );
}
