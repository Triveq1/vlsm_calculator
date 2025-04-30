var login_table = {
    "admin":"1234"
};

function create_size_inputs(){
    const count = parseInt(document.getElementById("number_of_Lans").value);
    const container = document.getElementById("lan_size_container");
    container.innerHTML = "";
    for (let i = 0; i<count;i++){
        const text = document.createElement("p");
        text.textContent = "Lan " + i;
        container.appendChild(text);
        const input = document.createElement("input");
        input.type = "number";
        input.id = "lan_size_"+i ;
        input.placeholder = "LAN "+i+" size";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
}

function calculate_vlsm() {
    const container =  documnet.getElementById("vlsm_table");
    container.innerHTML = "";
    const lans = parseInt(document.getElementById("number_of_Lans").value);
    const table = document.createElement("table");
    table.border = "1";

    for (let i = 0 ; i<lans ; i++){
        const row = document.createElement("tr");
        for (let x = 0 ; x < 6 ; x++) {
            const cell_1 = document.createElement("td");
            cell_1.textContent = "Lan "+i;
            row.appendChild(cell_1);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}
