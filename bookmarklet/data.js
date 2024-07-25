var roleData;

loadScript(
  "https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js",
  getData
);

function getData() {
  getUserGameRolesByCookie();
  console.log("2:" + this.roleData);
}

function getUserGameRolesByCookie() {
  var url =
    "https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hkrpg_cn";
  httpGet(url, { Cookie: getCookie() }).then((res) => {
    this.roleData = res.data.list[0];
    console.log("1:" + this.roleData);
  });
}

function httpGet(url, headers = {}) {
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
  var cookie = document.cookie;
  return cookie;
}

function loadScript(url, callback) {
  var script = document.createElement("script");
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
