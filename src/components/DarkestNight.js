import React, { useState } from 'react';
import styles from './DarkestNight.module.css';
// import stockingImage from 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fclipart-stocking-1.png';

let stockingState = 0;
function DarkestNight() {
  const [stockingClassName, setStockingClassName] = useState(styles.stockingImage);
  const [potionClassName, setPotionClassName] = useState(styles.potionImage);
  const [textClassName, setTextClassName] = useState(styles.infoText);

  return (
      <div className={styles.container}>
        <span>The Darkest Night</span>
        <div
          className={styles.stockingContainer}
          onClick={() => {
            if (stockingState === 0) {
              stockingState++;
              setStockingClassName(styles.stockingImage + ' ' + styles.stockingImageZoom);
            } else if (stockingState === 1){
              stockingState++;
              setStockingClassName(styles.stockingImageBig + ' ' + styles.rotate);
              setPotionClassName(styles.potionImage + ' ' + styles.potionFall);
              setTextClassName(styles.infoText + ' ' + styles.textFadeIn);
            }
          }}
        >
          <p className={textClassName}>You've received a Potion of Healing!</p>
          <img
            className={stockingClassName}
            src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fclipart-stocking-1.png'}
            alt="stocking"
          />
          <img
            className={potionClassName}
            src={'http://minosource.net/images/items/health_potion.png'}
            alt="potion"
          />
        </div>
      </div>
  );
}

export default DarkestNight;