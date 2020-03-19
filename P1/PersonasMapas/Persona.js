/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Armando Flores Rojas",
				Photo: "armando.jpg",
				Quote: "El mejor legado de un padre a sus hijos es un poco de su tiempo cada día.",
				Age: 56,
				Occupation: "Bróker en la bolsa de Wall Street",
				Family: "Divorciado con dos hijos adolescentes",
				Location: "Nueva York (EEUU)",
				Character: "Le gusta ser un hombre exitoso",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Encontrar a alguien con quien sentirse completo", "Jubilarse y mudarse a Perú para poder ver a sus hijos"],
				Frustrations: ["Tener que vivir lejos de sus hijos por trabajo", "La separación le ha provocado inseguridad a la hora de tener citas"],
				Bio: "Es original de Perú. A muy temprana edad emigró a EEUU donde alcanzó el éxito siendo broker. Se casó con 24 años y tuvo dos hijos con su exmujer. Se separó de ella con 45 años y desde entonces no ha encontrado a nadie con quien compartir el resto de su vida. Ahora mismo pasa su tiempo libre viajando y teniendo citas online, sin mucha suerte.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Lleva tiempo buscando alguien con quien realizar viajes por todo el mundo y, con suerte, encontrar el amor.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Vanessa Jörg",
				Photo: "vanessa.jpg",
				Quote: "Carpe Diem",
				Age: 22,
				Occupation: "Estudiante de Universidad",
				Family: "Dos padres y una hermana pequeña",
				Location: "Dusseldorf",
				Character: "Afable, risueña y confiada",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Visitar todos los países del mundo.", "Trabajar en una ONG y ser voluntaria en un país en vías de desarrollo."],
				Frustrations: ["Le cuesta encontrar un equilibrio entre su vida en Alemania, que no quiere dejar, y su necesidad de viajar constantemente.", "Está muy unida a su familia, especialmente a su abuela, y no quiere vivir lejos suya."],
				Bio: "Es una chica joven alemana de familia adinerada. Desde pequeña ha viajado con sus padres a muchas partes del mundo, con lo que ha desarrollado una pasión por viajar y conocer nuevas culturas. Ahora, ya adulta e independizada, busca formas económicas de seguir viajando. Le encanta conocer gente y hacer amigos de todos los rincones del planeta.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Busca algún compañero con el que hacer viajes low cost." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])