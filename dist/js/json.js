$.getJSON('json/json.json', {}, function(json){  
                                
        $('#sub1').append(json.subscribers[0]);
        $('#sub2').append(json.subscribers[1]);

        $('#cir1').append(json.circulation[0]);
        $('#cir2').append(json.circulation[1]);

        $('#mont1').append(json.totalMountly[0]);
        $('#mont2').append(json.totalMountly[1]);

        $('#per1').append(json.tradePeriod[0]);
        $('#per2').append(json.tradePeriod[1]);

        $('#quo1').append(json.quote[0][0]);
        $('#quo2').append(json.quote[0][1]);
        $('#quo3').append(json.quote[1][0]);
        $('#quo4').append(json.quote[1][1]);
        $('#quo5').append(json.quote[2][0]);
        $('#quo6').append(json.quote[2][1]);
        $('#quo7').append(json.quote[3][0]);
        $('#quo8').append(json.quote[3][1]);

        var anual = json.anual;
        var anual2 = json.anual;

        var value = 3; // начальное значение - ноль
        anual.forEach(function(element) { // пройдем по каждому элементу массива
          element[0] = value; // присвоим новое значение первому элементу (первый - нулевой)
          value += 3.16; // эквивалентно `value = value + 3;` то есть увеличим на 3
        });
        $('#anual animate').attr('to', anual);


        anual2.forEach(function(element) { 
          element[1] =+ 150;
        });
        console.log(anual2);

        $('#anual').attr('points', anual2);
        
    }); 