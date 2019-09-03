import { Observable } from 'rxjs';

var observable = Observable
    .create(function(observer) {
        observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
        observer.next('Anna');
    })

// 订阅 observable    
observable.subscribe(function(value) {
    console.log(value);
})