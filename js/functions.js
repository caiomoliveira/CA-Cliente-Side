


/*------------BOX SHADOW  HEADER-------------*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header');
    // When the scroll be 200 wil add a class scroll header in a tag header
    if(this.scrollY >= 200) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*------------SHOW SCROLL TOP------------- */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll be more than 560 will be add a class scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


/*---------------------------------------------*/
checkpassword = function(validade){
    var str = document.getElementById().value;
    if(str.lenght < 8)
    {
        document.getElementById("demo").innerHTML= "Password lenght most be 8 char";
        document.getElementById("demo").style.color="Red";
        return("too_short");

    } else if (str.search(/[0-9]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 numeric value most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_number");
    }
    else if (str.search(/[a-z]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 letter  most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_letter");
    }
    else if (str.search(/[A-Z]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 Upper case letter  most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_Uletter");
    }
    else if (str.search(/[!\@\#\$\%\¨\&\*\-\+\.\;\,\:]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 special char  most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_Schar");
    }
        document.getElementById("demo").innerHTML= "Successful";
        document.getElementById("demo").style.color="Green";
        return("ok");
    
}

