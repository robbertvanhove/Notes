$(function () {
	document.addEventListener("deviceready", onDeviceReady, false);

	$('#addTask').click(function () {
		console.log('nieuwe taak toevoegen');
		ToDo.addTask();
	});

	$('ul').on('blur', '.title', function () {
		console.log('taak is aangepast');
		var id = $(this).data('task'); // id = waarde x uit data-task="x"
		var task = $(this).html(); // task = de HTML-code in het teksveld
		ToDo.editTask(id, task);
	});

	$('ul').on('click', '.deleteTask', function () {
		console.log('taak wissen');
		var id = $(this).data('task'); // id = waarde x uit data-task="x"
		ToDo.deleteTask(id);
	});
});

function onDeviceReady() {
	console.log('Device is ready');
	ToDo.init();
};