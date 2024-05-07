import Mock from 'mockjs'

Mock.mock('/api/test', 'get', () => {
  return {
    error: 0,
    data: {
      name: `信封老师 ${Date.now()}`,
    },
  }
})
