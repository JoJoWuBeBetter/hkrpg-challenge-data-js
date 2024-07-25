let roleData;
let gameBiz = "hkrpg_cn";

loadScript(
  "https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js",
  getData
);

async function getData() {
  await getUserGameRolesByCookie({game_biz: gameBiz });
  console.log("2:" + roleData);
}

function getUserGameRolesByCookie(params) {
  const url =
    "https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie";
  return httpGet(url, { Cookie: getCookie() }, params).then((res) => {
    roleData = res.data.list[0];
  });
}

function getChallenge() {}

function httpGet(url, headers = {}, params = {}) {
  if (
    params !== undefined &&
    params !== null &&
    Object.keys(params).length !== 0
  ) {
    url += "?" + jsonToQueryString(params);
  }
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...headers, // 合并用户提供的头部
      },
    })
      .then((response) => {
        // 检查响应状态
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // 解析响应为 JSON
      })
      .then((data) => resolve(data)) // 处理成功响应
      .catch((error) => reject(error)); // 处理错误
  });
}

function getCookie() {
  return document.cookie;
}

function loadScript(url, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";

  // 检查浏览器支持的 script 加载方式
  if (script.readyState) {
    // For IE
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // Other browsers
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.head.appendChild(script);
}

function jsonToQueryString(json) {
  return Object.keys(json)
    .sort()
    .map((key) => `${key}=${json[key]}`)
    .join("&");
}

/**
 * 根据传入的参数对象生成一个数据签名。
 * 数据签名的生成基于参数对象的内容、一个固定的盐值、一个随机数和当前时间戳。
 * 主要用于加密和验证数据的完整性。
 * @param {Object} params - 用于生成数据签名的参数对象。
 */
function getDS(params) {
  // 将参数对象的键排序，并转换为键值对字符串形式
  let q = jsonToQueryString(params);
  console.log(q);

  // 定义一个固定的盐值，用于数据签名的加密过程
  let salt = "xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs";

  // 获取一个在100001-200000之间的随机数
  let r = Math.floor(Math.random() * 100000) + 100001;

  // 获取十位数的时间戳
  let t = Math.floor(Date.now() / 1000);

  // 根据盐值、时间戳、随机数、参数字符串和空字符串，使用md5算法生成数据签名
  let ds = md5(`salt=${salt}&t=${t}&r=${r}&b=&q=${q}`);

  // 打印时间戳、随机数和数据签名，用于调试和记录
  console.log(`${t},${r},${ds}`);
}
