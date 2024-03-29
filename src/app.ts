import { Observable } from 'rxjs';

// 通过Observable身上的create方法可以创建一个Observable，参数中的回调函数设置这个Observable将会如何传递值，然后通过subscribe订阅这个Observable
var observable = Observable
    .create(function(observer) {
        observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
        observer.next('Anna');
    })

// 订阅 observable    
observable.subscribe(function(value) {
    console.log(value);
})