
//sign uo to sign in btn change format

var sign = document.getElementById("pass_anchor");
sign.onclick=function(){

    var a = document.getElementById("head");
    a.innerHTML="Sign In";
    a.style.transition="0.8s";
    a.setAttribute("class", "animate__animated animate__fadeIn animate__repeat-2");


    var b = document.getElementById("hr");
    b.style.marginLeft="52%";
    b.style.transition="0.8";


    var c = document.getElementById("form_div");
    c.setAttribute("class", "animate__animated animate__fadeInRight");
    c.style.display="none";


    var d = document.getElementById("sign_div");
    d.style.display="block";

}



//sign in to sign up format code function

var back_sign = document.getElementById("pass_anc");
back_sign.onclick=function(){


    var a = document.getElementById("head");
    a.innerHTML="Sign Up";
    a.style.transition="0.8s";
    a.setAttribute("class", "animate__animated animate__fadeIn animate__repeat-2");

    var b = document.getElementById("hr");
    b.style.marginLeft="45%";
    b.style.transition="0.8";


    var c = document.getElementById("form_div");
    c.style.display="block";

    var d = document.getElementById("sign_div");
    d.setAttribute("class", "animate__animated animate__fadeInLeft")
    d.style.display="none";

}



//PASSWORD SHOW BTN CODE FORMAT

var show = document.getElementById("hide_eye");
show.onclick= function(){

    var hide = document.getElementById("hide_eye");
    var shown = document.getElementById("show_eye");
    var pass = document.getElementById("password_bx");

    //if condtion
    if(hide.style.display="none"){

        pass.type="text";
        shown.style.display="block";
    }

}



//PASSWORD HIDE BTN CODE FORMAT

var hide = document.getElementById("show_eye");
hide.onclick= function(){

    var shn = document.getElementById("show_eye");
    var hid = document.getElementById("hide_eye");
    var pass = document.getElementById("password_bx");

    //if condtion
    if(shn.style.display="none"){

        pass.type="password";
        hid.style.display="block";

    }
}





//SIGN IN CODE FOR PASSWORD BTN CODE

var show_in = document.getElementById("hide_ey");
show_in.onclick= function(){

    var ey_hid = document.getElementById("hide_ey");
    var ey_show = document.getElementById("show_ey");
    var ps = document.getElementById("pss");

    //if condtion
    if(ey_hid.style.display="none"){

        ps.type="text";
        ey_show.style.display="block";
    }
}



//SIGN IN CODE FOR PASSWORD HIDE BTN

var hide_in = document.getElementById("show_ey");
hide_in.onclick= function(){

    var ey_hidn = document.getElementById("hide_ey");
    var ey_shown = document.getElementById("show_ey");
    var ps = document.getElementById("pss");


    //if condtion
    if(ey_shown.style.display="none"){

        ps.type="password";
        ey_hidn.style.display="block";

    }

}







//if else condtion format start now form here

var frm_one = document.getElementById("frm_one");
 frm_one.onsubmit= function(){

        var user = [];
        user[0] = document.getElementById("name_bx");
        user[1] = document.getElementById("email_bx");
        user[2] = document.getElementById("password_bx");



        if(user[1].value.match("yahoo.com")){

            window.alert("Mail Not Accepted");
            return false;
        }




        if(user[0].value != "" && user[1].value != "" && user[2] != ""){

                var a = document.getElementById("main");
                a.style.display="none";

                var b = document.getElementById("oth_box");
                b.style.display="block";
                b.setAttribute("class", "animate__animated animate__flipInX animate__repeat-1	")

                var d = document.getElementById("name_bx").value;

                var c = document.getElementById("msg");
                c.innerHTML=d+ " Sign Up Successfully!";

             
                return false;
        }

        

        //if condtion
        if(user[0].value == "" && user[1].value == "" && user[2].value == ""){

            window.alert("Enter Data In Feild");
            return false;
        }

        

        if(user[0].value == ""){

            window.alert("Input One Empty!");
            return false;
        }

        if(user[1].value == ""){

            window.alert("Input Two Empty!");
            return false;
        }

        if(user[2].value == ""){

            window.alert("Input Three Empty!");
            return false;
        }

    }





//sign up retrun page cross click

var cross = document.getElementById("cross");
cross.onclick= function(){

    var a = document.getElementById("main");
    a.style.display="block";
    a.setAttribute("class", "animate__animated animate__flipInX animate__repeat-1");

    var c = document.getElementById("sign_div");
    c.style.display="block"

    var d = document.getElementById("form_div");
    d.style.display="none";


    var b = document.getElementById("oth_box");
    b.style.display="none";

    
}








//sign in if and else condtion format code

var fit = document.getElementById("fit");
fit.onsubmit=function(){


    var data = [];
    data[0]= document.getElementById("email_box");
    data[1]= document.getElementById("pss");



    //if not equal condtion
    if(data[0].value != "" && data[1].value != ""){

        var a = document.getElementById("main");
        a.style.display="none";

        var b = document.getElementById("happ_box");
        b.style.display="block";
        b.setAttribute("class", "animate__animated animate__flipInX animate__repeat-1");

        var c = document.getElementById("email_box").value;

        var d = document.getElementById("pss").value;
        

        var e = document.getElementById("pss_cnfrm");

        e.innerHTML= c + " And Password "+ d  + " Is Sign In Successed.";

        return false;
    
    }



    //if condtion format
    if(data[0].value == "" && data[1].value == ""){

        window.alert("Empty All Feild!");
        return false;
    }

    if(data[0].value == ""){

        window.alert("Feild One Empty!");
        return false;
    }

    if(data[1].value == ""){

        window.alert("Feild Two Empty!");
        return false;
    }


    if(data[0].value.match("yahoo.com")){

        window.alert("Mail Not Accepted");
        return false;
    }


}






//redirect page coding format

var rdrct = document.getElementById("redrict");
rdrct.onclick=function(){

    window.location="https://zishanrayeen.github.io/SZ-Code-editor/";
}



var cnfrm = document.getElementById("rfsh_btn");
cnfrm.onclick= function(){

    window.location="https://zishanrayeen.github.io/SZ-Code-editor/";

}



//developer

console.log("Developed By : Zishan Rayeen SZ");
