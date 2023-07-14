---
nav:
  title: langchain
  order: 1
group: 开始使用
title: 安装
order: 1
toc: content
---

# 安装

## 从发布版本安装

安装 LangChain,运行:

```python
pip install langchain
```

LangChain 的最小安装只包含核心功能,它真正的价值需要与各种语言模型服务提供商、数据存储等服务进行集成才能发挥出来。默认情况下,这些集成所需的依赖是不会被安装的。但是,还有两种安装 LangChain 的方式可以带入这些依赖。

要安装与常见语言模型服务提供商集成所需的模块,运行:

    pip install langchain[llms]

要安装与所有集成所需的所有模块,运行:

    pip install langchain[all]

注意如果你使用`zsh`,在将方括号作为参数传递给命令时,需要用引号引起来,例如:

    pip install 'langchain[all]'

这些命令会安装 LangChain 与其他服务集成所需的依赖库。这样你就可以充分利用 LangChain 的集成能力,与不同的语言模型服务和其他服务进行集成,来构建应用程序了。一旦安装完成,你就可以开始开发集成应用了。

## 从源代码安装

如果你想从源代码安装,可以克隆仓库并运行:

    pip install -e .

这将从源代码安装 LangChain,并链接到你的本地仓库。这样你可以在开发过程中获取代码更新。

克隆仓库:

    git clone https://github.com/hwchase17/langchain.git

切换到仓库目录并安装:

    cd langchain
    pip install -e .

使用`-e`选项进行安装,LangChain 就会链接到你的本地仓库。这么做的好处是你可以直接获取源代码的更新,无需重新安装。

从源代码安装是 contrib 开发 LangChain 及测试新功能的推荐方式。一旦安装完成,你就可以开始开发和测试 LangChain 应用了。
