const IP = '39.106.63.148';

// 查询地面站信息
export const station = 'http://' + IP + '/station/rest/station/query';
// 查询卫星信息
export const satellite = 'http://' + IP + '/station/rest/satellite/query';
// 查询平台信息
export const statistic = 'http://' + IP + '/station/rest/housekeep/statistic';
// 订阅卫星轨迹
export const smart = 'http://' + IP + '/station/rest/housekeep/smart';
// 查询卫星相关的信息
export const curInfo = 'http://' + IP + '/station/rest/housekeep/current';
// 查询地面站状态
export const stationStatus = 'http://' + IP + '/station/rest/platform/status';
// websocket 订阅
export const WS_SATELLITE = 'ws://' + IP + '/station/rest/websocket/satellite/status.do';

export const CMD = { ADD: 1, REMOVE: 2, ADD_TELEMETRY: 3, REMOVE_TELEMETRY: 4 };
