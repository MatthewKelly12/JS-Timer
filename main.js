let countdown;
const timerDisplay = document.querySelector("#timer-display");

function timer(seconds)
{
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);

	countdown = setInterval(()=>
		{
			const secondsLeft = Math.round((then - Date.now())/1000);

			if (secondsLeft < 0)
			{
				clearInterval(countdown);
				return;
			}
			displayTimeLeft(secondsLeft);
		},1000
	)
}

function displayTimeLeft(seconds)
{
	const minutes = Math.floor(seconds/60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0':''}${remainderSeconds}`;
	timerDisplay.textContent = display;
}

timer(80);