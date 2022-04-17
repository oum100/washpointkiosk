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
            <span class="col my-auto text-right" style="font-size: 1.2vw">State Reference:</span>
            <span class="badge badge-pill badge-success px-2 mx-2 my-auto order-1">Ready</span>
            <span class="badge badge-pill badge-danger px-2 mx-2 my-auto order-2">Busy</span>
            <span class="badge badge-pill badge-primary mx-2 my-auto order-3">Booked</span>
            <span class="badge badge-pill badge-secondary mx-2 my-auto order-4">Offline</span>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="d-flex flex-row justify-content-center">
              <div v-for="(asset, index) in assets.filter((x) => x.type === 'dryer')" :key="index" class="col" :name="asset.name">
                <Machine :asset="asset" />
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
              <em><strong>Washer machine</strong></em>
            </H3>
          </div>
          <div class="col bg-info d-flex justify-content-end">
            <span class="col my-auto text-right" style="font-size: 1.2vw">State Reference:</span>
            <span class="badge badge-pill badge-success px-2 mx-2 my-auto order-1">Ready</span>
            <span class="badge badge-pill badge-danger px-2 mx-2 my-auto order-2">Busy</span>
            <span class="badge badge-pill badge-primary mx-2 my-auto order-3">Booked</span>
            <span class="badge badge-pill badge-secondary mx-2 my-auto order-4">Offline</span>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="d-flex flex-row justify-content-center">
              <div v-for="(asset, index) in assets.filter((x) => x.type === 'washer')" :key="index" class="col" :name="asset.name">
                <Machine :asset="asset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Machine from '@/components/Kiosk/machine.vue'

export default {
  components: {
    Machine,
  },
  data() {
    return {
      count: 0,
      calTotalPrice: 0,
      assets: [
        {
          uuid: 'WH0000001',
          name: 'WH-001',
          type: 'washer',
          state: 'ready',
          selectPrice: 40,
          timeRemain: 29,
          products: [
            { sku: 'Sim001-01', price: 30, qty: 25, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 30, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 60, unit: 'm' },
          ],
        },
        {
          uuid: 'DR0000001',
          name: 'DR-002',
          type: 'dryer',
          state: 'busy',
          selectPrice: 50,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 45, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 60, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 75, unit: 'm' },
          ],
        },
        {
          uuid: 'WH0000001',
          name: 'WH-003',
          type: 'washer',
          state: 'busy',
          selectPrice: 40,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 25, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 30, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 60, unit: 'm' },
          ],
        },
        {
          uuid: 'DR0000001',
          name: 'DR-004',
          type: 'dryer',
          state: 'ready',
          selectPrice: 50,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 45, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 60, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 75, unit: 'm' },
          ],
        },
        {
          uuid: 'WH0000001',
          name: 'WH-005',
          type: 'washer',
          state: 'ready',
          selectPrice: 40,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 25, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 30, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 60, unit: 'm' },
          ],
        },
        {
          uuid: 'DR0000001',
          name: 'DR-006',
          type: 'dryer',
          state: 'ready',
          selectPrice: 50,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 45, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 60, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 75, unit: 'm' },
          ],
        },
        {
          uuid: 'WH0000001',
          name: 'WH-007',
          type: 'washer',
          state: 'ready',
          selectPrice: 40,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 25, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 30, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 60, unit: 'm' },
          ],
        },
        {
          uuid: 'DR0000001',
          name: 'DR-008',
          type: 'dryer',
          state: 'ready',
          selectPrice: 50,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 45, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 60, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 75, unit: 'm' },
          ],
        },
        {
          uuid: 'WH0000001',
          name: 'WH-009',
          type: 'washer',
          state: 'ready',
          selectPrice: 40,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 25, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 30, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 60, unit: 'm' },
          ],
        },
        {
          uuid: 'DR0000001',
          name: 'DR-010',
          type: 'dryer',
          state: 'ready',
          selectPrice: 50,
          timeRemain: '60',
          products: [
            { sku: 'Sim001-01', price: 30, qty: 45, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 60, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 75, unit: 'm' },
          ],
        },
        {
          uuid: 'WH0000001',
          name: 'WH-011',
          type: 'washer',
          state: 'offline',
          selectPrice: 40,
          timeRemain: 29,
          products: [
            { sku: 'Sim001-01', price: 30, qty: 25, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 30, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 60, unit: 'm' },
          ],
        },
        {
          uuid: 'DR0000001',
          name: 'DR-012',
          type: 'dryer',
          state: 'busy',
          selectPrice: 50,
          timeRemain: 30,
          products: [
            { sku: 'Sim001-01', price: 30, qty: 45, unit: 'm' },
            { sku: 'Sim001-02', price: 40, qty: 60, unit: 'm' },
            { sku: 'Sim001-03', price: 50, qty: 75, unit: 'm' },
          ],
        },
      ],
    }
  },
  computed: {},
  methods: {
    clickSubmit() {
      alert('Hello Submit')
    },
    clickCancel() {
      alert('Hello Cancel')
    },
  },
}
</script>
