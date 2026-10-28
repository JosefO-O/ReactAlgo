function swap(arr: number[], a: number, b: number) {
    const temp = arr[a]

    arr[a] = arr[b]
    arr[b] = temp
}

function* quickSort(arr: number[], left: number = 0, right: number = arr.length-1): Generator<number[][]> {
    if (left >= right) return 

    // particiona
    let curr = left+1
    for (let i = left+1; i<right+1; i++) {
        yield [[...arr], [left, curr, i]]

        if (arr[i] < arr[left]) {
            swap(arr, i, curr)
            yield [[...arr], [left, curr, i]]

            curr++
        }
    }
    
    yield [[...arr], [curr-1, left]]
    swap(arr, curr-1, left)
    yield [[...arr], [curr-1, left]]

    const finalPos = curr-1

    yield* quickSort(arr, left, finalPos-1)
    yield* quickSort(arr, finalPos+1, right) 
}

export default quickSort
