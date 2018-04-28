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
    }


    var newsArr = [
        {
            content:'Bw2w and Ulord establish a deep strategic partnership.',
            date:'2018-3-1',
            newsId:0
        }
    ];

    initNews(newsArr);
// initTipDetails(tip_detail);

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
            window.location.href = "doc/paper_en.pdf";
        });


        $('.nav.navbar-nav').on('click',function (e) {

            if (windowWidth < 1200) $('.navbar-header button').trigger('click');
            var id;
            // var html = e.target.innerHTML;
            var html = $(e.target).html();

            console.log(html);

            if (html === 'Background') id = '#background';
            if (html === 'Operation') id = '#solve';
            if (html === 'Development') id = '#course';
            if (html === 'Token')   id = '#token';
            if (html === 'Racecoin')   id = '#racecoin';
            if (html === 'News') id = '#news';
            if (html === '切换中文') {
                window.location.href = 'index_cn.html';
                return false
            }
            // if (html === '联系方式') id = '#flow';

            var  top = $(id).offset().top - 200;

            console.log(top);
            $(document).scrollTop(top);
        });

        $('#down').on('click',function () {
            console.log(11);
            window.location.href = "doc/paper_en.pdf";

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
            if (tar === 'Home') $(document).scrollTop(0);
            if (tar === 'Whitepaper') window.location = "doc/paper_en.pdf";
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























});