$(function(){
	document.addEventListener("deviceready", onDeviceReady, false);

	$('#addTask').click(function(){
		console.log('nieuwe taak toevoegen');
	});

	$('ul').on('blur', '.title', function(){
		console.log('taak is aangepast');
	});

	$('ul').on('click', '.deleteTask', function(){
		console.log('taak wissen');
	});
});

function onDeviceReady() {
    console.log('Device is ready');
    ToDo.init();
};