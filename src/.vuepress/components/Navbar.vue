<template>
  <Navbar> </Navbar>
</template>

<script setup>
import Navbar from "@theme-hope/modules/navbar/components/Navbar";
</script>

<style>
 .vp-navbar {
   /*  background-color: rgba(153, 198, 254, 0.25) !important; */
    padding: 0 var(--navbar-horizontal-padding);
    box-shadow: none;
    backdrop-filter: saturate(150%) blur(12px);
    height: 4rem;
  }

  .vp-dropdown{
    /* background-color: rgba(169, 222, 232, 0.25) !important; */
    border: none;
    box-shadow: none;
    box-shadow: none;
    top: calc(var(--navbar-height) - 14px);
    margin: 0 0;
    backdrop-filter: saturate(150%) blur(12px) !important;
  }

  .vp-navbar .auto-link {
  padding: 0 0rem;
  /* font-weight: 500; * LC */
  font-size: 1.2rem;
  font-family: 'Viga',sans-serif;
}
.vp-dropdown-item {
    color: inherit;
    line-height: 1.7rem;
    padding-top: 0.25rem; /* LC */
    padding-bottom: 0.25rem; /* LC */
}

.vp-dropdown-title {
  border-width: 0;
  background: transparent;
  cursor: pointer;
  padding: 0 0rem;
  /* font-weight: 500; * LC */
  font-size: 1.2rem;
  font-family:  'Viga',sans-serif;
  line-height: inherit;
  cursor: inherit;
}

.vp-site-name {
  font-family: "PangMenZhengDaoBiaoTiTiMianFeiBan",sans-serif;
  position: relative;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f3e4c0;
}
@media (max-width: 959px){
  .vp-navbar{
    height: 3.25rem;
  }
}
</style>
