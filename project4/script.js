let selectAll = document.getElementById('selectAll')
                  selectAll.addEventListener('change', function () {
            let checkboxes = 
                document.querySelectorAll('.checkboxes');
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = this.checked;
            }, this);
            
        });

let addRow = document.getElementById("addRow")
let addNewRow = document.querySelector("#addNewRow")
let checkCountDiv = document.getElementById("checkcount");


let taskCounter = document.querySelectorAll('.checkboxes').length;


checkCountDiv.textContent = `Checked: ${checkedCount}`;
}

document.addEventListener("change", function (e) {
    if (e.target.classList.contains("checkboxes")) {
        updateCheckedCount();
    }
});

addRow.addEventListener("click",function(){
    taskCounter++;
    let newspan = document.createElement("span");
    newspan.innerHTML=`<input type="checkbox" class="checkboxes"><label for="task">Simple Task ${taskCounter}<hr></label>`
    addNewRow.append(newspan)
})

let checkcount = document.querySelector("#checkcount")

checkcount.append
