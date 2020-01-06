var rand = function(start, end) {
    var n = end - start;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}
var organicprob = [];
var randnumber = []
var totalprob = 41 //總題數
var click = [];
var index;
var t = []
var inputans = [] //重載時要清空
var correctans = [] //重載時要清空
var newrandprob = () => {
    for (let i = 0; i < totalprob; i++) {
        randnumber[i] = i
    }
    for (let i = 0; i < 100; i++) {
        // 隨機抽第 r 張，和第一張交換
        let r = rand(0, totalprob)
        let temp = randnumber[r]
        randnumber[r] = randnumber[0]
        randnumber[0] = temp
    }
    for (let i = 0; i < 10; i++) {
        let j = randnumber[i]
        correctans[i] = organicprob[j].ans
    }
}
organicprob[0] = { image: "", ans: "D", time: 15 } //
organicprob[1] = { image: "", ans: "D", time: 8 } //
organicprob[2] = { image: "", ans: "B", time: 8 } //
organicprob[3] = { image: "", ans: "A", time: 15 } //
organicprob[4] = { image: "", ans: "B", time: 5 } //
organicprob[5] = { image: "", ans: "C", time: 8 } //
organicprob[6] = { image: "", ans: "C", time: 10 } //
organicprob[7] = { image: "", ans: "C", time: 12 } //
organicprob[8] = { image: "", ans: "A", time: 13 } //
organicprob[9] = { image: "", ans: "A", time: 16 } //
organicprob[10] = { image: "", ans: "A", time: 10 } //
organicprob[11] = { image: "", ans: "C", time: 20 } //
organicprob[12] = { image: "", ans: "B", time: 15 } //
organicprob[13] = { image: "", ans: "B", time: 10 } //
organicprob[14] = { image: "", ans: "B", time: 15 } //
organicprob[15] = { image: "", ans: "A", time: 15 } //
organicprob[16] = { image: "", ans: "A", time: 15 } //
organicprob[17] = { image: "", ans: "B", time: 18 } //
organicprob[18] = { image: "", ans: "B", time: 13 } //
organicprob[19] = { image: "", ans: "A", time: 19 } //
organicprob[20] = { image: "", ans: "B", time: 15 } //
organicprob[21] = { image: "", ans: "B", time: 15 } //
organicprob[22] = { image: "", ans: "C", time: 10 } //
organicprob[23] = { image: "", ans: "C", time: 12 } //
organicprob[24] = { image: "", ans: "D", time: 30 } //
organicprob[25] = { image: "", ans: "D", time: 30 } //
organicprob[26] = { image: "", ans: "C", time: 18 } //
organicprob[27] = { image: "", ans: "A", time: 20 } //
organicprob[28] = { image: "", ans: "B", time: 12 } //
organicprob[29] = { image: "", ans: "C", time: 13 } //
organicprob[30] = { image: "", ans: "B", time: 12 } //
organicprob[31] = { image: "", ans: "D", time: 25 } //
organicprob[32] = { image: "", ans: "B", time: 18 } //
organicprob[33] = { image: "", ans: "A", time: 50 } //
organicprob[34] = { image: "", ans: "C", time: 18 } //
organicprob[35] = { image: "", ans: "D", time: 20 } //
organicprob[36] = { image: "", ans: "A", time: 11 } //
organicprob[37] = { image: "", ans: "B", time: 25 } //
organicprob[38] = { image: "", ans: "B", time: 10 } //
organicprob[39] = { image: "", ans: "C", time: 15 } //
organicprob[40] = { image: "", ans: "C", time: 10 } //
organicprob[41] = { image: "", ans: "C", time: 15 } //
for (let i = 0; i < totalprob; i++) {
    organicprob[i].image = "./img/org" + i + ".jpg"
}

var displayproblem = (th, src, ans, time) => {
    if (th == 10) {
        //console.log(correctans)
        //console.log(inputans)
        $('.problem').css("display", "none")
        $('.leftproblem').text("恭喜你答完了！")
        $('.lefttime').css("display", "none")
        $('.strip').css("display", "none")
        $('.yesno').css("display", "none")
        displayresult();
        return false;
    }
    index = th;
    var input = "";
    click[index] = false;
    //console.log("time:" + time)
    $('.options').attr("disabled", false);
    $('.timer').css("display", "inline-block"); //顯示倒數工具列
    $('.problem').css("display", "block"); //顯示題目與選項
    $('#problemimg').attr('src', src); //放圖
    $('.problemnum').text(10 - th);
    timer(time, index);
    $('#A').on('click', () => { input = "A"; });
    $('#B').on('click', () => { input = "B"; });
    $('#C').on('click', () => { input = "C"; });
    $('#D').on('click', () => { input = "D"; });

    $('.options').on('click', () => { //對答案
        $('.yesno').css("display", "inline-block")
        click[index] = true;
        inputans[index] = input
        $('.options').attr("disabled", true);
        //console.log("index:" + index)
        //console.log("input:" + input)
        //console.log("ans:" + ans)
        if (input == ans && input != "") { //答對了
            $('.yesno').css("display", "inline-block");
            $('#yesno').attr("src", "./img/yes.jpg");
            // console.log("right!")
        } else {
            $('.yesno').css("display", "inline-block");
            $('#yesno').attr("src", "./img/no.jpg");
            //console.log("wrong!")
        }
        clearTimeout(t[index])
        index++;
        $('.options').off('click')
        displayproblem(index, organicprob[Number(randnumber[index])].image, organicprob[Number(randnumber[index])].ans, organicprob[Number(randnumber[index])].time)
    })

    t[index] = setTimeout(() => {
            if (click[index] == false) {
                inputans[index] = "未作答"
                $('.options').off('click');
                //console.log("click[" + index + "] == false")
                click[index] = true;
                index++;
                displayproblem(index, organicprob[Number(randnumber[index])].image, organicprob[Number(randnumber[index])].ans, organicprob[Number(randnumber[index])].time)
            }
        },
        time * 1000)
}
var s = [];
var degrade = [];
var timer = (r, th) => {
    $('.insidecolor').css("display", "inline-block");
    var time = r * 1000; //time=30000ms
    degrade[th] = time;
    var click = false;
    $('.options').on('click', () => { //對答案
        click = true;
        //console.log("click!")
    })
    s[th] = setInterval(function degradefunc() {
        //console.log("click:" + click)
        while (degrade[th] == 0 && click == false) {
            clearInterval(s[th]);
            $('.options').off('click', () => { //對答案
                click = true;
                //console.log("click!")
            });
            return;
        }
        while (click == true) {
            degrade[th] = 0;
            clearInterval(s[th]);
            // console.log("th:" + th);
            click = false;
            return;
        }
        degrade[th] -= 20;
        if (degrade[th] <= 10) { //顯示剩餘秒數
            $('.second').text("0")
        } else {
            if (degrade[th] != 0) $('.second').text((degrade[th] - degrade[th] % 1000) / 1000 + 1);
        }
        let width = 496 * degrade[th] / time;
        let marginleft = 496 - width;
        $('.insidecolor').css("width", width).css("margin-left", marginleft);
        if (degrade[th] > time * 0.7) {
            $('.insidecolor').css("background-color", "rgb(162, 253, 25)");
        }
        if (degrade[th] == time * 0.7) {
            $('.insidecolor').css("background-color", "#FAC106");

        }
        if (degrade[th] == time * 0.3) {
            $('.insidecolor').css("background-color", "red");
        }
    }, 20);
}

var displayresult = () => {
    $('.score').text("")
    var score = 100;
    for (let i = 0; i < 10; i++) {
        $('#c' + (i + 1)).text(organicprob[Number(randnumber[i])].ans)
        $('#i' + (i + 1)).text(inputans[i])
        $('#i' + (i + 1)).css("font-weight", "bold").css("font-size", "19px")
        $('#c' + (i + 1)).css("font-size", "19px")
        if (inputans[i] != organicprob[Number(randnumber[i])].ans) {
            $('#i' + (i + 1)).css("color", "red")
            score -= 10
        }
        if (inputans[i] == organicprob[Number(randnumber[i])].ans) {
            $('#i' + (i + 1)).css("color", "green")
        }
    }
    $('.score').text("你得到" + score + "分！")
    $('.score').append("<br>")
    if (score == 100) {
        $('.score').append("恭喜你在有機大魔王測驗拿到滿分！有機一定A+啦！")
    }
    if (score < 100 && score >= 70) {
        $('.score').append("還不錯了，繼續加油！")
    }
    if (score < 70 && score >= 60) {
        $('.score').append("勉勉強強...上課認真點哦！")
    }
    if (score < 60) {
        $('.score').append("不及格...快快加入方氏化學，拯救你的有機！")
    }
    $('.result').css("display", "block")
    $('#start').removeAttr("disabled")
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
    $('.content').attr("style", "display:none"); //將content隱藏
    //將按鈕移到開始鈕旁邊
    $button = $('<button>').attr("type", "button").addClass("btn btn-danger btn-lg out").text("有機化學")
    $('div.header').append($button);
    $('#start').text("重新開始"); //將"開始遊戲"改為"重新開始"
    $('#start').attr("disabled", true);
    newrandprob();
    displayproblem(0, organicprob[randnumber[0]].image, organicprob[randnumber[0]].ans, organicprob[randnumber[0]].time);

}

$(() => {
    //console.log(randnumber)
    //console.log(correctans)
    $('#start').on('click', () => {
        $('.content').css("display", "block")
        $('button').remove(".out") //移除外來的button
        $('#start').text("開始遊戲")
        $('.problem').css("display", "none")
        $('.yesno').css("display", "none")
        $('.timer').css("display", "none")
        $('.result').css("display", "none")
        $('.leftproblem').remove()
        $leftproblem = $('<p>').text("你還剩下")
        $problemnum = $('<span>').text("10")
        $problemnum.addClass("problemnum")
        $leftproblem.addClass("leftproblem")
        $leftproblem.append($problemnum)
        $leftproblem.append("題！")
        $('.timer').append($leftproblem)
        $('.lefttime').css("display", "inline-block")
        $('.strip').css("display", "block")
    });
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
        //loadelementary();
    });
    $("#optional").on('click', () => {
        // loadoptional();
    });
    $("#organic").on('click', () => {
        loadorganic();
    });
})