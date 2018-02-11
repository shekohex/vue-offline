<template>
  <div id="app" class="container is-fluid">
    <transition name="router" mode="out-in">
      <router-view class="view router-view" />
    </transition>
  </div>
</template>;
