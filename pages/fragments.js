import { useState } from "react";
import styles from "../styles/Fragments.module.css";

const images = [
  { src: "/uploads/1.png", title: "F01" },
  { src: "/uploads/2.png", title: "F02" },
  { src: "/uploads/3.png", title: "F03" },
  { src: "/uploads/4.png", title: "F04" },
  { src: "/uploads/5.png", title: "F05" },
];

export default function Fragments() {
  const [modal, setModal] = useState({ open: false, index: 0 });

  const openModal = (index) => setModal({ open: true, index });
  const closeModal = () => setModal({ open: false, index: 0 });
  const next = () =>
    setModal((prev) => ({ ...prev, index: (prev.index + 1) % images.length }));
  const prev = () =>
    setModal((prev) => ({
      ...prev,
      index: (prev.index - 1 + images.length) % images.length,
    }));

  return (
    <div className={styles.container}>
      {images.map((img, index) => (
        <div key={index} className={styles.thumb} onClick={() => openModal(index)}>
          <img src={img.src} alt={img.title} />
          <span>{img.title}</span>
        </div>
      ))}

      {modal.open && (
        <div className={styles.modal}>
          <button onClick={closeModal}>×</button>
          <button onClick={prev}>‹</button>
          <img src={images[modal.index].src} alt={images[modal.index].title} />
          <button onClick={next}>›</button>
        </div>
      )}
    </div>
  );
}