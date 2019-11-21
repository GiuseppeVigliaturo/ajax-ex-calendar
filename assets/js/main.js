var capodanno;
var epifania;


    $.ajax({
          url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
          method : "GET",
          success : function (data) {
            var store = data.response;
            // console.table(store);

              var numeroDiGiorni = moment('01/01/2018', 'DD/MM/YYYY').daysInMonth();
              //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
              for(var i = 1; i <= numeroDiGiorni; i++) {

                      //Strutturo la data simile alla chiamata ajax
                      var currentDate = moment('2018-01-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
                      // console.log(currentDate);
                      //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
                      var currentDay = moment(currentDate).format('DD dddd');
                      // console.log(currentDay);
                      var currentMonth = moment(currentDate).format('MMMM');


                      store.forEach(myFunction);

                      function myFunction(item) {
                        // console.log(item);
                        if (currentDate === item.date) {
                          console.log("festa");
                          //Inserisco nell'html il mio li con attributo per eventuali selettori e la relativa data formattata
                            $('.content').append('<li data-date="'+currentDate+'">'+currentMonth+" "+currentDay+" "+item.name+'</li>');

                        }

                        else {
                            $('.content').append('<li data-date="'+currentDate+'">'+currentMonth+" "+currentDay+'</li>');
                        }
                      }
                  }
          },

          error : function (errore) {
               alert("E' avvenuto un errore. "+errore);
             }
           });
