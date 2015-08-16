$(function() {
    $('body').on('click', '#search-button', function(event) {
        event.preventDefault();
        $('#search-results').empty();
        var searchTerm = $('#search-term').val();
        getRequest(searchTerm);
        console.log(searchTerm);
    });
    var getRequest = function(searchTerm) {
        var params = {
            part: 'snippet',
            key: 'AIzaSyCUql0FHDPhuIqT1tenpwCy28MpJyD47fo',
            q: searchTerm
        };
        url = 'https://www.googleapis.com/youtube/v3/search'
        $.getJSON(url, params, function(data) {
            showResults(data.items);
        });
    }
    var showResults = function(results) {
        var html = '';
        $.each(results, function(index, value) {
            html += '<img src="' + value.snippet.thumbnails.default.url + '">';
            console.log(value.id.videoId);
        });
        $('#search-results').html(html);
    }
});
