/*var today = new Date(2017, 02, 14);
var weekday = today.getDay();
console.log(weekday);*/

$('#button').on('click', function(e){
//function displayDates() {
    //e.preventDefault();
    $('#chatTuesdays').html('');
    $('#chat').html('');
    $('#newsletterDays').html('');
    var chosenYear = $('#year').val();
/*    console.log(chosenYear);

    for (m=0; m<12; m++) {
        for (d=0; d<31; d++) {
            var date = new Date(chosenYear, m, d);
            var weekday = date.getDay();
            if (weekday === 2) {
                //tuesdays.push(date);
                $('#chatTuesdays').append('<li>' + date.toDateString() + '</li>');
            }
        }
    }*/

// -------- appends chat date to HTML and gets newlsetter dates and appends newsletter dates to HTML
    function getChatDates(s) {
        $('#chat').html('Chat schedule');

        var chatDates = new Array();
        chatDates = s.toDateString().split(' ');
        $('#chatTuesdays').append('<li>' + chatDates[1] + ' ' + chatDates[2] + '</li>');

        var followingThursday = new Date(s.getFullYear(), s.getMonth(), s.getDate() + 9);
        //console.log(followingThursday);

        $('#newsletter').html('Newsletter schedule');

        var newsletterDates = new Array();
        newsletterDates = followingThursday.toDateString().split(' ');
        $('#newsletterDays').append('<li>' + newsletterDates[1] + ' ' + newsletterDates[2] + '</li>');
    }
// -------- returns chat dates
    function getTuesdays(weekday, n, date) {
            var date = new Date(date.getFullYear(), date.getMonth(), 1),
            add = (weekday - date.getDay() + 7) % 7 + (n - 1) * 7;
            date.setDate(1 + add);

            var chatDates = new Array();
            chatDates = date.toDateString().split(' ');

            return date;
            //return date.getMonth() + 1 + ' / ' + date.getDate();
            //return chatDates[1] + ' ' + chatDates[2];
    }


    for (i=0; i<12; i++) {
                 // Second Tuesday of chosen year.
    getChatDates(getTuesdays(2, 2, new Date(chosenYear, i)));
                 // Fourth Tuesday of chosen year.
    getChatDates(getTuesdays(2, 4, new Date(chosenYear, i)));
    }
});