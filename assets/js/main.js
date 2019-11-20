var capodanno;
var epifania;


    $.ajax({
          url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
          method : "GET",
          success : function (data) {
            var store = data.response;
            // console.table(store);
            // console.log(store);

            for (var i = 0; i < store.length; i++) {
              capodanno = store[0].date;
              epifania = store[1].date;

              }
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

                      if (currentDate === epifania) {
                        console.log("epifania");
                        //Inserisco nell'html il mio div con attributo per eventuali selettori e la relativa data formattata
                        $('.content').append('<div data-date="'+currentDate+'">'+currentMonth+" "+currentDay+"     "+"epifania"+'</div>');


                      }
                      else if (currentDate === capodanno) {
                        console.log("capodanno");

                        //Inserisco nell'html il mio div con attributo per eventuali selettori e la relativa data formattata
                        $('.content').append('<div data-date="'+currentDate+'">'+currentMonth+" "+currentDay+"    "+"capodanno"+'</div>');

                      }
                      else {
                          $('.content').append('<div data-date="'+currentDate+'">'+currentMonth+" "+currentDay+'</div>');
                      }

                  }



          },


          error : function (errore) {
               alert("E' avvenuto un errore. "+errore);
             }
           });
