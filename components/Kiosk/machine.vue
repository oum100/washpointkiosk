<template>
  <div class="d-flex justify-content-center">
    <div class="myasset">
      <div v-if="asset.type == 'dryer'">
        <div class="row justify-content-center">
          <div v-if="asset.state == 'busy'" class="d-flex justify-content-center">
            <span style="font-family: Impact; font-size: 2.4vw; color: red">{{ asset.timeRemain }} m.</span>
          </div>
          <div v-else-if="asset.state == 'offline'">
            <img src="@/static/images/OutOfService1.png" class="img-fluid" :alt="asset.name" />
          </div>
          <div v-else>
            <div v-if="asset.products.length == 1" class="row align-items-center">
              <img v-if="asset.selectPrice == asset.products[0].price" src="@/static/images/DRY-P30-T45.png" class="img-fluid" :alt="asset.name" />
            </div>
            <div v-if="asset.products.length == 2" class="row align-items-center">
              <img v-if="asset.selectPrice == asset.products[0].price" src="@/static/images/DRY-P30-T45.png" class="img-fluid" :alt="asset.name" />
              <img v-if="asset.selectPrice == asset.products[1].price" src="@/static/images/DRY-P40-T60.png" class="img-fluid" :alt="asset.name" />
            </div>
            <div v-if="asset.products.length == 3" class="row align-items-center">
              <img v-if="asset.selectPrice == asset.products[0].price" src="@/static/images/DRY-P30-T45.png" class="img-fluid" :alt="asset.name" />
              <img v-if="asset.selectPrice == asset.products[1].price" src="@/static/images/DRY-P40-T60.png" class="img-fluid" :alt="asset.name" />
              <img v-if="asset.selectPrice == asset.products[2].price" src="@/static/images/DRY-P50-T75.png" class="img-fluid" :alt="asset.name" />
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <img v-if="asset.state == 'ready'" src="@/static/images/Dryer-Green-2.png" class="img-fluid" :alt="asset.name" @click="addItem(asset.name)" />
          <img v-if="asset.state == 'booked'" src="@/static/images/Dryer-Blue-2.png" class="img-fluid" :alt="asset.name" @click="selectPrice(asset.name)" />
          <img v-if="asset.state == 'busy'" src="@/static/images/Dryer-Red.gif" class="img-fluid" :alt="asset.name" />
          <img v-if="asset.state == 'offline'" src="@/static/images/Dryer-Gray-2.png" class="img-fluid" :alt="asset.name" />
        </div>
        <div class="row text-center">
          <H5 style="font-size: 1.25vw">{{ asset.name }}</H5>
        </div>
      </div>
      <div v-else>
        <div class="row justify-content-center">
          <div v-if="asset.state == 'busy'" class="d-flex justify-content-center">
            <span style="font-family: Impact; font-size: 2.4vw; color: red">{{ asset.timeRemain }} m.</span>
          </div>
          <div v-else-if="asset.state == 'offline'">
            <img src="@/static/images/OutOfService1.png" class="img-fluid" :alt="asset.name" />
          </div>
          <div v-else>
            <div v-if="asset.products.length == 1" class="row align-items-center">
              <img v-if="asset.selectPrice == asset.products[0].price" src="@/static/images/WSH-P30-T30.png" class="img-fluid" :alt="asset.name" />
            </div>
            <div v-if="asset.products.length == 2" class="row align-items-center">
              <img v-if="asset.selectPrice == asset.products[0].price" src="@/static/images/WSH-P30-T30.png" class="img-fluid" :alt="asset.name" />
              <img v-if="asset.selectPrice == asset.products[1].price" src="@/static/images/WSH-P40-T40.png" class="img-fluid" :alt="asset.name" />
            </div>
            <div v-if="asset.products.length == 3" class="row align-items-center">
              <img v-if="asset.selectPrice == asset.products[0].price" src="@/static/images/WSH-P30-T30.png" class="img-fluid" :alt="asset.name" />
              <img v-if="asset.selectPrice == asset.products[1].price" src="@/static/images/WSH-P40-T40.png" class="img-fluid" :alt="asset.name" />
              <img v-if="asset.selectPrice == asset.products[2].price" src="@/static/images/WSH-P50-T60.png" class="img-fluid" :alt="asset.name" />
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <img v-if="asset.state == 'ready'" src="@/static/images/Washer-Green.png" class="img-fluid" :alt="asset.name" @click="addItem(asset.name)" />
          <img v-if="asset.state == 'booked'" src="@/static/images/Washer-Blue.png" class="img-fluid" :alt="asset.name" @click="selectPrice(asset.name)" />
          <img v-if="asset.state == 'busy'" src="@/static/images/Wahser-Red.gif" class="img-fluid" :alt="asset.name" />
          <img v-if="asset.state == 'offline'" src="@/static/images/Washer-Gray.png" class="img-fluid" :alt="asset.name" />
        </div>
        <div class="row text-center">
          <H5 style="font-size: 1.25vw">{{ asset.name }}</H5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: true,
      default() {
        return {
          uuid: 'ABCDEFGHIGK',
          name: 'Test001',
          type: 'washer',
          state: 'ready',
          selectSKU: { sku: 'TEST001-02', price: 40, qty: 45, unit: 'm' },
          selectPrice: 50,
          timeRemain: 60,
          products: [
            { sku: 'TEST001-01', price: 30, qty: 30, unit: 'm' },
            { sku: 'TEST001-02', price: 40, qty: 45, unit: 'm' },
            { sku: 'TEST001-03', price: 50, qty: 60, unit: 'm' },
          ],
        }
      },
    },
  },
  computed: {
    kiosk() {
      return this.$store.state.kiosk.asset
    },
  },
  methods: {
    addItem() {
      alert('Hello AddItem')
    },
    selectPrice() {
      alert('Hello SelectPrice')
    },
  },
}
</script>

<style scoped>
.myasset {
  width: 110px;
}
</style>
