/**
 * Created by Administrator on 2017/1/9.
 */
~function () {
    var step = 0;
    var oBox = document.getElementById("box");
    var oWrap = oBox.getElementsByClassName("wrap")[0];
    var aList = oBox.getElementsByClassName("list");
    var aLi = document.getElementById("ul").getElementsByTagName("li");
    var oChoose = document.getElementById("choose");
    var aRadioBtn = document.getElementsByClassName("radioBtn");
    var oBtnLeft = document.getElementById("box").getElementsByClassName("to-left")[0];
    var oBtnRight = document.getElementById("box").getElementsByClassName("to-right")[0];
    var aA = document.getElementById("nav").getElementsByTagName("a");
    oWrap.innerHTML += oWrap.innerHTML;
    oWrap.style.width =  (aList.length+1)*aList[0].offsetWidth+"px";
    window.onresize = function () {
        header.showNav();
        oWrap.style.width =  (aList.length+1)*aList[0].offsetWidth+"px";
    }
    var header = {
        init:function () {
            this.showNav();
            oBtnLeft.onclick=header.move;
            oBtnRight.onclick=header.move;
            if(isPhone(760)){
                for(var j = 0 ; j < aList.length; j++){
                    aList[j].getElementsByTagName("p")[0].style.visibility="visible";
                    aList[j].getElementsByTagName("p")[1].style.visibility="visible";
                }

            }
            for(var i = 0 ; i < aRadioBtn.length; i++){
                if(utils.lastChild(utils.firstChild(aRadioBtn[i])).checked!=true){
                    utils.firstChild(utils.firstChild(aRadioBtn[i])).style.display="none";
                }
                aRadioBtn[i].onclick=header.formRadio;
            }
            for(var k = 0 ; k < aA.length; k++){
                aA[k].onclick=header.changColor;
            }
            for(var l = 0 ; l < aLi.length; l++){
                aLi[l].setAttribute("flag","false");
                aLi[2].setAttribute("flag","true");
                aLi[l].onclick = header.changeBg;
                aLi[l].onmouseover = header.addBg;
                aLi[l].onmouseout = header.removeBg
            }
        },
        isPhone : function (n,m) {
            var clientW = document.documentElement.clientWidth || document.body.clientWidth;
            if((n<=760&&clientW<n&&m==undefined)||(clientW>=n&&clientW<=m)||(clientW>n&&n>=1220)){
                return true;
            }else {
                return false;
            }
        },
        showNav:function () {
            var showSpan = document.getElementsByClassName("show-nav")[0];
            var showDiv = document.getElementsByClassName("nav")[0];
            if(isPhone("760")){
                var bOk = true;
                showSpan.onclick = function () {
                    if(bOk){
                        showDiv.style.display="block";
                    }else {
                        showDiv.style.display = "none";
                    }
                    bOk = !bOk;
                }
            }
        },
        move:function () {
            if(isPhone(1220)){
              header.moveC.call(this,170);
           };
            if(isPhone(1000,1220)){

                header.moveC.call(this,140);
            }
            if(isPhone(760,1000))   {

                header.moveC.call(this,108);
            };
            if(isPhone(760)){

                header.moveC.call(this,300);
            };
        },
        moveC:function (wid) {

            if(this.className=="to-left"){
                if(wid!=300) {
                    header.textHidden();
                    header.textAppear();
                }
                    step++;
                if(step===8){
                    oWrap.style.left="0";
                    step=1;
                    animate(oWrap,{left:-step*wid},100);
                    return;
                }

                animate(oWrap,{left:-step*wid},100)

            }else if(this.className=="to-right"){
                if(wid!=300){
                    console.log("ok")
                    header.textHidden();
                    header.textAppearR();
                }
                if(step<=0){
                    step=6;
                    utils.css(oWrap,'left',-7*wid);
                    animate(oWrap,{left:-step*wid},100)
                    return;
                }
                step--;
                animate(oWrap,{left:-step*wid},100)

            };
        },
        textHidden:function () {

            for(var i = 0 ; i < aList.length; i++){
                aList[i].getElementsByTagName("p")[0].style.visibility="hidden";
                aList[i].getElementsByTagName("p")[1].style.visibility="hidden";
            }

        },
        textAppear:function () {
                if(step===7 ){
                    aList[4].getElementsByTagName("p")[0].style.visibility="visible";
                    aList[4].getElementsByTagName("p")[1].style.visibility="visible";
                }
                var cur = step+4;
                aList[cur].getElementsByTagName("p")[0].style.visibility="visible";
                aList[cur].getElementsByTagName("p")[1].style.visibility="visible";
        },
        textAppearR:function () {
            if(step===0){
                aList[9].getElementsByTagName("p")[0].style.visibility = "visible";
                aList[9].getElementsByTagName("p")[1].style.visibility = "visible";
            }
            var cur1 = step+2 ;
            aList[cur1].getElementsByTagName("p")[0].style.visibility = "visible";
            aList[cur1].getElementsByTagName("p")[1].style.visibility = "visible";
        },
        formRadio:function () {
            var inp = utils.lastChild(utils.firstChild(this));
            var aParDiv = this.parentNode;
            var aLabel = aParDiv.getElementsByTagName("label");
            for(var i = 0 ; i < aLabel.length ; i++){
                    utils.firstChild(utils.firstChild(aLabel[i])).style.display="none";
            }
            utils.firstChild(utils.firstChild(this)).style.display="block";
            inp.checked=true;
        },
        changColor:function () {
            console.log(this)
            for(var i = 0 ; i < aA.length; i++){
                aA[i].className="";
            }
            this.className="active";
        },
        changeBg:function () {
            for(var i = 0 ; i < aLi.length; i++){
                utils.removeClass(aLi[i],"on");
                utils.removeClass(aLi[i],"active");
                aLi[i].setAttribute("flag","false");
            }
            utils.addClass(this,"on");
            utils.addClass(this,"active");
            oChoose.value = this.getElementsByTagName("p")[0].innerHTML;
            console.log(oChoose.value)
            this.setAttribute("flag","true");
        },
        addBg:function () {
            if(this.getAttribute("flag")=="true"){return}
            for(var i = 0 ; i < aLi.length; i++){
                if(aLi[i].getAttribute("flag")!="true"){
                    utils.removeClass(aLi[i],"on");
                    utils.addClass(aLi[i],"active");

                }
            }
            utils.addClass(this,"on");
            utils.addClass(this,"active");


        },
        removeBg:function () {
            if(this.getAttribute("flag")=="true"){return};
            utils.removeClass(this,"on");
            utils.addClass(this,"active");


        }

    }
    this.isPhone = header.isPhone;
    header.init()
}();
