/**
 * Created by Administrator on 2017/2/16.
 */
/**
 * Created by Administrator on 2017/2/16.
 */
~function () {
    var aA = document.getElementById("nav").getElementsByTagName("a");
    var showSpan = document.getElementsByClassName("show-nav")[0];
    var showDiv = document.getElementsByClassName("nav")[0];
    var aDiv  = document.getElementsByClassName("textTitle");
    window.onresize=function () {
        header.showNav();

    }
    var header = {

        init:function () {
            this.showNav();
            for(var k = 0 ; k < aA.length; k++){
                aA[k].onclick=header.changColor;
            };

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
        changColor:function () {
            for(var i = 0 ; i < aA.length; i++){
                aA[i].className="";
            }
            this.className="active";
        }
    }
    this.isPhone = header.isPhone;
    header.init()
}();