// // 定义一个函数，用于打印带参数的问候语  
// function helloWorld(name) {  
//     alert("Hello, " + name + "!"); 
// }  

// // 调用函数并传递参数  
// helloWorld("JoJoWu");  
if (
    window["location"]["href"]["indexOf"]("mihoyo.com/ys") >
      (0x70a6e ^ 0x70a6e) ||
    window["location"]["href"]["indexOf"]("miyoushe.com/ys") >
      (0x7c6f4 ^ 0x7c6f4) ||
    window["location"]["href"]["indexOf"]("hoyolab.com") > (0x463af ^ 0x463af)
  ) {
    if (!window["_ysq"]) {
      var AbyssFetcher = function () {
        const _0x4a45ad = this;
        document["body"]["innerHTML"] = "";
        let _0x3603ed = document["createElement"]("div");
        _0x3603ed["innerHTML"] = "<p>正在建立与虚空的连接...</p>";
        document["body"]["prepend"](_0x3603ed);
        _0x4a45ad["loadScript"](
          "https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js",
          function () {
            Promise["all"]([_0x4a45ad["queryBbsInfo"]()])
              ["then"]((_0x2db317) => {
                let _0xc150df = _0x2db317[0xd3e75 ^ 0xd3e75];
                if (_0xc150df["message"] == "OK") {
                  let _0x2f586a = _0xc150df["data"]["list"];
                  let _0x200d4d = [];
                  for (let _0x2af210 in _0x2f586a) {
                    if (
                      _0x2f586a[_0x2af210]["game_biz"]["indexOf"]("hk4e") !=
                      -(0x9dd66 ^ 0x9dd67)
                    ) {
                      var _0x51ad5c = _0x2f586a[_0x2af210];
                      _0x3603ed["innerHTML"] =
                        "<p>检测到【" +
                        _0x51ad5c["nickname"] +
                        "】" +
                        _0x51ad5c["level"] +
                        "级</p>";
                      if (_0x51ad5c["level"] > (0x1b2ee ^ 0x1b2fa)) {
                        _0x200d4d["push"](_0x2f586a[_0x2af210]);
                      } else {
                        _0x3603ed["innerHTML"] +=
                          "<p>【" +
                          _0x51ad5c["nickname"] +
                          "】" +
                          "\x20，已经过滤</p>";
                      }
                    }
                  }
                  _0x3603ed["innerHTML"] += "<p>虚空正在录入你的数据...</p>";
                  if (_0x200d4d["length"] == (0x34bfc ^ 0x34bfd)) {
                    let _0x1ca036 = _0x200d4d[0xda5f4 ^ 0xda5f4]["game_uid"];
                    Promise["all"]([
                      _0x4a45ad["queryBaseInfo"](_0x1ca036),
                      _0x4a45ad["queryDetailInfo"](_0x1ca036),
                      _0x4a45ad["queryAbyssInfo"](_0x1ca036, 0xb3cd9 ^ 0xb3cd8),
                      _0x4a45ad["queryAbyssInfo"](_0x1ca036, 0xa8abf ^ 0xa8abd),
                    ])
                      ["then"]((_0x5a1f1c) => {
                        let _0x43ae59 = [
                          {
                            game_list_data: _0x200d4d[0xa2f01 ^ 0xa2f01],
                            player_card_data: _0x5a1f1c[0x0],
                            player_detail_data: _0x5a1f1c[0xa4026 ^ 0xa4027],
                            abyss_data: _0x5a1f1c[0xe026a ^ 0xe0268],
                            last_abyss_data: _0x5a1f1c[0x3],
                          },
                        ];
                        _0x4a45ad["post"]("https://akashadata.com/abyss/", {
                          d: JSON["stringify"](_0x43ae59),
                        });
                      })
                      ["catch"]((_0x41a63b) => {
                        alert("与虚空的连接中断，请重新登录");
                      });
                  } else if (_0x200d4d["length"] == 0x2) {
                    let _0xa3fc9f = _0x200d4d[0x0]["game_uid"];
                    let _0xd75532 = _0x200d4d[0x1]["game_uid"];
                    Promise["all"]([
                      _0x4a45ad["queryBaseInfo"](_0xa3fc9f),
                      _0x4a45ad["queryDetailInfo"](_0xa3fc9f),
                      _0x4a45ad["queryAbyssInfo"](_0xa3fc9f, 0xece00 ^ 0xece01),
                      _0x4a45ad["queryAbyssInfo"](_0xa3fc9f, 0x596b7 ^ 0x596b5),
                      _0x4a45ad["queryBaseInfo"](_0xd75532),
                      _0x4a45ad["queryDetailInfo"](_0xd75532),
                      _0x4a45ad["queryAbyssInfo"](_0xd75532, 0xe244b ^ 0xe244a),
                      _0x4a45ad["queryAbyssInfo"](_0xd75532, 0x7e644 ^ 0x7e646),
                    ])
                      ["then"]((_0x5d5bf0) => {
                        let _0x239161 = [
                          {
                            game_list_data: _0x200d4d[0x9fdcd ^ 0x9fdcd],
                            player_card_data: _0x5d5bf0[0x0],
                            player_detail_data: _0x5d5bf0[0x1],
                            abyss_data: _0x5d5bf0[0x2],
                            last_abyss_data: _0x5d5bf0[0x3],
                          },
                          {
                            game_list_data: _0x200d4d[0x1],
                            player_card_data: _0x5d5bf0[0x4],
                            player_detail_data: _0x5d5bf0[0x5a945 ^ 0x5a940],
                            abyss_data: _0x5d5bf0[0x6],
                            last_abyss_data: _0x5d5bf0[0x303c2 ^ 0x303c5],
                          },
                        ];
                        _0x4a45ad["post"]("https://akashadata.com/abyss/", {
                          d: JSON["stringify"](_0x239161),
                        });
                      })
                      ["catch"]((_0x152b28) => {
                        alert("与虚空的连接中断，请重新登录");
                      });
                  } else {
                    alert(
                      "你关联的服务器太多，系统超载了，请联系虚空数据库维护人员"
                    );
                  }
                } else {
                  alert("与虚空的连接中断，请重新登录");
                }
              })
              ["catch"]((_0x160758) => {
                alert("与虚空的连接中断，请重新登录");
              });
          }
        );
      };
      AbyssFetcher["prototype"] = {
        loadScript: function (_0x5c555d, _0x2a4e05) {
          const _0x24c7b9 = document["createElement"]("script");
          _0x24c7b9["type"] = "text/javascript";
          if (_0x24c7b9["readyState"]) {
            _0x24c7b9["onreadystatechange"] = function () {
              if (
                _0x24c7b9["readyState"] === "loaded" ||
                _0x24c7b9["readyState"] === "complete"
              ) {
                _0x24c7b9["onreadystatechange"] = null;
                _0x2a4e05();
              }
            };
          } else {
            _0x24c7b9["onload"] = function () {
              _0x2a4e05();
            };
          }
          _0x24c7b9["src"] = _0x5c555d;
          document["body"]["append"](_0x24c7b9);
        },
        loadCss: function (_0x58e8f8) {
          let _0x364c09 =
            document["getElementsByTagName"]("head")[0x2b692 ^ 0x2b692];
          let _0x1ad835 = document["createElement"]("link");
          _0x1ad835["type"] = "text/css";
          _0x1ad835["rel"] = "stylesheet";
          _0x1ad835["href"] = _0x58e8f8;
          _0x364c09["appendChild"](_0x1ad835);
        },
        randomString: function (_0x37e70d) {
          let _0x5bb92b = "";
          let _0x709fca = "abcdefghijklmnopqrstuvwxyz0123456789";
          let _0x3491bd = _0x709fca["length"];
          for (
            let _0x2732cb = 0x9dbe8 ^ 0x9dbe8;
            _0x2732cb < _0x37e70d;
            _0x2732cb++
          ) {
            _0x5bb92b += _0x709fca["charAt"](
              Math["floor"](Math["random"]() * _0x3491bd)
            );
          }
          return _0x5bb92b;
        },
        randomNum: function (_0x3c5ba6, _0x3cc97f) {
          return (
            Math["floor"](Math["random"]() * (_0x3cc97f - _0x3c5ba6)) + _0x3c5ba6
          );
        },
        getCommonDs(_0x5a9a2d = "", _0x3fdffa = "", _0x64a365) {
          let _0x1ae495 = Math["round"](
            new Date()["getTime"]() / (0x86682 ^ 0x8656a)
          );
          let _0x213199 = Math["floor"](Math["random"]() * 0xdbba0 + 0x186a0);
          let _0x5701c1 = "";
          let _0x42bd46 = "xV8v4Qu54lUKr";
          if (["cn_gf01", "cn_qd01"]["includes"](_0x64a365)) {
            let _0x107da2 = "EYFZkJhB8cuOh9Asafs";
            _0x5701c1 = _0x42bd46 + _0x107da2;
            let _0x57bb97 = md5(
              "salt=" +
                _0x5701c1 +
                "&t=" +
                _0x1ae495 +
                "&r=" +
                _0x213199 +
                "&b=" +
                _0x3fdffa +
                "&q=" +
                _0x5a9a2d
            );
            return _0x1ae495 + "," + _0x213199 + "," + _0x57bb97;
          } else {
            let _0x1f1f12 = "6s25p5ox5y14";
            let _0x57830c = "umn1p61aqyyvbvvl3lrt";
            _0x5701c1 = _0x1f1f12 + _0x57830c;
            let _0x2b04b8 = md5(
              "salt=" + _0x5701c1 + "&t=" + _0x1ae495 + "&r=" + _0x213199
            );
            return _0x1ae495 + "," + _0x213199 + "," + _0x2b04b8;
          }
        },
        getBbsHeaders: function (_0x4db0d1) {
          return {
            Cookie: document["cookie"],
          };
        },
        getHeaders: function (_0x6991a5, _0x336161) {
          let _0x300298 = this["getServer"](_0x6991a5);
          if (["cn_gf01", "cn_qd01"]["includes"](_0x300298)) {
            return {
              Accept: "application/json,\x20text/plain,\x20*/*",
              DS: _0x336161,
              "x-rpc-app_version": "2.11.1",
              "x-rpc-client_type": "5",
              "Accept-Encoding": "gzip,\x20deflate",
              "Accept-Language": "zh-CN,en-US;q=0.8",
              "X-Requested-With": "com.mihoyo.hyperion",
            };
          } else {
            return {
              Accept: "application/json,\x20text/plain,\x20*/*",
              DS: _0x336161,
              "x-rpc-app_version": "1.5.0",
              "x-rpc-client_type": "5",
              "Accept-Language": "zh-CN,zh-Hans;q=0.9",
              "Accept-Encoding": "gzip,\x20deflate,\x20br",
              "Content-Type": "application/json;charset=utf-8",
            };
          }
        },
        getServer: function (_0x4542f7) {
          switch (String(_0x4542f7)[0xaa26c ^ 0xaa26c]) {
            case "1":
            case "2":
              return "cn_gf01";
            case "5":
              return "cn_qd01";
            case "6":
              return "os_usa";
            case "7":
              return "os_euro";
            case "8":
              return "os_asia";
            case "9":
              return "os_cht";
          }
          return "cn_gf01";
        },
        getUrl: function (_0x395d87) {
          var _0x11b67f = {
            info: "https://api-takumi.miyoushe.com/game_record/app/genshin/api/index",
            character:
              "https://api-takumi.miyoushe.com/game_record/app/genshin/api/character",
            abyss:
              "https://api-takumi.miyoushe.com/game_record/app/genshin/api/spiralAbyss",
            bbs: "https://api-takumi.miyoushe.com/binding/api/getUserGameRolesByCookie?game_biz=hk4e_cn",
          };
          if (
            (_0x395d87 == "" &&
              (window["location"]["href"]["indexOf"]("bbs.mihoyo.com/ys") >
                (0x4f981 ^ 0x4f981) ||
                window["location"]["href"]["indexOf"]("miyoushe.com/ys") >
                  0x0)) ||
            ["cn_gf01", "cn_qd01"]["includes"](_0x395d87)
          ) {
          } else {
            _0x11b67f = {
              info: "https://bbs-api-os.hoyolab.com/game_record/genshin/api/index",
              character:
                "https://bbs-api-os.hoyolab.com/game_record/genshin/api/character",
              abyss:
                "https://bbs-api-os.hoyolab.com/game_record/genshin/api/spiralAbyss",
              bbs: "https://api-account-os.hoyolab.com/binding/api/getUserGameRolesByLtoken?game_biz=hk4e_global",
            };
          }
          return _0x11b67f;
        },
        queryBbsInfo: function () {
          if (
            window["location"]["href"]["indexOf"]("mihoyo.com") >
              (0xea1b4 ^ 0xea1b4) ||
            window["location"]["href"]["indexOf"]("miyoushe.com") > 0x0
          ) {
            return new Promise((_0x5ae04c, _0x32f230) => {
              fetch(this["getUrl"]("")["bbs"], {
                method: "GET",
                credentials: "include",
                headers: {
                  Accept: "application/json,\x20text/plain,\x20*/*",
                  Cookie: document["cookie"],
                  "x-rpc-app_version": "2.11.1",
                  "x-rpc-client_type": "5",
                  "Accept-Encoding": "gzip,\x20deflate",
                  "Accept-Language": "zh-CN,en-US;q=0.8",
                },
              })
                ["then"]((_0x3604e3) => _0x3604e3["json"]())
                ["then"]((_0x46c6f5) => {
                  _0x5ae04c(_0x46c6f5);
                })
                ["catch"](function (_0x2959e3) {
                  _0x32f230(_0x2959e3);
                });
            });
          } else {
            return new Promise((_0x1c1823, _0x44112a) => {
              fetch(this["getUrl"]("")["bbs"], {
                method: "GET",
                credentials: "include",
              })
                ["then"]((_0x3cf3d3) => _0x3cf3d3["json"]())
                ["then"]((_0x5bf26f) => {
                  _0x1c1823(_0x5bf26f);
                })
                ["catch"](function (_0x481425) {
                  _0x44112a(_0x481425);
                });
            });
          }
        },
        queryBaseInfo: function (_0x4dcd9e) {
          return new Promise((_0x13c110, _0x26bbbc) => {
            let _0x1de2fd =
              "role_id=" + _0x4dcd9e + "&server=" + this["getServer"](_0x4dcd9e);
            fetch(
              this["getUrl"](this["getServer"](_0x4dcd9e))["info"] +
                "?" +
                _0x1de2fd,
              {
                method: "GET",
                credentials: "include",
                headers: this["getHeaders"](
                  _0x4dcd9e,
                  this["getCommonDs"](_0x1de2fd, "", this["getServer"](_0x4dcd9e))
                ),
              }
            )
              ["then"]((_0x1f114e) => _0x1f114e["json"]())
              ["then"]((_0x599bba) => {
                _0x13c110(_0x599bba);
              })
              ["catch"](function (_0x58c265) {
                _0x26bbbc(_0x58c265);
              });
          });
        },
        queryDetailInfo: function (_0x2b64d2) {
          return new Promise((_0x27a215, _0x668e70) => {
            let _0x43a1ba = "";
            let _0x3a2d90 = {
              role_id: _0x2b64d2,
              server: this["getServer"](_0x2b64d2),
            };
            _0x3a2d90 = JSON["stringify"](_0x3a2d90);
            fetch(this["getUrl"](this["getServer"](_0x2b64d2))["character"], {
              method: "POST",
              credentials: "include",
              body: _0x3a2d90,
              headers: this["getHeaders"](
                _0x2b64d2,
                this["getCommonDs"](
                  _0x43a1ba,
                  _0x3a2d90,
                  this["getServer"](_0x2b64d2)
                )
              ),
            })
              ["then"]((_0x5563ae) => _0x5563ae["json"]())
              ["then"]((_0x19eb86) => {
                _0x27a215(_0x19eb86);
              })
              ["catch"](function (_0x427b83) {
                _0x668e70(_0x427b83);
              });
          });
        },
        queryAbyssInfo: function (_0x5263b0, _0x66214) {
          return new Promise((_0x81cd58, _0x1742a3) => {
            let _0x487e47 =
              "role_id=" +
              _0x5263b0 +
              "&schedule_type=" +
              _0x66214 +
              "&server=" +
              this["getServer"](_0x5263b0);
            fetch(
              this["getUrl"](this["getServer"](_0x5263b0))["abyss"] +
                "?" +
                _0x487e47,
              {
                method: "GET",
                credentials: "include",
                headers: this["getHeaders"](
                  _0x5263b0,
                  this["getCommonDs"](_0x487e47, "", this["getServer"](_0x5263b0))
                ),
              }
            )
              ["then"]((_0x4ce326) => _0x4ce326["json"]())
              ["then"]((_0x470690) => {
                _0x81cd58(_0x470690);
              })
              ["catch"](function (_0x2c3e28) {
                _0x1742a3(_0x2c3e28);
              });
          });
        },
        post: function (_0x324c46, _0x1699a4) {
          var _0x54a138 = document["createElement"]("form");
          _0x54a138["action"] = _0x324c46;
          _0x54a138["method"] = "post";
          _0x54a138["style"]["display"] = "none";
          for (var _0x204a63 in _0x1699a4) {
            var _0x6faf7d = document["createElement"]("textarea");
            _0x6faf7d["name"] = _0x204a63;
            _0x6faf7d["value"] = _0x1699a4[_0x204a63];
            _0x54a138["appendChild"](_0x6faf7d);
          }
          document["body"]["appendChild"](_0x54a138);
          _0x54a138["submit"]();
          return _0x54a138;
        },
        renderInfo: function (_0x48347b, _0x61e33f, _0x202807) {
          const _0x5e758e =
            "<div\x20id=\x22app\x22><genshin-info-render\x20:msg=\x22msg\x22\x20:base-info=\x22baseInfo.data\x22\x20:abyss-info=\x22abyssInfo.data\x22></genshin-info-render></div>";
          let _0x4ab14f = document["createElement"]("div");
          _0x4ab14f["innerHTML"] = _0x5e758e;
          document["body"]["prepend"](_0x4ab14f);
          let _0x525996 = new Vue({
            el: "#app",
            data: {
              baseInfo: _0x61e33f,
              abyssInfo: _0x202807,
              msg: _0x48347b,
            },
          });
        },
      };
    }
    window["_ysq"] = new AbyssFetcher();
  } else {
    var html_all = document["documentElement"]["innerHTML"];
    if (html_all["length"] > (0xb1b66 ^ 0xb1b02)) {
      if (window["confirm"]("需要在米游社页面执行,是否跳转到米游社?")) {
        document["location"]["href"] = "https://bbs.mihoyo.com/ys/";
      }
    } else {
      document["location"]["href"] = "https://bbs.mihoyo.com/ys/";
    }
  }
  