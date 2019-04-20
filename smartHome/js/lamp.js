$(document).ready(function(){
    $(".selectable").selectable({
        selected: function (evnet,ui) {
            if($("#info").hasClass("ui-selected")){
                $(".lamp-device").hide();
                $(".lamp-info").show();
            }   else{
                $(".lamp-info").hide();
                $(".lamp-device").show();
            }
        }
    });

    $('#notification1').bootstrapSwitch('state');
    $('#notification2').bootstrapSwitch('state');
    $('#notification3').bootstrapSwitch('state');

    $(".lamp-slider1").slider({
        max:100,
        min:0,
        slide: function () {
            var lampVal = $(".lamp-slider1").slider("option","value");
            $(".lamp-slider-value1").text(lampVal);
            if($('#notification1').bootstrapSwitch('state') == true) {
                $.ajax({
                    type:'GET',
                    url:'http://47.106.249.200:3388/lamp/',
                    datatype:'json',
                    data:{deviceVal:'客厅吊灯',switchVal:1,sliderVal:lampVal},
                    success:function(data){

                    }
                });
                // var a = {deviceVal:'客厅吊灯',switchVal:1,sliderVal:lampVal};
                // console.log(a);
            }
        }
    });

    $(".lamp-slider2").slider({
        max:100,
        min:0,
        slide: function () {
            var lampVal = $(".lamp-slider2").slider("option","value");
            $(".lamp-slider-value2").text(lampVal);
            if($('#notification2').bootstrapSwitch('state') == true) {
                $.ajax({
                    type:'GET',
                    url:'http://47.106.249.200:3388/lamp/',
                    datatype:'json',
                    data:{deviceVal:'厨房灯具',switchVal:1,sliderVal:lampVal},
                    success:function(data){

                    }
                });
            }
        }
    });
    $(".lamp-slider3").slider({
        max:100,
        min:0,
        slide: function () {
            var lampVal = $(".lamp-slider3").slider("option","value");
            $(".lamp-slider-value3").text(lampVal);
            if($('#notification3').bootstrapSwitch('state') == true) {
                $.ajax({
                    type:'GET',
                    url:'http://47.106.249.200:3388/lamp/',
                    datatype:'json',
                    data:{deviceVal:'书房灯具',switchVal:1,sliderVal:lampVal},
                    success:function(data){

                    }
                });
            }
        }
    });

    $('#notification1').on('switchChange.bootstrapSwitch', function (event, state) {
        if(state == true) {
            $.ajax({
                type:'GET',
                url:'http://47.106.249.200:3388/lamp/',
                datatype:'json',
                data:{deviceVal:'客厅吊灯',switchVal:1,sliderVal:$(".lamp-slider1").slider("option","value")},
                success:function(data){

                }
            });
            // var a = {deviceVal:'客厅吊灯',switchVal:1,sliderVal:$(".lamp-slider1").slider("option","value")};
            // console.log(a);
        }

        else {
            $.ajax({
                type:'GET',
                url:'http://47.106.249.200:3388/lamp/',
                datatype:'json',
                data:{deviceVal:'客厅吊灯',switchVal:0,sliderVal:0},
                success:function(data){

                }
            });
            // var a = {deviceVal:'客厅吊灯',switchVal:0,sliderVal:0};
            // console.log(a);
        }
    });

    $('#notification2').on('switchChange.bootstrapSwitch', function (event, state) {
        if(state == true) {
            $.ajax({
                type:'GET',
                url:'http://47.106.249.200:3388/lamp/',
                datatype:'json',
                data:{deviceVal:'厨房灯具',switchVal:1,sliderVal:$(".lamp-slider2").slider("option","value")},
                success:function(data){

                }
            });
        }
        else {
            $.ajax({
                type:'GET',
                url:'http://47.106.249.200:3388/lamp/',
                datatype:'json',
                data:{deviceVal:'厨房灯具',switchVal:0,sliderVal:0},
                success:function(data){
                }
            });
        }
    });

    $('#notification3').on('switchChange.bootstrapSwitch', function (event, state) {
        if(state == true) {
            $.ajax({
                type:'GET',
                url:'http://47.106.249.200:3388/lamp/',
                datatype:'json',
                data:{deviceVal:'书房灯具',switchVal:1,sliderVal:$(".lamp-slider3").slider("option","value")},
                success:function(data){

                }
            });
        }
        else {
            $.ajax({
                type:'GET',
                url:'http://47.106.249.200:3388/lamp/',
                datatype:'json',
                data:{deviceVal:'书房灯具',switchVal:0,sliderVal:0},
                success:function(data){
                }
            });
        }
    });

});