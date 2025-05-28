import Mock from 'mockjs';

// 模拟视频监控数据
Mock.mock('/api/video', 'get', {
  'list|10': [{
    'id|+1': 1,
    'location': '@city',
    'status|1': ['在线', '离线'],
    'lastUpdate': '@datetime',
  }],
});

// 模拟门禁管理数据
Mock.mock('/api/access', 'get', {
  'list|10': [{
    'id|+1': 1,
    'location': '@city',
    'status|1': ['正常', '异常'],
    'lastUpdate': '@datetime',
  }],
});

// 模拟停车管理数据
Mock.mock('/api/parking', 'get', {
  'list|10': [{
    'id|+1': 1,
    'location': '@city',
    'status|1': ['空闲', '已占用'],
    'lastUpdate': '@datetime',
  }],
});

// 模拟访客管理数据
Mock.mock('/api/visitor', 'get', {
  'list|10': [{
    'id|+1': 1,
    'name': '@cname',
    'visitTime': '@datetime',
    'status|1': ['在访', '已离开'],
  }],
});

// 模拟能耗管理数据
Mock.mock('/api/energy', 'get', {
  'list|10': [{
    'id|+1': 1,
    'name': '@city',
    'consumption|1-1000': 1,
    'lastUpdate': '@datetime',
  }],
});

// 模拟设备运维数据
Mock.mock('/api/maintenance', 'get', {
  'list|10': [{
    'id|+1': 1,
    'name': '@city',
    'status|1': ['正常', '异常'],
    'lastUpdate': '@datetime',
  }],
});

// 模拟消防管理数据
Mock.mock('/api/fire', 'get', {
  'list|10': [{
    'id|+1': 1,
    'name': '@city',
    'status|1': ['正常', '异常'],
    'lastUpdate': '@datetime',
  }],
});

// 模拟智慧办公数据
Mock.mock('/api/office', 'get', {
  'list|10': [{
    'id|+1': 1,
    'name': '@city',
    'status|1': ['空闲', '已占用'],
    'lastUpdate': '@datetime',
  }],
}); 