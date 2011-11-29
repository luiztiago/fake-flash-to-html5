(function($){

	var methods = {
		init : function( options ) {

			return this.each(function(){

				var w = $(this).attr('width'),
					h = $(this).attr('height'),
					offset = $(this).offset(),
					fakehtml5 = $('<div/>');
					
				fakehtml5.addClass('fakehtml5')
						 .css({width: w, height: h, left: offset.left, top: offset.top});
						
				$('body').append(fakehtml5);
				
			});
		}
	};

	$.fn.fakehtml5 = function( method ) {

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.fakehtml5' );
		}    

	};

})( jQuery );

// based from default jquery plugin authoring