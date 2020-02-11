var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

function creatListItem() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';

    // toggle done class
    li.addEventListener('click', function() {
        li.classList.toggle('done');
    })

    // add delete button
    var dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);

    // delete
    dBtn.addEventListener('click', function(){
        li.parentNode.removeChild(li);
    })

}

function addListAfterClick() {
    if(input.value.length > 0) {
        creatListItem();
    }
}

enterButton.addEventListener('click', addListAfterClick)

function addListAfterKeypress(event) {
    if(input.value.length > 0 && event.keyCode === 13) {
        creatListItem();
    }
}

input.addEventListener('keypress', addListAfterKeypress);