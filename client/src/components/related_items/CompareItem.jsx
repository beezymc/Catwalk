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
    popupTableRows.push(
      <div className={styles.popupTableRows} key={key}>
      <div>
        {featureObj[key][0] === 'C' ? '✔' : '\u00A0\u00A0\u00A0'}
      </div>
      <div>
        {key}
      </div>
      <div>
        {featureObj[key][featureObj[key].length - 1] === 'R' ? '✔' : '\u00A0\u00A0\u00A0'}
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