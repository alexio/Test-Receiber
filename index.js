var getPlayLists = function() {
    var api = 'http://www.nytimes.com/svc/video/api/v2/playlists';
    var promise = makeRequest(api);
    promise.done(function(response){
        console.log("DONE!", response);
        loadPlayLists(response);
    });

    promise.fail(function(error){
        console.log("ERROR!", error);
    });
};

var getPlayList = function( id ) {
    var api = 'http://www.nytimes.com/svc/video/api/v2/playlist/'+id;
    var promise = makeRequest(api);
    promise.done(function(response){
        console.log("DONE!", response);
        loadPlayList(response);
    });

    promise.fail(function(error){
        console.log("ERROR!", error);
    });
};

var getVideo = function( id ) {
    var api = 'http://www.nytimes.com/svc/video/api/v2/video/'+id;
    var promise = makeRequest(api);
    promise.done(function(response){
        console.log("DONE!", response);
        loadVideo(response);
    });

    promise.fail(function(error){
        console.log("ERROR!", error);
    });
};

var makeRequest = function( url ) {
    return $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        contentType: 'application/json'
    });
};

var loadPlayLists = function( data ) {

};

var loadPlayList = function( data ) {

};

var loadVideo = function( data ) {

};

getPlayLists();