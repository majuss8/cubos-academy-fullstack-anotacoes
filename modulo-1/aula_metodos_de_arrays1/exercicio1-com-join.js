function inverterString (string) {
    let strArray = string.split('')
    strArray.reverse()
    let strInvertida = strArray.join('')
    return strInvertida
}

console.log(inverterString('maria'));