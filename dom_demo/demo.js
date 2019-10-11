// 

var oBtn = document.getElementById('button');
oBtn.onclick = function(){
	var name1 = document.getElementById('name1').value;
	var age1  = document.getElementById('age1').value;
	var address1 = document.getElementById('address1').value;

	var oDiv = document.createElement('div');
	oDiv.className ='student';

	var oImg =document.createElement('img');
	oImg.className ='stuImg';
	oImg.src ='images/head1.png';
	oDiv.appendChild(oImg);

	var oP1 = document.createElement('p');
	oP1.innerHTML = 'Name:' + name1;
	oDiv.appendChild(oP1);

	var oP2 = document.createElement('p');
	oP2.innerHTML = 'Age:' + age1;
	oDiv.appendChild(oP2);

	var oP3 = document.createElement('p');
	oP3.innerHTML = 'Address:' + address1;
	oDiv.appendChild(oP3);


	var oInput = document.createElement('input');
	oInput.type = 'button';
	oInput.className = 'delBtn';
	oInput.value ='click delete';
	oInput.onclick =function(){
		console.log(this);
		oPreview.removeChild(this.parentNode);
	}

	oDiv.appendChild(oInput);


	var oPreview = document.getElementById('preview');
	oPreview.appendChild(oDiv);

}

