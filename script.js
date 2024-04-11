let pass=document.getElementById("password");
let msg=document.getElementById("message");
let strength=document.getElementById("strength");
let img=document.getElementById("img");
let box=document.getElementById("box");
let check=document.getElementById("check");








pass.addEventListener("input",()=>{


    if(pass.value.length>0){
msg.style.display="block";
    }
    else{
        msg.style.display="none"; 
    }
    if(pass.value.length <= 4){
strength.innerHTML="Weak"
pass.style.borderColor="#ff5925";
msg.style.color="#ff5925";
box.style.borderColor="#ff5925"
img.style.borderColor="#ff5925";
check.style.color="#ff5925";

    }
    else if(pass.value.length <= 8 ){
        strength.innerHTML="medium"
        pass.style.borderColor="#ffb703";
        msg.style.color="#ffb703";

        img.style.borderColor="#ffb703";
        box.style.borderColor="#ffb703";
        check.style.color="#ffb703";
        
    }
    else if(pass.value.length <= 10 ){
        strength.innerHTML="Strong"
        pass.style.borderColor="#06d6a0";
        msg.style.color="#06d6a0";
        img.style.borderColor="#06d6a0";
        box.style.borderColor="#06d6a0";
        check.style.color="#06d6a0";
    }
})