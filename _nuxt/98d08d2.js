(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{376:function(t,e,n){t.exports=n.p+"img/mainlogo.fadb36e.png"},379:function(t,e,n){"use strict";n.r(e);n(2),n(1);var o={data:function(){return{menus:[],isActive:!1,menu:[],isOpen:!1}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){console.log(e.data),t.menus=e.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=n(78),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"phone_footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"logo_phonefooter"},[o("img",{attrs:{src:n(376),alt:""}}),t._v(" "),o("div",[t._v(t._s(t.$t("title")))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);