var login_table = {
  "admin":"admin"
};

function bubble_sort(arr) {
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


//This function generates 3 columns of n rows of input boxes for host count of each LAN
function generate_network_size_input_boxes(){
  const number_of_networks = parseInt(document.getElementById("number_of_networks").value);
  const container = document.getElementById("network_size_input_boxes_container");
  container.innerHTML = "";

  for (let i = 1; i <= number_of_networks ; i++ ){
      const row = document.createElement("div");
      row.className = "input_network_size_row";

      const box = document.createElement("input");
      box.type = "number";
      box.id = "network_"+i+"_size" ; // network_5_size 
      box.placeholder = "hosts";
      box.className = "input_network_size_box"

      const box_name = document.createElement("p");
      box_name.textContent = "LAN "+i+": ";

      row.appendChild(box_name);
      row.appendChild(box);
      container.appendChild(row);
  }
}


