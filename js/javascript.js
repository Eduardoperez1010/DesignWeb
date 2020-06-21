$(document).ready(function(){
			// ponemos el codigoo javascript que utiliza JQuery		
			// Configurar el inicio
			configurarInicio();
			$('.myicon').click(function(e){
				$('#navbar ul').toggleClass('list_sm');
			})
			function configurarInicio(){
				var urlPath = window.location.pathname;				
				$('nav a').each(function(){					
					var href = $(this).attr('href');
					console.log(href);					
					var indice =urlPath.length - href.length;		
					if(urlPath.substring(indice) === href){						
						$(this).closest('li').addClass('active');	
						console.log('match');
					}
				})
			}
		})	