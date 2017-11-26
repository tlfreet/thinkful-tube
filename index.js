const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

//make the call to the API
function getDataFromApi(searchTerm, callback) {
    const query = {
        part: 'snippet',
        key:'AIzaSyBxhtyqgBMMIVTubEQOMAlG8iWWcktgsfI',
        q: searchTerm
    };
    $.getJSON(YOUTUBE_SEARCH_URL,query, callback);
}


//handle resulting data
function handleResults (data){
    //const data.items
    const results = data.items.map((value, index) => showResults(value));
    $('.search-results').html(results);
}

//render data on the page in html
function showResults (data){
    console.log(data);
    return `<li>
            <a href="#video" class="result-item"><img src="${data.snippet.thumbnails.default.url}"></a>
            <a href="#_" class="lightbox" id="video"><img src="https://www.youtube.com/watch?v=${data.id.videoId}"></a>
            </li>`
}



//event listener to listen for the form submit
function handleFormSubmission(){
    console.log('handleFormSubmission ran');
    
    $('#search-form').submit(function(event) {
        event.preventDefault();
        const searchTerm = $('.search-query').val();
       
        console.log(searchTerm);
        getDataFromApi(searchTerm, handleResults)
    })
}

$(handleFormSubmission());
//$(getDataFromApi('trees', handleResults));

