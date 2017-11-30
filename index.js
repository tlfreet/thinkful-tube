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



function handleResults (data){
    //const data.items
    console.log(data);
    const results = data.items.map((value, index) => showResults(value));
    $('.search-results').html(results);
}

/*function handlePageToggle (data){
    const nextPage = data.item.nextPageToken
    console.log() 
}
*/


function showResults (data){
    console.log(data);
    return `<li>
            <a href="https://www.youtube.com/watch?v=${data.id.videoId}"class="result-item"><img src="${data.snippet.thumbnails.default.url}"></a>
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

