<template>
  <nav>
    <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <!-- Dropdown Trigger -->
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
    </div>
  </nav>

</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
  nav .nav-wrapper{
    padding: 0 20px;
  }
  .navbar nav{
    /* 上0 右邊空出20px */
    padding: 0 20px;
  }
</style>
