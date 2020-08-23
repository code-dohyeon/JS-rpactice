const fs = require('fs');

fs.readFile('./sample.json', 'utf8', (err, jsonfile_content) => {
    if (err) {
        console.log("파일을 읽는 도중 에러가 났습니다.");
    }
    else{
        let naeyong = JSON.parse(jsonfile_content);
        
        // jsonfile_content는 문자열 형태
        console.log(jsonfile_content);

        // naeyong 딕셔너리 형태
        console.log(naeyong);
    }
})