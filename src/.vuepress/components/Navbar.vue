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
  padding: 0 0.1rem;
  font-weight: 600;
  font-size: 1rem;
}
.vp-dropdown-title {
  border-width: 0;
  background: transparent;
  cursor: pointer;
  padding: 0 0.1rem;
  font-weight: 600;
  font-size: 1rem;
  font-family: inherit;
  line-height: inherit;
  cursor: inherit;
}

.vp-site-name {
  position: relative;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
