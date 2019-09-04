import { Observable, of, from, empty, throwError, interval, fromEvent, timer, combineLatest, Subject } from 'rxjs';
import {  map, throttleTime, takeUntil, tap, take, concatAll, switchMap, zip, repeat, buffer } from 'rxjs/operators';

// subject
// 下边将介绍Rxjs另一重要的部分内容Subject，介绍Subject之前先介绍一个知识点：Observable是可以被多次订阅的，
// 了解这个知识点可以帮助我们理解Subject是用来解决哪些问题，以及Subject的一些特性

// Observable是可以被多次订阅
// 例如下边这个例子,sourcebe被订阅了两次。
/* var source = interval(1000).pipe(take(3));

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

source.subscribe(observerA);
setTimeout(() => {
    source.subscribe(observerB);
}, 1000); */


// 但是这种重复订阅又个问题就是，各个订阅都是独立的，有些时候我门希望新的订阅是接在上个订阅之后的，
// 这个时候这种方式就不能满足需求了，使用subject就可以完成这种需要
// 下边这种效果就是利用了subject的组播特性，这也是在开发中经常利用Subject解决的问题。
var source = interval(1000).pipe(take(3));

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

var subject = new Subject()

subject.subscribe(observerA)

source.subscribe(subject);

setTimeout(() => {
    subject.subscribe(observerB);
}, 1000);


