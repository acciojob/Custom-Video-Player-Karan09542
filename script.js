/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){
	if(video.paused){
		video.play()
		toggle.textContent = "❚ ❚"
	}else{
		video.pause()
		toggle.textContent = "►"
	} 
}
toggle.addEventListener("click", togglePlay)
video.addEventListener("timeupdate",()=>{
	const percent = (video.currentTime/ video.duration)*100;
	progressBar.style.flexBasis = `${percent}%`
})
Array.from(ranges).forEach(range => {
	range.addEventListener("input", (ele)=>{
		if(ele.target.name === "volume"){
			video.volume = parseFloat(range.value)
		}else if( ele.target.name === "playbackRate"){
			video.playbackRate = parseFloat(range.value)
		}
	})
})
Array.from(skipButtons).forEach(buttons => {
	buttons.addEventListener("click", (button)=>{
		console.log(button.target.dataset)
		const skip = button.target.dataset.skip;
		video.currentTime += parseFloat(skip)
	})
})
