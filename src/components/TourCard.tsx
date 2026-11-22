import React from 'react';
import styles from './TourCard.module.css';

interface TourCardProps {
  title: string;
  price: number;
}

export default function TourCard({ title, price }: TourCardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardPrice}>{price}円〜</p>
    </article>
  );
}
