function takesCallback(callback: (num: number) => number, value: number): number {
  return callback(value);
}


const result = takesCallback((x) => x * 2, 5);
console.log(result); // 10
