// const path = require('path');
// const url = "http://naver.com/index.html";
// console.log(path.join(__dirname, "index.html"));

// console.log(__dirname);

// const person = require('./person');
// console.log(person);

// const Person = require('./person');

// 인스턴스화
// const person1 = new Person("jiwoo", 300);

// console.log(person1);
// person1.greeting();
// person1.goodBye();

// const person2 = new Person("lucid", 500);
// person2.greeting();
// console.log(person1, person2);

// 파일 시스템
// const fs = require('fs');
// const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if (err) throw err;
//     console.log('폴더가 생성이 되었습니다.');
// })

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), {}, (err) => {
//     if (err) throw err;
//     console.log('파일이 생성 되었습니다.');
// })


// fs.writeFile(path.join(__dirname, '/test', 'index.html'), '<h1>gi</h1>', err => {
//     if (err) throw err;
//     console.log('......');
// })

// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'nodejs.txt'), err => {
//     if (err) throw err;
//     console.log('변경됨');
// })

// console.log('hello');

const http = require('http');
const PORT = 5000;

// 서버생성
http.createServer((req, res) => {

    if (req.url === '/api/users') {
        // 원래는 데이터베이스에 접속해서 불러와야함
        const users = [{
                name: "jiwoo",
                age: 503
            },
            {
                name: "jiwoo",
                age: 303
            },
            {
                name: "jiwoo",
                age: 203
            },
            {
                name: "jiwoo",
                age: 103
            },
            {
                name: "jiwoo",
                age: 5703
            },
            {
                name: "jiwoo",
                age: 5903
            },
            {
                name: "jiwoo",
                age: 5083
            },
        ];
        res.write(JSON.stringify(users));

    } else if (req.url === '/api/todos') {
        const weather = [{
            mon: "cold",
            wed: "rain",
            sat: "hot"
        }]
        res.write(JSON.stringify(weather));
    } else {
        res.write('<h1>Hello node JS</h1>');
    }
    res.end()
    // console.log(req.url);
    // res.write('<h1>Hello node JS</h1>');
    // res.end();

}).listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})