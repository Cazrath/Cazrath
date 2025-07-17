import { useState } from "react";
import styles from "@/styles/Fragments.module.css";

const images = [
  { src: "/uploads/1.png", title: "F01" },
  { src: "/uploads/2.png", title: "F02" },
  { src: "/uploads/3.png", title: "F03" },
  { src: "/uploads/4.png", title: "F04" },
  { src: "/uploads/5.png", title: "F05" },
];

export default function Fragments() {
  const [modal, setModal] = useState({ open: false, index: 0 });

  const openModal = (i) => setModal({ open: true, index: i });
  const closeModal = () => setModal({ open: false, index: 0 });
  const prev = () =>
    setModal((m) => ({ ...m, index: (m.index - 1 + images.length) % images.length }));
  const next = () =>
    setModal((m) => ({ ...m, index: (m.index + 1) % images.length }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FRAGMENTS</h1>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.thumb} onClick={() => openModal(i)}>
            <img src={img.src} alt={img.title} />
            <span>{img.title}</span>
          </div>
        ))}
      </div>

      {modal.open && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={styles.nav} onClick={(e) => { e.stopPropagation(); prev(); }}>←</button>
          <img src={images[modal.index].src} alt="fragment" />
          <button className={styles.nav} onClick={(e) => { e.stopPropagation(); next(); }}>→</button>
        </div>
      )}
    </div>
  );
}
