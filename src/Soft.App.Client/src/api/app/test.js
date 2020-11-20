import request from '@/utils/request'

// 查询测试信息列表
export function listTest(query) {
  return request({
    url: '/app/test/list',
    method: 'get',
    params: query
  })
}

// 查询测试信息详细
export function getTest(testId) {
  return request({
    url: '/app/test/' + testId,
    method: 'get'
  })
}

// 新增测试信息
export function addTest(data) {
  return request({
    url: '/app/test',
    method: 'post',
    data: data
  })
}

// 修改测试信息
export function updateTest(data) {
  return request({
    url: '/app/test',
    method: 'put',
    data: data
  })
}

// 删除测试信息
export function delTest(testId) {
  return request({
    url: '/app/test/' + testId,
    method: 'delete'
  })
}

// 导出测试信息
export function exportTest(query) {
  return request({
    url: '/app/test/export',
    method: 'get',
    params: query
  })
}