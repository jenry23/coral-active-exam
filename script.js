let data = ['one', { name: 'two', nodes: [{ name: '2.1', nodes: ['2.1a'] }, 'two point two'] }, 'three'];

function createHtmlList(obj){
    let output = "";

    Object.keys(obj).forEach((k) => {
        if (obj[k] instanceof Object) {
            Object.keys(obj[k]).forEach((value) => {
                if (obj[k][value] instanceof Object) {
                    output += "<li>" + obj[k]['name'] + "<ul class='disc'>";
                    output += createHtmlList(obj[k][value]);
                    output += "</ul></li>";
                }
            });
        } else {
            output += "<li>" + obj[k] + "</li>";
        }
    });

    return output;
}

document.getElementById("container").innerHTML = createHtmlList(data);
