let roleData;
let challengeData;
let avatarList;
let GAME_BIZ = "hkrpg_cn";
let fpList = [
  // LIO-AN00
  "38d7fc5a81fc7",
  // 小米9
  "38d7fbd5d3e64"
];
let headers = {
  "x-rpc-app_version": "2.72.2",
  // DS: getDS(params),
  "x-rpc-device_id": generateUUIDv4(),
  "x-rpc-device_fp": getFp(),
  "x-rpc-client_type": "5",
  // Cookie: getCookie(),
};

loadScript(
  "https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js",
  getData
);

async function getData() {
  await getUserGameRolesByCookie(GAME_BIZ);
  await getChallenge(roleData.game_uid);
  await getAvatarBase(roleData.game_uid, roleData.region);
}

function printAll() {
  console.log(roleData);
  console.log(challengeData);
  console.log(avatarList);
}

function getUserGameRolesByCookie(gameBiz) {
  const url =
    "https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie";
  const params = {
    game_biz: gameBiz,
  };
  const headers = {
    Cookie: getCookie(),
  };
  return httpGet(url, headers, params).then((res) => {
    if (res.retcode !== 0) {
      throw new Error(`code: {res.retcode}, msg: {res.message}`);
    }
    roleData = res.data.list[0];
  });
}

function getChallenge(roleId) {
  const url =
    "https://api-takumi-record.mihoyo.com/game_record/app/hkrpg/api/challenge";
  const params = {
    role_id: roleId,
    server: "prod_gf_cn",
    isPrev: "",
    type: "challenge",
    schedule_type: 1,
    need_all: true,
  };
  headers["Cookie"] = getCookie();
  headers["DS"] = getDS(params);
  return httpGet(url, headers, params).then((res) => {
    if (res.retcode !== 0) {
      throw new Error(`code: {res.retcode}, msg: {res.message}`);
    }
    challengeData = res.data;
  });
}

function getAvatarBase(roleId, server) {
  const url =
    "https://api-takumi-record.mihoyo.com/game_record/app/hkrpg/api/avatar/basic";
  const params = {
    rolePageAccessNotAllowed: "",
    role_id: roleId,
    server: server,
  };
  headers["Cookie"] = getCookie();
  headers["DS"] = getDS(params);
  return httpGet(url, headers, params).then((res) => {
    if (res.retcode !== 0) {
      throw new Error(`code: {res.retcode}, msg: {res.message}`);
    }
    avatarList = res.data.avatar_list;
  });
}
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

function httpPost(url, headers = {}, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers, // 合并用户提供的头部
      },
      body: JSON.stringify(data), // 将数据转换为 JSON 字符串
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

function getFp() {
  // 根据fpList的大小,随机获取其中一个
  return fpList[Math.floor(Math.random() * fpList.length)];
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
  return `${t},${r},${ds}`;
}

function generateUUIDv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
