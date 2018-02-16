currentProducts = []; 

idx = 0;
while (idx<allProducts.length){
	category = allProducts[idx].category;
	if(categories.indexOf(category) == -1){
		categories[categories.length] = category;
		//categories.push(category);
		//categories.unshift(category);
	}
	idx = idx + 1;

}
//то же, используя forEach
//allProducts.foEach(function(product){
//	category = product.category;
//	if(categories.indexOf(category) == -1){
//		categories.push(category);
//}
//});

// то же самое, используя reduce
// categories = allProducts.reduce( function(list.products)){
//	category = product.category;
//	if(list.indexOf(category) == -1){
//	list.push(category);
//}
//return list;
//} []);

//sort category by alphabet
// categories = categories.sort();

function sortProductsByName(product1, product2){
	if (product1.name > product2.name){
		return 1; // p1 after p2 if product1 more p2
	}else if (product2.name > product1.name){
		return -1; // p1 before p2, if p1 low
	}else {
		return 0; // same names dont change
	}
}

function sortProductsByPrice(product1, product2){
	// если 1 дороже, то разность больше 0, 1 будет левее
	return product1.price - product2.price;
}
ui.on('change', function(data){

	if(data.event == 'select category'){
// vivod category of products
//if vivod all of products
if(data.name == 'select category'){
	products = allProducts.slice(); // delaem array iz allproducts

}else{
	//filter products by category
	products = allProducts.filter(function(product){
		return product.category == data.name; // data name - imya vibfrannoy category
	});

}
// sort products by alphabet
products = products.sort(sortProductsByName);

//obnovlyaem spisok productov current category
currentProducts = products;

//prosim interface show product rubriki
ui.showProducts(products);
}else if (data.event == 'add_product'){
	//dobavlen product v corzinu

	product = allProducts.find(function(prod){
		return prod.name == data.name; // data name - imya dobavlennogo producta
		
	})
}
{		
	

}
})
