var login_table = {
    "admin":"1234"
};

function create_size_inputs(){
    const count = parseInt(document.getElementById("number_of_Lans").value);
    const container = document.getElementById("lan_size_container");
    for (let i = 0; i<count;i++){
        const input = document.createElement("input");
        input.type = "number"
    }
}


<button onclick="create_size_inputs()">Generate table</button>
      <div id="lan_size_container"></div>
