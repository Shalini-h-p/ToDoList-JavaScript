document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert("Please enter atask");
  }
  else {
    document.querySelector('#tasks').innerHTML
      += `
<div class="task"> 

<span id="taskname">
  ${document.querySelector('#newtask input').value}
</span>

<button class="delete">
<i class="fas fa-trash-alt"></i>
</button>

</div>
  `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++)
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      }
  }

  var tasks = document.querySelectorAll(".tasks");
  for (var i = 0; i < tasks.lenght; i++) {
    tasks[i].onclick = function () {
      this.classList.toggle('completed');
    }
  }

  document.querySelectorAll("#newtask input").value = " ";
}
