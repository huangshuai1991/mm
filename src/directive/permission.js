import Vue from 'vue'
import { includePermission } from '../utils/permission'

const permissionHandle = (el, binding) => {
  const permissions = binding.value
  if (!includePermission(permissions)) {
    el.classList.add('hide')
  } else {
    el.classList.remove('hide');
  }
}

const permission = Vue.directive('permission', {
  inserted: permissionHandle,
  update: permissionHandle
});

export default permission