import { Observable } from 'rxjs';

var observable = Observable
    .create(function(observer) {
        observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
        observer.next('Anna');
    })
    
// 这里值得一提的是rxjs的subscribe是同步执行的，例如下边这段代码:
console.log('start');
observable.subscribe(function(value) {
    console.log(value);
});
console.log('end');