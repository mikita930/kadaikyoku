
var selectElement = document.getElementById("yearSelect");
    for (var year=1940; year <= 2023;year++){
        var optionElement = document.createElement("option");
        optionElement.value = year;
        optionElement.textContent = year +"年";
        selectElement.appendChild(optionElement);
    }
