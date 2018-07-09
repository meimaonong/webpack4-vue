const path = require('path')

const root = path.join(__dirname, './../')
const app = path.join(root, 'app')
const src = path.join(app, 'src')
const tpl = path.join(src, 'tpl')
const dist = path.join(root, 'dist')
const static_file = path.join(dist, 'static_file')
const wp_views = path.join(src, 'views')
const wp_pages = path.join(wp_views, 'pages')
const views_dir = path.join(root, 'views')

// 项目路径配置
module.exports = {
  root, // 根路径
  app, // app 路径
  dist, // 前端文件版本
  static_file, // 静态文件图片、字体
  src, // webpack src路径
  tpl, // webpack src路径
  wp_views, // webpack view路径
  wp_pages, // webpack page路径
  views_dir, // 模板路径 
}
