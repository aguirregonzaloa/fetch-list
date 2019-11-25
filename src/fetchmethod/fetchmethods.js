import url from './Gobalurl';

// Get all item from the API
export const getTodolist = async() => {

	const response = await fetch(url);

	const data = await response.json();
	
	return data;

} 

// Post new item to the API
export const postTodolist = async (post) =>{

		const response = await fetch(url, {
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(post), // data can be `string` or {object}!
		  headers:{
		    'Content-Type': 'application/json'
		  }
		});

		const data = await response.json();

		return data;
}

// Delete a item from the API

export const deleteTodolist = async(id) =>{
	const response = await fetch(url+'/'+id,{
		  method: 'DELETE',
		  headers:{
		    'Content-Type': 'application/json'
		  }
		});

	const data = await response.json();

	return data;

}