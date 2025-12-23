<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        daisyUI
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <NuxtLink to="/login" class="btn btn-accent">
        Sign in with github
        <Icon name="tabler:brand-github" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>
