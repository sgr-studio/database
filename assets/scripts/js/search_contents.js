const _input = document.getElementById("search");
const _inputSearchTile = document.getElementById("searchTile");
const _output = document.getElementById("result");
let _inputValue = "";

const url = "https://sgr-studio.github.io/database/assets/scripts/json/_contents.json";

_input.addEventListener("keydown", function (e) {
    _inputValue = _input.value.trim();
    if(e.key === "Enter" && _inputValue.length > 0) {
        _inputSearchTile.innerText = '"'+_inputValue+'"の検索結果';
        for(var i = 0; i < search_title.length; i++) {
            document.getElementById("contents_id_"+i).classList.remove("show");
        }
        if(_inputValue == "*" || _inputValue == "すべて"){
            _inputSearchTile.innerText = 'すべてのコンテンツを表示';
            for(var i = 0; i < search_title.length; i++) {
                document.getElementById("contents_id_"+i).classList.add("show");
            }
        } else {
            for (let i = 0; i < search_title.length; i++) {
                let show_contents = search_title[i].includes(_inputValue);
                if(show_contents) document.getElementById("contents_id_"+i).classList.add("show");
            }
        }

        // var len = _output.children.length;
        // for(var i = 0; i < len; i++) {
        //     _output.removeChild(_output.children[0]);
        // }
    }
});

// JSON Exchanger
// let jsonData = fetch("./test.json");
// // JavaScriptオブジェクトへ変換
// let objData = JSON.parse(jsonData);
// console.log(objData);
/*
{
  users: [
    {
      id: 1,
      job: "数学教師",
      name: "田中太郎"
      },
    {
        id: 2,
      job: "看護師",
      name: "山田花子"
      }
      ]
      }
      */
     
     
     
     //操作したいHTML領域を取得 
     
     
//APIからJSONデータを取得する
fetch(url)
    .then((response) => {
        return response.json() //ここでBodyからJSONを返す
})
    .then((result) => {
        Example(result);  //取得したJSONデータを関数に渡す 
})
    .catch((e) => {
        console.log(e)  //エラーをキャッチし表示     
})
// })
let search_title = [];
//JSONデータを引数に受け取ってDOM操作を行う関数を作成
function Example(jsonObj){
    for (let i = 0; i < 9999; i++) {
        let data = jsonObj.contents[i]
        let contentHolder = document.createElement("a");
        contentHolder.setAttribute('target','_blank');
        contentHolder.setAttribute("id","contents_id_"+i);
        search_title.push(data.title);
        contentHolder.href="https://"+data.url+"/";
        contentHolder.classList.add(data.id);
        _output.appendChild(contentHolder);
        let contents = document.createElement("div");
        _output.querySelector("#contents_id_"+i).appendChild(contents);
        let content_title = document.createElement("h3");
        content_title.textContent = data.title;
        _output.querySelector("#contents_id_"+i+" div").appendChild(content_title);
        let content_comment = document.createElement("p");
        content_comment.textContent = data.comment;
        _output.querySelector("#contents_id_"+i+" div").appendChild(content_comment);
        let content_author = document.createElement("span");
        content_author.textContent = data.author;
        _output.querySelector("#contents_id_"+i+" div").appendChild(content_author);
        let content_version = document.createElement("span");
        content_version.textContent = "Version:" + data.version + " " + data.create_date;
        _output.querySelector("#contents_id_"+i+" div").appendChild(content_version);
    }
    console.log(search_title);
    // result contents

    // video_id.textContent = data.id;
    // video_date.textContent = data.title;
    // video_url.textContent = data.comment;
    // video_title.textContent = data.url;
    // video_author.textContent = data.create_date;
    // video_discription.textContent = data.version;
    // videoPlayer.textContent = data.author;

    // let data = jsonObj.results[0]
    // //  name.textContent = data.name;
    // //  age.textContent = data.age;
    // // memo
    // video_id.textContent = data.video_id;
    // video_date.textContent = data.video_date;
    // video_url.textContent = data.video_url;
    // video_title.textContent = data.video_title;
    // video_author.textContent = data.video_author;
    // video_discription.textContent = data.video_discription;
    // videoPlayer.src="https://drive.google.com/file/d/"+ data.video_url +"/preview";
}

