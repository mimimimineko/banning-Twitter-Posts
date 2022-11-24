function remove(){
    try{
        document.querySelector(".css-1dbjc4n.r-kemksi.r-oyd9sg").remove()
        console.log("低浮上アシスタント : 入力欄を消して差し上げましたわ")
    }catch(e){
        console.log("低浮上アシスタント : あら、もう既に入力欄は消えているようですわ   " + e)        
    }
    try{
        document.querySelector(".css-1dbjc4n.r-1r5su4o.r-e7q0ms").remove()
        console.log("低浮上アシスタント : ツイートボタンを消して差し上げましたわ")
    }catch(e){
        try{
            document.querySelector(".css-1dbjc4n.r-173mn98.r-18rd0c5.r-1ff5aok").remove()
            console.log("低浮上アシスタント : モバイル表示にも対応してますのよ")
        }catch(e){
            console.log("低浮上アシスタント : ツイートボタン？そんなものありませんわ。  " + e)
        }
    }
    console.log("低浮上アシスタント : 処理完了ですわ")
}


console.log("低浮上アシスタント : content_script.jsが実行されました")
setTimeout(function(){remove()},1000)
setInterval(function(){remove()},5000)