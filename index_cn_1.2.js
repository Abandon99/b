$(document).ready(function () {



    var windowWidth = window.screen.width;

    if (windowWidth > 768) {
        runPcScript();
        //项目进程动效
        var calendar_height = $('#course').offset().top;
        console.log(calendar_height)
        $(window).scroll(function () {
            if ($(window).scrollTop() > calendar_height-200) {
                $('.flag').addClass('slideInLeft');
                $('.arrow').addClass('slideInRight');
            }
        });
    }else {

    }

    if (windowWidth <1200){
        initHeight();
    }else {
        $('img[my-src]').map(function () {
            var src = $(this).attr('my-src');
            $(this).attr('src',src)
        });
        $("#img1").css({
            transform:'none'
        })
    }



    var data_cn = {};

    var text1 = '体育产业作为一个朝阳、健康、绿色的产业，' +
        '已成为21世纪国际公认的最具活力的产业。' +
        '体育产业具有高渗透性、交叉性、拉动性的特点,' +
        '2017年全球体育产业总规模突破1.6万美元，随着网络技术的演进' +
        '和消费技术的不断升级，广大用户对于体育尤其是互联网体育的' +
        '热情愈加高涨，由此促进体育社交平台的快速发展和高度融合，内容' +
        '+电商+社交的模式成为一大趋势。';

    var text2 = '传统模式下,体育在多项融合发展的过程中,也出现了诸多行业痛点：' +
        '如中心化所出现的多环节高成本问题、平台操纵问题' +
        '、信息和交易隐患等.' +
        'BW2B利用成熟的区块链技术，融合了云计算。大数据、人工智能和物联网等前沿的科技，针对体育' +
        '行业所存在的痛点形成了一整套完整的解决方案。';

    var tip_detail = 'Bw2w募资仅接受BTC，下述价格以BTC为标准。';



    var newsArr = [
        {
            content:'Bw2w与ULORD达成深度战略合作伙伴关系',
            date:'2018-3-1',
            newsId:0
        }
    ];

    $('.text-detail1').html(text1);
    $('.text-detail2').html(text2);

    initNews(newsArr);
    initTipDetails(tip_detail);
    initEvent();

    function initTipDetails(text) {
        $('.tip-detail').html(text)
    }

    function initEvent() {
        $('.ploy').on('click',function () {
            console.log(1);
            $('.ploy').removeClass('onclick');
            $(this).addClass('onclick')
        });

        $('.divForClick').click(function () {
            window.location = "doc/paper_zh.pdf";
        });


        $('body').on('click','.nav.navbar-nav',function (e) {

            if (windowWidth < 1200) $('.navbar-header button').trigger('click');



            var id;
            // var html = e.target.innerHTML;
            var html = $(e.target).html();

            console.log(html)

            if (html === '行业背景') id = '#background';
            if (html === '解决方案') id = '#solve';
            if (html === '项目进程') id = '#course';
            if (html === 'Token发行与分配')   id = '#token';
            if (html === 'Racecoin分配方案')   id = '#racecoin';
            if (html === '新闻动态') id = '#news';
            if (html === '敬请期待') id = '#video';
            // if (html === '联系方式') id = '#flow';
            if (html === 'Change English') {
                window.location.href = 'index.html';
                return false
            }

            var  top = $(id).offset().top - 200;

            console.log(top);
            $(document).scrollTop(top);
        });

        $('#down').on('click',function () {
            console.log(11);
            window.location.href = "doc/paper_zh.pdf";

        });

        $('.news-detail').on('click',function () {
            var id = $(this).attr('news-id');

            console.log(id)

            window.location.href = 'news.html?news_id='+id;
        });

        //底部
        $('.foot-top').on('click','div',function (e) {
            var tar = $(this).html();
            console.log(tar);
            if (tar === '主页') $(document).scrollTop(0);
            if (tar === '白皮书') window.location = "doc/paper_zh.pdf";
            if (tar === 'Bw2w社区(敬请期待)') {};
        })





    }

    function initHeight() {

        var $height1 = $('.row_2>div:nth-child(1)').height();
        var $height2 = $('.row_2>div:nth-child(2)').height();

        console.log($height2)

        if($height1 > $height2){
            $('.row_2>div:nth-child(2)').height($height1);
            var height_4 = $height1 - 45;
        }else {
            $('.row_2>div:nth-child(1)').height($height2);
            var height_4 = $height2 - 45;
        }

        $('.row_2>div:nth-child(4)').height(height_4);

        $('.row_2>div:nth-child(3)')
            .css({'justify-content':'center'})

    }

    function runPcScript() {
        var h1 = $('.main-flow>div:nth-child(2)').outerHeight();
        $(".percent").height(h1)
    }

    function initNews(arr) {
        arr.forEach(function (val,index) {
            $('.news-box').append('<div news-id="'+val.newsId+'" class="news-detail">\n' +
                '                        <div class="news-content-index">' +
                '<img class="little-style" src="img/ploy_border.png" alt="">'+val.content+'</div>\n' +
                '                        <div class="news-date">'+val.date+'</div>\n' +
                '                    </div>')
        })
    }






















})