

var functions = function(){
	
	var that= this,
		columns = [20, 35, 45];

	that.shuffleArray = function(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	};

	that.randomize = function(){
		var gallerySelector = ".random-gallery",
			gallery = $(gallerySelector),
		 	galleryElements= $(gallerySelector + " > div"),
			galleryWidth = gallery.width(),
			elementsAmount = gallery.length,
			aux = 0,
			columnsOrder = that.shuffleArray(columns);
			
			galleryElements.each(function(index, item){
				
				var width = columns[aux];
				

				$(item).width(((galleryWidth) * (width / 100)) - 22); //22 es el padding + margenes + bordes
				/*
				if($(item).prev().width() === $(item).width()){
					$(item).height(($(item).height() / 2) - 22);
					$(item).prev().height($(item).height());
				}*/
				
				aux++;
				
				if(aux === 3){
					columnsOrder = that.shuffleArray(columns);		
					aux = 0;
				}

			});
	}

}

$(this).ready(function(){
	var funciones = new functions();
	funciones.randomize();
});
