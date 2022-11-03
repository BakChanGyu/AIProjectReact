import React from "react"

function NavBar  (){
return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="/">필적AI시스템</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/missing">실종자 수사 </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/toeic">토익  </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/csat">수능</a>
      </li>
     
    </ul>
  </div>
</nav>
    
    </>
)
}

export default NavBar;