<template>
  <div class="container justify-content-center">
    <div class="row mb-1">
      <div class="col col-5">
        <H3>Selected Machine: {{ count }}</H3>
      </div>
      <div class="col col-3">
        <H3>Total Price: {{ calTotalPrice }}</H3>
      </div>
      <div v-if="calTotalPrice > 0" class="col col-4 text-right">
        <button type="button" class="btn btn-success btn-sm" active @click="clickSubmit">Confirm</button>
        <button type="button" class="btn btn-danger btn-sm" active @click="clickCancel">Cencal</button>
      </div>
      <div v-else class="col col-4 text-right">
        <button type="button" class="btn btn-success btn-sm" disabled>Confirm</button>
        <button type="button" class="btn btn-danger btn-sm" disabled>Cencal</button>
      </div>
    </div>

    <div v-if="assets.filter((x) => x.type === 'dryer').length > 0" class="row justify-content-center">
      <div class="card" style="width: 100%">
        <div class="row">
          <div class="col col-6 bg-info text-dark pt-2">
            <H3 style="font-size: 1.5vw">
              <em><strong>Dryer machine</strong></em>
            </H3>
          </div>
          <div class="col bg-info d-flex justify-content-end">
            <span class="col my-auto">Color Reference</span>
            <span class="badge badge-pill badge-success px-2 mx-2 my-auto order-1">Ready</span>
            <span class="badge badge-pill badge-danger px-2 mx-2 my-auto order-2">Busy</span>
            <span class="badge badge-pill badge-primary mx-2 my-auto order-3">Booked</span>
            <span class="badge badge-pill badge-secondary mx-2 my-auto order-4">Offline</span>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div v-for="(asset, index) in assets.filter((x) => x.type === 'dryer')" :key="index" class="col" :name="asset.assetname">
              <div v-if="asset.state == 'busy'" class="row text-center mb-1">
                <span style="font-family: ds-digital-bold; font-size: 2.5vw">00:59</span>
              </div>
              <div v-else-if="asset.state == 'offline'" class="row mt-1 mb-2">
                <img src="@/static/images/OutOfService.png" :alt="asset.assetname" />
              </div>
              <div v-else>
                <div v-if="asset.products.length == 1" class="row align-items-center">
                  <img v-if="asset.productPicked.price == asset.products[0].price" src="@/static/images/DRY-P30-T45.png" class="img-fluid" :alt="asset.assetname" />
                </div>
                <div v-if="asset.products.length == 2" class="row align-items-center">
                  <img v-if="asset.productPicked.price == asset.products[0].price" src="@/static/images/DRY-P30-T45.png" class="img-fluid" :alt="asset.assetname" />
                  <img v-if="asset.productPicked.price == asset.products[1].price" src="@/static/images/DRY-P40-T60.png" class="img-fluid" :alt="asset.assetname" />
                </div>
                <div v-if="asset.products.length == 3" class="row align-items-center">
                  <img v-if="asset.productPicked.price == asset.products[0].price" src="@/static/images/DRY-P30-T45.png" class="img-fluid" :alt="asset.assetname" />
                  <img v-if="asset.productPicked.price == asset.products[1].price" src="@/static/images/DRY-P40-T60.png" class="img-fluid" :alt="asset.assetname" />
                  <img v-if="asset.productPicked.price == asset.products[2].price" src="@/static/images/DRY-P50-T75.png" class="img-fluid" :alt="asset.assetname" />
                </div>
              </div>

              <div class="row align-items-center">
                <img v-if="asset.state == 'ready'" src="@/static/images/Dryer-Green-2.png" class="img-fluid" :alt="asset.assetname" @click="addItem(asset.assetname)" />
                <img v-if="asset.state == 'booked'" src="@/static/images/Dryer-Blue-2.png" class="img-fluid" :alt="asset.assetname" @click="selectPrice(asset.assetname)" />
                <img v-if="asset.state == 'busy'" src="@/static/images/Dryer-Red.gif" class="img-fluid" :alt="asset.assetname" />
                <img v-if="asset.state == 'offline'" src="@/static/images/Dryer-Gray-2.png" class="img-fluid" :alt="asset.assetname" />
              </div>
              <div class="row text-center">
                <H5 style="font-size: 1.2vw">{{ asset.assetname }}</H5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="assets.filter((x) => x.type === 'washer').length > 0" class="row justify-content-center">
      <div class="card" style="width: 100%">
        <div class="row">
          <div class="col col-6 bg-info text-dark pt-2">
            <H3 style="font-size: 1.5vw">
              <em><strong>Washing machine</strong></em>
            </H3>
          </div>
          <div class="col bg-info d-flex justify-content-end">
            <span class="col my-auto">Color Reference</span>
            <span class="badge badge-pill badge-success px-2 mx-2 my-auto order-1">Ready</span>
            <span class="badge badge-pill badge-danger px-2 mx-2 my-auto order-2">Busy</span>
            <span class="badge badge-pill badge-primary mx-2 my-auto order-3">Booked</span>
            <span class="badge badge-pill badge-secondary mx-2 my-auto order-4">Offline</span>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div v-for="(asset, index) in assets.filter((x) => x.type === 'washer')" :key="index" class="col" :name="asset.assetname">
              <div v-if="asset.state == 'busy'" class="row text-center mb-1">
                <span style="font-family: ds-digital-bold; font-size: 2.5vw">00:59</span>
              </div>
              <div v-else-if="asset.state == 'offline'" class="row mt-1 mb-2">
                <img src="@/static/images/OutOfService.png" :alt="asset.assetname" />
              </div>
              <div v-else>
                <div v-if="asset.products.length == 1" class="row align-items-center">
                  <img v-if="asset.productPicked.price == asset.products[0].price" src="@/static/images/WSH-P30-T30.png" class="img-fluid" :alt="asset.assetname" />
                </div>
                <div v-if="asset.products.length == 2" class="row align-items-center">
                  <img v-if="asset.productPicked.price == asset.products[0].price" src="@/static/images/WSH-P30-T30.png" class="img-fluid" :alt="asset.assetname" />
                  <img v-if="asset.productPicked.price == asset.products[1].price" src="@/static/images/WSH-P40-T40.png" class="img-fluid" :alt="asset.assetname" />
                </div>
                <div v-if="asset.products.length == 3" class="row align-items-center">
                  <img v-if="asset.productPicked.price == asset.products[0].price" src="@/static/images/WSH-P30-T30.png" class="img-fluid" :alt="asset.assetname" />
                  <img v-if="asset.productPicked.price == asset.products[1].price" src="@/static/images/WSH-P40-T40.png" class="img-fluid" :alt="asset.assetname" />
                  <img v-if="asset.productPicked.price == asset.products[2].price" src="@/static/images/WSH-P50-T60.png" class="img-fluid" :alt="asset.assetname" />
                </div>
              </div>
              <div class="row align-items-center">
                <img v-if="asset.state == 'ready'" src="@/static/images/Washer-Green.png" class="img-fluid" :alt="asset.assetname" @click="addItem(asset.assetname)" />
                <img v-if="asset.state == 'booked'" src="@/static/images/Washer-Blue.png" class="img-fluid" :alt="asset.assetname" @click="selectPrice(asset.assetname)" />
                <img v-if="asset.state == 'busy'" src="@/static/images/Wahser-Red.gif" class="img-fluid" :alt="asset.assetname" />
                <img v-if="asset.state == 'offline'" src="@/static/images/Washer-Gray.png" class="img-fluid" :alt="asset.assetname" />
              </div>
              <div class="row text-center">
                <H5 style="font-size: 1.2vw">{{ asset.assetname }}</H5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/named

export default {
  data() {
    return {
      enableflag: 0,
      count: 0,
      carts: [],
      assets: [
        {
          assetname: 'WM-0001',
          uuid: 'ECM3VZMCCVBP001',
          type: 'washer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1, hour: '00', min: '30' },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0002',
          uuid: 'ECM3VZMCCVBP002',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
        {
          assetname: 'WM-0003',
          uuid: 'ECM3VZMCCVBP003',
          type: 'washer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0004',
          uuid: 'ECM3VZMCCVBP004',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
        {
          assetname: 'WM-0005',
          uuid: 'ECM3VZMCCVBP005',
          type: 'washer',
          state: 'offline',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0006',
          uuid: 'ECM3VZMCCVBP006',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
        {
          assetname: 'WM-0007',
          uuid: 'ECM3VZMCCVBP007',
          type: 'washer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0008',
          uuid: 'ECM3VZMCCVBP008',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
        {
          assetname: 'WM-0009',
          uuid: 'ECM3VZMCCVBP009',
          type: 'washer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0010',
          uuid: 'ECM3VZMCCVBP010',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
        {
          assetname: 'WM-0011',
          uuid: 'ECM3VZMCCVBP011',
          type: 'washer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0012',
          uuid: 'ECM3VZMCCVBP012',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
        {
          assetname: 'WM-0013',
          uuid: 'YCWGT3LZDKGI013',
          type: 'washer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0014',
          uuid: 'TQAJ3MT1K5TU014',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
        {
          assetname: 'WM-0015',
          uuid: '2NDYWQIKPFS4015',
          type: 'washer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: 'Worm', price: 40, qty: 30, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: 'Cold', price: 30, qty: 25 },
            { sku: 'MA10000106-02', dispSku: 'Worm', price: 40, qty: 30 },
            { sku: 'MA10000106-03', dispSku: 'Hot', price: 50, qty: 40 },
          ],
        },
        {
          assetname: 'DM-0016',
          uuid: 'KYBTVVBC5J8F016',
          type: 'dryer',
          state: 'ready',
          productPicked: { sku: 'MA10000106-01', dispSku: '60m', price: 40, qty: 60, enable: 1 },
          products: [
            { sku: 'MA10000106-01', dispSku: '45m', price: 30, qty: 45 },
            { sku: 'MA10000106-02', dispSku: '60m', price: 40, qty: 60 },
            { sku: 'MA10000106-03', dispSku: '75m', price: 50, qty: 75 },
          ],
        },
      ],
      status: [
        { status: 'ready', color: 'green' },
        { status: 'busy', color: 'red' },
        { status: 'booked', color: 'blue' },
        { status: 'offline', color: 'gray' },
      ],
    }
  },
  computed: {
    calTotalPrice() {
      return this.carts.reduce(function (accumulate, cart) {
        return accumulate + cart.price
      }, 0)
    },
    activeSubmit() {
      if (this.calTotalPrice > 0) return 'active'
      return 'disable'
    },
  },
  methods: {
    selectPrice(item) {
      const inx = this.assets.findIndex((x) => x.assetname === item)

      // alert(this.assets[inx].productPicked.price)

      switch (this.assets[inx].productPicked.price) {
        case this.assets[inx].products[0].price: // Price 30
          if (this.assets[inx].products.length === 1) {
            this.delItem(item, 'ready')
          } else {
            this.delItem(item, 'ready')
            this.assets[inx].productPicked.price = this.assets[inx].products[1].price // Set Price to 40
            this.assets[inx].productPicked.sku = this.assets[inx].products[1].sku
            this.assets[inx].productPicked.dispSku = this.assets[inx].products[1].dispSku
            this.assets[inx].productPicked.qty = this.assets[inx].products[1].qty
          }
          break
        case this.assets[inx].products[1].price: // Price 40
          switch (this.assets[inx].products.length) {
            case 2:
              this.delItem(item, 'booked')
              this.assets[inx].productPicked.price = this.assets[inx].products[0].price // Set Price to 30
              this.assets[inx].productPicked.sku = this.assets[inx].products[0].sku
              this.assets[inx].productPicked.dispSku = this.assets[inx].products[0].dispSku
              this.assets[inx].productPicked.qty = this.assets[inx].products[0].qty
              this.addItem(item)
              break
            case 3:
              this.delItem(item, 'booked')
              this.assets[inx].productPicked.price = this.assets[inx].products[2].price // Set Price to 50
              this.assets[inx].productPicked.sku = this.assets[inx].products[2].sku
              this.assets[inx].productPicked.dispSku = this.assets[inx].products[2].dispSku
              this.assets[inx].productPicked.qty = this.assets[inx].products[2].qty
              this.addItem(item)
              break
          }
          break
        case this.assets[inx].products[2].price: // Price 50
          this.delItem(item, 'booked')
          this.assets[inx].productPicked.price = this.assets[inx].products[0].price // Set Price to 30
          this.assets[inx].productPicked.sku = this.assets[inx].products[0].sku
          this.assets[inx].productPicked.dispSku = this.assets[inx].products[0].dispSku
          this.assets[inx].productPicked.qty = this.assets[inx].products[0].qty
          this.addItem(item)
          break
      }
    },
    addItem(item) {
      const inx = this.assets.findIndex((x) => x.assetname === item)

      // alert(this.assets[inx].productPicked.price)
      // alert(this.assets[inx].productPicked.disabletxt)

      // alert(this.assets.filter((x) => x.type === 'dryer').length)

      this.carts.push({
        assetname: item,
        uuid: this.assets[inx].uuid,
        sku: this.assets[inx].productPicked.sku,
        dispSku: this.assets[inx].productPicked.dispSku,
        qty: this.assets[inx].productPicked.qty,
        price: this.assets[inx].productPicked.price,
      })
      this.count++
      this.assets[inx].state = 'booked'
      this.assets[inx].productPicked.enable = 0
      // alert('Selectd machine:' + item)
    }, // inx is index of selected item
    delItem(item, state) {
      const inx = this.carts.findIndex((x) => x.assetname === item)
      // alert(inx + ' item: ' + item)

      if (inx > -1) {
        const assetinx = this.assets.findIndex((x) => x.assetname === item)
        this.carts.splice(inx, 1)
        this.assets[assetinx].state = state
        this.count--
        this.assets[assetinx].productPicked.enable = 1
      } // inx is index of selected item
    },
    clickSubmit() {
      alert('UUID: ' + this.carts[0].uuid + ' AssetName: ' + this.carts[0].assetname + ' Sku: ' + this.carts[0].sku + ' Price: ' + this.carts[0].price + ' Qty: ' + this.carts[0].qty)
    },
    clickCancel() {
      this.carts.every((item) => {
        this.assets[this.assets.findIndex((x) => x.assetname === item.assetname)].state = 'ready'
        return true
      })
      this.carts = []
      this.count = 0
    },
  },
  watched: {},
}
</script>
<style></style>
