<template>
  <footer class="footer bg-dark text-white pt-4">
    <div class="container">
      <div class="row">
        <!-- Seção sobre a academia -->
        <div class="col-md-4">
          <h5 class="text-uppercase">Dass SEST</h5>
          <p>
            Bem-vindo à Dass SEST, onde ajudamos você a atingir seus objetivos
            de saúde e bem-estar com uma estrutura moderna e os melhores
            profissionais.
          </p>
        </div>

        <!-- Links rápidos -->
        <div class="col-md-4">
          <h5 class="text-uppercase">Links Rápidos</h5>
          <ul class="list-unstyled">
            <li><a href="#!" class="text-white">Sobre Nós</a></li>
            <li><a href="#!" class="text-white">Planos</a></li>
            <li><a href="#!" class="text-white">Horários</a></li>
            <li><a href="#!" class="text-white">Contato</a></li>
          </ul>
        </div>

        <!-- Redes sociais -->
        <div class="col-md-4">
          <h5 class="text-uppercase">Entre em Contato</h5>
          <a href="#" class="text-white me-3">
            <i class="mdi mdi-whatsapp mdi-24px"></i>
          </a>
          <a href="#" class="text-white me-3">
            <i class="mdi mdi-instagram mdi-24px"></i>
          </a>
          <a href="#" class="text-white me-3">
            <i class="mdi mdi-email mdi-24px"></i>
          </a>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <p class="mb-0">
            &copy; 2024 Dass SEST. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  padding: 40px 0;
  background-color: #343a40;
}

.footer a {
  color: #1db954 !important;
  text-decoration: none;
}

.footer a:hover {
  color: #f8f9fa !important;
}

.footer .fab {
  transition: color 0.3s ease;
}

.footer .fab:hover {
  color: #1db954;
}

@media screen and (max-width: 880px) {
  .footer {
    margin-top: 200px;
  }
}
</style>
