
export const getSkuData = (currentVariation) => {
  const sizeList = [];
  const quantity = [];
  const skus = [];

  for (var key in currentVariation.skus) {
    let sku = currentVariation.skus[key]
    skus.push(key)
    for (var key in sku) {
      if (key === 'size') {
        sizeList.push(sku[key])
      } else {
        quantity.push(sku[key])
      }
    }
  }

  return {
    sizeList,
    quantity,
    skus
  }
}
