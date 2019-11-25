
//Every instance of List Create just one ul
class List {
	ul;
	constructor(){
		this.ul = document.createElement('ul');
		this.ul.classList.add('listtodo');
		this.ul.style.display = "none";
	};
	render(listarray){
		this.ul.innerHTML = "";
		this.ul.style.display = "block";
		for(let i = 0; i <listarray.length; i++){
			const li = document.createElement('li');
			li.setAttribute('value',listarray[i].id);
			li.classList.add('item');
            const span = document.createElement('span');
           	span.innerText = `${listarray[i].message}`;
           	li.appendChild(span);
           	const icon = document.createElement('i');
           	icon.classList.add('far');
           	icon.classList.add('fa-trash-alt');
           	icon.classList.add('delete');
           	li.appendChild(icon);

			this.ul.appendChild(li);
		}

		const body = document.querySelector('body');
		body.appendChild(this.ul);
	}
	hide(){
		this.ul.style.display = "none";
	}
	getUl(){
		return this.ul;
	}
}

export default List;