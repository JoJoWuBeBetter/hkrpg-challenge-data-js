var roleData;
loadScript(
  "https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js",
  getData
);

function getData() {
  roleData = getUserGameRolesByCookie();
}

function getUserGameRolesByCookie() {
  var url =
    "https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hkrpg_cn";
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: getCookie(),
      },
    })
      .then((res) => {
        if (res.retcode != 0) {
          throw new Error("请求错误：" + res.message);
        }
        return res['data']['list'][0];
      })
      .catch((error) => {
        console.error("用户信息请求失败:", error);
        reject(error); // 如果出错，拒绝 Promise
      });
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
