const menu = document.querySelectorAll('.sidebar a')
const period = document.querySelectorAll('.period a')
const tchView = document.querySelector('.tch-card')
const sdcchView = document.querySelector('.sdcch-card')
const callDropView = document.querySelector('.callDrop-card')
const callConnectView = document.querySelector('.callConnect-card')

const closeMode = document.querySelector('.closeBtn')
const mainModal = document.querySelector('.modal-position')
const modalTCH = document.querySelector('.tch-modal')
const modalSDCCH = document.querySelector('.sdcch-modal')
const modalCALLdrop = document.querySelector('.callDrop-modal')
const modalCALLconnect = document.querySelector('.callConnect-modal')


period.forEach((item) => item.addEventListener('click', activeSelection));
menu.forEach((item) => item.addEventListener('click', activeMenu));

tchView.addEventListener('click', openTCHmodal)
sdcchView.addEventListener('click', openSDCCHmodal)
callDropView.addEventListener('click', openCALLDROPmodal)
callConnectView.addEventListener('click', openCALLCONNECTmodal)
window.addEventListener('click',outsideClick)
closeMode.addEventListener('click',closeModal)


function activeSelection(){
    period.forEach((item) => item.classList.remove('select-primary'));
    this.classList.add('select-primary');
}

function activeMenu(){
    menu.forEach((item) => item.classList.remove('btn-primary'));
    this.classList.add('btn-primary');
}



function closeModal(){
    mainModal.style.zIndex = '-10'
    modalTCH.style.display = 'none'
    modalSDCCH.style.display = 'none'
    modalCALLdrop.style.display = 'none'
    modalCALLconnect.style.display = 'none'
}

function outsideClick(e){
    if (e.target == mainModal) {
        closeModal()
    }
}

function openTCHmodal(){
    mainModal.style.zIndex = '10'
    modalTCH.style.display = 'block'
}

function openSDCCHmodal(){
    mainModal.style.zIndex = '10'
    modalSDCCH.style.display = 'block'
}

function openCALLDROPmodal(){
    mainModal.style.zIndex = '10'
    modalCALLdrop.style.display = 'block'
}

function openCALLCONNECTmodal(){
    mainModal.style.zIndex = '10'
    modalCALLconnect.style.display = 'block'
}
