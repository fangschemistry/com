function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var rand = function(start, end) {
    var n = end - start;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}

// function displayproblem(th, src, ans, time) {
//     var input = "";
//     var click = false;

//     $('.timer').css("display", "inline-block"); //顯示倒數工具列
//     $('.problem').css("display", "block"); //顯示題目與選項
//     //let index = rand(0, 0);
//     //let index = 0;
//     $('#problemimg').attr('src', src); //放圖
//     timer(time);
//     $('.problemnum').text(10 - th)
//     $('#A').on('click', () => { input = "A" });
//     $('#B').on('click', () => { input = "B" });
//     $('#C').on('click', () => { input = "C" });
//     $('#D').on('click', () => { input = "D" });

//     $('.options').on('click', () => { //對答案
//         click = true;
//         $('.options').attr("disabled", true);
//         if (input == ans && input != "") {
//             //答對了
//             $('.yesno').css("display", "inline-block");
//             $('#yesno').attr("src", "./img/yes.jpg");
//             let f = setTimeout('closeproblem()', 2000); //希望能直接跳下一題
//             //console.log("3")
//         } else {
//             //答錯了

//             $('.yesno').css("display", "inline-block");
//             $('#yesno').attr("src", "./img/no.jpg");
//             let f = setTimeout('closeproblem()', 2000); //希望能直接跳下一題
//             //console.log("2")
//         }
//     })

//     // function check() {
//     //     if (click == false) {
//     //         closeproblem(th);
//     //         console.log("3")
//     //     }
//     // }
//     let s = setTimeout(() => {
//             if (click == false) {
//                 closeproblem();
//                 console.log("1")
//             }
//         },
//         time * 1000)
// }

function closeproblem() {
    $('.problem').css("display", "none");
    //console.log("jfdla;skjdf");
    $('.insidecolor').css("display", "none");
    clearInterval();
    timer(0);
    clearTimeout();
    $('.second').css("display", "none");
    $("div.insidecolor").css("width", "0px");
}

var loadelementary = () => {
    $('.content').attr("style", "display:none"); //將content隱藏
    //將按鈕移到開始紐旁邊
    $button = $('<button>').attr("type", "button").addClass("btn btn-success btn-lg out").text("基礎化學")
    $('div.header').append($button);
    $('#start').text("重新開始"); //將"開始遊戲"改為"重新開始"
};

var loadoptional = () => {
    $('.content').attr("style", "display:none"); //將content隱藏
    //將按鈕移到開始紐旁邊
    $button = $('<button>').attr("type", "button").addClass("btn btn-warning btn-lg out").text("選修化學")
    $('div.header').append($button);
    $('#start').text("重新開始"); //將"開始遊戲"改為"重新開始"
};

var loadorganic = () => {
    var organicprob = [30];
    var randnumber = [0, 1, 2, 0, 0, 0, 0, 0, 0, 0];
    organicprob[0] = { image: "", ans: "D", time: 15 }
    organicprob[1] = { image: "", ans: "A", time: 30 }
    organicprob[2] = { image: "", ans: "B", time: 10 }
    for (let i = 0; i < 3; i++) {
        organicprob[i].image = "./img/org" + i + ".jpg"
    }
    // organicprob[0].image = "./img/org" + 0 + ".jpg"
    $('.content').attr("style", "display:none"); //將content隱藏
    //將按鈕移到開始鈕旁邊
    $button = $('<button>').attr("type", "button").addClass("btn btn-danger btn-lg out").text("有機化學")
    $('div.header').append($button);
    $('#start').text("重新開始"); //將"開始遊戲"改為"重新開始"
    var delay = 0;
    for (let j = 0; j < 3; j++) {
        let index = randnumber[j];
        delay += organicprob[index].time;
        setTimeout(function displayproblem() {
            var input = "";
            var click = false;
            $('.timer').css("display", "inline-block"); //顯示倒數工具列
            $('.problem').css("display", "block"); //顯示題目與選項
            //let index = rand(0, 0);
            //let index = 0;
            $('#problemimg').attr('src', organicprob[index].image); //放圖
            timer(organicprob[index].time);
            $('.problemnum').text(10 - j - 1)
            $('#A').on('click', () => { input = "A" });
            $('#B').on('click', () => { input = "B" });
            $('#C').on('click', () => { input = "C" });
            $('#D').on('click', () => { input = "D" });

            $('.options').on('click', () => { //對答案
                click = true;
                $('.options').attr("disabled", true);
                if (input == organicprob[index].ans && input != "") {
                    $('.yesno').css("display", "inline-block");
                    $('#yesno').attr("src", "./img/yes.jpg");
                    clearTimeout();
                    //let f = setTimeout('closeproblem()', 2000); //希望能直接跳下一題
                } else {
                    //答錯了
                    $('.yesno').css("display", "inline-block");
                    $('#yesno').attr("src", "./img/no.jpg");
                    clearTimeout();
                    //let f = setTimeout('closeproblem()', 2000); //希望能直接跳下一題
                    //console.log("2")
                }
            })
            let s = setTimeout(() => {
                    if (click == false) {
                        closeproblem();
                        console.log("1")
                    }
                },
                organicprob[index].time * 1000)
        }, organicprob[index].time * 1000)
    }
    //$('#start').attr("disabled", false);
    //剩下...題
    //倒數秒數
    //ABCD按鈕
    //結尾，恭喜你在有機大魔王獲得了100分，有機肯定A+！
}

var timer = (r) => {

    $('#start').attr("disabled", true);
    //r在10到30之間
    let time = r * 1000; //time=30000ms
    let degrade = time;

    $("div.insidecolor").css("background-color", "rgb(162, 253, 25)");
    let s = setInterval(function degradefunc() {
        while (degrade == 0) {
            clearInterval(s);
            $('#start').removeAttr("disabled");
            return;
        }
        degrade -= 10;
        let width = 496 * degrade / time;
        let marginleft = 496 - width;
        $("div.insidecolor").css("width", width).css("margin-left", marginleft);
        //var t = setTimeout('degradefunc()', 1000);

        while (degrade == time * 0.7) {
            $("div.insidecolor").css("background-color", "#FAC106");
            return;
        }
        while (degrade == time * 0.3) {
            $("div.insidecolor").css("background-color", "red");
            return;
        }

        if (degrade <= 10) { //顯示剩餘秒數
            $('.second').text("0")
        } else {
            $('.second').text((degrade - degrade % 1000) / 1000 + 1);
        }
    }, 10);
    // if (r == 0) {
    //     degrade = 0;
    //     clearInterval(s);
    //     console.log("DD");
    //     $("div.insidecolor").css("width", 0);
    //     return;
    // }

}

var problemcounter = (r) => {
    $('.problemnum').text(r)
}

$(() => {
    $('#start').on('click', () => {
        $('.content').css("display", "block")
        $('button').remove(".out") //移除外來的button
        $('#start').text("開始遊戲")
    })
    $("#elementary").mouseenter(() => {
        $('.explain').text("輕輕鬆鬆的學測化學，保證可以秒殺！")
    });
    $("#elementary").mouseleave(() => {
        $('.explain').text("")
    });
    $("#optional").mouseenter(() => {
        $('.explain').text("稍有難度的指考化學，要仔細想想喔！")
    });
    $("#optional").mouseleave(() => {
        $('.explain').text("")
    });
    $("#organic").mouseenter(() => {
        $('.explain').text("醫學院、部分二類科系學生的大魔王，保證電到你嫑嫑的！大學生請進！");
        $img = $('<img>').attr('src', './img/organic.jpg').addClass('organicjpg').css("padding-right", "100px").css("display", "inline-block").css("float", "right")
        $('.content').append($img)
        $img2 = $('<img>').attr('src', './img/life.jpg').addClass('organicjpg').css("display", "inline-block").css("padding-right", "30px").css("float", "right")
        $('.content').append($img2)
        $img3 = $('<img>').attr('src', './img/fails.jpg').addClass('organicjpg').css("display", "inline-block").css("padding-right", "30px").css("float", "right").css("padding-top", "10px")
        $('.content').append($img3)

    });
    $("#organic").mouseleave(() => {
        $('.explain').text("")
        $('img').remove('.organicjpg')
    });

    $("#elementary").on('click', () => {
        loadelementary();
    });
    $("#optional").on('click', () => {
        loadoptional();
    });
    $("#organic").on('click', () => {
        loadorganic();
    });
})