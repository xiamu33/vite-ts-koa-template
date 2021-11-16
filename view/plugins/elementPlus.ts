import ElementPlus from 'element-plus';
import { onCreateApp } from '../utils';
import 'element-plus/theme-chalk/index.css';

onCreateApp(app => {
  app!.use(ElementPlus);
});
