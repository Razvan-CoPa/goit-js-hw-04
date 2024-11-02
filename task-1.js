function isEnoughCapacity(products, containerSize){
    let totalSize = 0;
    for (const product in products){
        totalSize += products[product]
    };

    if (totalSize > containerSize.lenght){
        return false;
    };

    return true;
}