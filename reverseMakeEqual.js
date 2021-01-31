function areTheyEqual(array_a, array_b) {
    let bReverse = [array_b[0], ...array_b.filter((val, index) => 0 !==index).reverse()]

    return bReverse.every( function(val, index) {
        return val === array_a[index]
    })

}

areTheyEqual([1, 2, 3, 4], [1, 4, 3, 2])

areTheyEqual([1, 2, 3, 4], [1, 4, 3, 3])