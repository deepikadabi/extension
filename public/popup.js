// eslint-disable-next-line no-undef
console.log("in console");
// eslint-disable-next-line no-undef
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    document.getElementById('smname').value = tabs[0].url;

    var url = tabs[0].url;
    var m = url.match("/([a-zA-Z0-9]{10})(?:[/?]|$)");
     // var m = url.match("~(?:\b)((?=[0-9a-z]*\d)[0-9a-z]{10})(?:\b)~i");
    console.log(m);
    // eslint-disable-next-line no-undef
    //console.log(x('//@data-asin').map(function(v,i){return v.nodeValue}));
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
         // Do something with the element here
    }


    var a = Array.from(document.getElementsByClassName("style_overlay2qYgu ProductGridItemoverlay_1ncmn"))
    console.log(a);
    if (m) { 
        console.log("ASIN=" + m[4]);
    }



    let data=[]
    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded',afterDOMLoaded);
    } else {
        afterDOMLoaded();
    }

    function afterDOMLoaded(){
        setTimeout(() => {
            var a = Array.from(document.getElementsByClassName("style_overlay2qYgu ProductGridItemoverlay_1ncmn"))
            a.forEach(d=>{
                console.log(
                data.push(d.getAttribute("href").split("/")[3].split("?")[0]));
            })
            // eslint-disable-next-line no-undef
            chrome.runtime.sendMessage({
                type: 'asin', 
                configData: data
            });
        }, 1000);

    
}

});





// function Button (props) {
//     const {variant = 'primary', children} = props
//     let primary = false;
//     let secondary = false;
//     let success = false;
//     let danger = false;
//     let disabled = false;  
    
//     switch (variant) {
//         case 'primary':
//             primary = true;
//             break;
//         case 'secondary':
//             secondary = true;
//             break;
//         case 'success':
//             success = true;

//             break;
//         case 'danger':
//             danger = true;
//             break;
//         case 'disabled':
//             disabled = true;
//             break;
//         default:
//             break;
//     }

//     return (   
//         <Button1 primary={primary} secondary={secondary} disabled={disabled} success={success} danger={danger}>  
//             {children}
//         </Button1>
//     )
// }
// document.addEventListener('DOMContentLoaded', function() {
//          var checkPageButton = document.getElementById('checkPage');
//          checkPageButton.addEventListener('click', function() {
            
//             // eslint-disable-next-line no-undef
//             // chrome.tabs.getCurrent(function(tab){
//             //     console.log(tab.url);
//             // });
            
//             // eslint-disable-next-line no-undef
//             chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//                 console.log(tabs[0].url);
//             });
//          }, false);
//         },false);
        
// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('checkPage');
//     checkPageButton.addEventListener('click', function() {
  
//     //   chrome.tabs.getSelected(null, function(tab) {
//     //     d = document;
  
//     //     var f = d.createElement('form');
//     //     f.action = 'http://gtmetrix.com/analyze.html?bm';
//     //     f.method = 'post';
//     //     var i = d.createElement('input');
    //     i.type = 'hidden';
//     //     i.name = 'url';
//     //     i.value = tab.url;
//     //     f.appendChild(i);
//     //     d.body.appendChild(f);
//         f.submit();
//       });
//     }, false);
//   }, false);