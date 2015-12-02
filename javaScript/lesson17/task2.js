
$(".but").on('click', function(e) {
    var yearCalendar, monthCalendar;
    var strTemp = '';
   do {
       strTemp = prompt('Enter year (4 numbers):', '2015');
       yearCalendar = +strTemp;
      } while (!((yearCalendar > 999) && (yearCalendar < 10000)))
    do {
        strTemp = prompt('Enter month (1-12)', '1');
        monthCalendar = +strTemp - 1;
    } while (!((monthCalendar >= 0) && (monthCalendar < 12)))
   createCalendar('calendar', yearCalendar, monthCalendar);
});

//var ddd = document.getElementById('but');
//ddd.onclick(createCalendar('calendar', 1987, 1));
function createCalendar(id, year, month){
    var $calendar = $('#' + id);

    var Week = {
        1: 'Пн',
        2: 'Вт',
        3: 'Ср',
        4: 'Чт',
        5: 'Пт',
        6: 'Сб',
        7: 'Вс'
    }
   var dateTemp = new Date(year, month);

    var dayWeekFirst = dateTemp.getDay();
   if (dayWeekFirst == 0) {
      dayWeekFirst = 7;
   }
    var strAllDay = '';
    var DayLast = new Date(dateTemp.getFullYear(), dateTemp.getMonth() + 1, 0).getDate();
    var DayWeekLast = new Date(dateTemp.getFullYear(), dateTemp.getMonth(), DayLast).getDay();
    var $tableCal = $('<table class = "calend"></table>');
   for (var i=1; i<=7; i++) {
       $dayWeekName = $('<th></th>').text(Week[i]);
       $tableCal.append($dayWeekName);
   }

    strAllDay += '<tbody><tr>';
    for(var  i = 1; i < dayWeekFirst; i++)   strAllDay += '<td></td>'; //пустые ячейки до 1 числа

    for(var  i = 1; i <= DayLast; i++) {
        strAllDay += '<td>' + i + '</td>';
        var dayToday = new Date(dateTemp.getFullYear(), dateTemp.getMonth(), i).getDay();
        if (dayToday == 0) {
            strAllDay += '</tr>' +'<tr>';
       }}
    if (DayWeekLast != 0) {
            for(var  i = DayWeekLast; i < 7; i++)   strAllDay += '<td></td>';
        }
    strAllDay += '</tr></tbody>';
    $tableCal.append(strAllDay);
    $calendar.append($tableCal);
}

