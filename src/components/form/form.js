
class Form{
	form;
	render(){
		this.form = document.createElement('form');
		this.form.classList.add("form-submit");
		
		const label = document.createElement('label');
		label.innerText = 'Add new item: ';
		this.form.appendChild(label);

		const input = document.createElement('input');
		input.setAttribute('type','text');
		input.setAttribute('name','additem');

		this.form.appendChild(input);

		const body = document.querySelector('body');
		body.appendChild(this.form);
	}
	getForm(){
		return this.form;
	}
}

export default Form;