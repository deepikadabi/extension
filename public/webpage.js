window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.command==='Get Asins'){
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
}