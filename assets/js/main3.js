//dichiaro la variabile globalmente senza assegnargli nessun valore ma la valorizzo di volta in volta nelle funzioni
var selectedMonth;

$("select").click(function(){
  //ripulisco lo schermo a ogni click
  $(".content").html("");
//mi salvo il valore del mese in una variabile
   selectedMonth= parseInt($('#menu').val());

  console.log(selectedMonth);


  chiamataapi(selectedMonth);

  });

  $(".sceltamese .successivo").click(function(){
    //ripulisco lo schermo a ogni click
    $(".content").html("");

//incremento la variabile che contiene il numero del mese di uno ad ogni click cosi da passare ai mesi successivi
      selectedMonth +=1;

      console.log("ho aumentato il mese di uno");
//ristampo il nuovo mese passando il parametro aggiornato alla funzione che mi stampa in pagina i giorni
      chiamataapi(selectedMonth);

   });

   $(".sceltamese .precedente").click(function(){
     //ripulisco lo schermo a ogni click
     $(".content").html("");

     //decremento la variabile che contiene il numero del mese di uno ad ogni click cosi da passare ai mesi precedenti

      selectedMonth -= 1;
       console.log("ho decrementato di uno");
//ristampo il nuovo mese passando il parametro aggiornato alla funzione che mi stampa in pagina i giorni
       chiamataapi(selectedMonth);

    });


    //funzioni
    //funzione che mi conta il numero di giorni in un mese

    function days(mesecorrente){
      var numeroDiGiorni = moment('01/'+mesecorrente+'/2018', 'DD/MM/YYYY').daysInMonth();
      //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
      for(var i = 1; i <= numeroDiGiorni; i++) {

        //Strutturo la data simile alla chiamata ajax
        var currentDate = moment('2018-'+mesecorrente+'-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
        // console.log(currentDate);
        //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
        var currentDay = moment(currentDate).format('DD dddd');
        // console.log(currentDay);
        var currentMonth = moment(currentDate).format('MMMM');

        $('.content').append('<div class="grid-item" data-date="'+currentDate+'">'+currentMonth+" "+currentDay+'</div>');

        }
    }

    //funzione che controlla se ci siano feste in quel dato mese
    function feste(item) {

      var datafesta = item.date;
      var nomefesta = item.name;

      var elementoSelez = $("div[data-date='" + datafesta + "']");
      console.log(elementoSelez);

      if(elementoSelez){
        var dataquelgiorno = elementoSelez.text();
            elementoSelez.addClass("red").text(dataquelgiorno+" "+ nomefesta);
      }

    }

    //funzione ajax

    function chiamataapi(mesescelto)
    {
      $.ajax({
            url : "https://flynn.boolean.careers/exercises/api/holidays",
            method : "GET",
            data:{
              year:2018,
              month:mesescelto -1
            },
            success : function (data) {
              var store = data.response;
              console.log(store);

              days(mesescelto);

              store.forEach(feste);
            },

            error : function (errore) {
                 alert("E' avvenuto un errore. "+errore);
               }
             }); //fine funzione ajax
    }
