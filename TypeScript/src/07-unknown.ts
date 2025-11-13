function processData(data: unknown): void {
  // Le type unknown nécessite une vérification de type avant utilisation
  // Equivalent "type safe" à 'any' (mais sans les risques associés)

  // Type narrowing :
  if (typeof data === 'string') {
    console.log(`String data: ${data.toUpperCase()}`);
  } else if (typeof data === 'number') {
    console.log(`Number data: ${data.toFixed(2)}`);
  } else {
    console.log('Unknown data type');
  }
}

processData('Hello, World!');
processData(42);
processData({ key: 'value' });
