var select = document.getElementsByName('top');
var content = document.getElementById('content');


var artist = select.values;
var request = "https://www.theaudiodb.com/api/v1/json/2/search.php?s=" + artist;
select.addEventListener('change',()=>
{
    fetch(request+artist)
    .then(response=>response.json())
    .then (response=>{
        content.innerHTML=

    })
}
)

