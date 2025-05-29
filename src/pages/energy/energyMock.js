// 能源管理模块 mock 数据和工具函数

function randomName(prefix) {
  const names = ['A区','B区','C区','D区','E区','F区','G区','H区','I区','J区','K区','L区','M区','N区','O区','P区','Q区','R区','S区','T区'];
  return prefix + names[Math.floor(Math.random()*names.length)] + (Math.floor(Math.random()*10)+1);
}
function randomStatus() { return Math.random() > 0.15 ? '正常' : '异常'; }
function randomDate() { const d = new Date(2025,4,Math.floor(Math.random()*30)+1,8+Math.floor(Math.random()*10),Math.floor(Math.random()*60),0); return d.toISOString().slice(0,19).replace('T',' '); }

export const initOverviewData = Array.from({length: 40}, (_,i) => ({
  id: i+1,
  name: randomName('设备'),
  consumption: Math.floor(Math.random()*200+20),
  lastUpdate: randomDate(),
  status: randomStatus()
}));
export const initStatData = [];
export const initAlarmList = [];
export const initWaterList = Array.from({length: 30}, (_,i) => ({
  id: i+1,
  name: randomName('水表'),
  consumption: Math.floor(Math.random()*100+10),
  lastUpdate: randomDate(),
  status: randomStatus()
}));
export const initGasList = Array.from({length: 25}, (_,i) => ({
  id: i+1,
  name: randomName('气表'),
  consumption: Math.floor(Math.random()*80+5),
  lastUpdate: randomDate(),
  status: randomStatus()
}));

export const statData = [
  { date: '2025-05', electric: 210, water: 60, gas: 40 },
  { date: '2025-05', electric: 220, water: 65, gas: 45 },
  { date: '2025-05', electric: 230, water: 70, gas: 50 },
  { date: '2025-05', electric: 250, water: 75, gas: 55 },
  { date: '2025-05', electric: 260, water: 80, gas: 60 },
];

// 可根据实际页面内容补充 