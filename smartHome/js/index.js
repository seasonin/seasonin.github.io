$(document).ready(function(){
    $(".card-body").hover(function(){
        $(this).css({
            "background-color":"blue",
            "border":"blue"
        });
        $(this).children(".card-text").css({
            "color":"white",
        });
    });
    $(".card-body").mouseleave(function(){
        $(this).css({
            "background-color":"white",
            "border":"2px solid #d1d8e8"
        });
        $(this).children(".card-text").css({
            "color":"blue"
        });
    });

    layui.use('layer', function(){
        var layer = layui.layer;

        // layer.open({
        //     type: 4,
        //     content: '传入任意的文本或html' //这里content是一个普通的String
        // });

        $('#email').on('click', function(){
            // var that = this;
            // layer.tips('只想提示地精准些', that); //在元素的事件回调体中，follow直接赋予this即可
            layer.open({
                type: 4,
                content: '邮箱1678358201@qq.com' //这里content是一个普通的String
            });
        });

    });
});