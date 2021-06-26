let notaProva = 20;

if (notaProva < 0 || notaProva > 100) {
    console.log('Error')
} else if (notaProva >= 90) {
    console.log ('Your result is: A')
} else if (notaProva >= 80) {
    console.log ('Your result is: B')
} else if (notaProva >= 70) {
    console.log ('Your result is: C')
} else if (notaProva >= 60) {
    console.log ('Your result is: D')
} else if (notaProva >= 50) {
    console.log ('Your result is: E')
} else { 
    console.log ('Your result is: F')
}