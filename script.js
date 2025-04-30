var login_table = {
    "admin":"1234"
};

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}



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
    const arr_of_base2 = [2, 4, 8, 16, 32, 64, 128, 256];
    const container =  documnet.getElementById("vlsm_table");
    container.innerHTML = "";
    const lans = parseInt(document.getElementById("number_of_Lans").value);
    const table = document.createElement("table");
    table.border = "1";
    var lan_array = [];

    for (let f = 0; f<lans; f++){
        lan_array.push(document.getElementById("lan_size_"+f).value);
    }
    console.log(len_array);
    len_array = bubbleSort(len_array);
    console.log(len_array);
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
        host_count += 2;
        
        var network_adr = 0;
        
            
        row.appendChild(e_lan_number);
        row.appendChild(e_host_count);
        row.appendChild(e_network_adr);
        row.appendChild(e_usable_range);
        row.appendChild(e_broadcast);
        row.appendChild(e_mask);
        
        table.appendChild(row);
    }
    container.appendChild(table);
}
