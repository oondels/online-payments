<template>
  <footer class="footer bg-dark text-white pt-4">
    <div class="container">
      <div class="row">
        <!-- Seção sobre a academia -->
        <div class="col-md-4">
          <h5 class="title-footer">Academia Aeesi</h5>
          <p>
            Bem-vindo à Academia Aeesi, onde ajudamos você a atingir seus
            objetivos de saúde e bem-estar com uma estrutura moderna e os
            melhores profissionais.
          </p>
        </div>

        <!-- Links rápidos -->
        <div class="col-md-4">
          <h5 class="text-uppercase">Links Rápidos</h5>
          <ul class="list-unstyled">
            <li><a href="#!" class="text-white">Sobre Nós</a></li>
            <li>
              <a
                href="https://hendriusfelix.com.br/"
                target="_blank"
                class="text-white"
              >
                Desenvolvedor
              </a>
            </li>
          </ul>
        </div>

        <!-- Redes sociais -->
        <div class="col-md-4">
          <h5 class="text-uppercase">Entre em Contato</h5>
          <a
            href="https://wa.me/5575981628198?text=Olá%2C%20gostaria%20de%20mais%20informações."
            class="text-white me-3"
            target="_blank"
          >
            <i class="mdi mdi-whatsapp mdi-24px"></i>
          </a>
          <a
            href="https://www.instagram.com/essencia.evolutiva/"
            class="text-white me-3"
            target="_blank"
          >
            <i class="mdi mdi-instagram mdi-24px"></i>
          </a>
          <a
            href="mailto:aeesi.academia@gmail.com?subject=Informações%20sobre%20a%20academia&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20academia."
            class="text-white me-3"
            target="_blank"
          >
            <i class="mdi mdi-email mdi-24px"></i>
          </a>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <p class="mb-0">&copy; 2024 Aeesi. Todos os direitos reservados.</p>
          <p class="mb-0">
            Desenvolvido por
            <a href="https://hendriusfelix.com.br/" target="_blank">
              Hendrius Félix
            </a>
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

.title-footer {
  color: #1db954;
}

@media screen and (max-width: 880px) {
  .footer {
    margin-top: 350px;
  }
}

@media screen and (max-width: 400px) {
  .footer {
    margin-top: 400px;
  }
}
</style>
