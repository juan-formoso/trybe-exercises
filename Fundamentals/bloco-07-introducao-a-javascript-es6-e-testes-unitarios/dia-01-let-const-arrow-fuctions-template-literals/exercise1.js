const testingScope = scope => {
  if (scope === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
    console.log(elseScope);
  }
}

testingScope(true);