<template>
  <div class="container mt--8 pb-5">
    <div class="row justify-content-center pt-5">
      <div class="col-md-5 text-center">
        <!--<H3 class="text-center">Welcome!</H3>-->
        <img src="@/static/images/WashPoint-Logo-Final-W-1024x202.png" alt="logo" style="width: 160px" />
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header pb-4">
            <div class="text-center pb-2">
              <small>Sign in with</small>
            </div>
            <div class="text-center">
              <a href="#" class="btn btn-outline-secondary px-4">
                <span class="icon"><font-awesome-icon :icon="['fab', 'google']" style="font-size: 18px" /></span>
                <span>google</span>
              </a>
              <a href="#" class="btn btn-outline-secondary">
                <span class="icon"><font-awesome-icon :icon="['fab', 'facebook']" style="font-size: 18px" /></span>
                <span>facebook</span>
              </a>
            </div>
          </div>
          <div class="card-body px-lg-5 py-lg-3">
            <div class="text-center pb-3">
              <small>Or sign with credential</small>
            </div>
            <form @submit.prevent="login">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><font-awesome-icon icon="envelope" style="font-size: 18px" /></span>
                  </div>
                  <input id="email" v-model="loginData.email" type="text" class="form-control" placeholder="Enter email" name="email" required />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="width: 45px" @click="clicklock"><font-awesome-icon :icon="keylock ? 'lock' : 'lock-open'" style="font-size: 18px" /></span>
                  </div>
                  <input id="password" v-model="loginData.password" :type="keylock ? 'password' : 'text'" class="form-control" placeholder="Enter password" name="password" required />
                </div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-switch">
                  <input id="switch1" type="checkbox" class="custom-control-input" />
                  <label class="custom-control-label" for="switch1">Remember Me</label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary w-100">
                <span class="icon"><font-awesome-icon :icon="['fas', 'sign-in-alt']" /> Login</span>
              </button>
            </form>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col">
                <a href="#"
                  ><span class="icon"><font-awesome-icon :icon="['fas', 'address-book']" style="font-size: 16px" /> <small> Forget password</small></span></a
                >
              </div>
              <div class="col text-right justify-contend-end">
                <a href="#"
                  ><small>
                    <span class="icon"><font-awesome-icon :icon="['fas', 'registered']" style="font-size: 16px" /> Register</span>
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keylock: 1,
      loginData: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    clicklock() {
      this.keylock = !this.keylock
    },

    async login() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.loginData,
        })
        this.$router.push('/dashboard')
        console.log(response)
        // alert(response)
      } catch (err) {
        alert(err.response.data)
      }
    },
  },
}
</script>
