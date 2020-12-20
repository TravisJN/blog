import React, { useState } from 'react';
import styles from './DarkestNight.module.css';
// import stockingImage from 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fclipart-stocking-1.png';

function DarkestNight() {
  const [stockingClassName, setStockingClassName] = useState(styles.stockingImage);
  const [potionClassName, setPotionClassName] = useState(styles.potionImage);
  const [textClassName, setTextClassName] = useState(styles.infoText);
  let stockingState = 0;

  return (
      <div className={styles.container}>
        <span>The Darkest Night</span>
        <div
          className={styles.stockingContainer}
          onClick={() => {
            if (stockingState === 0) {
              stockingState++;
              setStockingClassName(styles.stockingImage + ' ' + styles.stockingImageZoom);
            } else {
              setStockingClassName(styles.stockingImageBig + ' ' + styles.rotate);
              setPotionClassName(styles.potionImage + ' ' + styles.potionFall);
              setTextClassName(styles.infoText + ' ' + styles.textFadeIn);
            }
          }}
        >
          <p className={textClassName}>You've received a Potion of Healing!</p>
          <img className={stockingClassName} src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fclipart-stocking-1.png'} />
          <img className={potionClassName} src={'http://minosource.net/images/items/health_potion.png'} />
        </div>
      </div>
  );
}

export default DarkestNight;