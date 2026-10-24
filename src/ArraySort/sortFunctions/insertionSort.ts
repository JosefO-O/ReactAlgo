function* insertionSort(array: number[]) {
    for (let i = 0; i<array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j-1]; j--) {
            yield [[...array], [j-1, j]]

            const temp = array[j]
            array[j] = array[j-1]
            array[j-1] = temp

            yield [[...array], [j-1, j]]
        }
    }
}

export default insertionSort
