

class Message {
	msg;
	constructor(classname){
		this.msg = document.createElement('div');
		this.msg.classList.add('message');
		this.msg.classList.add(classname);
		const body = document.querySelector('body');
		body.appendChild(this.msg);
		this.hide();
	};

	render(text){		
		this.msg.style.display = "block";
		this.msg.innerText = text;
	}

	timershow(){
		setTimeout(()=>{
			this.msg.style.display = "none";
		},2000);
	}

	hide(){
		this.msg.style.display = "none";
	}
}

export default Message;