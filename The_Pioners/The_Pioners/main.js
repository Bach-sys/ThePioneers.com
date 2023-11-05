let main = document.querySelector("#app")
main.innerHTML = `
<nav class="navbar navbar-expand-lg " >
  <div class="container-fluid navContent">
  <div class='img'><img class='Logo_pioners' src="assets/logoPioners.png" alt="none" ></div>
    <a class="navbar-brand" href="#">The Pioneers Club</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item LiNav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item LiNav">
          <a class="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li class="nav-item LiNav">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`
main.innerHTML += `
<div id="page_main" class=''>
<div id='title' class='title_body'>
  <h1>The Pioneers</h1>
</div>
<div id="content">
<p class='qoutes'>"</p>
<div class></div>
<h3>Hi, everyone</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in quae corporis id sed harum sapiente numquam aspernatur, laborum vero culpa quidem qui facilis, fugiat optio laboriosam voluptas maiores tenetur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in quae corporis id sed harum sapiente numquam aspernatur, laborum vero culpa quidem qui facilis, fugiat optio laboriosam voluptas maiores tenetur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in quae corporis id sed harum sapiente numquam aspernatur, laborum vero culpa quidem qui facilis, fugiat optio laboriosam voluptas maiores tenetur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in quae corporis id sed harum sapiente numquam aspernatur, laborum vero culpa quidem qui facilis, fugiat optio laboriosam voluptas maiores tenetur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in quae corporis id sed harum sapiente numquam aspernatur, laborum vero culpa quidem qui facilis, fugiat optio laboriosam voluptas maiores tenetur!</p>
<p class='qoutes end'>"</p>
</div>
<div class='realImage'>
  <div class="polaroid rotate_right">
    <img src="assets/Mem1.jpg" alt="Pulpit rock" width="100%" height="auto">
    <p class="caption">The pulpit rock in Lysefjorden, Norway.</p>
  </div>
  <div class="polaroid rotate_left">
    <img src="/assets/" alt="Monterosso al Mare" width="284" height="213">
    <p class="caption">Monterosso al Mare. One of the five villages in Cinque Terre, Italy.</p>
  </div>
  <div class="polaroid rotate_rightanother">
    <img src="/assets/" alt="Monterosso al Mare" width="284" height="213">
    <p class="caption">Monterosso al Mare. One of the five villages in Cinque Terre, Italy.</p>
  </div><div class="polaroid rotate_leftanother">
    <img src="/assets/" alt="Monterosso al Mare" width="284" height="213">
    <p class="caption">Monterosso al Mare. One of the five villages in Cinque Terre, Italy.</p>
  </div>

</div>
</div>
`
