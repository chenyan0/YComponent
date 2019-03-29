import vue from 'vue'
import messageComponent from './message.vue'

const MessageConstructor = vue.extend(messageComponent)
// 第一次显示
let queue = []
const iconTypes = {
  'info': 'comment',
  'success': 'check-circle',
  'warning': 'exclamation-circle',
  'error': 'times-circle',
  'loading': 'spinner'
}
const prefixCls = 'v-message'
function showMessage(type, options = {}) {
  const messageDom = new MessageConstructor({
    data() {
      return {
        text: typeof options === 'string' ? options : options.text,
        icon: iconTypes[type],
        top: options.top || 16,
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`, [`${prefixCls}-${type}`]
        ]
      }
    }
  }).$mount() //手动地挂载一个未挂载的实例
  document.body.appendChild(messageDom.$el)
  messageDom.visible = true
  queue.push(messageDom)
  setTimeout(() => { messageDom.visible = false }, options.duration || 3000)
}

export default {
  name: 'message',
  info(options) {
    showMessage('info', options)
  },
  success(options) {
    showMessage('success', options)
  },
  error(options) {
    showMessage('error', options)
  },
  warning(options) {
    showMessage('warning', options)
  },
  loading(options) {
    showMessage('loading', options)
  }
}
