<template>
  <header class="header">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="social-links">
              <a href="#"><i class="ti ti-brand-facebook"></i></a>
              <a href="#"><i class="ti ti-brand-twitter"></i></a>
              <a href="#"><i class="ti ti-brand-youtube"></i></a>
              <a href="#"><i class="ti ti-brand-instagram"></i></a>
            </div>
          </div>
          <div class="col">
            <div class="quick-links">
              <a href="#">Yardım</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-bar">
      <div class="container">
        <div class="row g-0">
          <div class="col-12 col-md-12 col-lg-3">
            <div class="mobile-supported">
              <NuxtLink to="/" class="brand ms-lg-0 mx-auto"><img src="/img/logo.svg" alt="Logo"></NuxtLink>
              <button @click="mobileNav()" class="mobile-menu-trigger d-inline d-md-none" :class="mobileNavActive ? ' active' : ''">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <form class="search mt-2 mt-md-auto">
              <input type="text" placeholder="Ne aramıştınız?">
              <button type="submit"><i class="ti ti-search"></i></button>
            </form>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="main-bar-btn justify-content-center justify-content-md-start mt-2 mt-md-auto me-md-auto ms-md-5">
              <a href="#" class="account">
                <i class="ti ti-user"></i>
                <span class="name">
                  <strong>Giriş Yap</strong>
                  <span>veya üye ol</span>
                </span>
              </a>
              <a href="#" class="cart">
                <i class="ti ti-shopping-cart"></i>
                <span class="name">
                  <strong>Sepet</strong>
                  <span>0,00TL</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation scrollbar" :class="mobileNavActive ? 'd-block' : 'd-none d-md-block'">
      <div class="container-xl">
        <div class="row g-0">
          <ul class="navbar-nav flex-md-row">
            <li class="nav-item">
              <a class="nav-link" href="#">Beyaz Eşya</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Beyaz Eşya</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Beyaz Eşya</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ayakkabı</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Televizyon ve Ses Sistemleri</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ev Eşyaları</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kişisel Bakım</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mutfak Gereçleri</a>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Diğer
              </a>
              <ul class="dropdown-menu">
                <li><h6 class="dropdown-header">Diğer Kategoriler</h6></li>
                <li><a class="dropdown-item" href="#">Kişisel Bakım</a></li>
                <li><a class="dropdown-item" href="#">Enstrüman</a></li>
                <li><a class="dropdown-item" href="#">Yazılım</a></li>
                <li class="dropend">
                  <a class="dropdown-item dropdown-toggle" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#">Level 3</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Kişisel Bakım</a></li>
                    <li><a class="dropdown-item" href="#">Enstrüman</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      mobileNavActive: false
    }
  },
  methods: {
    mobileNav() {
      this.mobileNavActive = !this.mobileNavActive;
    }
  }
}
</script>