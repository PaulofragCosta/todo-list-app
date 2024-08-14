function addTask() {
    var task = document.getElementById("task").value;
    if (task) {
        var ul = document.getElementById("tasks");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        ul.appendChild(li);
        document.getElementById("task").value = "";
    }
}
