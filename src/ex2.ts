import { Observable, of, from, empty, throwError } from 'rxjs';

// operator: create
console.log('');
console.log('operator: create');
var observable = Observable
    .create(function(observer) {
        observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
        observer.next('Anna');
        observer.complete('complete'); // complete/error 执行后流就再也不会继续进行了
        observer.error('error');
    })
    
console.log('start');
observable.subscribe({
    next:(value) => {
        console.log('next:' + value);
    },
    complete: (value) => {
        console.log('complete:' + value);
    },
    error: (value) => {
        console.log('error:' + value);
    }
});

console.log('end');

// operator: of
console.log('');
console.log('operator: of');
var source = of('aaa', 'bbb');

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});


// operator: from
console.log('');
console.log('operator: from');
var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'] 
var source2 = from(arr);

source2.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});

// operator: fromPromise  -> not exist now

// operator: empty
// empty 會給我們一個空的 observable，如果我們订阅这个 observable ， 它会立即响应complete 函数。
console.log('');
console.log('operator: empty');
var source4 = empty();

source4.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});

// operator: throw
// throw，它也只做一件事就是拋出错误
console.log('');
console.log('operator: throwError');
var source5 = throwError('Oop!');

source5.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
    console.log('Throw Error: ' + error)
    }
});