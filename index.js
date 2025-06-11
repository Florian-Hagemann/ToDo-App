function init() {
    document.getElementById("add").addEventListener("click", () => {
        var input = document.getElementById("input").value;

        if(input != "") {
            document.getElementById("input").value = "";
        
            var item = document.createElement("li");
            var text = document.createTextNode(input);

            var todo = document.createElement("input");
            todo.type = "checkbox";

            item.appendChild(todo);
            item.appendChild(text);
            
            const todos = document.getElementById("todos");
            todos.prepend(item)
        }
    });

    document.getElementById("clear").addEventListener("click", () => {
        
    });
}
