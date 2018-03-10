function getDataPromise(URL){
				return new Promise((resolve,reject)=> {
					var xhr = new XMLHttpRequest()

					xhr.addEventListener('load', function(){
						if(xhr.status == 200){
							resolve(xhr.response)
						}else{
							reject(Error(xhr.statusText))
						}
					})

					xhr.open('GET',URL)
					xhr.send()
				})
			}

var categories = document.querySelectorAll('div.category')
var items = document.querySelectorAll('div.item')
getDataPromise('http://jservice.io/api/categories?count=5&offset=10').then(function(res){
	var data = JSON.parse(res)
	var i, len
	for(i = 0, len = categories.length; i < len ; ++i){
		categories[i].innerText = data[i].title
}
})
var i, len
for(i = 0, len = items.length; i < len ; ++i){
	items[i].addEventListener('focus',function(evt){
		console.log('clicked')
	})
}