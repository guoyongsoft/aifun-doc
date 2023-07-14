---
nav:
  title: langchain
  order: 1
group: 开始使用
title: 快速开始
order: 2
toc: content
---

# 快速开始

## 安装

安装 LangChain,运行:

```python
pip install langchain
```

更多安装详情,请参见我们的[安装指南](/langchain/Installation)。

## 环境设置

使用 LangChain 通常需要与一个或多个模型提供商、数据存储、API 等集成。在这个例子中,我们将使用 OpenAI 的模型 API。

首先我们需要安装 OpenAI 的 Python 包:

    pip install openai

访问 API 需要一个 API 密钥,你可以通过创建一个账户并点击这里来获取。一旦我们有了密钥,就可以通过运行以下命令将其设置为环境变量:

    export OPENAI_API_KEY="..."

如果你不喜欢设置环境变量,也可以在初始化 OpenAI LLM 类时通过`openai_api_key`命名参数直接传入密钥:

```python
from langchain.llms import OpenAI

llm = OpenAI(openai_api_key="...")
```

这样就设置好了与 OpenAI API 的集成环境。接下来我们就可以使用 OpenAI 的语言模型来开发 LangChain 应用了。LangChain 支持与各种语言模型和服务进行集成,让你可以充分发挥它们的能力。

## 构建应用程序

现在我们可以开始构建语言模型应用程序了。LangChain 提供了许多可用于构建语言模型应用程序的模块。这些模块可以在简单的应用程序中作为独立部分使用,也可以在更复杂的用例中组合使用。

## 语言模型(LLMs)

**从语言模型获取预测**

LangChain 的核心是 LLM(语言模型),它接受文本输入并生成预测文本。

例如,假设我们正在构建一个基于公司描述生成公司名称的应用程序。为此,我们需要初始化一个 OpenAI 模型包装器。在这种情况下,由于我们希望输出更加随机,我们将使用较高温度初始化我们的模型。

```python
from langchain.llms import OpenAI

llm = OpenAI(temperature=0.9)
```

现在我们可以传入文本并获取预测了!

```python
llm.predict("What would be a good company name for a company that makes colorful socks?")
```

:::success

Feetful of Fun
:::

通过简单地初始化语言模型并调用 predict 方法,我们就可以利用 LLM 的生成能力。LangChain 抽象出语言模型的复杂性,使与它们的交互变得简单直接。

## 聊天模型(Chat models)

聊天模型是语言模型的一种变体。聊天模型在底层使用语言模型,但它们暴露出略有不同的接口:与“文本输入,文本输出”的 API 不同,它们暴露出一个以 “聊天消息” 为输入和输出的界面。

你可以通过向聊天模型传入一个或多个消息来获取聊天完成。响应将是一个消息。LangChain 当前支持的消息类型有 `AIMessage`、`HumanMessage`、`SystemMessage` 和 `ChatMessage`——`ChatMessage` 接受一个任意的 role 参数。大多数情况下,你只需要处理 `HumanMessage`、`AIMessage` 和 `SystemMessage`。

```python
from langchain.chat_models import ChatOpenAI
from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)

chat = ChatOpenAI(temperature=0)
chat.predict_messages([HumanMessage(content="Translate this sentence from English to French. I love programming.")])
```

:::success

AIMessage(content="J'aime programmer.", additional_kwargs={})
:::

理解聊天模型与普通语言模型的区别是必要的,但有时候能够以统一的方式使用两者也很方便。LangChain 提供了一个统一的 predict 接口,你可以通过这个接口以相同的方式与普通语言模型和聊天模型进行交互。这样就可以忽略两者的实现差异,以统一的方式使用它们的功能。

```python
chat.predict("Translate this sentence from English to French. I love programming.")
```

:::success

J'aime programmer
:::

## 提示模板(Prompt templates)

大多数 LLM 应用程序不会直接将用户输入传递到 LLM。通常,它们会将用户输入添加到一段更大的文本中,称为提示模板,这为特定任务提供了额外的上下文。

在前面的示例中,我们传递给模型的文本包含生成公司名称的说明。对于我们的应用程序,如果用户只需要提供公司/产品的描述,而不必担心给模型提供说明,那就太好了。

### LLMs

使用 PromptTemplates 可以很容易做到这一点!在这个例子中,我们的模板非常简单:

```python
from langchain.prompts import PromptTemplate

prompt = PromptTemplate.from_template("What is a good name for a company that makes {product}?")
prompt.format(product="colorful socks")
```

:::success

What is a good name for a company that makes colorful socks?
:::

### Chat models

与 LLM 类似,你可以通过使用 `MessagePromptTemplate` 来利用提示。你可以从一个或多个 `MessagePromptTemplate` 构建一个 `ChatPromptTemplate`。你可以使用 `ChatPromptTemplate` 的 `format_messages` 方法来生成格式化的消息。

因为这是生成一系列消息,所以它比只生成一个字符串的普通提示模板稍微复杂一些。请参阅关于提示的详细指南,了解可用的更多选项。

```python
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)

template = "You are a helpful assistant that translates {input_language} to {output_language}."
system_message_prompt = SystemMessagePromptTemplate.from_template(template)
human_template = "{text}"
human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

chat_prompt = ChatPromptTemplate.from_messages([system_message_prompt, human_message_prompt])

chat_prompt.format_messages(input_language="English", output_language="French", text="I love programming.")
```

:::success

```
[
    SystemMessage(content="You are a helpful assistant that translates English to French.", additional_kwargs={}),
    HumanMessage(content="I love programming.")
]
```

:::

通过定义聊天提示模板,我们可以构建多轮对话的提示。LangChain 提供了方便的接口来创建系统消息、用户消息等各种消息模板。

## 链(Chains)

既然我们已经有了一个模型和一个提示模板,我们将想要将两者组合起来。Chains 为我们提供了一种将多个基本模块(比如模型、提示和其他链)链接(或链式调用)在一起的方式。

### LLMs

最简单和最常见的链类型是 LLMChain,它先将输入传递给一个 PromptTemplate,然后再传递给一个 LLM。我们可以用现有的模型和提示模板构造一个 LLM 链。

使用这个,我们可以替换:

```python
from langchain import OpenAI, LLMChain

llm = OpenAI(temperature=0.9)
response =llm.predict("What would be a good company name for a company that makes colorful socks?")
print(response)
```

替换为:

```python
from langchain import OpenAI, LLMChain
from langchain.prompts import PromptTemplate

llm = OpenAI(temperature=0)
prompt = PromptTemplate.from_template("What is a good name for a company that makes {product}?")
chain = LLMChain(llm=llm, prompt=prompt)
response = chain.run("colorful socks")
print(response)
```

:::success

Feetful of Fun
:::

好了,这是我们的第一个链!理解这个简单链的工作原理将让你更好地使用更复杂的链。

### **Chat models**

`LLMChain` 也可以与聊天模型一起使用:

```python
from langchain import LLMChain
from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)

chat = ChatOpenAI(temperature=0)

template = "You are a helpful assistant that translates {input_language} to {output_language}."
system_message_prompt = SystemMessagePromptTemplate.from_template(template)
human_template = "{text}"
human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)
chat_prompt = ChatPromptTemplate.from_messages([system_message_prompt, human_message_prompt])

chain = LLMChain(llm=chat, prompt=chat_prompt)
chain.run(input_language="English", output_language="French", text="I love programming.")
```

:::success

J'aime programmer.
:::

## 代理(Agents)

我们的第一个链运行了预定好的一系列步骤。为了处理复杂的工作流程,我们需要能够根据输入动态选择操作。

代理就是用来做这件事的:它们使用语言模型来确定采取哪些操作以及操作顺序。代理可以访问工具,它们反复选择一个工具、运行该工具并观察输出,直到得到最终答案。

要加载一个代理,你需要选择:

- **LLM/Chat model**:驱动代理的语言模型。

- **Tool(s)**:执行特定任务的函数。这可以是像谷歌搜索、数据库查找、Python REPL、其他链等。有关预定义工具及其规范的列表,请参阅[工具文档](https://python.langchain.com/docs/modules/agents/tools/)。

- **Agent name**:一个字符串,用于指定要使用的 LangChain 支持的代理类。代理类主要通过语言模型针对不同情况生成的提示模板,来决定每一步的操作。本教程重点介绍最简单的高级 API,仅涵盖使用 LangChain 内置的标准代理。如果要定制代理,可以参考[这里](https://python.langchain.com/docs/modules/agents/how_to/custom_agent.html)的文档。LangChain 支持的代理类列表和相关文档详见[这里](https://python.langchain.com/docs/modules/agents/agent_types/)。

对于这个示例,我们将使用 [SerpAPI](https://serpapi.com/) 查询搜索引擎。

你需要安装 SerpAPI Python 包:

    pip install google-search-results

并设置 `SERPAPI_API_KEY` 环境变量。

### LLMs

```python
from langchain.agents import AgentType, initialize_agent, load_tools
from langchain.llms import OpenAI

# 我们将用来控制代理的语言模型
llm = OpenAI(temperature=0)

# 我们将提供给代理访问的工具。注意'llm-math'工具使用了一个LLM,因此我们需要传入它。
tools = load_tools(["serpapi", "llm-math"], llm=llm)

# 最后,让我们用工具、语言模型和所需的代理类型来初始化一个代理。
agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)

# 让我们测试一下:旧金山昨天的最高温度是多少华氏度?那个数字乘以0.023次方等于多少?
agent.run("What was the high temperature in SF yesterday in Fahrenheit? What is that number raised to the .023 power?")
```

:::info{title=运行过程}

```python
> Entering new AgentExecutor chain...

Thought: I need to find the temperature first, then use the calculator to raise it to the .023 power.
Action: Search
Action Input: "High temperature in SF yesterday"
Observation: San Francisco Temperature Yesterday. Maximum temperature yesterday: 57 °F (at 1:56 pm) Minimum temperature yesterday: 49 °F (at 1:56 am) Average temperature ...

Thought: I now have the temperature, so I can use the calculator to raise it to the .023 power.
Action: Calculator
Action Input: 57^.023
Observation: Answer: 1.0974509573251117

Thought: I now know the final answer
Final Answer: The high temperature in SF yesterday in Fahrenheit raised to the .023 power is 1.0974509573251117.

> Finished chain.
```

:::

:::success{title=运行结果}

The high temperature in SF yesterday in Fahrenheit raised to the .023 power is 1.0974509573251117.
:::

### Chat models

代理也可以与聊天模型一起使用,您可以使用 `AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION` 作为代理类型来初始化一个代理。

```python
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.agents import AgentType
from langchain.chat_models import ChatOpenAI
from langchain.llms import OpenAI

# 我们将用来控制代理的语言模型
chat = ChatOpenAI(temperature=0)

# 我们将提供给代理访问的工具。注意'llm-math'工具使用了一个LLM,因此我们需要传入它。
llm = OpenAI(temperature=0)
tools = load_tools(["serpapi", "llm-math"], llm=llm)

# 最后,让我们用工具、语言模型和所需的代理类型来初始化一个代理。
agent = initialize_agent(tools, chat, agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, verbose=True)

# 让我们测试一下：奥利维亚·王尔德的男朋友是谁?他目前的年龄乘以0.23次方等于多少?
agent.run("Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?")
```

:::info{title=运行过程}

```python
> Entering new AgentExecutor chain...
Thought: I need to use a search engine to find Olivia Wilde's boyfriend and a calculator to raise his age to the 0.23 power.
Action:
{
    "action": "Search",
    "action_input": "Olivia Wilde boyfriend"
}

Observation: Sudeikis and Wilde's relationship ended in November 2020. Wilde was publicly served with court documents regarding child custody while she was presenting Don't Worry Darling at CinemaCon 2022. In January 2021, Wilde began dating singer Harry Styles after meeting during the filming of Don't Worry Darling.
Thought:I need to use a search engine to find Harry Styles' current age.
Action:
{
    "action": "Search",
    "action_input": "Harry Styles age"
}

Observation: 29 years
Thought:Now I need to calculate 29 raised to the 0.23 power.
Action:
{
    "action": "Calculator",
    "action_input": "29^0.23"
}

Observation: Answer: 2.169459462491557

Thought:I now know the final answer.
Final Answer: 2.169459462491557

> Finished chain.
```

:::

:::success{title=运行结果}

'2.169459462491557'

:::

## 内存(Memory)

到目前为止我们看到的链和代理都是无状态的,但对于许多应用程序来说,引用过去的交互是必要的。例如在聊天机器人中,你需要它根据过去的消息来理解新的消息,这一点是非常明显的。

Memory 模块为你提供了一种维护应用程序状态的方法。基本的 Memory 接口很简单:它允许你用最新一次运行的输入和输出来更新状态。它也允许你用存储的状态来调整或者建立下一次输入的上下文。

有许多内置的内存系统。最简单的就是缓冲区内存,它只是将最近的几个输入/输出预先追加到当前输入中 - 我们将在下面的示例中使用它。

### LLMs

```python
from langchain import OpenAI, ConversationChain

llm = OpenAI(temperature=0)
conversation = ConversationChain(llm=llm, verbose=True)

conversation.run("Hi there!")
```

:::info{title=运行过程}

```
> Entering new chain...
Prompt after formatting:
The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.

Current conversation:

Human: Hi there!
AI:

\> Finished chain.

\>> 'Hello! How are you today?'
```

:::

如果我们再次运行

```python
conversation.run("I'm doing well! Just having a conversation with an AI.")
```

我们会看到传递给模型的完整提示中包含了我们第一次交互的输入和输出,以及我们最新的输入

:::info{title=运行过程}

```python
> Entering new chain...
Prompt after formatting:
The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.

Current conversation:

Human: Hi there!
AI:  Hello! How are you today?
Human: I'm doing well! Just having a conversation with an AI.
AI:

> Finished chain.

>> "That's great! What would you like to talk about?"
```

:::

### Chat models

您可以将内存与使用聊天模型初始化的链和代理一起使用。这和用于 LLM 的内存之间的主要区别在于,我们不需要将所有前面的消息缩减到一个字符串中,我们可以将每条消息作为一个独立的内存对象进行保存。。

```python
from langchain.prompts import (
    ChatPromptTemplate,
    MessagesPlaceholder,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate
)
from langchain.chains import ConversationChain
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory

prompt = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template(
        "The following is a friendly conversation between a human and an AI. The AI is talkative and "
        "provides lots of specific details from its context. If the AI does not know the answer to a "
        "question, it truthfully says it does not know."
    ),
    MessagesPlaceholder(variable_name="history"),
    HumanMessagePromptTemplate.from_template("{input}")
])

llm = ChatOpenAI(temperature=0)
memory = ConversationBufferMemory(return_messages=True)
conversation = ConversationChain(memory=memory, prompt=prompt, llm=llm)

conversation.predict(input="Hi there!")
```

:::success{title=运行结果}

Hello! How can I assist you today?

:::

```python
conversation.predict(input="I'm doing well! Just having a conversation with an AI.")
```

:::success{title=运行结果}

That sounds like fun! I'm happy to chat with you. Is there anything specific you'd like to talk about?

:::

```python
conversation.predict(input="Tell me about yourself.")
```

:::success{title=运行结果}

Sure! I am an AI language model created by OpenAI. I was trained on a large dataset of text from the internet, which allows me to understand and generate human-like language. I can answer questions, provide information, and even have conversations like this one. Is there anything else you'd like to know about me?

:::
