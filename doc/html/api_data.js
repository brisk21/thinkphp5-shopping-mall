define({ "api": [
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/account/do_login",
    "title": "<newapi>[新]</newapi>账号-登录",
    "name": "account_do_login",
    "group": "account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>防重复口令</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>登录口令，请全局带上，后台检验用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"登录成功\",\"data\":{\"token\":\"TW1Oa016VmhZVFJsTlRjMFkyVXhORE0xTmpJMk16STROek0wWkdFMlpXRjhNVFl6T1RFeE9UUTROWHhpY3pJME9UQXlNVE14WkRKaVltTTBZVGsxTldZM1lqSmtaRE14TVRSaFkyUmk=\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/account.php",
    "groupTitle": "account"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/account/logout",
    "title": "<newapi>[新]</newapi>账号-退出登录",
    "name": "account_logout",
    "group": "account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"操作成功\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/account.php",
    "groupTitle": "account"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/account/reg_action",
    "title": "<newapi>[新]</newapi>账号-注册",
    "description": "<p><span style=\"color:red;\">参数如：account=abc&amp;vcode=EDC6Q&amp;pwd1=123456&amp;pwd2=123456&amp;token=39399caa35e98e402a351d9951dde94a</span></p>",
    "name": "account_reg_action",
    "group": "account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vcode",
            "description": "<p>图形验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd1",
            "description": "<p>登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd2",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dcode",
            "description": "<p>短信动态码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>防重复口令</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/account.php",
    "groupTitle": "account"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/account/reset_pwd",
    "title": "<newapi>[新]</newapi>账号-找回密码",
    "name": "account_reset_pwd",
    "group": "account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dcode",
            "description": "<p>动态码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"修改成功\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/account.php",
    "groupTitle": "account"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/my_cart_action",
    "title": "<newapi>[新]</newapi>购物车-增减数量",
    "name": "my_cart_action",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>购物车记录,在购物列表操作需要</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "goods_id",
            "description": "<p>商品编号,在商品详情操作是输入</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>最终数量,小于1时代表删除</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dotype",
            "description": "<p>操作类型 Increase-增,Decrease-减少，del-直接删除某商品</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"操作成功\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/cart.php",
    "groupTitle": "cart"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/my_cart_goods",
    "title": "<newapi>[新]</newapi>购物车-我的商品",
    "name": "my_cart_goods",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>分页，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"goods\":[{\"title\":\"狗狗零食磨牙棒宠物小型犬鸡肉冻干大礼包整箱幼犬泰迪大型犬金毛\",\"price\":\"0.01\",\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2020-10-16\\/536363ab91ac7718891a25da4444249c.jpeg\",\"id\":51,\"count\":1,\"status\":1,\"goods_id\":955,\"store_name\":\"bs_shop购物商城\"},{\"title\":\"卓诗尼女童公主裙夏装2021新款儿童韩版立体蝴蝶连衣裙女孩裙子潮\",\"price\":\"0.01\",\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-05-21\\/43dfef1751e57ca4d6e251449102958b.jpeg\",\"id\":50,\"count\":1,\"status\":1,\"goods_id\":956,\"store_name\":\"bs_shop购物商城\"},{\"title\":\"韩束巨水光臻时沁润礼盒护肤品补水保湿提亮肤色控油淡斑化妆品\",\"price\":\"0.01\",\"thumb\":\"https:\\/\\/img.pddpic.com\\/gaudit-image\\/2021-09-22\\/f29932acb3abb743c6f5e2613a2a1f09.jpeg\",\"id\":49,\"count\":1,\"status\":1,\"goods_id\":968,\"store_name\":\"bs_shop购物商城\"}],\"isAllChecked\":true}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/cart.php",
    "groupTitle": "cart"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/my_cart_select_status",
    "title": "<newapi>[新]</newapi>购物车-选择状态",
    "name": "my_cart_select_status",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>购物车记录,传入代表操作某记录，否则代表全选或者全不选</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dotype",
            "description": "<p>操作类型，1-选中，0-去除选中</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"操作成功\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/cart.php",
    "groupTitle": "cart"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/my_cart_total",
    "title": "<newapi>[新]</newapi>购物车-统计",
    "name": "my_cart_total",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>detail-来自商品详情；checked-预结算购物车</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"total\":1,\"totalMoney\":\"0.00\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/cart.php",
    "groupTitle": "cart"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/home/config",
    "title": "<newapi>[新]</newapi>公共-商城配置",
    "name": "com_config",
    "group": "common",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"reg_type\":4,\"shop_name\":\"bs-shop购物商城\",\"gift_order_point\":2}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/shop.php",
    "groupTitle": "common"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/com/uploader",
    "title": "<newapi>[新]</newapi>上传-图片",
    "name": "com_uploader",
    "group": "common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>上传来源，comment-商品评价,feedback-留言反馈</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ord_id",
            "description": "<p>订单详情商品的记录ID，from=comment时必填</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"上传成功\",\"data\":{\"url\":\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/6592012a8f022833c6af7e6ef34e8951.jpg\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/com.php",
    "groupTitle": "common"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/favorite_action",
    "title": "<newapi>[新]</newapi>收藏-增删",
    "description": "<p>如果已经收藏则自动取消，否则自动新增收藏，status=1代表收藏，status=0代表取消收藏</p>",
    "name": "favorite_action",
    "group": "favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"收藏成功\",\"data\":{\"status\":1}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/favorite.php",
    "groupTitle": "favorite"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/my_favorite_goods",
    "title": "<newapi>[新]</newapi>收藏-列表",
    "name": "my_favorite_goods",
    "group": "favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>分页，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"goods\":[{\"id\":997,\"title\":\"优妮修护滋养焗油膏护发素女干枯毛躁修护免蒸发膜滑溜溜顺滑营养\",\"market_price\":\"49.00\",\"price\":\"0.01\",\"stock\":999,\"sale\":0,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-04-02\\/c2682072a3c1c2dc4e7e7229344f34a2.jpeg\",\"aid\":41},{\"id\":994,\"title\":\"超威威王强效洁厕净洁厕灵液马桶清洁剂除重垢尿垢马桶清洁剂洁厕\",\"market_price\":\"12.90\",\"price\":\"0.01\",\"stock\":1000,\"sale\":0,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-11\\/81fdda1477802fa3e7fc5388381e0f77.jpeg\",\"aid\":42},{\"id\":952,\"title\":\"皮尔卡丹春秋新款牛仔裤男士直筒弹力宽松商务休闲百搭修身长裤子\",\"market_price\":\"198.00\",\"price\":\"0.01\",\"stock\":1000,\"sale\":0,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2020-12-16\\/bd4519684b5e8bec3f3ea4e962898fa9.jpeg\",\"aid\":44}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/favorite.php",
    "groupTitle": "favorite"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/get_classify",
    "title": "<newapi>[新]</newapi>商品-分类列表",
    "name": "get_classify",
    "group": "goods",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"category\":[{\"category_id\":1,\"name\":\"日常百货\",\"parent_id\":0,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\",\"subcat\":[{\"category_id\":3,\"name\":\"酒水饮品\",\"parent_id\":1,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"},{\"category_id\":4,\"name\":\"纸巾牙刷\",\"parent_id\":1,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"},{\"category_id\":13,\"name\":\"未分组\",\"parent_id\":1,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"}]},{\"category_id\":2,\"name\":\"服装礼饰\",\"parent_id\":0,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\",\"subcat\":[{\"category_id\":5,\"name\":\"男装\",\"parent_id\":2,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"},{\"category_id\":6,\"name\":\"女装\",\"parent_id\":2,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"},{\"category_id\":7,\"name\":\"上衣\",\"parent_id\":2,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"}]},{\"category_id\":8,\"name\":\"油品粮食\",\"parent_id\":0,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\",\"subcat\":[{\"category_id\":9,\"name\":\"大米\",\"parent_id\":8,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"},{\"category_id\":10,\"name\":\"面条\",\"parent_id\":8,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"},{\"category_id\":11,\"name\":\"螺蛳粉\",\"parent_id\":8,\"status\":1,\"img\":\"\\/static\\/mall\\/upload\\/pro3.jpg\"}]}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/goods.php",
    "groupTitle": "goods"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/goods_detail",
    "title": "<newapi>[新]</newapi>商品-详情",
    "name": "goods_detail",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"goods\":{\"id\":994,\"title\":\"超威威王强效洁厕净洁厕灵液马桶清洁剂除重垢尿垢马桶清洁剂洁厕\",\"goods_desc\":\"超威威王强效洁厕净洁厕灵液马桶清洁剂除重垢尿垢马桶清洁剂洁厕\",\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-11\\/81fdda1477802fa3e7fc5388381e0f77.jpeg\",\"market_price\":\"12.90\",\"price\":\"0.01\",\"stock\":1000,\"sale\":0,\"status\":1,\"banners\":[\"https:\\/\\/img.pddpic.com\\/mms-material-img\\/2021-03-11\\/b9114204-a06e-48c0-97a2-98a6f9776c35.jpeg.a.jpeg\",\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-11\\/81fdda1477802fa3e7fc5388381e0f77.jpeg\"],\"content\":\"<img style=\\\"max-width: 100%\\\" src=\\\"https:\\/\\/img.pddpic.com\\/mms-material-img\\/2021-03-11\\/b9114204-a06e-48c0-97a2-98a6f9776c35.jpeg.a.jpeg\\\"\\/><img style=\\\"max-width: 100%\\\" src=\\\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-11\\/81fdda1477802fa3e7fc5388381e0f77.jpeg\\\"\\/>\",\"category_id\":9,\"store_num\":\"1234567890\",\"has_favorite\":null}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/goods.php",
    "groupTitle": "goods"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/get_comment",
    "title": "<newapi>[新]</newapi>商品-获取评价",
    "name": "goods_get_comment",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>分页，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"comment\":[{\"is_hide_user\":1,\"content\":\"实在太好了，我喜欢\",\"imgs\":[\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/b7a41d904b4d6cb5bffae74d906b05ab.jpg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/539368c2b485262dc9cc7a9986b246d5.jpeg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/48cf5010823149f7fe322b7b8bb3c523.jpg\"],\"status\":1,\"add_time\":\"2021-12-17\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"star\":5,\"user\":{\"avatar\":\"http:\\/\\/shop.test.top\\/\\/static\\/com\\/img\\/user-default.jpg\",\"nickname\":\"匿名用户\"}},{\"is_hide_user\":1,\"content\":\"实在太好了，我喜欢\",\"imgs\":[\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/b7a41d904b4d6cb5bffae74d906b05ab.jpg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/539368c2b485262dc9cc7a9986b246d5.jpeg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/48cf5010823149f7fe322b7b8bb3c523.jpg\"],\"status\":1,\"add_time\":\"2021-12-17\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"star\":5,\"user\":{\"avatar\":\"http:\\/\\/shop.test.top\\/\\/static\\/com\\/img\\/user-default.jpg\",\"nickname\":\"匿名用户\"}},{\"is_hide_user\":1,\"content\":\"实在太好了，我喜欢\",\"imgs\":[\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/b7a41d904b4d6cb5bffae74d906b05ab.jpg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/539368c2b485262dc9cc7a9986b246d5.jpeg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/48cf5010823149f7fe322b7b8bb3c523.jpg\"],\"status\":1,\"add_time\":\"2021-12-17\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"star\":5,\"user\":{\"avatar\":\"http:\\/\\/shop.test.top\\/\\/static\\/com\\/img\\/user-default.jpg\",\"nickname\":\"匿名用户\"}},{\"is_hide_user\":1,\"content\":\"实在太好了，我喜欢\",\"imgs\":[\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/b7a41d904b4d6cb5bffae74d906b05ab.jpg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/539368c2b485262dc9cc7a9986b246d5.jpeg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/48cf5010823149f7fe322b7b8bb3c523.jpg\"],\"status\":1,\"add_time\":\"2021-12-17\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"star\":5,\"user\":{\"avatar\":\"http:\\/\\/shop.test.top\\/\\/static\\/com\\/img\\/user-default.jpg\",\"nickname\":\"匿名用户\"}},{\"is_hide_user\":1,\"content\":\"实在太好了，我喜欢\",\"imgs\":[\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/b7a41d904b4d6cb5bffae74d906b05ab.jpg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/539368c2b485262dc9cc7a9986b246d5.jpeg\",\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/48cf5010823149f7fe322b7b8bb3c523.jpg\"],\"status\":1,\"add_time\":\"2021-12-17\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"star\":5,\"user\":{\"avatar\":\"http:\\/\\/shop.test.top\\/\\/static\\/com\\/img\\/user-default.jpg\",\"nickname\":\"匿名用户\"}},{\"is_hide_user\":1,\"content\":\"袜子质量一般，有点味道\",\"imgs\":[\"http:\\/\\/shop.test.top\\/upload\\/mall\\/comment\\/971a73545d147bdac869a029f690f08a.jpeg\"],\"status\":1,\"add_time\":\"2021-12-17\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"star\":3,\"user\":{\"avatar\":\"http:\\/\\/shop.test.top\\/\\/static\\/com\\/img\\/user-default.jpg\",\"nickname\":\"匿名用户\"}}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/goods.php",
    "groupTitle": "goods"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/goods/goods_list",
    "title": "<newapi>[新]</newapi>商品-列表",
    "name": "goods_list",
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>来源，home-jingxuan：首页精选；home_list-首页下面的商品列表；hot_category-首页热门推荐；detail-详情页面下面的列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>分页，默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>详情页面请求时需要填写（方便返回类似的）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>搜索字符串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序，normal-综合，price_desc-价格倒叙，price_asc-价格正序，sale_asc-销量正序，sale_desc-销量倒叙</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"goods\":[{\"id\":997,\"title\":\"优妮修护滋养焗油膏护发素女干枯毛躁修护免蒸发膜滑溜溜顺滑营养\",\"market_price\":\"49.00\",\"price\":\"0.01\",\"stock\":999,\"sale\":0,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-04-02\\/c2682072a3c1c2dc4e7e7229344f34a2.jpeg\"},{\"id\":993,\"title\":\"英国VANOW高档智能保温杯男士女316不锈钢刻字定制logo泡茶水杯子\",\"market_price\":\"169.00\",\"price\":\"0.01\",\"stock\":1000,\"sale\":0,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-06-25\\/548ea0b59cfd05667c080d05080e4231.jpeg\"},{\"id\":987,\"title\":\"浪莎打底裤女秋冬加绒加厚外穿连裤袜肉色显瘦保暖光腿神器超自然\",\"market_price\":\"21.80\",\"price\":\"0.01\",\"stock\":1000,\"sale\":0,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-01-06\\/af6ccaf7536835e00d078989c310d4d8.jpeg\"}],\"total\":3}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/goods.php",
    "groupTitle": "goods"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/home/get_article_info",
    "title": "<newapi>[新]</newapi>首页-公告详情",
    "name": "get_article_info",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>公告ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"article\":{\"id\":2,\"title\":\"写一个连续的就业班教程\",\"content\":\"这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容8\",\"add_time\":\"2021-10-23\",\"up_time\":1638776601,\"status\":1,\"count_view\":0}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/home.php",
    "groupTitle": "home"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/home/get_banner",
    "title": "<newapi>[新]</newapi>首页-轮播图",
    "name": "get_banner",
    "group": "home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"banner\":[{\"id\":1,\"title\":\"\",\"url\":\"http:\\/\\/blog.wei1.top\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/upload\\/ban1.jpg\"},{\"id\":2,\"title\":\"\",\"url\":\"\\/mall\\/goods\\/pro_list.html?category_id=3\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/upload\\/ban2.jpg\"},{\"id\":3,\"title\":\"\",\"url\":\"\\/mall\\/order\\/all_orders.html\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/upload\\/ban3.jpg\"},{\"id\":4,\"title\":\"\",\"url\":\"\\/mall\\/user\\/index.html\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/upload\\/ban4.jpg\"}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/home.php",
    "groupTitle": "home"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/home/get_article",
    "title": "<newapi>[新]</newapi>首页-公告列表",
    "name": "home_get_article",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>分页，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"article\":[{\"id\":2,\"title\":\"写一个连续的就业班教程\"},{\"id\":1,\"title\":\"这个是好商城，第一个开发的连续版本\"}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/home.php",
    "groupTitle": "home"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/home/get_navs",
    "title": "<newapi>[新]</newapi>首页-图标导航",
    "name": "home_get_navs",
    "group": "home",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"navs\":[{\"id\":1,\"title\":\"超级红包\",\"url\":\"http:\\/\\/blog.wei1.top\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/images\\/icon-link1.png\"},{\"id\":2,\"title\":\"酒水饮料\",\"url\":\"\\/mall\\/goods\\/pro_list.html?category_id=3\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/images\\/icon-link2.png\"},{\"id\":3,\"title\":\"我的订单\",\"url\":\"\\/mall\\/order\\/all_orders.html\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/images\\/icon-link3.png\"},{\"id\":4,\"title\":\"个人主页\",\"url\":\"\\/mall\\/user\\/index.html\",\"img\":\"http:\\/\\/g.abc.top\\/static\\/mall\\/images\\/icon-link4.png\"},{\"id\":9,\"title\":\"dsfdsf\",\"url\":\"\\/mall\\/home\\/index\",\"img\":\"http:\\/\\/g.abc.top\\/upload\\/bsnavs\\/905fd482498ebe4bc9565f678007775f.jpg\"}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/home.php",
    "groupTitle": "home"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/comment",
    "title": "<newapi>[新]</newapi>评论-获取",
    "name": "order_comment",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "get"
            ],
            "optional": false,
            "field": "from",
            "description": "<p>操作类型:get</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ord_id",
            "description": "<p>订单详情商品的记录ID，在详情里面goods_list返回的ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"comment\":{\"id\":3,\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"order_goods_id\":88,\"goods_id\":53,\"content\":\"***，这个***，真的不懒啊哦\",\"star\":4,\"add_time\":1640851612,\"imgs\":[\"http:\\/\\/g.abc.top\\/upload\\/mall\\/comment\\/1b1eef32be5910a91593060bd3ef72ce.jpg\"],\"is_hide_user\":1,\"status\":0}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/comment_action",
    "title": "<newapi>[新]</newapi>评论-发表",
    "name": "order_comment_action",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>操作类型:add-新增，del-删除</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ord_id",
            "description": "<p>订单详情商品的记录ID，在详情里面goods_list返回的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "isHidden",
            "description": "<p>是否匿名，1-是，0-否</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "star",
            "description": "<p>评价的星星数量，1~5星,del删除时不需要</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imgs",
            "description": "<p>评价图片，多个可以用逗号隔开(英文)，也可以提交数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>评价的内容，5~200字符</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"评价成功，感谢您的支持\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/create",
    "title": "<newapi>[新]</newapi>订单-创建订单",
    "name": "order_create",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>商品ID，从商品“立即购买”时必填，从购物车无需</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>商品数量，从商品详情“立即购买”时必填，默认1，从购物车无需</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "addr_id",
            "description": "<p>收货地址id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"order_sn\":\"BS2021121013525356960675\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/del",
    "title": "<newapi>[新]</newapi>订单-删除",
    "name": "order_del",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"删除成功\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/detail",
    "title": "<newapi>[新]</newapi>订单-详情",
    "description": "<p>订单流程：预生成》创建》订单列表》待支付》详情》再次付款</p>",
    "name": "order_detail",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"order\":{\"id\":107,\"order_sn\":\"BS2021121719321944572625\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"status\":3,\"price\":\"0.02\",\"pay_price\":\"0.02\",\"add_time\":1639740739,\"up_time\":1639741088,\"send_time\":0,\"pay_time\":1639740739,\"pay_type\":\"credit\",\"trans_id\":\"\",\"address\":{\"id\":11,\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"province\":\"北京\",\"city\":\"北京市\",\"area\":\"东城区\",\"town\":\"\",\"address\":\"xxxx浩\",\"is_default\":1,\"mobile\":\"1655555555\",\"username\":\"小编\"},\"cancel_pay_time\":1639744339,\"store_num\":\"123456\",\"is_del\":0,\"pay_openid\":\"\",\"express_com\":\"yunda\",\"express_no\":\"1234444444444444444\",\"refund_total\":\"0.00\",\"receive_time\":1639741088,\"refund\":null},\"address\":{\"id\":11,\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"province\":\"北京\",\"city\":\"北京市\",\"area\":\"东城区\",\"town\":\"\",\"address\":\"xxxx浩\",\"is_default\":1,\"mobile\":\"1655555555\",\"username\":\"小编\"},\"goods_list\":[{\"id\":73,\"order_sn\":\"BS2021121719321944572625\",\"goods_id\":47,\"thumb\":\"https:\\/\\/img.pddpic.com\\/gaudit-image\\/2021-11-21\\/1550c02383aec776ebc721a33478bf9e.jpeg\",\"title\":\"珀莱雅水乳护肤品套装女学生党化妆品全套洗面奶爽肤补水保湿正牌\",\"price\":\"0.01\",\"count\":1,\"commented\":null},{\"id\":74,\"order_sn\":\"BS2021121719321944572625\",\"goods_id\":48,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2020-09-03\\/7d8faca96b4c63215df0ac0d9e0c69ef.jpeg\",\"title\":\"南极人袜子男中筒秋冬季保暖船袜男士袜子复古百搭透气高筒篮球袜\",\"price\":\"0.01\",\"count\":1,\"commented\":{\"id\":3}}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/get_virtual_info",
    "title": "<newapi>[新]</newapi>订单-虚拟品信息",
    "description": "<p>虚拟商品发货在独立的接口展示</p>",
    "name": "order_get_virtual_info",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"order\":{\"order_sn\":\"BS2021122213463434822258\",\"send_time\":\"2021-12-22 15:18:37\",\"content_virtual\":\"<p>欢迎使用bs_shop购物VIP会员卡，您已购买VIP会员功能，请在有效期前使用，<font color=\\\"#ff0000\\\">请勿泄露<\\/font>。<\\/p><table class=\\\"table table-bordered\\\"><tbody><tr><td><b>卡号<\\/b><\\/td><td>1234567892<\\/td><\\/tr><tr><td><b>卡密<\\/b><\\/td><td>xe454x1f1615<\\/td><\\/tr><tr><td><b>有效期&nbsp;&nbsp;<\\/b><\\/td><td><font color=\\\"#ff0000\\\">2022-12-22 00:00:00<\\/font><\\/td><\\/tr><tr><td><b>激活码&nbsp; &nbsp;<\\/b><\\/td><td>246165<\\/td><\\/tr><\\/tbody><\\/table><p><b>使用说明<\\/b>：<\\/p><p>打开【<a href=\\\"https:\\/\\/blog.alipay168.cn\\/\\\" target=\\\"_blank\\\">绑卡<\\/a>】，输入上面的卡号、卡密、激活码即可自动激活。<\\/p><p><font color=\\\"#ff0000\\\">请在有效期前使用，超过有效期概不退换。<\\/font><\\/p><p><br><\\/p>\",\"uid\":\"bs91ca7180113e01fde28a157bb75bb78c\",\"add_time\":1640151994}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/my_orders",
    "title": "<newapi>[新]</newapi>订单-订单列表",
    "description": "<p>订单流程：预生成》创建》支付》完成》我的订单列表</p>",
    "name": "order_my_orders",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前分页，默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态：0-待支付，1-代发货，2-待收货，3-待评价（已完成），不填或者''空字符代表全部</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"orders\":[{\"order_sn\":\"BS2021121013525356960675\",\"price\":\"0.03\",\"status\":1,\"pay_time\":1639115573,\"pay_price\":\"0.03\",\"add_time\":1639115573,\"goods_list\":[{\"id\":110,\"order_sn\":\"BS2021121013525356960675\",\"goods_id\":968,\"thumb\":\"https:\\/\\/img.pddpic.com\\/gaudit-image\\/2021-09-22\\/f29932acb3abb743c6f5e2613a2a1f09.jpeg\",\"title\":\"韩束巨水光臻时沁润礼盒护肤品补水保湿提亮肤色控油淡斑化妆品\",\"price\":\"0.01\",\"count\":3}]},{\"order_sn\":\"BS2021120815010412233426\",\"price\":\"0.01\",\"status\":0,\"pay_time\":0,\"pay_price\":\"0.00\",\"add_time\":1638946864,\"goods_list\":[{\"id\":109,\"order_sn\":\"BS2021120815010412233426\",\"goods_id\":42,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-25\\/7f43ebe854d702edde7b1708695a5756.jpeg\",\"title\":\"公牛明装开关插座面板一开五孔16a86型家用墙壁明线明装多孔插座\",\"price\":\"0.01\",\"count\":1}]},{\"order_sn\":\"BS2021120814172485444066\",\"price\":\"0.03\",\"status\":1,\"pay_time\":1638944245,\"pay_price\":\"0.03\",\"add_time\":1638944244,\"goods_list\":[{\"id\":108,\"order_sn\":\"BS2021120814172485444066\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":3}]},{\"order_sn\":\"BS2021120814165984447764\",\"price\":\"0.03\",\"status\":1,\"pay_time\":1638944220,\"pay_price\":\"0.03\",\"add_time\":1638944219,\"goods_list\":[{\"id\":107,\"order_sn\":\"BS2021120814165984447764\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":3}]},{\"order_sn\":\"BS2021120814161481842882\",\"price\":\"0.03\",\"status\":1,\"pay_time\":1638944175,\"pay_price\":\"0.03\",\"add_time\":1638944174,\"goods_list\":[{\"id\":106,\"order_sn\":\"BS2021120814161481842882\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":3}]},{\"order_sn\":\"BS2021120814154581828868\",\"price\":\"0.01\",\"status\":1,\"pay_time\":1638944146,\"pay_price\":\"0.01\",\"add_time\":1638944145,\"goods_list\":[{\"id\":105,\"order_sn\":\"BS2021120814154581828868\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":1}]},{\"order_sn\":\"BS2021120814145442022721\",\"price\":\"0.02\",\"status\":1,\"pay_time\":1638944095,\"pay_price\":\"0.02\",\"add_time\":1638944094,\"goods_list\":[{\"id\":104,\"order_sn\":\"BS2021120814145442022721\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":2}]},{\"order_sn\":\"BS2021120814085686048321\",\"price\":\"0.02\",\"status\":1,\"pay_time\":1638943736,\"pay_price\":\"0.02\",\"add_time\":1638943736,\"goods_list\":[{\"id\":103,\"order_sn\":\"BS2021120814085686048321\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":2}]},{\"order_sn\":\"BS2021120814064345625544\",\"price\":\"0.02\",\"status\":2,\"pay_time\":1638943604,\"pay_price\":\"0.02\",\"add_time\":1638943603,\"goods_list\":[{\"id\":102,\"order_sn\":\"BS2021120814064345625544\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":2}]},{\"order_sn\":\"BS2021120814051282610959\",\"price\":\"0.01\",\"status\":1,\"pay_time\":1638943512,\"pay_price\":\"0.01\",\"add_time\":1638943512,\"goods_list\":[{\"id\":101,\"order_sn\":\"BS2021120814051282610959\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":1}]},{\"order_sn\":\"BS2021120814042125829227\",\"price\":\"0.01\",\"status\":1,\"pay_time\":1638943461,\"pay_price\":\"0.01\",\"add_time\":1638943461,\"goods_list\":[{\"id\":100,\"order_sn\":\"BS2021120814042125829227\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":1}]},{\"order_sn\":\"BS2021120814032788866768\",\"price\":\"0.03\",\"status\":1,\"pay_time\":1638943408,\"pay_price\":\"0.03\",\"add_time\":1638943407,\"goods_list\":[{\"id\":99,\"order_sn\":\"BS2021120814032788866768\",\"goods_id\":43,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2021-03-10\\/93b26764136d5084822e7339e5e7d632.jpeg\",\"title\":\"两盒特惠装一梳彩染发剂膏纯自己天然在家植物染男2021显白流行色\",\"price\":\"0.01\",\"count\":3}]},{\"order_sn\":\"BS2021120810345756705828\",\"price\":\"0.01\",\"status\":1,\"pay_time\":1638930897,\"pay_price\":\"0.01\",\"add_time\":1638930897,\"goods_list\":[{\"id\":98,\"order_sn\":\"BS2021120810345756705828\",\"goods_id\":99,\"thumb\":\"https:\\/\\/t00img.yangkeduo.com\\/goods\\/images\\/2020-07-12\\/78654515a50255c8d3d31eeb4ce544a8.jpeg\",\"title\":\"小浣熊儿童宝宝洗发水沐浴露二合一小孩新生婴幼儿用品洗护家庭装\",\"price\":\"0.01\",\"count\":1}]}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/order_count",
    "title": "<newapi>[新]</newapi>订单-数量统计",
    "name": "order_order_count",
    "group": "order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.count",
            "description": "<p>统计对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.count.count0",
            "description": "<p>待付款</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.count.count1",
            "description": "<p>代发货</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.count.count2",
            "description": "<p>待收货</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.count.count3",
            "description": "<p>待评价</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"count\":{\"count0\":\"1\",\"count1\":\"11\",\"count2\":\"1\",\"count3\":0}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/pay",
    "title": "<newapi>[新]</newapi>订单-支付(余额)",
    "description": "<p>订单流程：预生成》创建》支付》完成</p>",
    "name": "order_pay",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_sn",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "credit"
            ],
            "optional": false,
            "field": "payType",
            "description": "<p>支付方式，credit-余额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"支付成功\",\"data\":{\"order_sn\":\"BS2021121013525356960675\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/ready",
    "title": "<newapi>[新]</newapi>订单-预创建",
    "name": "order_ready",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>商品ID，从商品“立即购买”时必填，从购物车无需</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>商品数量，从商品详情“立即购买”时必填，默认1，从购物车无需</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "addr_id",
            "description": "<p>收货地址id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"order\":{\"totalMoney\":\"0.03\"},\"address\":{\"id\":12,\"uid\":\"bs1e7cdd3a5c3265c3f3c7bb77602d8ec9\",\"province\":\"北京\",\"city\":\"北京市\",\"area\":\"石景山区\",\"town\":\"\",\"address\":\"222222\",\"is_default\":1,\"mobile\":\"111\",\"username\":\"111\"},\"goods_list\":[{\"thumb\":\"https:\\/\\/img.pddpic.com\\/gaudit-image\\/2021-09-22\\/f29932acb3abb743c6f5e2613a2a1f09.jpeg\",\"title\":\"韩束巨水光臻时沁润礼盒护肤品补水保湿提亮肤色控油淡斑化妆品\",\"price\":\"0.01\",\"status\":1,\"stock\":1000,\"stock_locked\":0,\"store_num\":\"1234567890\",\"count\":3}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/recharge",
    "title": "<newapi>[新]</newapi>订单-充值调起支付",
    "description": "<p>订单流程：充值》输入金额》请求接口》调起支付参数》支付》完成</p>",
    "name": "order_recharge",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money",
            "description": "<p>充值金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "wechat"
            ],
            "optional": false,
            "field": "payType",
            "description": "<p>支付方式，wechat-微信</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"payParam\":{\"appId\":\"xxx\",\"timeStamp\":\"1639116883\",\"nonceStr\":\"sdfdsfdsf2wexdfdsf\",\"package\":\"prepay_id=wxdsfwef11312s\",\"paySign\":\"sdofjdofjowejfoewi\",\"signType\":\"MD5\"},\"order_sn\":\"BS2021121013525356960675\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/refund_apply",
    "title": "<newapi>[新]</newapi>订单-申请售后",
    "name": "order_refund_apply",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_sn",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>退款类型，1-仅退款，2-退货退款，3-仅退货</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>退款原因</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>退款金额，不得大于实付金额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/refund_cancel",
    "title": "<newapi>[新]</newapi>订单-取消售后",
    "name": "order_refund_cancel",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_sn",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/order/wx_param",
    "title": "<newapi>[新]</newapi>订单-微信调起支付",
    "description": "<p>订单流程：预生成》创建》微信支付》请求调起支付参数》支付》完成</p>",
    "name": "order_wx_param",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_sn",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "wechat"
            ],
            "optional": false,
            "field": "payType",
            "description": "<p>支付方式，wechat-微信</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"payParam\":{\"appId\":\"xxx\",\"timeStamp\":\"1639116883\",\"nonceStr\":\"sdfdsfdsf2wexdfdsf\",\"package\":\"prepay_id=wxdsfwef11312s\",\"paySign\":\"sdofjdofjowejfoewi\",\"signType\":\"MD5\"}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/order.php",
    "groupTitle": "order"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/my_address_action",
    "title": "<newapi>[新]</newapi>用户-收货地址操作",
    "name": "my_address_action",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>地址ID,编辑或者删除时必填</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "is_default",
            "description": "<p>是否默认，1-默认，0-非默认</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>操作方式，填写“del”代表删除该地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>收件号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>收件人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addr",
            "description": "<p>省市区，用空格分开，如“北京 北京市 石景山区”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>详细地址 ，如石景山bsShop商城开发大楼35层</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"操作成功\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/my_address_info",
    "title": "<newapi>[新]</newapi>用户-收货地址详情",
    "name": "my_address_info",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>地址ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"address\":{\"id\":13,\"uid\":\"bs1e7cdd3a5c3265c3f3c7bb77602d8ec9\",\"province\":\"河北省\",\"city\":\"石家庄市\",\"area\":\"长安区\",\"town\":\"\",\"address\":\"bs_shop开发大楼35层5-3号\",\"is_default\":1,\"mobile\":\"13500000025\",\"username\":\"小白\"}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/data_count",
    "title": "<newapi>[新]</newapi>数量统计",
    "name": "user_data_count",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count.credits",
            "description": "<p>账户对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count.credits.point",
            "description": "<p>积分</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count.credits.credit",
            "description": "<p>余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count.goods",
            "description": "<p>收藏商品数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count.msg",
            "description": "<p>未读消息数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count.order",
            "description": "<p>订单统计</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"count\":{\"order\":{\"count0\":\"1\",\"count1\":\"19\",\"count2\":\"1\",\"count3\":\"2\"},\"credit\":{\"point\":78,\"credit\":\"100322.78\"},\"goods\":4,\"msg\":9}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/feedback",
    "title": "<newapi>[新]</newapi>留言反馈",
    "name": "user_feedback",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>分类，请参考页面</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容，200字以内</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>来源，msg-留言，feedback-反馈</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imgs",
            "description": "<p>图片地址，多个用逗号分开</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"感谢您的留言\\/反馈\",\"data\":[]}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/info",
    "title": "<newapi>[新]</newapi>用户-基本信息",
    "name": "user_info",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"user_info\":{\"account\":\"wei@alipay168.cn\",\"uid\":\"bs76eb38dc7a8550b10d506b157e17d50f\",\"status\":1}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/msg_list",
    "title": "<newapi>[新]</newapi>消息-列表",
    "name": "user_msg_list",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前分页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"msg_list\":[{\"id\":9,\"title\":\"退款成功\",\"content\":\"您的订单已退款，请自行查看订单......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":8,\"title\":\"退款成功\",\"content\":\"您的订单已退款，请自行查看订单......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":7,\"title\":\"您购买的商品发货啦\",\"content\":\"您购买的商品发货了，查看发货信......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":6,\"title\":\"您购买的商品发货啦\",\"content\":\"您购买的商品发货了，查看发货信......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":5,\"title\":\"确认收货成功\",\"content\":\"您购买的商品已被确认收货，若不......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":4,\"title\":\"您购买的商品发货啦\",\"content\":\"您购买的商品发货了，查看发货信......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":3,\"title\":\"您购买的商品发货啦\",\"content\":\"您购买的商品发货了，查看发货信......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":2,\"title\":\"您购买的商品发货啦\",\"content\":\"您购买的商品发货了，查看发货信......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"},{\"id\":1,\"title\":\"您购买的商品发货啦\",\"content\":\"您购买的商品发货了，查看发货信......\",\"type\":1,\"add_time\":\"2021年12月22日\",\"typeDesc\":\"系统通知\"}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/my_address",
    "title": "<newapi>[新]</newapi>用户-收货地址列表",
    "name": "user_my_address",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>分页，默认1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"address\":[{\"id\":12,\"uid\":\"bs1e7cdd3a5c3265c3f3c7bb77602d8ec9\",\"province\":\"北京\",\"city\":\"北京市\",\"area\":\"石景山区\",\"town\":\"\",\"address\":\"222222\",\"is_default\":1,\"mobile\":\"111\",\"username\":\"111\"}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/my_credits",
    "title": "<newapi>[新]</newapi>用户-账户余额",
    "name": "user_my_credits",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.credits",
            "description": "<p>账户对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.credits.point",
            "description": "<p>积分</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.credits.credit",
            "description": "<p>余额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.credits.goods",
            "description": "<p>收藏商品数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"credits\":{\"point\":8,\"credit\":\"1008.75\",\"goods\":2}}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/user/my_records",
    "title": "<newapi>[新]</newapi>用户-余额交易记录",
    "name": "user_my_records",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>分页，默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型，1-交易，2-充值，3-提现</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"msg\":\"ok\",\"data\":{\"records\":[{\"add_time\":\"2021-12-08 10:34:57\",\"remark\":\"商品支付\",\"num\":0.01,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:03:28\",\"remark\":\"商品支付\",\"num\":0.03,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:04:21\",\"remark\":\"商品支付\",\"num\":0.01,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:05:12\",\"remark\":\"商品支付\",\"num\":0.01,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:06:44\",\"remark\":\"商品支付\",\"num\":0.02,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:08:56\",\"remark\":\"商品支付\",\"num\":0.02,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:14:55\",\"remark\":\"商品支付\",\"num\":0.02,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:15:46\",\"remark\":\"商品支付\",\"num\":0.01,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:16:15\",\"remark\":\"商品支付\",\"num\":0.03,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:17:00\",\"remark\":\"商品支付\",\"num\":0.03,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-08 14:17:25\",\"remark\":\"商品支付\",\"num\":0.03,\"type\":1,\"ctype\":\"-\"},{\"add_time\":\"2021-12-10 13:52:53\",\"remark\":\"商品支付\",\"num\":0.03,\"type\":1,\"ctype\":\"-\"}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.php",
    "groupTitle": "user"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/account/get_change_pwd_dcode",
    "title": "<newapi>[新]</newapi>动态码-修改密码",
    "description": "<p>登录后可以进行密码修改，获取动态码即可</p>",
    "name": "verify_get_change_pwd_dcode",
    "group": "verifycode",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层 {&quot;code&quot;:0,&quot;msg&quot;:&quot;发送成功,注意查收&quot;,&quot;data&quot;:[]}</p>"
          }
        ]
      }
    },
    "filename": "api/verifycode.php",
    "groupTitle": "verifycode"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/account/get_forget_pwd_dcode",
    "title": "<newapi>[新]</newapi>动态码-重置密码",
    "description": "<p>忘记密码时可以找回密码，通过账号和动态码验证</p>",
    "name": "verify_get_forget_pwd_dcode",
    "group": "verifycode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录账号，仅限邮箱或者手机号的用户</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vcode",
            "description": "<p>图形验证码，通过/mall/account/get_vcode获取</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层 {&quot;code&quot;:0,&quot;msg&quot;:&quot;发送成功,注意查收&quot;,&quot;data&quot;:[]}</p>"
          }
        ]
      }
    },
    "filename": "api/verifycode.php",
    "groupTitle": "verifycode"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/mall/account/get_vcode",
    "title": "<newapi>[新]</newapi>验证码-图形验证码",
    "description": "<p>获取图形验证码，直接返回图片，可以直接放在图片的src位置显示图片</p>",
    "name": "verify_get_vcode",
    "group": "verifycode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dcode",
            "description": "<p>动态码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回信息码 0 表示查询正常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回说明信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据层</p>"
          }
        ]
      }
    },
    "filename": "api/verifycode.php",
    "groupTitle": "verifycode"
  }
] });
