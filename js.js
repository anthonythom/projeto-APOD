function searchImg() {

    let procuraData = $('#date').val();
    let chaveNasa = 'bLqODjHaQEdlEUu995awuAA66THkgZCVXe2SyEG0';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${chaveNasa}&date=${procuraData}`;

    
    $.ajax({
        type: 'GET',
        url: url,

        success: function (response) {
            let divExplanation = $('<img src="' + response.url + '"><div id="sobre"><h3>"' +
                response.title + '"</h3><p>"' + response.explanation + '"</p></div>'
            );

            $("#sobre-nasa").html(divExplanation);
        },
    });
}