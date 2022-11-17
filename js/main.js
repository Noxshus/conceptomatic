function GenerateOneOfEach()
{
    let _oneOfEachArray = [];

    _oneOfEachArray[0] = ReturnRandomElementFromArray(charactersAndCreatures);
    _oneOfEachArray[1] = ReturnRandomElementFromArray(cultures);
    _oneOfEachArray[2] = ReturnRandomElementFromArray(emotions);
    _oneOfEachArray[3] = ReturnRandomElementFromArray(historicalPeriods);
    _oneOfEachArray[4] = ReturnRandomElementFromArray(styles);
    _oneOfEachArray[5] = ReturnRandomElementFromArray(genres);
    _oneOfEachArray[6] = ReturnRandomElementFromArray(classics);
    _oneOfEachArray[7] = ReturnRandomElementFromArray(places);

    document.getElementById("characterstextbox").innerHTML = _oneOfEachArray[0];
    document.getElementById("culturestextbox").innerHTML = _oneOfEachArray[1];
    document.getElementById("emotionstextbox").innerHTML = _oneOfEachArray[2];
    document.getElementById("periodstextbox").innerHTML = _oneOfEachArray[3];
    document.getElementById("stylestextbox").innerHTML = _oneOfEachArray[4];
    document.getElementById("genrestextbox").innerHTML = _oneOfEachArray[5];
    document.getElementById("classicstextbox").innerHTML = _oneOfEachArray[6];
    document.getElementById("placestextbox").innerHTML = _oneOfEachArray[7];
}

function ReturnRandomElementFromArray (_array) //pick a random element from the array and return the contents
{
    return _array[RandomInteger(0, _array.length - 1)]
}

function RandomInteger(min, max) //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
{
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}