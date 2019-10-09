
// var newTxt = get ElementsbyClassName('myInput');



//修改页面元素

var newBox=document.getElementById('myBox');

newBox.style.border= '1px solid blue';
newBox.style.borderRadius ="10px solid blue";
newBox.style.lineHeight='40px';


 

var newBtn = document.getElementById('myButton');

newBtn.onclick = function(){
	// newBox.innerHTML += 'Hello';

	var newP = document.createElement('p');
	newP.innerHTML='Hello!';

	newBox.appendChild(newP);
}


