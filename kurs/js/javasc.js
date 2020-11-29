/*HEADER_MENU*/
function headerMenu(){
    const obj=document.getElementsByClassName('header_burger')[0];
    const obj1=document.getElementsByClassName('header_menu')[0];
    obj1.style.top='-100%';
    obj.onclick=function (){
        obj.classList.toggle('active');
        if(obj1.style.top==='-100%'){
            document.querySelector("body").style.overflow='hidden';
            obj1.style.top='0';
        }else if (obj1.style.top==='0px'){
            document.querySelector("body").style.overflow='auto';
            obj1.style.top='-100%';
        }
    }
}
headerMenu();

/*GAME_SECTION*/
function turnOnVideo(){
    const button=document.querySelectorAll('.game_section .button1');
    const video_drop=document.querySelector('.video-drop');
    const x=document.querySelector('.fas.fa-times');
    video_drop.style.top='-100%';
    const iframe=document.querySelector('iframe');
    for (let i=0;i<button.length;i++) doOnClick(button[i],i);

    function doOnClick(b,i){
        b.onclick=function (){
            if(b===button[0]){
                iframe.src='https://www.youtube.com/embed/K4zm30yeHHE';
            }
            if(b===button[1]){
                iframe.src='https://www.youtube.com/embed/u4-FCsiF5x4';
            }
            if(b===button[2]){
                iframe.src='https://www.youtube.com/embed/CJ_GCPaKywg';
            }
            if(b===button[3]){
                iframe.src='https://www.youtube.com/embed/QD1pbWCJcKQ';
            }
            if(b===button[4]){
                iframe.src='https://www.youtube.com/embed/kSAvzeopPC8';
            }
            if(video_drop.style.top==='-100%'){
                document.querySelector("body").style.overflow='hidden';
                video_drop.style.top='0';
            }
        }
    }
    x.onclick=function (){
        if(video_drop.style.top==='0px'){
            document.querySelector("body").style.overflow='auto';
            video_drop.style.top='-100%';
            document.querySelector('iframe').src='';
        }
}
}
turnOnVideo();
/*Slider*/

