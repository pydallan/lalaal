var base64 = require("../../imgs/base64");

Page({
    onLoad: function(){
        this.setData({
            icon20: base64.icon20,
            icon60: base64.icon60
        });
    }
});