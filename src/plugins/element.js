import {
  Badge, Breadcrumb, BreadcrumbItem, Button,
  Card, Checkbox, CheckboxButton, CheckboxGroup, Col,
  Dialog, Dropdown, DropdownItem, DropdownMenu,
  Form, FormItem,
  Icon, Input,
  Loading,
  Menu, MenuItem, Message,
  Notification,
  Pagination, Popover,
  Row,
  Scrollbar, Select, Submenu,
  Table, TableColumn, Tag, Tooltip
} from 'element-ui';
import Vue from 'vue';

// 按需引入组件
Vue.use(Badge);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Input)
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Pagination);
Vue.use(Popover);
Vue.use(Row);
Vue.use(Scrollbar);
Vue.use(Select);
Vue.use(Submenu);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.use(Tooltip);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;

