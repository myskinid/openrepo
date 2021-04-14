var BeforeAfterSlider = {
    sliderClassName: "comparison",
    speed: 30,
    setSliderClass: function(newSetName) {
        this.sliderClassName = newSetName;


        return this;
    },
    setSpeed: function(t_speed) {
        this.speed = t_speed;
        return this;
    },
    run: function() {
        let sliderList = jQuery('.' + this.sliderClassName);
        let speedRace = this.speed;
        if (sliderList.length > 0) {
            // console.log(typeof  sliderList);
            jQuery.each(sliderList, (e, i) => {
                sliderList[e].speed = speedRace;
                sliderList[e].stop = 0;

                sliderList[e].divisor = jQuery(i).find(".divisor")[0];
                sliderList[e].slider = jQuery(i).find('input[type="range"]')[0];
                sliderList[e].moveDivisor = function() {
                    this.divisor.style.width = this.slider.value + "%";
                }
                sliderList[e].stopMove = function() {
                    this.stop = 1;

                }
                sliderList[e].go = function() {
                    var numeri = -1;
                    let curValue = parseInt(this.slider.value);
                    let setInterval_1 = setInterval(() => {
                        if (this.stop == 1) {
                            clearInterval(setInterval_1);
                        } else {

                        }
                        let num_ = parseInt(this.slider.value);
                        this.slider.value = num_ + numeri;
                        if ((num_ + numeri) <= 0 || (num_ + numeri) >= 100) {
                            numeri *= -1;
                        }
                        this.moveDivisor();
                    }, sliderList[e].speed)
                }
                sliderList[e].go();
                jQuery(sliderList[e]).click(() => {
                    sliderList[e].stopMove();
                });
                jQuery(sliderList[e].slider).on("input change", () => {
                    sliderList[e].moveDivisor();
                });
            })
        }
    },

}