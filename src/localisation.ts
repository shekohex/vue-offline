import 'intl';
import 'intl/locale-data/jsonp/en.js';
import Vue from 'vue';
import VueLocale from 'vue-ts-locale';
import Config from '@/config.json';
import EnglishMessageText from '@/locale/en.json';

Vue.use(VueLocale, {
  language: Config.language,
  currency: Config.currency,
  messages: EnglishMessageText
});
