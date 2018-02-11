import Vue from 'vue';
import { Component } from 'vue-typed';
import template from './no-cache.vue';
@Component({
  mixins: [template]
})
export default class NoCache extends Vue {}
