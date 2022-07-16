import { 
  ElButton, 
  ElRow, 
  ElCol,
  ElHeader,
  ElMain,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElDescriptions,
  ElDescriptionsItem,
  ElTable,
  ElTableColumn
} from 'element-plus';

export default (app) => {
  app.component('ElButton', ElButton);
  app.component('ElRow', ElRow);
  app.component('ElCol', ElCol);
  app.component('ElHeader', ElHeader);
  app.component('ElMain', ElMain);
  app.component('ElContainer', ElContainer);
  app.component('ElMenu', ElMenu);
  app.component('ElMenuItem', ElMenuItem);
  app.component('ElForm', ElForm);
  app.component('ElFormItem', ElFormItem);
  app.component('ElInput', ElInput);
  app.component('ElSelect', ElSelect);
  app.component('ElOption', ElOption);
  app.component('ElDescriptions', ElDescriptions);
  app.component('ElDescriptionsItem', ElDescriptionsItem);
  app.component('ElTable', ElTable);
  app.component('ElTableColumn', ElTableColumn);
};