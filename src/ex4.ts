import { Observable, of, from, empty, throwError, interval, fromEvent } from 'rxjs';
import {  map, throttleTime, takeUntil, tap, take, concatAll, switchMap, zip, repeat, buffer } from 'rxjs/operators';

// 改变数据流结构类
// concatAll
// concatAll没有参数，将多个observable串行处理，前一个处理完再处理后边的observable
/*
console.log('');
console.log('operators: concatAll');
var obs1 = interval(1000).pipe(take(5))
var obs2 = interval(500).pipe(take(2));
var obs3 = interval(2000).pipe(take(1));

var source = of(obs1, obs2, obs3);

var example = source.pipe(concatAll());

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
*/


// 数据操作类
// repeat
// 很多时候如果Observable没有发生错误，我门也希望可以重复发起订阅，这个时候就要用到repeat方法了，repeat用法和retry基本一样
/* console.log('');
console.log('operators: repeat');
var example2 = from(['a','b','c']).pipe(
  zip(interval(500), (x,y) => x),
  repeat()
)
example2.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}); */

// 缓存类
// buffer、bufferTime和bufferCount
// buffer是将主observable发出的值先缓存起来，在依赖的observable发起订阅的时候在将值发出。
var source = interval(300);
var source2 = interval(1000);
var example3 = source.pipe(
    buffer(source2)
)

example3.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});