
console.log("Welcome to Spotify");


// initialize Variables

let songIndex = 0;
let audioElement = new Audio ("1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById('myProgressBar')

    let songs = [
        { songName: "Salame ishq", filePath: "1.mp3", coverPath: "cover1.jpg" },
        { songName: "Midnight Memories", filePath: "2.mp3", coverPath: "cover2.jpg" },
        { songName: "Lost in Your Echo", filePath: "3.mp3", coverPath: "cover3.jpg" },
        { songName: "Neon Heartbeats", filePath: "4.mp3", coverPath: "cover4.jpg" },
        { songName: "Until the Stars Fade", filePath: "5.mp3", coverPath: "cover5.jpg" },
        { songName: "Voices in the Rain", filePath: "6.mp3", coverPath: "cover6.jpg" }
    ];

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click' ,()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

// Listen to events

audioElement.addEventListener("timeupdate",()=>{
    console.log ("timeupdate");
})






// console.log("Welcome to Spotify");


// // initialize Variables

// let songIndex = 0;
// let audioElement = new Audio ("songs/1.mp3")
// let masterPlay = document.getElementById("masterPlay")
// let myProgressBar = document.getElementById('myProgressBar')


// let songs = [
//     {songName:"Salame ishq", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
//     {songName:"Salame ishq", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
//     {songName:"Salame ishq", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
//     {songName:"Salame ishq", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
//     {songName:"Salame ishq", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
//     {songName:"Salame ishq", filePath: "songs/1.mp3", coverPath: "cover1.jpg"}
// ]

// // audioElement.play();

// // Handle play/pause click
// masterPlay.addEventListener('click' ,()=> {
//     if (audioElement.paused || audioElement.currentTime<= 0){
//         audioElement.play()
//     }
// })

// // Listen to events

// masterPlay.addEventListener("timeupdate",() => {
//     console.log ("timeupdate")

// })




