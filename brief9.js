var select = document.getElementsByName('top');
var content = document.getElementById('content');
var dt;
var artist 

var request = "https://www.theaudiodb.com/api/v1/json/2/search.php?s=" ;
select[0].addEventListener('change',()=>
{
    artist = select[0].value;
    fetch(request + artist)
    .then(response=>response.json())
    .then (data => {
        dt = data;
        content.innerHTML+=`<div class='col-8 container-fluid'>
            <h1>${data.artists[0].strArtist}</h1>
            <img src=${data.artists[0].strArtistThumb}></img>
            <p>${data.artists[0].strFacebook}</p>
            <p>${data.artists[0].intFormedYear}</p>
            <p>${data.artists[0].strBiographyEN}</p>
        </div>`


    })
}
)


