const express = require('express');
const pSettle = require('p-settle');

//Course API
const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
//END of Course API

const app = express();
const port = 9292;

app.listen(port, () => console.log(`Listening on port ${port}`));

//BASIC API EXAMPLE
app.get('/api/populate', (req, res) => {
	console.log("API CALL POPULATE");

	test_function(res);
});

async function test_function(res){
	var brands = await getBrands();
	var models = brands.map(brand => getModels(brand));
	var obj = [];
	var compteur = 0;
	pSettle(models).then(result=>{
		result.forEach(function(elem){
			if(elem.isFulfilled && elem.value.length > 0){
				obj.push(elem.value);
				console.log(elem.value);
				compteur++;
			}
			
		});
		res.send(obj);
		console.log("Nomber of objects : " + compteur);
	})
	
	//res.send(obj);
}

async function get_brands (res) {
	var brands = await getBrands();
  	res.send( brands );
}

async function get_models () {
  const models = await getModels('AUDI');
  console.log(models);
  return models;
}