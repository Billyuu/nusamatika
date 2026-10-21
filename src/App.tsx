
import { useState } from "react";
import "./index.css";

export default function App() {
  const [started, setStarted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="game">
      {!started ? (
        <section className="splash">
          <img
            className="splash-background"
            src="/splash-nusamatika.png"
            alt="Warung NUSAMATIKA"
          />

          <button
            className="start-button"
            onClick={() => {
              setStarted(true);
              setMenuOpen(false);
            }}
          >
            Mulai <span>➜</span>
          </button>
        </section>
      ) : (
        <section className="menu-page">
          <img
            className="menu-background"
            src="/menu-background.png"
            alt=""
          />

          <img
            className="boy-basket"
            src="/anak-laki-keranjang.png"
            alt="Anak laki-laki membawa keranjang jajanan"
          />

          <img
            className="hot-air-balloon"
            src="/balon-udara.png"
            alt="Balon udara NUSAMATIKA"
          />

          <img
            className="menu-logo"
            src="/logo-nusamatika.png"
            alt="Logo NUSAMATIKA"
          />

          <img
            className="hanging-sign"
            src="/papan-jajanan.png"
            alt="Jajanan Nusantara Rasa Matematika"
          />

          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Tutup menu navigasi"
                : "Buka menu navigasi"
            }
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {menuOpen && (
            <nav className="navigation-panel">
              <button
                onClick={() => {
                  setStarted(false);
                  setMenuOpen(false);
                }}
              >
                Beranda
              </button>

              <button onClick={() => setMenuOpen(false)}>
                Menu Kuliner
              </button>

              <button onClick={() => setMenuOpen(false)}>
                Tentang NUSAMATIKA
              </button>
            </nav>
          )}

          <button
            className="play-game-button"
            onClick={() => {
              // Halaman permainan akan ditambahkan berikutnya.
              console.log("PLAY GAME diklik");
            }}
          >
            <span className="play-game-icon">▶</span>
            <span className="play-game-label">PLAY GAME</span>
          </button>
        </section>
      )}
    </main>
  );
}
