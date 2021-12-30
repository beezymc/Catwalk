import React from 'react';
import styles from './relateditems.module.css';

const CompareItem = (props) => {
  let popupTableRows = [];
  const currentProductFeatures = props.currentProduct.features;
  const relatedItemFeatures = props.relatedItem.features;
  let featureObj = {};
  for (let i = 0; i < currentProductFeatures.length; i++) {
    featureObj[currentProductFeatures[i].feature + ': ' + currentProductFeatures[i].value] = ['C'];
  }
  for (let i = 0; i < relatedItemFeatures.length; i++) {
    if (featureObj[relatedItemFeatures[i].feature + ': ' + relatedItemFeatures[i].value]) {
      featureObj[relatedItemFeatures[i].feature + ': ' + relatedItemFeatures[i].value].push('R');
    } else {
      featureObj[relatedItemFeatures[i].feature + ': ' + relatedItemFeatures[i].value] = ['R'];
    }
  }
  for (let key in featureObj) {
    if (featureObj[key].length === 2) {
      popupTableRows.push(
        <div className={styles.popupTableRows} key={key}>
          <div>
            '✔'
          </div>
          <div>
            {key}
          </div>
          <div>
            ✔
          </div>
        </div>
      );
    } else if (featureObj[key][0] === 'C') {
      popupTableRows.push(
        <div className={styles.popupTableRows} key={key}>
          <div>
            ✔
          </div>
          <div>
            {key}
          </div>
          <div>
            {'\u00A0\u00A0\u00A0'}
          </div>
        </div>
      );
    } else {
      popupTableRows.push(
        <div className={styles.popupTableRows} key={key}>
          <div className={styles.popupProductFeature}>
            {'\u00A0\u00A0\u00A0'}
          </div>
          <div>
            {key}
          </div>
          <div>
            ✔
          </div>
        </div>
      );
    }

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