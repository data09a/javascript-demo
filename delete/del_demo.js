// 1. get button
// 2. install onclick activity
// 3. after click install the preview box
// 4. create div 
// 5. create input to add in div
// 6. add div to preview box

//get button id
var objBtn = document.getElementById('submit');
// onclick
objBtn.onclick = function(){
	var inputName = document.getElementById('nameInput').value;
	var inputAge = document.getElementById('ageInput').value
	var inputAddr = document.getElementById('addrInput').value;

	// create div

	var objDiv = document.createElement('div');
	objDiv.className = 'infoBox';

    // inside the div create elements div
	var objImg = document.createElement('img');
	objImg.className ='insideImg';
	objImg.src = "images/head1.png";
	objDiv.appendChild(objImg);

	var name = document.createElement('p');
	name.innerHTML = 'Name：'+ inputName;
	objDiv.appendChild(name);

	var age = document.createElement('p');
	age.innerHTML ='Age:' + inputAge;
	objDiv.appendChild(age);

	var address = document.createElement('p');
	address.innerHTML ='Address:' + inputAddr;
	objDiv.appendChild(address);

	var objInput = document.createElement('input');
	objInput.type ='button';
	objInput.className ='deleteBtn';
	objInput.value = 'Click to Delete';
	objInput.onclick = function(){
		console.log(this);

		objPreview.removeChild(this.parentNode);
	}
	objDiv.appendChild(objInput);

	var objPreview = document.getElementById('preview');
	objPreview.appendChild(objDiv);


}

// var oInput = document.createElement('input');
// 	oInput.type = 'button';
// 	oInput.className = 'delBtn';
// 	oInput.value = '点击删除';
// 	oInput.onclick = function(){
// 		//通过关键字this 指向自身
// 		console.log(this);
// 		//通过this找到父级元素 并移除
// 		oSHowBox.removeChild(this.parentNode);
// 	}
// 	oDiv.appendChild(oInput);

// 	var oSHowBox = document.getElementById('showBox');
// 	oSHowBox.appendChild(oDiv);
// }