let todo = [];
let inputValue = document.getElementById('inputTodoList');
function myFunc() {
    todo.unshift(inputValue.value);
    var h1 = document.createElement('h1');
    h1.innerHTML = todo[0];
    document.body.appendChild(h1);
    var button = document.createElement('button');
    button.setAttribute('id', 'buttonTodoList');
    button.innerHTML = 'Xoá';
    button.setAttribute('onclick', 'CheckList()');
    document.body.appendChild(button);
}

function CheckList() {
    let AllButton = document.querySelectorAll('button#buttonTodoList');
    let AllElement = document.querySelectorAll('h1');
    for (let i = 0; i < AllButton.length; i++) {
        AllButton[i].addEventListener('click', function(){   
            AllButton[i].remove();
            AllElement[i].remove();
        });
    }
}