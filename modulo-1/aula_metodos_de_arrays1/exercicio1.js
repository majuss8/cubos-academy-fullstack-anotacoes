function inverterString (string) {
    let strArray = string.split('')
    strArray.reverse()
    let strInvertida = ''
    for (let letra of strArray) {
        strInvertida += letra
    }
    return strInvertida
}

console.log(inverterString('maria'));