import Vue from 'vue'

Vue.directive('highlight', {
    inserted: function(el) {
        el.style.color = 'orange';
    }
});