# react 多环境运行打包配置 
## https://blog.csdn.net/qq_42165062/article/details/111356751?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control

1. 首先需要先安装一个插件(npm/cnpm) cnpm i dotenv-cli -D
2. ```

"start:dev": "dotenv -e .env.dev react-app-rewired start",
    "start:test": "dotenv -e .env.devtest react-app-rewired start",
    "start:prd": "dotenv -e .env.devprd react-app-rewired start",
    "build:dev": "dotenv -e .env.prddev react-app-rewired build",
    "build:test": "dotenv -e .env.prdtest react-app-rewired build",
    "build:prd": "dotenv -e .env.prdprd react-app-rewired build",

```
## process.env.