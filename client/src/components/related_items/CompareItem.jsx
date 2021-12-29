import React from 'react';
import styles from './relateditems.module.css';

const CompareItem = (props) => {
  let popupTableRows = [];
  const currentProductFeatures = props.currentProduct.features;
  const relatedItemFeatures = props.relatedItem.features;
  let featureObj = {};
  for (let i = 0; i < currentProductFeatures.length; i++) {
    featureObj[currentProductFeatures[i].feature] = { currentProduct: currentProductFeatures[i].value };
  }
  for (let i = 0; i < relatedItemFeatures.length; i++) {
    if (featureObj[relatedItemFeatures[i].feature]) {
      featureObj[relatedItemFeatures[i].feature]['relatedItem'] = relatedItemFeatures[i].value;
    } else {
      featureObj[relatedItemFeatures[i].feature] = { relatedItem: relatedItemFeatures[i].value };
    }
  }
  for (let key in featureObj) {
    popupTableRows.push(
      <div className={styles.popupTableRows} key={key}>
        <div className={styles.popupProductFeature}>
          { featureObj[key].currentProduct ? '✔' : '\u00A0\u00A0\u00A0' }
        </div>
        <div className={styles.popupFeature}>
          {key}
        </div>
        <div className={styles.popupRelatedFeature}>
          { featureObj[key].relatedItem ? '✔' : '\u00A0\u00A0\u00A0' }
        </div>
      </div>
    );
  }
  return (
    <div className={styles.popupBox} onClick={() => { props.togglePopup(); }}>
      <div className={styles.popupWindow}>
        Comparing
        <div className={styles.popupTitle}>
          <div>
            {props.currentProduct.name}
          </div>
          <div>
            {props.relatedItem.name}
          </div>
        </div>
        <div className={styles.popupTable}>
          {popupTableRows}
        </div>
      </div>
    </div>

  );
};

export default CompareItem;