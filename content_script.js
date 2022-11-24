function remove(){
    try{
        document.querySelector(".css-1dbjc4n.r-kemksi.r-oyd9sg").remove()
        console.log("低浮上アシスタント : 入力欄を消して差し上げましたわ")
        document.querySelector(".css-1dbjc4n.r-1awozwy.r-1r5su4o.r-e7q0ms").remove()
        console.log("ツイートボタンを消して差し上げましたわ")
        console.log("低浮上アシスタント : 処理完了ですわ")
    }catch(e){
        console.log("低浮上アシスタント : " + e)
    }
}


console.log("低浮上アシスタント : content_script.jsが実行されました")
setTimeout(function(){remove()},1000)
setInterval(function(){remove()},10000)