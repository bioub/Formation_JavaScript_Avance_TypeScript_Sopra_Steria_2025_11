import { interval, map, take } from 'rxjs';

function countdown(seconds: number) {
  return interval(1000).pipe(
    map((count) => seconds - count),
    take(seconds + 1)
  );
}

countdown(10).subscribe((count) => {
  console.log(count);
});

// Marble Graph
// -- 0--1--2--3--4--5--6--7--8--9--10--...
// map((count) => 10 - count)
// --10--9--8--7--6--5--4--3--2--1-- 0--...
// take(11)
// --10--9--8--7--6--5--4--3--2--1-- 0|
