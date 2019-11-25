
class Heading {
	render(){
		const heading = document.createElement('h1');
		heading.innerHTML = 'List To Do is connected with a Laravel Api Restful';

		const body = document.querySelector('body');
		body.appendChild(heading);
	}
}

export default Heading;