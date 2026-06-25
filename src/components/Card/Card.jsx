import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ image, title, follows,isLikes }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <Chip
          label={isLikes ? `${follows} Likes` : `${follows} Follows`}
          size="small"
          className={styles.chip}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Card;