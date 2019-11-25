// Components
import Form from './components/form/form';
import List from './components/list/list';
import Heading from './components/heading/heading';
import Message from './components/message/message';
//---------------//

//Style index
import './index.scss';

import {getTodolist, postTodolist, deleteTodolist} from'./fetchmethod/fetchmethods';

const heading = new Heading();
heading.render();

const form = new Form();
form.render();

const msgSuccess = new Message('success');
const msgLoading = new Message('loading');
msgLoading.render('Loading...');

const msgError = new Message('danger');


const list = new List();

//Get all item form the API Rest
 // console.log(getTodolist());
getTodolist()
.then((data) =>{
 	msgLoading.hide();
	const mylist = data.data;
	if(mylist.length>0){

		msgSuccess.render('Loaded List correctly!!!');
		msgSuccess.timershow();
		list.render(mylist);
	}else{
		 msgError.render('the List is empty!!!',false);
	}
	
})
.catch(error =>{ msgError.render('Cannot connect to the server',false); msgLoading.hide();});


//This event submit a new item to the API Rest
const eventform = form.getForm();

eventform.addEventListener('submit', e =>{
	e.preventDefault();
	const msg = eventform.additem.value.trim();
	const sendjson = {message: msg.toLowerCase()};

	postTodolist(sendjson)
		.then((data)=>{
			msgSuccess.render('You sent the message correctly!!!');
			msgSuccess.timershow();
			return getTodolist()
		})
		.then((data) =>{
		const mylist = data.data;
		msgError.hide();
		list.render(mylist);
		})
		.catch(error =>{msgError.render(error,false);});
		
		eventform.reset();

});

//Delete an item from the API Rest
const uldom = list.getUl();
 var clickdisable = false;

if(!clickdisable)
uldom.addEventListener('click', (e)=>{
	//console.log('click on the ul list');
	 if(e.target.classList.contains('delete')){
       const iditem = (e.target.parentElement.value);
        clickdisable = true;
       deleteTodolist(iditem)
       .then((deletedata) => {

       	const data = deletedata.data.message;
       	msgSuccess.render('Message Deleted: '+ data);
       	return getTodolist();

       })
       .then((data) =>{

	       	const mylist = data.data;
	       	if(mylist.length>0){
			msgSuccess.render('Reloaded List');
			msgSuccess.timershow();
			list.render(mylist);
			}else{
			msgError.render('List is empty!!!',false);
			msgSuccess.timershow();
			list.hide();
			}
		 clickdisable = false;

       })
       .catch(error =>{msgError.render(error,false);});

   }

});

