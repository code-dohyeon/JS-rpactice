const fs = require('fs');

fs.readFile('./sample.json', 'utf8', (err, jsonfile_content) => {
    if (err) {
        console.log("파일을 읽는 도중 에러가 났습니다.")
    }
    else{
        let naeyong = JSON.parse(jsonfile_content)
        console.log(naeyong["name"])
    }
})