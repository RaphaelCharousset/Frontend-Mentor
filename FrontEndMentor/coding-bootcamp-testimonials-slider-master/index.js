let tanyaContent1 = document.getElementsByClassName('tanya-content')[0];
let tanyaContent2 = document.getElementsByClassName('tanya-content')[1];

let johnContent1 = document.getElementsByClassName('john-content')[0];
let johnContent2 = document.getElementsByClassName('john-content')[1];


let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');



const changeProfile = () => {
    if (johnContent1.classList.contains('invisible')) {
        johnContent1.classList.remove('fade-out')
        johnContent2.classList.remove('fade-out')
        tanyaContent1.classList.add('fade-out')
        tanyaContent2.classList.add('fade-out')
        tanyaContent1.classList.remove('fade-in')
        tanyaContent2.classList.remove('fade-in')
        setTimeout(() => {
            tanyaContent1.classList.add('invisible')
            tanyaContent2.classList.add('invisible') 
            johnContent1.classList.replace('invisible', 'fade-in')
            johnContent2.classList.replace('invisible', 'fade-in')   
        }, 800);


    }   else if (tanyaContent1.classList.contains('invisible')) {
        tanyaContent1.classList.remove('fade-out')
        tanyaContent2.classList.remove('fade-out')
        johnContent1.classList.add('fade-out')
        johnContent2.classList.add('fade-out')
        johnContent1.classList.remove('fade-in')
        johnContent2.classList.remove('fade-in')
        setTimeout(() => {
            johnContent1.classList.add('invisible')
            johnContent2.classList.add('invisible') 
            tanyaContent1.classList.replace('invisible', 'fade-in')
            tanyaContent2.classList.replace('invisible', 'fade-in')   
        }, 800);
    }
}

prevBtn.onclick = changeProfile;
nextBtn.onclick = changeProfile;
