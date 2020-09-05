let tools = [
    "ASP.Net Core",
    "C#",
    "HTML",
    "CSS",
    "Javascript",
    "Angular",
    "jquery",
    "SQL",
    "NopCommerce",
    "EntityFramework",
    "Elastic Search",
    "Ajax",
    "SPA",
];

let secondTools = [
    "Visual Studio",
    "GIT Version Control",
    "ADO.Net",
    "MSSQL",
    "NopCommerce",
];

tools.forEach(appendFunction);
secondTools.forEach(appendFunction);

function appendFunction(item, index, array) {
    let element = document.getElementById("tools-text");

    if (array.indexOf("ADO.Net") > -1)
        element = document.getElementById("second-tools-text");

    let tag = document.createElement("p");
    let text = document.createTextNode(item);
    tag.className += "text-md font-light mt-2 text-gray tools-text-m";
    tag.appendChild(text);
    element.appendChild(tag);
}
