var vm = new Vue({
    el:"form",
    data:{
        male: "男",
        name: "那天空",
        mobile: "13065187972",
        address: {
            "province": "1",
            "city": "1",
            "area": "1",
            "street": "深圳宝安"
        },
        foods: [{
            name: "番茄炒蛋",
            "checked": false,
            "count": "2"
        }, {
            name: "辣椒炒肉",
            "checked": true,
            count: "4"
        }, {
            name: "凉皮",
            checked: false,
            count: "4"
        }, {
            name: "肉夹馍",
            checked: true,
            count: "4"
        }],
        specialRequirements: "非常辣",
        comment: {
            tags: [
                {tag:"干净卫生",active:true},
                {tag:"食材新鲜",active:true},
                {tag:"分量足",active:false},
                {tag:"味道好",active:true},
                {tag:"包装精美",active:false},
                {tag:"很实惠",active:true},
                {tag:"配送快",active:false},
            ],//, "食材新鲜","分量足","味道好","包装精美","很实惠"
            "detail": "好吃的没话说了~",
            "imgs": ["http://image.smerp.cn/images/20170630/f72b40019dfcbe7c.jpg", "http://image.smerp.cn/images/20170630/f72b40026ed080dc.jpg","http://image.smerp.cn/images/20170706/f72b3b3ae4c8ebbd.png"]
        },
        showComments:false
    },
    methods:{
        AddFoodCount:function(food){
            food.count++;
        },
        MinurFoodCount:function(food){
            if(food.count>1)
                food.count--;
            else
                alert("再减就小于0了");
        },
        ToggleCommentTag:function(e){
            $(e.target).toggleClass("active");
        }
    },
    computed:{
        json:function(){
            return JSON.stringify(this.$data);
        }
    }
});