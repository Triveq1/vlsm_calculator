var login_table = {
    "admin":"1234"
};

function create_size_inputs(){
    const count = parseInt(document.getElementById("number_of_Lans").value);
    const container = document.getElementById("lan_size_container");
    for (let i = 0; i<count;i++){
        const text = document.createElement("p"));
        text.textContent = "Lan " + i;
        container.appendChild(text);
        const input = document.createElement("input");
        input.type = "number";
        input.id = "lan_size_"+i ;
        input.palceholder = "LAN "+i+" size";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
}

