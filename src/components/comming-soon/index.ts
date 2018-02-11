import Vue from 'vue';
import { Component } from 'vue-typed';
import template from './comming-soon.vue';
import Config from '@/config.json';
@Component({
  mixins: [template]
})
export default class CommingSoon extends Vue {
  soon: string = 'Comming Soon';
  created() {
    document.title = 'Comming Soon..';
  }
}
