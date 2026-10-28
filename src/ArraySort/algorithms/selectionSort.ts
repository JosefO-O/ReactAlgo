function* selectionSort(arr: number[]) {
    for (let i = 0; i<arr.length; i++) {
        let biggerI = 0 
        let j = 0

        for (; j<arr.length-i; j++) {
            yield [[...arr], [biggerI, j]]

            if (arr[j] > arr[biggerI]) biggerI = j
        }

        const temp = arr[j-1]

        arr[j-1] = arr[biggerI]
        arr[biggerI] = temp

        yield [[...arr], [biggerI, j-1]]
    }
}

export default selectionSort
