import { ElButton, ElRow, ElCol } from 'element-plus';

export default (app) => {
  app.component('ElButton', ElButton);
  app.component('ElRow', ElRow);
  app.component('ElCol', ElCol);
};