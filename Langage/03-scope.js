// Portée globale (qui est toujours globale quel que soit le contexte d'exécution)
globalThis.globalVariable = 'I am a global variable';

// "Portée de script"
// leur portée dépend de plusieurs facteurs :
// - la plateforme (navigateur, Node.js, etc.)
// - le choix du type de module (ESM, CommonJS, etc.)
const scriptVariable = 'I am a script variable';

function outerFunction() {
  // La ou les portées de fermeture (closure)
  // sont des portées qui ont été créées entre une fonction locale
  // et une portée de script
  // (ça peut être des fonction ou des blocs)
  const closureVariable = 'I am outside!';

  function innerFunction() {
    const localVariable = 'I am inside!';
    
    if (true) {
      // Si on utilise let ou const, la variable est limitée au bloc
      const blockVariable = 'I am in a block!';
      console.log(blockVariable); // Accessible block variable
      console.log(localVariable); // Accessing local variable
      console.log(closureVariable); // Accessing closure variable
      console.log(scriptVariable); // Accessing script variable
      console.log(globalVariable); // Accessing global variable
    }
  }

  innerFunction();
  // console.log(innerVariable); // This will cause an error because innerVariable is not accessible here
}

outerFunction();