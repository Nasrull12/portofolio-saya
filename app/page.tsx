"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./globals.css";

export default function Page() {
  const [menuVisible, setMenuVisible] = useState(false); // Kontrol visibilitas card
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks card aktif

  const cards = [
    { title: "Tentang Saya", description: "Informasi tentang saya." },
    { title: "Portfolio", description: "Koleksi proyek saya." },
    { title: "Kontak", description: "Hubungi saya di sini." },
    { title: "Blog", description: "Artikel dan tulisan saya." },
  ];

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    } else if (direction === "right") {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <div className="relative">
      <section className="h-screen flex items-center justify-center flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold gradient-text">HI, I'am Nassrullaah</h1>
          <p className="mt-4 text-xl gradient-text">Nice to meet you</p>

          {/* Tombol untuk menampilkan card */}
          <button
            className={`mt-6 px-4 py-2 gradient-button ${
              menuVisible ? "button-top-left" : ""
            }`}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {menuVisible ? "Tutup" : "Tentang Saya"}
          </button>

          {/* Container card */}
          {menuVisible && (
            <div
              {...swipeHandlers}
              className="relative w-full mt-6 overflow-hidden"
            >
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`card ${menuVisible ? "card-fullscreen" : ""}`}
                  >
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-description">{card.description}</p>
                  </div>
                ))}
              </div>

              {/* Tombol Navigasi, hanya tampil di desktop */}
              <div className="hidden sm:block">
                <button
                  onClick={() => handleSwipe("right")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                >
                  ⬅
                </button>
                <button
                  onClick={() => handleSwipe("left")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                >
                  ➡
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="animated-bg"></div>
    </div>
  );
}
