export function* bubbleSort(array: number[]) {
    for (let i = 0; i<array.length; i++) {
        for (let j = 0; j<array.length - i - 1; j++) {
            yield [[...array], [j, j+1]]

            if (array[j+1] < array[j]) {
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }

            yield [[...array], [j, j+1]]
        }
    }
}
