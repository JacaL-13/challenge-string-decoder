function decoder(code) {
    let decodedStr = ''
    for (let i = 0; i < code.length; i++) {
        decodedStr += code[+code[i] + 1 + i]
        i += +code[i] + 1
    }
    return decodedStr
}

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('3vdfn'))
console.log(decoder('0r'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))