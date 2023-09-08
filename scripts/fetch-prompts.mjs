// import fetch from "node-fetch";
// import fs from "fs/promises";

// const RAW_FILE_URL = "https://raw.githubusercontent.com/";
// const MIRRORF_FILE_URL = "http://raw.fgit.ml/";

// const RAW_CN_URL = "PlexPt/awesome-chatgpt-prompts-zh/main/prompts-zh.json";
// const CN_URL = MIRRORF_FILE_URL + RAW_CN_URL;
// const RAW_EN_URL = "f/awesome-chatgpt-prompts/main/prompts.csv";
// const EN_URL = MIRRORF_FILE_URL + RAW_EN_URL;
// const FILE = "./public/prompts.json";

// const ignoreWords = ["涩涩", "魅魔"];

// const timeoutPromise = (timeout) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Request timeout"));
//     }, timeout);
//   });
// };

// async function fetchCN() {
//   console.log("[Fetch] fetching cn prompts...");
//   try {
//     const response = await Promise.race([fetch(CN_URL), timeoutPromise(5000)]);
//     const raw = await response.json();
//     return raw
//       .map((v) => [v.act, v.prompt])
//       .filter(
//         (v) =>
//           v[0] &&
//           v[1] &&
//           ignoreWords.every((w) => !v[0].includes(w) && !v[1].includes(w)),
//       );
//   } catch (error) {
//     console.error("[Fetch] failed to fetch cn prompts", error);
//     return [];
//   }
// }

// async function fetchEN() {
//   console.log("[Fetch] fetching en prompts...");
//   try {
//     // const raw = await (await fetch(EN_URL)).text();
//     const response = await Promise.race([fetch(EN_URL), timeoutPromise(5000)]);
//     const raw = await response.text();
//     return raw
//       .split("\n")
//       .slice(1)
//       .map((v) =>
//         v
//           .split('","')
//           .map((v) => v.replace(/^"|"$/g, "").replaceAll('""', '"'))
//           .filter((v) => v[0] && v[1]),
//       );
//   } catch (error) {
//     console.error("[Fetch] failed to fetch en prompts", error);
//     return [];
//   }
// }

// async function main() {
//   Promise.all([fetchCN(), fetchEN()])
//     .then(([cn, en]) => {
//       fs.writeFile(FILE, JSON.stringify({ cn, en }));
//     })
//     .catch((e) => {
//       console.error("[Fetch] failed to fetch prompts");
//       fs.writeFile(FILE, JSON.stringify({ cn: [], en: [] }));
//     })
//     .finally(() => {
//       console.log("[Fetch] saved to " + FILE);
//     });
// }

// main();
import fetch from "node-fetch";
import fs from "fs/promises";

const RAW_FILE_URL = "https://raw.githubusercontent.com/";
const MIRRORF_FILE_URL = "https://raw.fgit.ml/";

const RAW_CN_URL = "PlexPt/awesome-chatgpt-prompts-zh/main/prompts-zh.json";
const CN_URL = MIRRORF_FILE_URL + RAW_CN_URL;
const RAW_EN_URL = "f/awesome-chatgpt-prompts/main/prompts.csv";
const EN_URL = MIRRORF_FILE_URL + RAW_EN_URL;
const FILE = "./public/prompts.json";

const timeoutPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Request timeout'));
    }, timeout);
  });
};

async function fetchCN() {
  console.log("[Fetch] fetching cn prompts...");
  try {
    // // const raw = await (await fetch(CN_URL)).json();
    // const response = await Promise.race([fetch(CN_URL), timeoutPromise(5000)]);
    // const raw = await response.json();

const jsonTemp = [
  {
    "act": "基础",
    "prompt": "我要如何向你提问，才能最大限度地利用这本书中的知识，请直接给我问题供我参考，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "请帮我举个例子讲解，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "请给我具体的答案或解决方案，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "请给我一些建议，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "请把你的内容用表格呈现，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "请用类比的方式讲述，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "请将上述内容的因果逻辑讲清楚，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "你的问题不错，请运用本书中的专业知识来帮我解答，谢谢。\n"
  },
  {
    "act": "基础",
    "prompt": "请帮我总结咱们之间的对话内容要点，谢谢。\n"
  },
  {
    "act": "进阶",
    "prompt": "请把结论的推导过程呈现，谢谢。\n"
  },
  {
    "act": "进阶",
    "prompt": "请帮我用MECE原则总结，谢谢。\n"
  },
  {
    "act": "进阶",
    "prompt": "请针对上述内容用辩论的形式展现，帮助我从正反双方的观点中增强理解，请不少于3个回合的辩论，最后请小林同学结辩，并记得提出你的灵魂拷问，谢谢。\n"
  },
  {
    "act": "进阶",
    "prompt": "请你扮演3位对这个问题具有深度见解的历史名人，用第一人称表达，请模仿他们的表达方式和思维习惯，请确保回答具有深度和针对性，最后请小林同学总结发言，并记得提出你的灵魂拷问，谢谢。\n"
  },
  {
    "act": "进阶",
    "prompt": "请你扮演一位教练，运用此书的理论知识，向我提问或采访，辅助我解决实际问题。请一次只问我一个核心问题，谢谢。\n"
  },
  {
    "act": "进阶",
    "prompt": "请针对我的提问，帮我解读我的用意，帮我厘清其中的用字谴词，可能我不知道自己有一些潜在需求，谢谢你的协助。\n"
  },
  // {
  //   "act": "基础",
  //   "prompt": "可以再多列出一些要点吗？\n"
  // },
  // {
  //   "act": "进阶",
  //   "prompt": "可以用MECE原则来梳理呈现这些要点吗? \n"
  // },
  // {
  //   "act": "进阶",
  //   "prompt": "可以帮我拎清这些要点之间的因果关系吗？\n"
  // },
  // {
  //   "act": "进阶",
  //   "prompt": "可以帮我从英语资料，包括谷歌论文里找相关资料来分析论述吗？\n"
  // },
//   {
//     "act": "AI导师",
//     "prompt": "内容深度：新手、学徒、专家、导师、大师\n\
// 学习风格：归纳、顺序、直觉、口头、演绎、反思、全局\n\
// 沟通方式：正式、教科书、外行、讲故事、苏格拉底、幽默\n\
// 语气风格：辩论、鼓励、中性、准确、友好\n\
// 推理框架：演绎、归纳、推测、类比、因果\n\
// 想要学习的问题：(示例:请帮我解释什么是GPT技术)\n"
//   }
];

    return jsonTemp.map((v) => [v.act, v.prompt]);

  } catch (error) {
    console.error("[Fetch] failed to fetch cn prompts", error);
    return [];
  }
}

async function fetchEN() {
  console.log("[Fetch] fetching en prompts...");
  return [];
  // try {
  //   // const raw = await (await fetch(EN_URL)).text();
  //   const response = await Promise.race([fetch(EN_URL), timeoutPromise(5000)]);
  //   const raw = await response.text();
  //   return raw
  //     .split("\n")
  //     .slice(1)
  //     .map((v) => v.split('","').map((v) => v.replace('"', "")));
  // } catch (error) {
  //   console.error("[Fetch] failed to fetch en prompts", error);
  //   return [];
  // }
}

async function main() {
  Promise.all([fetchCN(), fetchEN()])
    .then(([cn, en]) => {
      fs.writeFile(FILE, JSON.stringify({ cn, en }));
    })
    .catch((e) => {
      console.error("[Fetch] failed to fetch prompts");
      fs.writeFile(FILE, JSON.stringify({ cn: [], en: [] }));
    })
    .finally(() => {
      console.log("[Fetch] saved to " + FILE);
    });
}

main();
