
function searchItem() {
    var searchValue = document.getElementById('searchbox').value;
    
    // Encode the search value to make it safe for URLs
    var encodedSearchValue = encodeURIComponent(searchValue);
    
    // Redirect to the search.html page with the search parameter
    window.location.href = '../../pages/search.html?query=' + encodedSearchValue;
}


function searchItemParameter(searchstring) {
    // Encode the search value to make it safe for URLs
    var encodedSearchValue = encodeURIComponent(searchstring);
    
    // Redirect to the search.html page with the search parameter
    window.location.href = '../../pages/search.html?query=' + encodedSearchValue;
}
