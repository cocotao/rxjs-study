import { Observable, of, from, empty, throwError, interval, fromEvent } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

// selector: take
console.log('');
console.log('selector: take');
var source = interval(1000); 
var example = source.pipe(take(3));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// selector: click
/*
console.log('');
console.log('selector: click');
const click = fromEvent(document.body, "click");
const source2 = interval(1000).pipe(takeUntil(click));

source2.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log("Error: " + err);
  },
  complete: () => {
    console.log("complete");
  }
});
*/