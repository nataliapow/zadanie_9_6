var add, list, element, listitems;
add = document.getElementById('addElem');
list = document.getElementById('list');
listitems = list.getElementsByTagName('li').length;

add.addEventListener('click', function(){
	element = document.createElement('li');
	element.innerHTML = 'item' + listitems.length;	
	list.appendChild(element);
});