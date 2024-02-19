(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    window.addEventListener("DOMContentLoaded", (() => {
        const wrapperVideo = document.getElementById("fon");
        const airplane = document.querySelector(".airplane");
        const video1 = document.getElementById("video1");
        const video2 = document.getElementById("video2");
        const switchPage = document.querySelector(".checkbox");
        const switchPageCircle = document.querySelector(".checkbox__circle");
        const btnGreen2 = document.querySelector(".content__circle-2");
        const red = document.querySelector(".content__circle-3");
        const btnGreen4 = document.querySelector(".content__circle-4");
        const btnGreen5 = document.querySelector(".content__circle-5");
        const btnGear = document.querySelector(".content__circle-1");
        const noseCircle = document.querySelector(".nose-circle");
        const leftCircle = document.querySelector(".left-circle");
        const rightCircle = document.querySelector(".right-circle");
        const unsafeCircle = document.querySelector(".unsafe-circle");
        const audibleAlarm = document.querySelector(".audibleAlarm");
        const noseReleased = document.querySelector(".nose-released ");
        const leftReleased = document.querySelector(".left-released");
        const rightReleased = document.querySelector(".right-released");
        const noseRemoved = document.querySelector(".nose-removed");
        const leftRemoved = document.querySelector(".left-removed");
        const rightRemoved = document.querySelector(".right-removed");
        const kv1_3 = document.querySelector(".kv1-3");
        const line = document.querySelector(".circle__box-2");
        const r8 = document.getElementById("r8");
        const box__left = document.getElementById("left");
        const box__right = document.getElementById("right");
        const box__nose = document.getElementById("nose");
        const removed__left = document.getElementById("removed__left");
        const removed__right = document.getElementById("removed__right");
        const removed__nose = document.getElementById("removed__nose");
        const p2 = document.getElementById("p2");
        const kv3 = document.getElementById("kv3");
        const rud = document.getElementById("rud");
        const rud2 = document.getElementById("rud2");
        const air = document.querySelector(".blockbtn__air");
        const ground = document.querySelector(".blockbtn__ground");
        const itemVideo = document.querySelector(".item__video-wrapper");
        const itemImg = document.querySelector(".item__video-img");
        const leftkv1 = document.querySelector(".left-kv1");
        const checkboxSwithCircle = document.querySelectorAll(".checkbox-swith__circle");
        const barScalePerc = document.querySelector(".bar-scale__perc");
        btnGear.addEventListener("mousedown", (() => {
            if (false == btnGear.classList.contains("q") && false == switchPage.classList.contains("t")) {
                btnGear.classList.add("q");
                btnGear.style.background = "rgba(164, 164, 164, 1.0)";
                btnGear.style.background = "-webkit-linear-gradient(bottom right, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "-moz-linear-gradient(bottom right, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "linear-gradient(to top left, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGreen2.style.backgroundColor = "#41ff07";
                btnGreen4.style.backgroundColor = "#41ff07";
                btnGreen5.style.backgroundColor = "#41ff07";
                noseCircle.style.backgroundColor = "#41ff07";
                leftCircle.style.backgroundColor = "#41ff07";
                rightCircle.style.backgroundColor = "#41ff07";
                noseCircle.style.opacity = ".8";
                leftCircle.style.opacity = ".8";
                rightCircle.style.opacity = ".8";
            }
        }));
        btnGear.addEventListener("mouseup", (() => {
            if (btnGear.classList.contains("q") && false == switchPage.classList.contains("t")) {
                btnGear.classList.remove("q");
                btnGear.style.background = "rgba(164, 164, 164, 1.0)";
                btnGear.style.background = "-webkit-linear-gradient(top left, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "-moz-linear-gradient(top left, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGear.style.background = "linear-gradient(to bottom right, rgba(164, 164, 164, 1.0), rgba(15, 15, 14, 1.0))";
                btnGreen2.style.backgroundColor = "#378521";
                btnGreen4.style.backgroundColor = "#378521";
                btnGreen5.style.backgroundColor = "#378521";
                noseCircle.style.backgroundColor = "#378521";
                leftCircle.style.backgroundColor = "#378521";
                rightCircle.style.backgroundColor = "#378521";
                noseCircle.style.opacity = ".3";
                leftCircle.style.opacity = ".3";
                rightCircle.style.opacity = ".3";
            }
        }));
        window.onload = function() {
            switchPage.addEventListener("click", (() => {
                if (true == air.classList.contains("active")) {
                    wrapperVideo.play();
                    video1.play();
                    video2.play();
                    setTimeout((() => {
                        wrapperVideo.play();
                        video1.play();
                        video2.play();
                    }), 1e3);
                    setTimeout((() => {
                        wrapperVideo.pause();
                    }), 15e3);
                    setTimeout((() => {
                        video1.pause();
                    }), 15105);
                    setTimeout((() => {
                        video2.pause();
                    }), 16055);
                }
            }));
        };
        switchPage.addEventListener("click", (() => {
            if (true == air.classList.contains("active")) if (false == switchPage.classList.contains("t")) {
                switchPage.classList.add("t");
                checkboxSwithCircle.forEach((e => {
                    e.style.pointerEvents = "none";
                }));
                switchPageCircle.style.pointerEvents = "none";
                switchPageCircle.style.top = "60px";
                switchPage.style.background = "#40e551";
                air.disabled = true;
                ground.disabled = true;
                setTimeout((() => {
                    switchPageCircle.style.pointerEvents = "all";
                    checkboxSwithCircle.forEach((e => {
                        e.style.pointerEvents = "all";
                    }));
                    air.disabled = false;
                    ground.disabled = false;
                }), 16700);
                noseRemoved.style.color = "inherit";
                leftRemoved.style.color = "inherit";
                rightRemoved.style.color = "inherit";
                p2.style.transform = "rotate(9deg)";
                kv3.style.transform = "rotate(-180deg)";
                line.style.transform = "rotate(20deg)";
                removed__nose.style.transform = "rotate(-180deg)";
                removed__left.style.transform = "rotate(-180deg)";
                removed__right.style.transform = "rotate(-180deg)";
                red.style.backgroundColor = "#ff0000";
                unsafeCircle.style.backgroundColor = "#ff0000";
                unsafeCircle.style.opacity = ".8";
                setTimeout((() => {
                    btnGreen2.style.backgroundColor = "#41ff07";
                    noseReleased.style.color = "#189918";
                    noseCircle.style.backgroundColor = "#41ff07";
                    noseCircle.style.opacity = ".8";
                    r8.style.transform = "rotate(-180deg)";
                    box__nose.style.transform = "rotate(-180deg)";
                    kv1_3.style.transform = "rotate(-180deg)";
                }), 14e3);
                setTimeout((() => {
                    btnGreen4.style.backgroundColor = "#41ff07";
                    leftReleased.style.color = "#189918";
                    leftCircle.style.backgroundColor = "#41ff07";
                    leftCircle.style.opacity = ".8";
                    box__left.style.transform = "rotate(-180deg)";
                }), 15e3);
                setTimeout((() => {
                    box__right.style.transform = "rotate(-180deg)";
                    btnGreen5.style.backgroundColor = "#41ff07";
                    rightReleased.style.color = "#189918";
                    rightCircle.style.backgroundColor = "#41ff07";
                    rightCircle.style.opacity = ".8";
                    unsafeCircle.style.backgroundColor = "#750202";
                    unsafeCircle.style.opacity = ".3";
                    red.style.backgroundColor = "#750202";
                }), 16700);
            } else {
                switchPage.classList.remove("t");
                switchPageCircle.style.top = "0px";
                switchPage.style.background = "#c6c6c6";
                switchPageCircle.style.pointerEvents = "none";
                checkboxSwithCircle.forEach((e => {
                    e.style.pointerEvents = "none";
                }));
                air.disabled = true;
                ground.disabled = true;
                setTimeout((() => {
                    switchPageCircle.style.pointerEvents = "all";
                    checkboxSwithCircle.forEach((e => {
                        e.style.pointerEvents = "all";
                    }));
                    air.disabled = false;
                    ground.disabled = false;
                }), 16e3);
                r8.style.transform = "rotate(-134deg)";
                kv1_3.style.transform = "rotate(-134deg)";
                box__nose.style.transform = "rotate(-134deg)";
                box__left.style.transform = "rotate(-134deg)";
                box__right.style.transform = "rotate(-134deg)";
                noseReleased.style.color = "inherit";
                leftReleased.style.color = "inherit";
                rightReleased.style.color = "inherit";
                line.style.transform = "rotate(-29deg)";
                kv3.style.transform = "rotate(-134deg)";
                noseCircle.style.backgroundColor = "#378521";
                noseCircle.style.opacity = ".3";
                leftCircle.style.backgroundColor = "#378521";
                leftCircle.style.opacity = ".3";
                rightCircle.style.backgroundColor = "#378521";
                rightCircle.style.opacity = ".3";
                btnGreen2.style.backgroundColor = "#378521";
                btnGreen4.style.backgroundColor = "#378521";
                btnGreen5.style.backgroundColor = "#378521";
                unsafeCircle.style.backgroundColor = "#ff0000";
                unsafeCircle.style.opacity = ".8";
                red.style.backgroundColor = "#ff0000";
                setTimeout((() => {
                    p2.style.transform = "rotate(-29deg)";
                    noseRemoved.style.color = "#189918";
                    leftRemoved.style.color = "#189918";
                    rightRemoved.style.color = "#189918";
                    removed__nose.style.transform = "rotate(-134deg)";
                    removed__left.style.transform = "rotate(-134deg)";
                    removed__right.style.transform = "rotate(-134deg)";
                    unsafeCircle.style.backgroundColor = "#750202";
                    unsafeCircle.style.opacity = ".3";
                    red.style.backgroundColor = "#750202";
                }), 13e3);
            } else if (false == switchPage.classList.contains("t")) {
                switchPage.classList.add("t");
                switchPageCircle.style.top = "60px";
                switchPage.style.background = "#40e551";
                noseRemoved.style.color = "inherit";
                leftRemoved.style.color = "inherit";
                rightRemoved.style.color = "inherit";
                p2.style.transform = "rotate(9deg)";
                kv3.style.transform = "rotate(-180deg)";
                line.style.transform = "rotate(20deg)";
                removed__nose.style.transform = "rotate(-180deg)";
                removed__left.style.transform = "rotate(-180deg)";
                removed__right.style.transform = "rotate(-180deg)";
                red.style.backgroundColor = "#ff0000";
                unsafeCircle.style.backgroundColor = "#ff0000";
                unsafeCircle.style.opacity = ".8";
                btnGreen2.style.backgroundColor = "#41ff07";
                noseReleased.style.color = "#189918";
                noseCircle.style.backgroundColor = "#41ff07";
                noseCircle.style.opacity = ".8";
                r8.style.transform = "rotate(-180deg)";
                box__nose.style.transform = "rotate(-180deg)";
                btnGreen4.style.backgroundColor = "#41ff07";
                leftReleased.style.color = "#189918";
                leftCircle.style.backgroundColor = "#41ff07";
                leftCircle.style.opacity = ".8";
                box__left.style.transform = "rotate(-180deg)";
                box__right.style.transform = "rotate(-180deg)";
                btnGreen5.style.backgroundColor = "#41ff07";
                rightReleased.style.color = "#189918";
                rightCircle.style.backgroundColor = "#41ff07";
                rightCircle.style.opacity = ".8";
                unsafeCircle.style.backgroundColor = "#750202";
                unsafeCircle.style.opacity = ".3";
                red.style.backgroundColor = "#750202";
            } else {
                switchPage.classList.remove("t");
                switchPageCircle.style.top = "0px";
                switchPage.style.background = "#c6c6c6";
                leftkv1.style.color = "rgb(255, 0, 0)";
                line.style.transform = "rotate(-29deg)";
                kv1_3.style.transform = "rotate(-134deg)";
                setTimeout((() => {
                    kv1_3.style.transform = "rotate(-180deg)";
                    line.style.transform = "rotate(20deg)";
                    switchPageCircle.style.top = "60px";
                    switchPage.style.background = "#40e551";
                    leftkv1.style.color = "#000";
                    switchPage.classList.add("t");
                }), 2e3);
            }
        }));
        ground.addEventListener("click", (() => {
            if (false == ground.classList.contains("active")) {
                ground.classList.add("active");
                air.classList.remove("active");
            }
            checkboxSwithCircle.forEach((e => {
                e.style.pointerEvents = "none";
                e.value = "50";
            }));
            barScalePerc.style.height = "55%";
            kv1_3.style.transform = "rotate(-180deg)";
            switchPage.classList.add("t");
            itemVideo.style.display = "none";
            itemImg.style.display = "block";
            wrapperVideo.style.display = "none";
            airplane.style.display = "block";
            switchPageCircle.style.top = "60px";
            switchPage.style.background = "#40e551";
            document.querySelector(".scale__h2").style.display = "none";
            rud.style.transform = "rotate(-134deg)";
            rud2.style.transform = "rotate(-134deg)";
            audibleAlarm.style.color = "#000";
            noseRemoved.style.color = "inherit";
            leftRemoved.style.color = "inherit";
            rightRemoved.style.color = "inherit";
            p2.style.transform = "rotate(9deg)";
            kv3.style.transform = "rotate(-180deg)";
            line.style.transform = "rotate(20deg)";
            removed__nose.style.transform = "rotate(-180deg)";
            removed__left.style.transform = "rotate(-180deg)";
            removed__right.style.transform = "rotate(-180deg)";
            red.style.backgroundColor = "#ff0000";
            unsafeCircle.style.backgroundColor = "#ff0000";
            unsafeCircle.style.opacity = ".8";
            btnGreen2.style.backgroundColor = "#41ff07";
            noseReleased.style.color = "#189918";
            noseCircle.style.backgroundColor = "#41ff07";
            noseCircle.style.opacity = ".8";
            r8.style.transform = "rotate(-180deg)";
            box__nose.style.transform = "rotate(-180deg)";
            btnGreen4.style.backgroundColor = "#41ff07";
            leftReleased.style.color = "#189918";
            leftCircle.style.backgroundColor = "#41ff07";
            leftCircle.style.opacity = ".8";
            box__left.style.transform = "rotate(-180deg)";
            box__right.style.transform = "rotate(-180deg)";
            btnGreen5.style.backgroundColor = "#41ff07";
            rightReleased.style.color = "#189918";
            rightCircle.style.backgroundColor = "#41ff07";
            rightCircle.style.opacity = ".8";
            unsafeCircle.style.backgroundColor = "#750202";
            unsafeCircle.style.opacity = ".3";
            red.style.backgroundColor = "#750202";
        }));
        air.addEventListener("click", (() => {
            if (false == air.classList.contains("active")) {
                air.classList.add("active");
                ground.classList.remove("active");
            }
            checkboxSwithCircle.forEach((e => {
                e.style.pointerEvents = "all";
                e.value = "50";
            }));
            barScalePerc.style.height = "55%";
            switchPage.classList.remove("t");
            itemVideo.style.display = "block";
            itemImg.style.display = "none";
            switchPageCircle.style.top = "0px";
            switchPage.style.background = "#c6c6c6";
            wrapperVideo.style.display = "block";
            airplane.style.display = "none";
            kv1_3.style.transform = "rotate(-134deg)";
            r8.style.transform = "rotate(-134deg)";
            box__nose.style.transform = "rotate(-134deg)";
            box__left.style.transform = "rotate(-134deg)";
            box__right.style.transform = "rotate(-134deg)";
            noseReleased.style.color = "inherit";
            leftReleased.style.color = "inherit";
            rightReleased.style.color = "inherit";
            line.style.transform = "rotate(-29deg)";
            kv3.style.transform = "rotate(-134deg)";
            noseCircle.style.backgroundColor = "#378521";
            noseCircle.style.opacity = ".3";
            leftCircle.style.backgroundColor = "#378521";
            leftCircle.style.opacity = ".3";
            rightCircle.style.backgroundColor = "#378521";
            rightCircle.style.opacity = ".3";
            btnGreen2.style.backgroundColor = "#378521";
            btnGreen4.style.backgroundColor = "#378521";
            btnGreen5.style.backgroundColor = "#378521";
            unsafeCircle.style.backgroundColor = "#ff0000";
            unsafeCircle.style.opacity = ".8";
            red.style.backgroundColor = "#ff0000";
            document.querySelector(".scale__h2").style.display = "none";
            rud.style.transform = "rotate(-134deg)";
            rud2.style.transform = "rotate(-134deg)";
            audibleAlarm.style.color = "#000";
            p2.style.transform = "rotate(-29deg)";
            noseRemoved.style.color = "#189918";
            leftRemoved.style.color = "#189918";
            rightRemoved.style.color = "#189918";
            removed__nose.style.transform = "rotate(-134deg)";
            removed__left.style.transform = "rotate(-134deg)";
            removed__right.style.transform = "rotate(-134deg)";
            unsafeCircle.style.backgroundColor = "#750202";
            unsafeCircle.style.opacity = ".3";
            red.style.backgroundColor = "#750202";
        }));
        const customRange = document.querySelector(".circle-switch__first");
        const customRange1 = document.querySelector(".circle-switch__second");
        const markers = [ 0, 15, 24, 50, 100 ];
        function handleCustomRangeInput(element) {
            const currentValue = parseInt(element.value);
            const closestValue = markers.reduce(((prev, curr) => Math.abs(curr - currentValue) < Math.abs(prev - currentValue) ? curr : prev));
            element.value = closestValue;
            if (24 === closestValue) {
                document.querySelector(".scale__h2").style.display = "block";
                rud.style.transform = "rotate(-134deg)";
                rud2.style.transform = "rotate(-134deg)";
                audibleAlarm.style.color = "#000";
            } else if (15 === closestValue) {
                document.querySelector(".scale__h2").style.display = "block";
                rud.style.transform = "rotate(-180deg)";
                rud2.style.transform = "rotate(-180deg)";
                audibleAlarm.style.color = "red";
            } else {
                document.querySelector(".scale__h2").style.display = "none";
                rud.style.transform = "rotate(-134deg)";
                rud2.style.transform = "rotate(-134deg)";
                audibleAlarm.style.color = "#000";
            }
            const percentage = closestValue + "%";
            barScalePerc.style.height = percentage;
        }
        customRange.addEventListener("input", (() => {
            handleCustomRangeInput(customRange);
            customRange1.value = customRange.value;
        }));
        customRange1.addEventListener("input", (() => {
            handleCustomRangeInput(customRange1);
            customRange.value = customRange1.value;
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();