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
    lan_array = bubbleSort(len_array);
    console.log(len_array);

    var current_net = 0;
    var lan_net_arr = [];
    for (let a = 0 ; i<lans; a++){
        var size = lan_array[a];
        for (num = 0 ; num < 8; num++);
            if (size <= arr_of_base2[num]) {
                lan_net_arr.push(arr_of_base2[num]+current_net);
                current_net += arr_of_base2[num];
            }
    }


    
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
