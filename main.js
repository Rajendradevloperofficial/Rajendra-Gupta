function getAPIData() {
    var name = "bharat"
    var search = document.getElementById("search")
    if (search.value != "")
        name = search.value

    var request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/bharat" + name)
    request.send()

    request.addEventListener("load", () => {
        let [data] = JSON.parse(request.responseText)
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital
        document.getElementById("flags").src = data.flags.png
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("continents").innerHTML = data.continents
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("unMember").innerHTML = data.unMember
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("maps").href = data.maps.googleMaps
    })
}
getAPIData()
