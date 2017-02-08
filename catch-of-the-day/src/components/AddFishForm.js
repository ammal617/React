import React from 'react';


class AddFishForm extends React.Component{
	
	createFish(event){
		event.preventDefault();
		console.log('make some Fish!')
		const fish ={
			name: this.name.value,
			Price: this.Price.value,
			status: this.status.value,
			Desc: this.Desc.value,
			Image: this.Image.value, 
		}
		this.props.addFish(fish);
		this.fishForm.reset();
	}
	render(){
	 return (
	 	<form ref={(input) => this.fishForm = input} className= "fish-edit" onSubmit={(e)=> this.createFish(e)}>
	 	<input ref={(input) => this.name = input} type="text" placeholder="Fish Name"/>
	 	<input ref={(input) => this.Price = input} type="text" placeholder="Fish Price"/>
	 	<select ref={(input) => this.select = input}>
	 		<option value="available">Fresh</option>
	 		<option value="unavailable">Sold Out</option>
	 	</select>
	 	<textarea ref={(input) => this.Desc=input} placeholder="Fish Desc"> </textarea>
	 	<input ref={(input) => this.Image=input} type="text" placeholder="Fish Image"/>
	 	<button type= "submit">+ Add Item</button>
	 	</form>
	 	)
	}
}

export default AddFishForm;
