/**
 * Created by Administrator on 2017/1/15.
 */
~function () {
    var aA = document.getElementById("nav").getElementsByTagName("a");
    var aRadioBtn = document.getElementsByClassName("radioBtn");
    var oChoose = document.getElementsByName("choose")[0];
    var aLi = document.getElementById("form-nav").getElementsByTagName("li");
    window.onresize=function () {
        header.showNav();
    }
    var header = {
        init:function () {
            this.showNav();
            for(var i = 0 ; i < aRadioBtn.length; i++){
                if(utils.lastChild(utils.firstChild(aRadioBtn[i])).checked!=true){
                    utils.firstChild(utils.firstChild(aRadioBtn[i])).style.display="none";
                }
                aRadioBtn[i].onclick=header.formRadio;
            }
            for(var k = 0 ; k < aA.length; k++){
                aA[k].onclick=header.changColor;
            };
            for(var j = 0 ; j < aLi.length; j++){
                aLi[j].setAttribute("flag","false");
                aLi[0].setAttribute("flag","true");
                aLi[j].onmouseover = header.addBg;
                aLi[j].onmouseout = header.removeBg;
                aLi[j].onclick = header.changeBg;
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
            for(var i = 0 ; i < aA.length; i++){
                aA[i].className="";
            }
            this.className="active";
        },
        changeBg:function () {
            for(var i = 0 ; i < aLi.length; i++){
                utils.removeClass(aLi[i],"on");
                aLi[i].setAttribute("flag","false");
            }
            utils.addClass(this,"on");
            this.setAttribute("flag","true");
            oChoose.value=this.innerHTML;
            console.log(oChoose.value);
        },
        addBg:function () {
            if(this.getAttribute("flag")=="true"){return}
            for(var i = 0 ; i < aLi.length; i++){
                if(aLi[i].getAttribute("flag")!="true"){
                    utils.removeClass(aLi[i],"on");
                }
            }
            utils.addClass(this,"on");

        },
        removeBg:function () {
            if(this.getAttribute("flag")=="true"){return};
            utils.removeClass(this,"on");

        }
    }
    this.isPhone = header.isPhone;
    header.init()
}();

