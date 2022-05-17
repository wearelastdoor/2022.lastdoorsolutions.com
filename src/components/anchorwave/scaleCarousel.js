import {useEffect} from "react"
import $ from "jquery"

const ScaleCarousel = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            function carousel() {
                $('.scale-carousel').each(function () {
                    var _this = $(this),
                        getItems = _this.children('.c-front-showcase__image'),
                        itemLength = getItems.length,
                        trackWidth = 0,
                        dataIndex = 1,
                        scaleNum = .6667;

                    if (_this.attr('data-scale')) {
                        scaleNum = _this.attr('data-scale')
                    }

                    if (!getItems.parent().hasClass("scale-carousel__item")) {
                        getItems.wrap('<div class="scale-carousel__item">')
                    }

                    var slideItem = _this.find('.scale-carousel__item');

                    slideItem.each(function (i) {
                        $(this).attr('data-index', i)
                    })

                    if (!slideItem.parent().hasClass("scale-carousel__track")) {
                        slideItem.wrapAll('<div class="scale-carousel__track">')
                    }

                    var slideTrack = _this.find('.scale-carousel__track');

                    if (!slideTrack.parent().hasClass("scale-carousel__grid")) {
                        slideTrack.wrap('<div class="scale-carousel__grid">')
                    }

                    _this.find('[data-index=' + dataIndex + ']').addClass('current')

                    var slideGrid = _this.find('.scale-carousel__grid'),
                        slideWidth = 0;

                    function currentSlide(currentIndex) {
                        _this.find('[data-index=' + currentIndex + ']').addClass('current').css('zIndex', 99999).siblings().removeClass('current')
                        slideWidth = 0;
                        var gapBetween = slideItem.outerWidth(true) - slideItem.innerWidth(),
                            gapBetweenModified = gapBetween > 0 ? gapBetween : 0;
                        slideItem.slice(0, currentIndex).each(function () {
                            if (!$(this).hasClass('current')) {
                                slideWidth += -Math.ceil((slideGrid.width()) * scaleNum) - gapBetweenModified;
                            }
                        })

                        slideTrack.css({
                            'transform': 'translate3d(' + slideWidth + 'px, 0 , 0)',
                            'transition': 'all 600ms ease'
                        })

                        defaultVal()
                    }

                    function defaultVal() {
                        trackWidth = slideItem.outerWidth(true);

                        slideItem.each(function (i) {
                            if ($(this).hasClass('current')) {
                                $(this).css({
                                    width: Math.ceil(slideGrid.width())
                                })
                            } else {
                                $(this).css({
                                    width: Math.ceil(slideGrid.width() * scaleNum)
                                })
                            }
                        })

                        slideItem.each(function (i) {
                            trackWidth += Math.ceil($(this).outerWidth(true))
                        });
                    }

                    var getItem = _this.find('.scale-carousel__item.current').data('index');
                    dataIndex = typeof getItem !== "undefined" ? getItem : dataIndex;

                    currentSlide(dataIndex);

                    $(window).resize(function () {
                        currentSlide(dataIndex);
                    })
                    slideTrack.css({
                        width: Math.ceil(trackWidth),
                        display: 'flex',
                        alignItems: 'center'
                    })

                    function slideNext() {
                        if (dataIndex >= itemLength - 1) return
                        currentSlide(dataIndex + 1)
                        dataIndex++;
                    }

                    function slidePrev() {
                        if (dataIndex <= 0) return
                        currentSlide(dataIndex - 1)
                        dataIndex--;
                    }


                    $('.next').click(function () {
                        slideNext()
                    })

                    $('.prev').click(function () {
                        slidePrev()
                    })

                    function autoLoop(data) {
                        if (data >= itemLength) return
                        currentSlide(data)
                        data++;
                    }

                    var holdStarter = null,
                        holdDelay = 100;
                    slideItem.mousedown(onMouseDown).mouseup(onMouseUp);

                    function onMouseDown() {
                        holdStarter = setTimeout(function () {
                            holdStarter = null;
                        }, holdDelay);
                    }

                    function onMouseUp() {
                        if (holdStarter) {
                            clearTimeout(holdStarter);
                            var getSlide = $(this).data('index')
                            if (getSlide >= itemLength) return
                            if ($(this).hasClass('current')) {
                                autoLoop(getSlide + 1)
                            } else {
                                autoLoop(getSlide)
                            }
                        }
                    }


                    // setInterval(loop, 10000);

                    // function loop() {
                    //     dataIndex++;
                    //     if (dataIndex >= itemLength) {
                    //         dataIndex = 0;
                    //     }
                    //     autoLoop(dataIndex)
                    // }

                    var animation = false,
                        distOfLetGo = slideGrid.width() * 0.01;
                    let diff = 0;

                    _this.on('mousedown touchstart', slideItem, function (e) {
                        if (animation) return;
                        let startX = e.pageX || e.originalEvent.touches[0].pageX;

                        $(document).on('mousemove touchmove', function (e) {
                            let x = e.pageX || e.originalEvent.touches[0].pageX;
                            diff = startX - x;
                        });
                    });

                    _this.on('mouseup touchend', function (e) {
                        slideTrack.css({
                            'transition': 'all 600ms ease'
                        })
                        $(document).off('mousemove touchmove');
                        if (animation) return;
                        if (diff >= distOfLetGo) {
                            slideNext()
                        } else if (diff <= -distOfLetGo) {
                            slidePrev()
                        } else {
                            defaultVal()
                        }
                    });

                    $(document).on('keydown', function (e) {
                        if (e.which === 39) slideNext();
                        if (e.which === 37) slidePrev();
                    });

                    _this.on('mousewheel DOMMouseScroll', function (e) {
                        if (animation) return;
                        let delta = e.originalEvent.wheelDelta;
                        if (delta > 0 || e.originalEvent.detail < 0) slidePrev();
                        if (delta < 0 || e.originalEvent.detail > 0) slideNext();
                    });
                })
            }

            carousel()
            $(window).resize(function () {
                carousel()
            });
        }

    }, [])
    return null
}

export default ScaleCarousel