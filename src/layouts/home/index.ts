import Vue from 'vue';
import { Component } from 'vue-typed';
import CommingSoon from '../../components/comming-soon';
import { OfflineStorage } from './../../common/offline-storage';
import template from './home.vue';
@Component({
  mixins: [template],
  components: {
    CommingSoon
  }
})
export default class Home extends Vue {}
