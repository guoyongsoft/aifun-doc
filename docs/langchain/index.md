---
nav:
  title: langchain
  order: 1
group: 官网手册(中文版)
title: 开始使用
order: 0
toc: content
---

# 介绍

**LangChain**是一个用于开发由语言模型支持的应用程序的框架。它支持以下应用程序：

- **数据感知**：将语言模型连接到其他数据源
- **Agentic**：允许语言模型与其环境交互

浪链的主要价值道具有：

1. **组件**：用于处理语言模型的抽象，以及每个抽象的实现集合。无论您是否使用 LangChain 框架的其余部分，组件都是模块化且易于使用的
2. **现成的链**：用于完成特定更高级别任务的组件的结构化组装

现成的连锁店让您可以轻松上手。对于更复杂的应用程序和细致入微的用例，组件可以轻松定制现有链或构建新链。

## [开始使用](https://python.langchain.com/docs/get_started/introduction#get-started)

[以下是](https://python.langchain.com/docs/get_started/installation.html)如何安装 LangChain、设置环境并开始构建。

我们建议您按照我们的[快速入门](https://python.langchain.com/docs/get_started/quickstart.html)指南构建您的第一个 LangChain 应用程序来熟悉该框架。

**\*注意**：这些文档适用于 LangChain [Python 包](https://github.com/hwchase17/langchain)。有关 JS/TS 版本[LangChain.js 的文档，](https://github.com/hwchase17/langchainjs)[请前往此处](https://js.langchain.com/docs)。\*

## [模块](https://python.langchain.com/docs/get_started/introduction#modules)

LangChain 为以下模块提供标准的、可扩展的接口和外部集成，按照从最简单到最复杂的顺序列出：

#### [模型输入/](https://python.langchain.com/docs/modules/model_io/)[输出](https://python.langchain.com/docs/get_started/introduction#model-io)

与语言模型的接口

#### [数据](https://python.langchain.com/docs/modules/data_connection/)[连接](https://python.langchain.com/docs/get_started/introduction#data-connection)

与应用程序特定数据的接口

#### [链条](https://python.langchain.com/docs/get_started/introduction#chains)

构建调用序列

#### [代理商](https://python.langchain.com/docs/get_started/introduction#agents)

让连锁店根据给定的高级指令选择使用哪些工具

#### [内存](https://python.langchain.com/docs/get_started/introduction#memory)

在链运行之间保留应用程序状态

#### [回调](https://python.langchain.com/docs/get_started/introduction#callbacks)

记录并流式传输任何链的中间步骤

## 示例、生态系统和[资源](https://python.langchain.com/docs/get_started/introduction#examples-ecosystem-and-resources)

### [使用](https://python.langchain.com/docs/use_cases/)[案例](https://python.langchain.com/docs/get_started/introduction#use-cases)

常见端到端用例的演练和最佳实践，例如：

- [聊天机器人](https://python.langchain.com/docs/use_cases/chatbots/)
- [使用来源回答问题](https://python.langchain.com/docs/use_cases/question_answering/)
- [分析结构化数据](https://python.langchain.com/docs/use_cases/tabular.html)
- 以及更多...

### [指南](https://python.langchain.com/docs/get_started/introduction#guides)

了解使用 LangChain 进行开发的最佳实践。

### [生态系统](https://python.langchain.com/docs/get_started/introduction#ecosystem)

LangChain 是丰富的工具生态系统的一部分，它与我们的框架集成并建立在其之上。查看我们不断增长的[集成](https://python.langchain.com/docs/ecosystem/integrations/)和[依赖存储库](https://python.langchain.com/docs/ecosystem/dependents.html)列表。

### [额外](https://python.langchain.com/docs/additional_resources/)[资源](https://python.langchain.com/docs/get_started/introduction#additional-resources)

我们的社区充满了多产的开发人员、富有创造力的建设者和出色的教师。查看[YouTube 教程，](https://python.langchain.com/docs/additional_resources/youtube.html)了解社区人员提供的精彩教程，并查看[Gallery ，了解由](https://github.com/kyrolabs/awesome-langchain)[KyroLabs](https://kyrolabs.com/)人员编制的精彩 LangChain 项目列表。

### 支持

[在 GitHub](https://github.com/hwchase17/langchain)或[Discord](https://discord.gg/6adMQxSpJS)上加入我们，提出问题、分享反馈、与使用 LangChain 构建的其他开发人员会面，并梦想法学硕士的未来。

## API[参考](https://python.langchain.com/docs/get_started/introduction#api-reference)

请前往[参考](https://api.python.langchain.com/)部分，获取 LangChain Python 包中所有类和方法的完整文档。
