var login_table = {
    "admin":"1234"
};

function create_size_inputs(){
    const count = parseInt(document.getElementById("number_of_Lans").value);
    const container = document.getElementById("lan_size_container");
    container.innerHTML = "";
    for (let i = 0; i<count;i++){
        const input = document.createElement("input");
        input.type = "number";
        input.id = "lan_size_"+i ;
        input.placeholder = "LAN "+i+" size";
        container.appendChild(input);
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

        const e_lan_number = document.createElement("td");
        const e_host_count = document.createElement("td");
        const e_network_adr = document.createElement("td");
        const e_usable_range = document.createElement("td");
        const e_broadcast = document.createElement("td");
        const e_mask = document.createElement("td");
            
        e_lan_number.textContent = "Lan "+i;
            
        var a = "lan_size_"+i
        var host_count = parseInt(document.getElemntById(a).value);
        e_host_count.textContent = ""+host_count;
            
            
        row.appendChild(e_lan_number);
        row.appendChild(e_host_count);
        
        table.appendChild(row);
    }
    container.appendChild(table);
}
