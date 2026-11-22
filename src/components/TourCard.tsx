import React, { useState } from 'react';
import styles from './TourCard.module.css';

interface TourCardProps {
  title: string;
  price: number;
}

export default function TourCard({ title, price }: TourCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardPrice}>{price}円〜</p>
      <button
        className={`${styles.favoriteButton} ${isFavorite ? styles.isFavorite : ''}`}
        type="button"
        aria-pressed={isFavorite}
        onClick={() => setIsFavorite((favorite) => !favorite)}
      >
        {isFavorite ? 'お気に入り済み' : 'お気に入りに追加'}
      </button>
    </article>
  );
}
