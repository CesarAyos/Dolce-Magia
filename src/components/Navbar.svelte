<script>
  import { onMount } from "svelte";
  import { nombre } from "./storage.js";

  onMount(() => {
    if (!localStorage.getItem("nombre")) {
      const nuevoNombre = prompt("¡¡Bienvenido!! ¿Cómo te llamas?");
      if (nuevoNombre) {
        nombre.set(nuevoNombre);
        localStorage.setItem("nombre", nuevoNombre);
      } else {
        alert("Por favor, ingresa tu nombre.");
        location.reload();
      }
    } else {
      nombre.set(localStorage.getItem("nombre"));
      alert("Hola " + localStorage.getItem("nombre"));
    }
  });
</script>

<nav
  class="navbar z-1"
  style="background: #ff4ef380; height:75px;box-shadow: 0px 13px 5px 0px rgba(255,78,243,0.35);"
>
  <div class="container-fluid d-flex justify-content-center">
    <div class="container text-center">
      <div class="row row-cols-3 row-cols-lg-5 g-2 g-lg-3">
        <div class="col">
          <div
            class="p-3 fw-bold text-white fs-2"
            style="text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
          >
            DOLCE
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <a class="navbar-brand" href="/">
            <img
              src="/c.png"
              alt="Logo"
              width="100"
              height="100"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div class="col">
          <div
            class="p-3 fw-bold text-white fs-2"
            style="text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
          >
            MAGIA
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg mt-3" style="background: #38cad9;">
  <div
    class="container-fluid"
    style="box-shadow: 0px 13px 5px 0px rgba(56,202,217,0.35);"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fa-solid fa-bars fs-2 fw-bold" style="color: white;"></i>
      <span
        class="text-white fs-2 fw-bold"
        style="text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
        >"Hola
      </span>
      <span
        class="fw-bold text-white fs-2"
        style="text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
        >{$nombre}, Bienvenido"</span
      >
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle fw-bold text-white fs-2"
            href="#1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Servicios
          </a>
          <ul class="dropdown-menu" style="background: #ffa6f9;">
            <li>
              <a
                class="dropdown-item mb-2 fs-3 fw-bold text-white"
                style="background:#ffc5fc;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                href="desayunosorpresa"
                >Desayunos Sorpresas <i
                  class="d-flex justify-content-end fa-solid fa-gifts fa-fade"
                  style="color:white;font-size:30px;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                ></i></a
              >
            </li>
            <li>
              <a
                class="dropdown-item mb-2 fs-3 fw-bold text-white"
                style="background:#ffc5fc;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                href="meriendas"
                >Meriendas <i
                  class="d-flex justify-content-end fa-solid fa-cookie-bite fa-bounce"
                  style="color:white;font-size:30px;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                ></i></a
              >
            </li>
            <li>
              <a
                class="dropdown-item mb-2 fs-3 fw-bold text-white"
                style="background:#ffc5fc;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                href="tortas"
                >Tortas <i
                  class="d-flex justify-content-end fa-solid fa-cake-candles fa-fade"
                  style="color:white;font-size:30px;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                ></i></a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a
                class="dropdown-item fs-3 fw-bold text-white"
                style="background:#ffc5fc;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                href="contactanos"
                >Contactanos <i
                  class="d-flex justify-content-end fa-solid fa-mobile-screen fa-fade"
                  style="color:white;font-size:30px;text-shadow: 4px 4px 2px rgba(0,0,0,0.6);"
                ></i></a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <span class="nav-link disabled" aria-disabled="true"></span>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          id="buscador"
          type="search"
          placeholder="¿Que deseas?"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

<a
  class="navbar-brand btn-flotante"
  href="https://wa.me/584247072403?text=Hola%20quiero%20más%20información"
>
  <img
    src="/c.png"
    alt="Logo"
    width="100"
    height="100"
    class="d-inline-block align-text-top"
  />
  <p class="fw-bold text-success m-2">Whatsapp</p>
</a>

<style>
  .btn-flotante {
    position: fixed;
    bottom: 365px;
    z-index: 99;
  }
</style>
