import Select from './select/select'
import Dialog from './dialog/dialog'
import Toast from './toast/toast'
import Message from './message/message'
import Button from './button/button'
import Tree from './tree/tree'
import Card from './card/card'
import Page from './page/page'
import Form from './form/form'
import Radio from './radio/radio'
import Checkbox from './checkbox/checkbox'
import Input from './input/input'
import Switch from './switch/switch'
import Tooltip from './tooltip/tooltip'
  
export default [
  { path: 'select', component: Select, meta: {title: 'Select 选择器'} },
  { path: 'dialog', component: Dialog, meta: {title: 'Dialog 对话窗'} },
  { path: 'toast', component: Toast, meta: {title: 'Toast 轻提示'} },
  { path: 'message', component: Message, meta: {title: 'Message 全局提示'} },
  { path: 'button', component: Button, meta: {title: 'Button 按钮'} },
  { path: 'tree', component: Tree, meta: {title: 'Tree 树'} },
  { path: 'card', component: Card, meta: {title: 'Card 卡片'} },
  { path: 'pages', component: Page, meta: {title: 'Page 页码'} },
  { path: 'form', component: Form, meta: {title: 'Form 表单'} },
  { path: 'radio', component: Radio, meta: {title: 'Radio 单选框'} },
  { path: 'checkbox', component: Checkbox, meta: {title: 'Checkbox 复选框'} },
  { path: 'input', component: Input, meta: {title: 'Input 输入框'} },
  { path: 'switch', component: Switch, meta: {title: 'Switch 开关'} },
  { path: 'tooltip', component: Tooltip, meta: {title: 'Tooltip 开关'} },
  { path: '', redirect: 'button'}
]
