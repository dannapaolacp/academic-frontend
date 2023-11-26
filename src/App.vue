<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GESTIÓN ACADÉMICA</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudiantes
            </a>
            <ul class="dropdown-menu">
              <li>
                <!-- giving the home route with the label router-link -->
                <router-link class="dropdown-item" to="/">Listar estudiantes</router-link>
              </li>
              <li>
                <!-- giving the create student route with the label router-link -->
                <router-link class="dropdown-item" to="/createStudent">Registrar nuevo</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Allows a single view and fluid navigation -->
  <div class="container_fluid">
    <router-view/>
  </div>
</template>

