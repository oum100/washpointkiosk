<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <!-- Brand/logo -->
      <a class="navbar-brand" href="/">
        <img src="@/static/images/WashPoint-Logo-Final-W-1024x202.png" alt="logo" style="width: 160px" />
      </a>
      <div class="col col-1 d-flex justify-content-start">
        <span class="badge badge-pill badge-success px-2 mx-2 my-auto">{{ shopName }}</span>
      </div>
      <!-- Links -->
      <ul class="navbar-nav ml-5">
        <li class="nav-item mx-2">
          <a class="nav-link" href="/dashboard"><font-awesome-icon icon="home" /> Dashboard</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/transaction"><font-awesome-icon icon="list" /> Transaction</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/device"><font-awesome-icon icon="microchip" /> Device</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/report"><font-awesome-icon icon="chart-pie" /> Report</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/profile"><font-awesome-icon icon="id-badge" /> Profile</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/kiosk"><font-awesome-icon icon="tv" /> Kiosk</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/ShowMachine"><font-awesome-icon icon="tv" /> Machine</a>
        </li>

        <li v-if="isAuthenticated" class="nav-item mx-2">
          <a class="nav-link" href="/setting"><font-awesome-icon icon="cog" /> Setting</a>
        </li>
      </ul>

      <div class="col col-2">
        <div class="col d-flex justify-content-end">
          <div v-if="!isAuthenticated" class="p-1">
            <button type="button" class="btn btn-outline-primary">
              <a href="/auth/login"><font-awesome-icon icon="sign-in-alt" /> Login</a>
            </button>
          </div>
          <div v-else class="p-1">
            <!-- <button type="button" class="btn btn-outline-secondary text-white" @click="logout">Logout</button> -->
            <a-button type="normal" shape="square" icon="download" :data-id="1" @click="logout">Logout</a-button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  layout: 'Default',
  data() {
    return {
      shopName: 'RegentHome 18',
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated // it check if user isAuthenticated
    },
  },
  methods: {
    clickLogin() {
      alert('Login Click')
    },
    clickExit() {
      alert('Click Exit')
    },
    async logout() {
      await this.$auth.logout() // this method will logout the user and make token to false on the local storage of the user browser
    },
  },
}
</script>

<style></style>
