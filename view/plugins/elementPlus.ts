import ElementPlus from 'element-plus';
import { onCreateApp } from '../utils';
import 'element-plus/lib/theme-chalk/index.css';

onCreateApp(app => {
  app?.use(ElementPlus);
});
