/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Armando Flores Rojas",
                Photo: "armando.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere realizar un viaje con una desconocida a algún lugar tranquilo",
                touch1: "",
                feel1: "5",
                con1: "no sabe ni a donde ir ni donde encontrar a una mujer con la que viajar",
                ima1: "cartoon-thinking.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "busca el destino al que viajar",
                touch2: "tablet (internet)",
                feel2: "5",
                con2: "hay muchas ofertas y no se decide",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "decide viajar a Punta Cana, que concuerda con sus preferencias y le llama la atención",
                touch3: "tablet(internet)",
                feel3: "4",
                con3: "todavía no tiene con quien ir y no puede fijar las fechas del viaje",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "pregunta a amigos si conocen alguna app para gente que quiera viajar con desconocidos para conocerse",
                touch4: "amigos",
                feel4: "3",
                con4: "la mayoría de sus amigos no saben de ninguna app que tenga ese propósito",
                ima4: "cartoon-speaking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "finalmente, su amigo Benito le recomienda Miss Travel y decide probarla. Una vez registrado, crea un viaje a Punta Cana",
                touch5: "móvil (Miss Travel)",
                feel5: "2",
                con5: "Tras varios días con el viaje publicado, no recibe ningún mensaje",
                ima5: "cartoon-phone.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Cansado de esperar, opta por buscar viajes publicados a Punta Cana dentro de la app",
                touch6: "móvil (Miss Travel)",
                feel6: "2",
                con6: "Encuentra una mujer que quiere viajar a Punta Cana y decide mandarle un mensaje. En este momento, descubre que para poder iniciar el chat con desconocidos tiene que pagar una subscripción premium de 59.99$ por mes",
                ima6: "cartoon-PCangry.png",

                /*** PASO #7: CONCLUSION ***/ 
                
                goal7: "Le parece excesivo el precio de la suscripción y decide desistalarse la app",
                touch7: "móvil (Miss Travel)",
                feel7: "1",
                con7: "Tendrá que buscar compañera de viaje en otro lugar",
                ima7: "cartoon-PCcrying.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Vanessa Jörg",
                Photo: "vanessa.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a Tailandia low cost",
                touch1: "Amigos",
                feel1: "4",
                con1: "Ningún amigo quiere ir con ella y no sabe como reducir los costes del viaje",
                ima1: "cartoon-writting2.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Más adelante, le aparece un anuncio en instagram de Miss Travel y decide registrarse",
                touch2: "Móvil (Miss Travel)",
                feel2: "5",
                con2: "Ha visto que la app está enfocada a citas y, en este momento, no está interesada en ese aspecto",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide darle una oportunidad a la app y busca viajes a Tailandia",
                touch3: "Móvil (Miss Travel)",
                feel3: "4",
                con3: "Con los viajes encontrado, descubre que la app plantea varias formas de repartir los gastos del viaje. Está tentada a seleccionar que pague la otra persona todo el viaje, pero le parece un poco turbio",
                ima3: "cartoon-PCSurprised.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Unos días después, encuentra un viaje a Tailandia con repartición de gastos del 50/50 y opta por abrirle chat al usuario",
                touch4: "Móvil (Miss Travel)",
                feel4: "3",
                con4: "Le resulta muy incómodo concretar los detalles de un viaje tan grande por el chat de la aplicación",
                ima4: "cartoon-PCHappy.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Consigue entenderse con su compañero y reservan todo lo necesario para realizar el viaje",
                touch5: "Móvil (Miss Travel)",
                feel5: "4",
                con5: "Le preocupan las posibles discrepancias que aparezcan durante el viaje con su compañero, ya que no tienen mucha confianza",
                ima5: "cartoon-shaking.png",
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



