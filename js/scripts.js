var add, list, element, listitems, i;
add = document.getElementById('addElem');
list = document.getElementById('list');

add.addEventListener('click', function(e){
	element = document.createElement('li');
	element.innerHTML = 'item';	
	function updateCount(){
		listitems = list.getElementByTagName('li').length;
	} 
	list.appendChild(element);
})