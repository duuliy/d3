import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

  it('存在val', () => {
    expect(vm.val).to.exist;
  })

  it('val的值为0', () => {
    expect(vm.val).to.equal(0)
  })

  it('has a created hook', () => {
    expect(typeof HelloWorld.created).to.equal('function')
  })

  it('计数器在点击按钮时自增', async () => {
    await vm.$el.querySelector('button').click()
    await expect(vm.val).to.equal(1)
  })
})


