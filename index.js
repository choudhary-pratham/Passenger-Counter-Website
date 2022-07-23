let count = 0;
function countpassengers()
{
    count += 1;
    document.getElementById("counter").textContent = count;
}

function save(){
    document.getElementById("prev").textContent += count + ' - ';
    count = 0;
    document.getElementById("counter").textContent = count;
}

function clearAll()
{
    document.getElementById("prev").textContent = "Previous Entries: ";
}