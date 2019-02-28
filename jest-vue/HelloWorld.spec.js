import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'


// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor().$mount()
  return vm.$el.querySelector(propsData).textContent
}



describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })

  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function')
  })

  // 检查 mount 中的组件实例
  it('sets the correct default data', () => {
    expect(vm.val).toEqual(0)
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', async() => {
    await vm.$el.querySelector('button').click()
    await expect(vm.val).toEqual(1)
  })


  it('renders correctly with different props', () => {
    expect(getRenderedText(HelloWorld, '.hello h2')).toBe('Essential Links')
  })

  it('updates the rendered message when vm.message updates', done => {
    vm.msg = 'foo'
  
    // 在状态改变后和断言 DOM 更新前等待一刻
    Vue.nextTick(() => {
      expect(vm.msg).toBe('foo')
      done()
    })
  })

  it('sssasda',()=>{
    vm.change()
    expect(vm.change).toBeTruthy()
  })
})
