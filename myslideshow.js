var pictNo=1;
function tugiBtnClick(){
	pictNo++;
	document.getElementById('no').innerHTML=pictNo+'枚目';
	document.getElementById('pict').src='myimg/pic'+pictNo+'.jpg';
	if(pictNo===8){
		document.getElementById('no').className='no2';
		document.getElementById('tugi_btn').disabled='disabled';
	}else if(pictNo===2){
		document.getElementById('mae_btn').disabled=false;
	}
}
function maeBtnClick(){
	pictNo--;
	document.getElementById('no').innerHTML=pictNo+'枚目';
	document.getElementById('pict').src='myimg/pic'+pictNo+'.jpg';
	if(pictNo===1){
		document.getElementById('mae_btn').disabled='disabled';
	}else if(pictNo===7){
		document.getElementById('tugi_btn').disabled=false;
		document.getElementById('no').className='no1';
	}
}

