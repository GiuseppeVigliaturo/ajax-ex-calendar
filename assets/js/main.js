$(document).ready(function(){

  var selectedMonth= parseInt($('#menu').val());

  $("select").click(function(){
    //ripulisco lo schermo a ogni click
    $(".content").html("");

    var selectedMonth= parseInt($('#menu').val());




    console.log(selectedMonth);
    $.ajax({
          url : "https://flynn.boolean.careers/exercises/api/holidays",
          method : "GET",
          data:{
            year:2018,
            month:selectedMonth -1
          },
          success : function (data) {
            var store = data.response;
            console.log(store);
            // console.table(store);



              var numeroDiGiorni = moment('01/'+selectedMonth+'/2018', 'DD/MM/YYYY').daysInMonth();
              //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
              for(var i = 1; i <= numeroDiGiorni; i++) {

                      //Strutturo la data simile alla chiamata ajax
                      var currentDate = moment('2018-'+selectedMonth+'-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
                      // console.log(currentDate);
                      //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
                      var currentDay = moment(currentDate).format('DD dddd');
                      // console.log(currentDay);
                      var currentMonth = moment(currentDate).format('MMMM');

                      $('.content').append('<li class="grid-item" data-date="'+currentDate+'">'+currentMonth+" "+currentDay+'</li>');


                      }


                      store.forEach(feste);

                      function feste(item) {
                        var datafesta = item.date;
                        var nomefesta = item.name;

                        var elementoSelez = $("li[data-date='" + datafesta + "']");
                        console.log(elementoSelez);

                        if(elementoSelez){
                          var dataquelgiorno = elementoSelez.text();
                              elementoSelez.addClass("red").text(dataquelgiorno+" "+ nomefesta);
                        }

                      }

          },

          error : function (errore) {
               alert("E' avvenuto un errore. "+errore);
             }
           });




         });

         $(".sceltamese .successivo").click(function(){
           //ripulisco lo schermo a ogni click
           $(".content").html("");

             selectedMonth += 1;
             console.log("succede questo");

             $.ajax({
                   url : "https://flynn.boolean.careers/exercises/api/holidays",
                   method : "GET",
                   data:{
                     year:2018,
                     month:selectedMonth -1
                   },
                   success : function (data) {
                     var store = data.response;
                     console.log(store);
                     // console.table(store);



                       var numeroDiGiorni = moment('01/'+selectedMonth+'/2018', 'DD/MM/YYYY').daysInMonth();
                       //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
                       for(var i = 1; i <= numeroDiGiorni; i++) {

                               //Strutturo la data simile alla chiamata ajax
                               var currentDate = moment('2018-'+selectedMonth+'-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
                               // console.log(currentDate);
                               //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
                               var currentDay = moment(currentDate).format('DD dddd');
                               // console.log(currentDay);
                               var currentMonth = moment(currentDate).format('MMMM');

                               $('.content').append('<li class="grid-item" data-date="'+currentDate+'">'+currentMonth+" "+currentDay+'</li>');


                               }


                               store.forEach(feste);

                               function feste(item) {
                                 var datafesta = item.date;
                                 var nomefesta = item.name;

                                 var elementoSelez = $("li[data-date='" + datafesta + "']");
                                 console.log(elementoSelez);

                                 if(elementoSelez){
                                   var dataquelgiorno = elementoSelez.text();
                                       elementoSelez.addClass("red").text(dataquelgiorno+" "+ nomefesta);
                                 }

                               }

                   },

                   error : function (errore) {
                        alert("E' avvenuto un errore. "+errore);
                      }
                    });

          });

          $(".sceltamese .precedente").click(function(){
            //ripulisco lo schermo a ogni click
            $(".content").html("");

              selectedMonth -= 1;
              console.log("succede questo");

              $.ajax({
                    url : "https://flynn.boolean.careers/exercises/api/holidays",
                    method : "GET",
                    data:{
                      year:2018,
                      month:selectedMonth -1
                    },
                    success : function (data) {
                      var store = data.response;
                      console.log(store);
                      // console.table(store);



                        var numeroDiGiorni = moment('01/'+selectedMonth+'/2018', 'DD/MM/YYYY').daysInMonth();
                        //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
                        for(var i = 1; i <= numeroDiGiorni; i++) {

                                //Strutturo la data simile alla chiamata ajax
                                var currentDate = moment('2018-'+selectedMonth+'-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
                                // console.log(currentDate);
                                //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
                                var currentDay = moment(currentDate).format('DD dddd');
                                // console.log(currentDay);
                                var currentMonth = moment(currentDate).format('MMMM');

                                $('.content').append('<li class="grid-item" data-date="'+currentDate+'">'+currentMonth+" "+currentDay+'</li>');


                                }


                                store.forEach(feste);

                                function feste(item) {
                                  var datafesta = item.date;
                                  var nomefesta = item.name;

                                  var elementoSelez = $("li[data-date='" + datafesta + "']");
                                  console.log(elementoSelez);

                                  if(elementoSelez){
                                    var dataquelgiorno = elementoSelez.text();
                                        elementoSelez.addClass("red").text(dataquelgiorno+" "+ nomefesta);
                                  }

                                }

                    },

                    error : function (errore) {
                         alert("E' avvenuto un errore. "+errore);
                       }
                     });

           });



    });




               // $(".sceltamese .successivo").click(function(){
               //   //ripulisco lo schermo a ogni click
               //   $(".content").html("");
               //
               //     selectedMonth += 1;
               //
               //  });
