
// Select all main interactive components
const menu = document.querySelectorAll('.sidebar a')
const period = document.querySelectorAll('.period a')
const tchView = document.querySelector('.tch-card')
const sdcchView = document.querySelector('.sdcch-card')
const callDropView = document.querySelector('.callDrop-card')
const callConnectView = document.querySelector('.callConnect-card')

const alarmsPie = document.querySelector('#alarmsCharttrigger')
const degradationPie = document.querySelector('#degradationCharttrigger')

const closeMode = document.querySelectorAll('.closeBtn')
const mainModal = document.querySelector('.modal-position')
const modalTCH = document.querySelector('.tch-modal')
const modalSDCCH = document.querySelector('.sdcch-modal')
const modalCALLdrop = document.querySelector('.callDrop-modal')
const modalCALLconnect = document.querySelector('.callConnect-modal')

const modalAlarms = document.querySelector('.alarms-modal')
const modalDegradation = document.querySelector('.degradation-modal')


// Pass interactive commands to webpage
period.forEach((item) => item.addEventListener('click', activeSelection));
menu.forEach((item) => item.addEventListener('click', activeMenu));

tchView.addEventListener('click', openTCHmodal)
sdcchView.addEventListener('click', openSDCCHmodal)
callDropView.addEventListener('click', openCALLDROPmodal)
callConnectView.addEventListener('click', openCALLCONNECTmodal)
alarmsPie.addEventListener('click', openAlarmsmodal)
degradationPie.addEventListener('click', openDegradationmodal)
window.addEventListener('click',outsideClick)
closeMode.forEach((item) => item.addEventListener('click',closeModal))



// Functions for interactivity and response
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
    modalAlarms.style.display = 'none'
    modalDegradation.style.display = 'none'
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

function openAlarmsmodal(){
    mainModal.style.zIndex = '10'
    modalAlarms.style.display = 'block'
}

function openDegradationmodal(){
    mainModal.style.zIndex = '10'
    modalDegradation.style.display = 'block'
}
