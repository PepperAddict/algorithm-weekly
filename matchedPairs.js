

let secondArr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
//should output 4

let arrayz = [10, 20, 20, 10, 10, 30, 50, 10, 20]
//should output 3

function match (arrayz) {
    arrayz.sort()
    let newarrz = []
    for (let x = 0; x < arrayz.length; x++) {
        
        if (arrayz[x + 1] == arrayz[x]) {
            newarrz.push(arrayz[x])
        } else {
            console.log(x)
        }
        
    }

    return newarrz
}

function sockMerchant(arrayz) {
    let newarrz = match(arrayz)

    console.log(newarrz)

}


sockMerchant(secondArr)