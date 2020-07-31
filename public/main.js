let divSelectRoom = document.getElementById("selectRoom")
let divConsultingRoom = document.getElementById("consultingroom")
let inputRoomNumber = document.getElementById("roomNumber")
let btnGoVideo = document.getElementById("goRoom")
let localVideo = document.getElementById("localVideo")
let remoteVideo = document.getElementById("remoteVideo")

let roomNumber, localStream, remoteStream, rtcPeerConnection, isCaller

const iceServer = {
    'iceServer': [
        {'urls':'stun:stun.services.mozilla.com'},
        {'urls':'stun:stun.l.google.com:19302'}
    ] 
}

const streamConstraints = {
    audio:true,
    video: true
}