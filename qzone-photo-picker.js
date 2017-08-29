var imgUrls = [];
var doc = window.frames["tphoto"].contentWindow.document;
var imgs = doc.getElementsByClassName("j-pl-photoitem-img");
//var albums = doc.getElementsByClassName("js-album-item");
//var a = albums[0].attributes["data-id"];

var isNextPage = false;
var index = 0;


//循环相册
function GoToAlbums(id){
    var url = "https://h5.qzone.qq.com/page/photo?init=photo.v7/module/photoList2/index&navBar=1&normal=1&aid=V14epm894PpUtt"+id;
}


function GoToNextPage(){
    var nexts = doc.getElementsByClassName("next");
    if(nexts && nexts.length>1){
        var next = doc.getElementsByClassName("next")[1];
        if(next.title!="已经是最后一页"){
            next.click();
            return true;
        }
    }
    return false;
}

function GetImgTask(){
    GetImg();
    if(index<=imgs.length)
        setTimeout(GetImgTask,5000);
    else{
        if(GoToNextPage()){
            index=0;
            isNextPage = true;
            setTimeout(GetImgTask,5000);
        }else{
            document.write(JSON.stringify(imgUrls));
        }
    }
}
function GetImg(){
    if(index==0 && isNextPage)
        imgs=doc.getElementsByClassName("j-pl-photoitem-img");
    if(index>0){
        var bigImg = document.getElementById("js-img-border");
        console.log(bigImg);
        debugger;
        if(bigImg){
            var curImg = bigImg.getElementsByTagName("img");
            console.log(curImg);
            if(curImg && curImg.length>0){
                var src = curImg[0].src;
                if(src){
                    console.log(src);
                    imgUrls.push(src);
                }
            }else{
                console.log("没有获取到第"+index+"张图片");
            }
        }else{
            console.log("未能加载第"+index+"张大图");
        }
    }
    var pdoc = window.frames["userData_iframe__Y_popTips"].contentWindow.document;        
    if(pdoc){
        var close = document.getElementsByClassName("photo_layer_close");
        if(close && close.length>0){
            close[0].click();        
            console.log("关闭图片"+index);
        }
        else
            console.log("未能关闭图片"+index);    
    }
    var img = imgs[index];
    if(img)
        img.click();
    else
        console.log("未能找到图片"+index);
    console.log("打开图片"+index);
    index++;   
}
GetImgTask();

