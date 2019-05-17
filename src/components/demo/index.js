

const componentsRouter = [
  { path: 'select', component: () => import('@/components/demo/select/select'), meta: { title: 'Select 选择器' } },
  { path: 'dialog', component: () => import('@/components/demo/dialog/dialog'), meta: { title: 'Dialog 对话窗' } },
  { path: 'toast', component: () => import('@/components/demo/toast/toast'), meta: { title: 'Toast 轻提示' } },
  { path: 'message', component: () => import('@/components/demo/message/message'), meta: { title: 'Message 全局提示' } },
  { path: 'button', component: () => import('@/components/demo/button/button'), meta: { title: 'Button 按钮' } },
  { path: 'tree', component: () => import('@/components/demo/tree/tree'), meta: { title: 'Tree 树' } },
  { path: 'card', component: () => import('@/components/demo/card/card'), meta: { title: 'Card 卡片' } },
  { path: 'pages', component: () => import('@/components/demo/page/page'), meta: { title: 'Page 页码' } },
  { path: 'progress', component: () => import('@/components/demo/progress/progress'), meta: { title: 'Progress 进度条' } },
  { path: 'form', component: () => import('@/components/demo/form/form'), meta: { title: 'Form 表单' } },
  { path: 'radio', component: () => import('@/components/demo/radio/radio'), meta: { title: 'Radio 单选框' } },
  { path: 'checkbox', component: () => import('@/components/demo/checkbox/checkbox'), meta: { title: 'Checkbox 复选框' } },
  { path: 'input', component: () => import('@/components/demo/input/input'), meta: { title: 'Input 输入框' } },
  { path: 'switch', component: () => import('@/components/demo/switch/switch'), meta: { title: 'Switch 开关' } },
  { path: 'rate', component: () => import('@/components/demo/rate/rate'), meta: { title: 'Rate 评分' } },
  { path: 'tooltip', component: () => import('@/components/demo/tooltip/tooltip'), meta: { title: 'Tooltip 开关' } },
  { path: '', redirect: 'button' }
]
export default componentsRouter
