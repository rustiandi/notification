function notification(target, time) {
	var a = "#" + target;
	$(".notification-box").removeClass("show");
	setTimeout(() => {
		$(a).addClass("show");
	}, 300);
	if (time) {
		time = time + 300;
		setTimeout(() => {
			$(".notification-box").removeClass("show");
		}, time);
	}
};

$(".notification-box .close-button").click(function (event) {
	event.preventDefault();
	$(".notification-box.show").removeClass("show");
});

$(".notification-box.tap-to-close .notification-dialog").click(function () {
	$(".notification-box.show").removeClass("show");
});

function invitationNotif(couple, subtitle, text) {
	var html
	html = '<div class="notification-dialog ios-style">' +
		'<div class="notification-header">' +
		'<div class="in">' +
		'<img src="https://rustiandi.github.io/notification/logopp.png" alt="image" class="imaged w24 rounded">' +
		'<strong>' + couple + '</strong>' +
		'</div>' +
		'</div>' +
		'<div class="notification-content">' +
		'<div class="in" id="notificationText">' +
		'<h3 class="subtitle">' + subtitle + '</h3>' +
		'<div class="text">' + text + '</div>' +
		'</div>' +
		'</div>' +
		'</div>';
	$('#notification').html(html);
	notification('notification', 5000);
}

//Show input error messages
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-notif error mb-3';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//show success colour
function showSucces(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-notif mb-3';
}
