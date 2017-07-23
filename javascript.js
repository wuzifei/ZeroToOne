function GetTheOrderInfo(){
    var model = {male:"未选择性别"};
    var males = document.getElementsByName("male");
    //获取选中的性别
    males.forEach(m=>{
        if(m.checked){
            model.male = m.value;
            return;  
        }
    });
    //获取姓名 
    model.name = document.getElementsByName("name")[0].value;
    //获取电话
    model.mobile = document.getElementsByClassName("mobile")[0].value;
    //获取省市区地址
    model.address = {};
    model.address.province = document.getElementById("province").value;
    model.address.city = document.getElementById("city").value;
    model.address.area = document.getElementById("area").value;
    model.address.street = document.getElementById("street").value;
    //获取已选菜品信息
    var foodboxs = document.getElementsByClassName("food-box");
    model.foods =[];
    for(var index=0;index<foodboxs.length;index++){
        var foodbox = foodboxs[index];
        var food = {};
        food.name = foodbox.getElementsByTagName("label")[0].innerText;
        food.checked = foodbox.getElementsByClassName("food-name")[0].checked;
        food.count = foodbox.getElementsByClassName("food-count-txt")[0].value;
        if(food.checked && food.count>0)
            model.foods.push(food);
        console.log(foodbox);
    }
    //特殊要求
    model.specialRequirements = document.getElementById("special-requirements").value;
    
    //评价
    model.comment = {tags:[],detail:"",imgs:[]};
    //获取评论标签
    var activetags = document.getElementsByClassName("comment-box")[0].getElementsByClassName("comment-tag-box")[0].getElementsByClassName("active")
    if(activetags){
        for(var i = 0 ;i<activetags.length;i++){
            var t = activetags[i];
            model.comment.tags.push(t.innerText);
        }
    }
    //评论内容
    model.comment.detail = document.getElementById("comment-detail").value;
    //图片信息
    var imgs = document.getElementsByClassName("comment-img");
    if(imgs){
        for(var i = 0 ;i<imgs.length;i++){
            var t = imgs[i];
            model.comment.imgs.push(t.src);
        }
    }
    console.log(model);
    document.getElementById("model-json").innerHTML = JSON.stringify(model);
    return model;
}


window.onload = function(){
    var model = GetTheOrderInfo();
    console.log(model);
    var commenttags = document.getElementsByClassName("comment-box")[0].getElementsByClassName("comment-tag-box")[0].getElementsByTagName("span");
    for(var i = 0 ;i<commenttags.length;i++){
        var tag = commenttags[i];
        tag.onclick = function(e){
            this.classList.toggle("active")
        }
    }
    var plusbtns = document.getElementsByClassName("food-count-plus");
    if(plusbtns){
        for(var i = 0;i<plusbtns.length;i++){
            var btn = plusbtns[i];
            btn.onclick= function(){
                var val = parseInt(this.nextElementSibling.value);
                this.nextElementSibling.value = val + 1;
            };
        }
    }
    var minurbtns = document.getElementsByClassName("food-count-minur");
    if(minurbtns){
        for(var i = 0;i<minurbtns.length;i++){
            var btn = minurbtns[i];
            btn.onclick= function(){
                var val = parseInt(this.previousElementSibling.value);
                if(val<1){
                    alert("再减就小于0了");
                    return;
                }
               this.previousElementSibling.value = val - 1;
            };
        }
    }

    //加减
}
