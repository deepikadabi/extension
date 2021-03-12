window.chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
    console.log("webpage msg is " + message);
    console.log(message.type);
    if(message.type==='Get_Asins'){
        scrapAsins();
    }
});

function scrapAsins(){
    let data=[]
    setTimeout(() => {
        
        var a = Array.from(document.getElementsByClassName("style__overlay__2qYgu ProductGridItem__overlay__1ncmn"))
        a.forEach(d=>{
            data.push(d.getAttribute("href").split("/")[3].split("?")[0]);
        })
        console.log("data is " + data)
        chrome.extension.sendMessage({
            type: 'asin', 
            configData: data
        });
    }, 1000);   
    console.log("function call ended");
}