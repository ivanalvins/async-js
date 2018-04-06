document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		const dragStart = (event) => {
			event.dataTransfer.setData('text/plain', event.target.id);
			console.log('dragStart', event);
		}

		const dragElement = document.getElementById('drag-element');
		dragElement.addEventListener('dragstart' , dragstart);

		const dragOver = (event) => {}
	}
}