import { Observable, of, from, empty, throwError, interval, fromEvent, timer, combineLatest } from 'rxjs';
import {  map, throttleTime, takeUntil, tap, take, concatAll, switchMap, zip, repeat, buffer } from 'rxjs/operators';

// 协调多个Observable类


// // combineLatest
// // 协调过个observable，参数Observable中有一个发生变化都会发起订阅（前提是每个observable都有值）。

// // timerOne 在1秒时发出第一个值，然后每4秒发送一次
// const timerOne = timer(1000, 4000);
// // timerTwo 在2秒时发出第一个值，然后每4秒发送一次
// const timerTwo = timer(2000, 4000);
// // timerThree 在3秒时发出第一个值，然后每4秒发送一次
// const timerThree = timer(3000, 4000);

// // 当一个 timer 发出值时，将每个 timer 的最新值作为一个数组发出
// const combined = combineLatest(timerOne, timerTwo, timerThree);

// const subscribe = combined.subscribe(latestValues => {
//   // 从 timerValOne、timerValTwo 和 timerValThree 中获取最新发出的值
//     const [timerValOne, timerValTwo, timerValThree] = latestValues;
//   /*
//       示例:
//     timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
//     timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
//     timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
//   */
//     console.log(
//       `Timer One Latest: ${timerValOne},
//      Timer Two Latest: ${timerValTwo},
//      Timer Three Latest: ${timerValThree}`
//     );
//   }
// );


// switchmap
// switch对比merge和concat有个特点就是附属observable发起订阅后会立刻解绑主observable。
/* var source = fromEvent(document.body, 'click');

var example = source.pipe(
                    switchMap(
                    e => interval(100).pipe(take(3))
                )
)

                
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
}); */

