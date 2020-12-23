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
        let arr=['0','1','2','3']
        let i=0
        let e=document.querySelector('body > div.accessories_sector > div:nth-child(2) > div > img');
        function nextSlides () {
            i++         
            if(i>arr.length-1){
                i=0
            }
            e.src='img/DUALSHOCK4_'+i+'.png'
        }
        function prevSlides (){
            i--
            if(i<0){
                i=arr.length-1
            }
            e.src='img/DUALSHOCK4_'+i+'.png'
        }

/*ANIMATION*/
let gameSections=document.querySelectorAll('.ani')
if(gameSections.length>0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(params){
        for (let index=0;index<gameSections.length;index++){
            const animItem=gameSections[index];
            const animItemHeight=animItem.offsetHeight;
            const animItemOffset=offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - animItemPoint / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('ani_active');
            }
        }
    }
    function offset(el){
        const rect=el.getBoundingClientRect(),
            scrollLeft=window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop=window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}