const words = ["Web Developer", "UI/UX Designer", "Freelancer"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 300);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};


(function(document) {
	var bars = [].slice.call(document.querySelectorAll('.bar-inner'));
	bars.map(function(bar, index) {
	  setTimeout(function() {
		  bar.style.width = bar.dataset.percent;
	  }, index * 1000);
	});
  })(document)