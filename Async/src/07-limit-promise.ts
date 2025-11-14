// import { setInterval } from 'node:timers/promises';
import { Observable } from 'rxjs';

// function interval(ms: number): Promise<void> {
//   return new Promise((resolve) => {
//     setInterval(() => {
//       resolve();
//       console.log('Interval triggered');
//     }, ms);
//   });
// }

// console.log('Waiting for 2 seconds...');
// interval(2000).then(() => {
//   console.log('Done waiting!');
// });

// Le code ci dessus ne fonctionne pas comme attendu
// car les promesses ne peuvent être résolues qu'une seule fois.
// On ne peut pas utiliser des promesses pour :
// - des événements récurrents (click, keypress, etc.)
// - des timers récurrents (setInterval)
// - des flux de données (WebSocket, etc.)
// Pour ces cas, il faut utiliser
// - des observables (RxJS, etc.)
// - async iterators (for await...of)

// Async iterator avec setInterval
// for await (const _ of setInterval(1000)) {
//   console.log('Interval triggered');
// }

function interval(ms: number): Observable<void> {
  return new Observable<void>((subscriber) => {
    setInterval(() => {
      subscriber.next();
      // subscriber.error(new Error('Interval error'));
      // subscriber.complete();
    }, ms);
  });
}

console.log('Waiting for intervals every 2 seconds...');
interval(2000).subscribe(() => {
  console.log('Interval triggered');
});
