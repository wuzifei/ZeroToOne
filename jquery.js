function GetTheOrderInfo(){
    var model = {male:"未选择性别"};
    //获取选中的性别
    model.male = $("input[name='male']:checked").val();
    //获取姓名 
    model.name = $("input[name='name']").val();
    //获取电话
    model.mobile = $(".mobile").val();
    //获取省市区地址
    model.address = {};
    model.address.province =$("#province").val();
    model.address.city = $("#city").val();
    model.address.area = $("#area").val();
    model.address.street = $("#street").val();
    //获取已选菜品信息
    var foodboxs = document.getElementsByClassName("food-box");
    var foodboxs = $(".food-box");
    model.foods =[];
    foodboxs.each(function(index,item){
        var food = {};
        food.name = $(item).find("label").text();
        food.checked = $(item).find(".food-name").prop("checked");
        food.count = $(item).find(".food-count-txt").val();
        if(food.checked)
            model.foods.push(food);
    });
    //特殊要求
    model.specialRequirements  = $("#special-requirements").val();
    //评价
    model.comment = {tags:[],detail:"",imgs:[]};
    //获取评论标签
    var activetags = $(".comment-box .comment-tag-box .active");
    if(activetags){
        activetags.each(function(index,item){
            model.comment.tags.push($(item).text());
        });
    }
    //评论内容
    model.comment.detail = $("#comment-detail").val();
    //图片信息
    var imgs = $(".comment-img");
    if(imgs){
        imgs.each(function(index,item){
            //Q: 为什么不用$(item).src 而是写的item.src ?
            model.comment.imgs.push(item.src);
        });
    }
    $("#model-json").html(JSON.stringify(model));
    return model;
}

function MinurFood($this){
    var input = $($this).prev();
    if(input.val()<1){
        alert("再减就小于0了");
        return;
    } 
    input.val(Number(input.val())-1);
}

$(document).ready(function(){

    var model = GetTheOrderInfo();
    $(".comment-box .comment-tag-box span").bind("click",function(e){
        $(this).toggleClass("active");
    });

    //直接绑定事件
    $(".food-count-plus").click(function(e){
        var input = $(this).next();
        input.val(Number(input.val())+1);
    });    
    //取消绑定
    //$(".food-count-plus").unbind("click");

    //使用委托的方式绑定点击事件
    $(".food-box").delegate(".food-count-minur","click",function(e){
        MinurFood(this);
    });
    //$(".food-box").undelegate(".food-count-minur","click");
    //换种方式绑定事件 建议使用on绑定 第二个参数可选
    $(".food-box").on("click",".food-count-minur",function(){
        MinurFood(this);
    });
    //Q: 移除事件 思考，若不移除上面的事件会如何
    //$(".food-box").off("click",".food-count-minur");

    $(".food-count-plus").on(function(e){
        var input = $(this).next();
        input.val(Number(input.val())+1);
    }); 
    //Q: 以上三种事件绑定有什么区别？
});

