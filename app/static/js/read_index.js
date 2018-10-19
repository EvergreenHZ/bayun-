function Go(a) {
    window.location = a
}
var jieqiUserId = 0;
var jieqiUserName = "";
var jieqiUserPassword = "";
var jieqiUserGroup = 0;
var jieqiNewMessage = 0;
var jieqiUserVip = 0;
var jieqiUserHonor = "";
var jieqiUserGroupName = "";
var jieqiUserVipName = "";
var timestamp = Math.ceil((new Date()).valueOf() / 1000);
var flag_overtime = -1;
if (document.cookie.indexOf("jieqiUserInfo") >= 0) {
    var jieqiUserInfo = get_cookie_value("jieqiUserInfo");
    start = 0;
    offset = jieqiUserInfo.indexOf(",", start);
    while (offset > 0) {
        tmpval = jieqiUserInfo.substring(start, offset);
        tmpidx = tmpval.indexOf("=");
        if (tmpidx > 0) {
            tmpname = tmpval.substring(0, tmpidx);
            tmpval = tmpval.substring(tmpidx + 1, tmpval.length);
            if (tmpname == "jieqiUserId") {
                jieqiUserId = tmpval
            } else {
                if (tmpname == "jieqiUserName_un") {
                    jieqiUserName = tmpval
                } else {
                    if (tmpname == "jieqiUserPassword") {
                        jieqiUserPassword = tmpval
                    } else {
                        if (tmpname == "jieqiUserGroup") {
                            jieqiUserGroup = tmpval
                        } else {
                            if (tmpname == "jieqiNewMessage") {
                                jieqiNewMessage = tmpval
                            } else {
                                if (tmpname == "jieqiUserVip") {
                                    jieqiUserVip = tmpval
                                } else {
                                    if (tmpname == "jieqiUserHonor_un") {
                                        jieqiUserHonor = tmpval
                                    } else {
                                        if (tmpname == "jieqiUserGroupName_un") {
                                            jieqiUserGroupName = tmpval
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        start = offset + 1;
        if (offset < jieqiUserInfo.length) {
            offset = jieqiUserInfo.indexOf(",", start);
            if (offset == -1) {
                offset = jieqiUserInfo.length
            }
        } else {
            offset = -1
        }
    }
    flag_overtime = get_cookie_value("overtime")
} else {
    delCookie("overtime")
}
function delCookie(b) {
    var a = new Date();
    a.setTime(a.getTime() - 10000);
    document.cookie = b + "=a; expires=" + a.toGMTString()
}
function get_cookie_value(a) {
    var b = a + "=";
    var c = "";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(b);
        if (offset != -1) {
            offset += b.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) {
                end = document.cookie.length
            }
            c = unescape(document.cookie.substring(offset, end))
        }
    }
    return c
}
function login() {
    if (jieqiUserId != 0 && jieqiUserName != "" && (document.cookie.indexOf("PHPSESSID") != -1 || jieqiUserPassword != "")) {
        document.writeln('<ul><li><a href="/userdetail.php?uid=' + jieqiUserId + '" target="_top">' + jieqiUserName + "</a></li><li>绛夌骇锛�" + jieqiUserGroupName + "</li><li>澶磋锛�" + jieqiUserHonor + '</li><li><a href="/modules/article/bookcase.php?uid=' + jieqiUserId + '" target="_top">鎴戠殑涔︽灦</a></li> ');
        if (jieqiNewMessage > 0) {
            document.write('<li><a class="new" href="/message.php?uid=' + jieqiUserId + '&box=inbox" target="_top">鎮ㄦ湁鐭俊</a></li>')
        } else {
            document.write('<li><a href="/message.php?uid=' + jieqiUserId + '&box=inbox" target="_top">鏌ョ湅鐭俊</a></li>')
        }
        document.write('<li><a href="/userdetail.php?uid=' + jieqiUserId + '" target="_top">鏌ョ湅璧勬枡</a></li>');
        document.write('<li><a href="/logout.php" target="_self">閫€鍑虹櫥褰�</a></li>');
        document.write("</ul>")
    } else {
        var a = "";
        if (location.href.indexOf("jumpurl") == -1) {
            a = location.href
        }
        document.writeln('<form name="frmlogin" id="frmlogin" method="post" action="/login.php?do=submit&action=login&usecookie=86400&jumpurl=' + a + '&jumpreferer=1">');
        document.writeln('<input type="text" class="inp" value="璇疯緭鍏ュ笎鍙�" onFocus="this.style.color = \'#000000\';this.focus();if(this.value==\'璇疯緭鍏ュ笎鍙穃'){this.value=\'\';}" onBlur="this.style.color = \'#d5d5d5\';if(this.value==\'\'){this.value=\'璇疯緭鍏ュ笎鍙穃';}" onDblClick="javascript:this.value=\'\'" name="username" id="username">');
        document.writeln('<input type="password" class="inp"  value="璇疯緭鍏ュ瘑鐮�" onFocus="this.style.color = \'#000000\';this.focus();if(this.value==\'璇疯緭鍏ュ瘑鐮乗'){this.value=\'\';}" onBlur="this.style.color = \'#d5d5d5\';if(this.value==\'\'){this.value=\'璇疯緭鍏ュ瘑鐮乗';}" onDblClick="javascript:this.value=\'\'" name="password" id="password">');
        document.writeln('<input class="int" type="submit" value="鐧婚檰"><a href="/getpass.php" title="蹇樿瀵嗙爜">蹇樿瀵嗙爜</a> | <a href="/register.php" title="鐢ㄦ埛娉ㄥ唽">鐢ㄦ埛娉ㄥ唽</a></form>')
    }
}
function AddFavorite(c, a) {
    try {
        window.external.addFavorite(a, c)
    } catch(b) {
        try {
            window.sidebar.addPanel(c, a, "")
        } catch(b) {
            alert("鎶辨瓑锛屾偍鎵€浣跨敤鐨勬祻瑙堝櫒鏃犳硶瀹屾垚姝ゆ搷浣溿€俓n\n鍔犲叆鏀惰棌澶辫触锛岃浣跨敤Ctrl+D杩涜娣诲姞")
        }
    }
}
function SetHome(c, a) {
    try {
        c.style.behavior = "url(#default#homepage)";
        c.setHomePage(a)
    } catch(b) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch(b) {
                alert("鎶辨瓑锛屾鎿嶄綔琚祻瑙堝櫒鎷掔粷锛乗n\n璇峰湪娴忚鍣ㄥ湴鍧€鏍忚緭鍏モ€渁bout:config鈥濆苟鍥炶溅鐒跺悗灏哰signed.applets.codebase_principal_support]璁剧疆涓�'true'")
            }
        } else {
            alert("鎶辨瓑锛屾偍鎵€浣跨敤鐨勬祻瑙堝櫒鏃犳硶瀹屾垚姝ゆ搷浣溿€俓n\n鎮ㄩ渶瑕佹墜鍔ㄥ皢銆�" + a + "銆戣缃负棣栭〉銆�")
        }
    }
}
function share() {
    document.writeln('<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="鍒嗕韩鍒板井淇�"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="鍒嗕韩鍒癚Q濂藉弸"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="鍒嗕韩鍒癚Q绌洪棿"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="鍒嗕韩鍒版柊娴井鍗�"></a><a href="#" class="bds_isohu" data-cmd="isohu" title="鍒嗕韩鍒版垜鐨勬悳鐙�"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="鍒嗕韩鍒拌吘璁井鍗�"></a><a href="#" class="bds_renren" data-cmd="renren" title="鍒嗕韩鍒颁汉浜虹綉"></a><a href="#" class="bds_tieba" data-cmd="tieba" title="鍒嗕韩鍒扮櫨搴﹁创鍚�"></a><a href="#" class="bds_copy" data-cmd="copy" title="鍒嗕韩鍒板鍒剁綉鍧€"></a></div>');
    document.writeln('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{},"image":{"viewList":["weixin","sqq","qzone","tsina","isohu","tqq","renren","tieba","copy"],"viewText":"鍒嗕韩鍒帮細","viewSize":"24"}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];<\/script>')
}
function bgs() {
    document.writeln('<div class="bgs"><ul><li><input type="text" class="textm" id="screen" value="婊氬睆"><input type="hidden" class="textm" id="screen2" value="婊氬睆"><span class="btn" id="screen1"></span></li><li class="select"><p>0</p><p>1鎱�</p><p>2</p><p>3</p><p>4</p></li></ul>');
    document.writeln('<ul><li><input type="text" class="textm" id="background" value="鑳屾櫙"  /><input type="hidden" id="background2" value="#000" /><span class="btn" id="background1"></span></li><li class="select"><p class="bg_huang">鏄庨粍</p><p class="bg_lan">娣¤摑</p><p class="bg_lv">娣＄豢</p><p class="bg_fen">绾㈢矇</p><p class="bg_bai">鐧借壊</p><p class="bg_hui">鐏拌壊</p><p class="bg_hei">婕嗛粦</p><p class="bg_cao">鑽夌豢</p><p class="bg_cha">鑼惰壊</p><p class="bg_yin">閾惰壊</p><p class="bg_mi">绫宠壊</p></li></ul>');
    document.writeln('<ul><li><input type="text" class="textm" id="fontSize" value="瀛楀彿" /><input type="hidden" id="fontSize2" value="16px" /><span class="btn" id="fontSize1"></span></li><li class="select"><p class="fon_12">12px</p><p class="fon_14">14px</p><p class="fon_16">16px</p><p class="fon_18">18px</p><p class="fon_20">20px</p><p class="fon_24">24px</p><p class="fon_30">30px</p></li></ul>');
    document.writeln('<ul><li><input type="text" class="textm" id="fontColor" value="瀛楄壊" /><input type="hidden" id="fontColor2" value="z_mo" /><span class="btn" id="fontColor1"></span></li><li class="select"><p class="z_hei">榛戣壊</p><p class="z_red">绾㈣壊</p><p class="z_lan">钃濊壊</p><p class="z_lv">缁胯壊</p><p class="z_hui">鐏拌壊</p><p class="z_li">鏍楄壊</p><p class="z_wu">闆剧櫧</p><p class="z_zi">鏆楃传</p><p class="z_he">鐜</p></li></ul>');
    document.writeln('<ul><li><input type="text" class="textm" id="fontFamily" value="瀛椾綋" /><input type="hidden" id="fontFamily2" value="fam_song" /><span class="btn" id="fontFamily1"></span></li><li class="select"><p class="fam_song">瀹嬩綋</p><p class="fam_hei">榛戜綋</p><p class="fam_kai">妤蜂綋</p><p class="fam_qi">鍚綋</p><p class="fam_ya">闆呴粦</p></li></ul><input type="button" class="ud_but2" onmousemove="this.className=\'ud_but22\'" onmouseout="this.className=\'ud_but2\'" value="淇濆瓨" id="saveButton" /><input type="button" class="ud_but1" onmousemove="this.className=\'ud_but11\'" onmouseout="this.className=\'ud_but1\'"  value="鎭㈠" id="recoveryButton" /></div>')
}
var date = new Date();
var timestamp = Date.parse(new Date());
date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
jQuery.cookie = function(b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure": "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};
$(function() {
    $("#screen").click(function() {
        var b = $("#screen").parent().parent().children(".select");
        b.show()
    });
    $("#screen1").click(function() {
        var b = $("#screen").parent().parent().children(".select");
        b.show()
    });
    $("#screen").parent().parent().children(".select").children("p").each(function() {
        $(this).click(function() {
            $("#screen").val($(this).html());
            $("#screen").parent().parent().children(".select").hide();
            var b = $("#screen").val();
            $.cookie("screen", b, {
                path: "/",
                expires: date
            });
            a.start()
        })
    });
    $("#background").click(function() {
        var b = $("#background").parent().parent().children(".select");
        b.show()
    });
    $("#background1").click(function() {
        var b = $("#background1").parent().parent().children(".select");
        b.show()
    });
    $(".select").parent().each(function() {
        $(this).mouseover(function() {
            $(this).children(".select").show()
        })
    });
    $(".select").parent().each(function() {
        $(this).mouseout(function() {
            $(this).children(".select").hide()
        })
    });
    $("#background").parent().parent().children(".select").children("p").each(function() {
        $(this).click(function() {
            $("#background").val($(this).html());
            $("#background").parent().parent().children(".select").hide();
            $(".ydleft").removeClass($("#background2").val());
            $("body").removeClass($("#background2").val());
            $("body").attr("style", "");
            $(".ydleft").attr("style", "");
            $("#background2").val($(this).attr("class"));
            $(".ydleft").addClass($(this).attr("class"));
            $("body").addClass($(this).attr("class"))
        })
    });
    $("#fontSize").click(function() {
        var b = $("#fontSize").parent().parent().children(".select");
        b.show()
    });
    $("#fontSize1").click(function() {
        var b = $("#fontSize1").parent().parent().children(".select");
        b.show()
    });
    $("#fontSize").parent().parent().children(".select").children("p").each(function() {
        $(this).click(function() {
            $("#fontSize").val($(this).html());
            $("#fontSize").parent().parent().children(".select").hide();
            $(".yd_text2").removeClass($("#fontSize2").val());
            $("#fontSize2").val($(this).attr("class"));
            $(".yd_text2").addClass($(this).attr("class"))
        })
    });
    $("#fontFamily").click(function() {
        var b = $("#fontFamily").parent().parent().children(".select");
        b.show()
    });
    $("#fontFamily1").click(function() {
        var b = $("#fontFamily1").parent().parent().children(".select");
        b.show()
    });
    $("#fontFamily").parent().parent().children(".select").children("p").each(function() {
        $(this).click(function() {
            $("#fontFamily").val($(this).html());
            $("#fontFamily").parent().parent().children(".select").hide();
            $(".yd_text2").removeClass($("#fontFamily2").val());
            $("#fontFamily2").val($(this).attr("class"));
            $(".yd_text2").addClass($(this).attr("class"))
        })
    });
    $("#fontColor").click(function() {
        var b = $("#fontColor").parent().parent().children(".select");
        b.show()
    });
    $("#fontColor1").click(function() {
        var b = $("#fontColor1").parent().parent().children(".select");
        b.show()
    });
    $("#fontColor").parent().parent().children(".select").children("p").each(function() {
        $(this).click(function() {
            $("#fontColor").val($(this).html());
            $("#fontColor").parent().parent().children(".select").hide();
            $(".yd_text2").removeClass($("#fontColor2").val());
            $("#fontColor2").val($(this).attr("class"));
            $(".yd_text2").addClass($(this).attr("class"))
        })
    });
    $("#saveButton").click(function() {
        $.cookie("screen", $("#screen").val(), {
            path: "/",
            expires: date
        });
        $.cookie("background", $("#background2").val(), {
            path: "/",
            expires: date
        });
        $.cookie("fontSize", $("#fontSize2").val(), {
            path: "/",
            expires: date
        });
        $.cookie("fontColor", $("#fontColor2").val(), {
            path: "/",
            expires: date
        });
        $.cookie("fontFamily", $("#fontFamily2").val(), {
            path: "/",
            expires: date
        });
        alert("淇濆瓨鎴愬姛")
    });
    $("#recoveryButton").click(function() {
        $("body").removeClass($.cookie("background"));
        $("body").removeClass($("#background2").val());
        $(".ydleft").removeClass($("#background2").val());
        $(".ydleft").removeClass($.cookie("background"));
        $("body").attr("style", "background:#fff");
        $(".ydleft").attr("style", "background:#FFF");
        $(".yd_text2").removeClass($("#background2").val());
        $(".yd_text2").removeClass($("#fontSize2").val());
        $(".yd_text2").removeClass($.cookie("fontSize"));
        $(".yd_text2").removeClass($("#fontColor2").val());
        $(".yd_text2").removeClass($.cookie("fontColor"));
        $(".yd_text2").removeClass($("#fontFamily2").val());
        $(".yd_text2").removeClass($.cookie("fontFamily"));
        $.cookie("background", "", {
            path: "/",
            expires: date
        });
        $.cookie("fontSize", "", {
            path: "/",
            expires: date
        });
        $.cookie("fontColor", "", {
            path: "/",
            expires: date
        });
        $.cookie("fontFamily", "", {
            path: "/",
            expires: date
        });
        $("#screen").val("婊氬睆");
        $("#background").val("鑳屾櫙");
        $("#fontColor").val("瀛楄壊");
        $("#fontFamily").val("瀛椾綋");
        $("#fontSize").val("瀛楀彿")
    });
    var a = (function() {
        var d;
        var g;
        var f;
        function c() {
            g = setInterval(b, 40);
            try {
                if (document.selection) {
                    document.selection.empty()
                } else {
                    var h = document.getSelection();
                    h.removeAllRanges()
                }
            } catch(j) {}
        }
        function b() {
            d = document.documentElement.scrollTop || document.body.scrollTop;
            if ($.cookie("screen") != null) {
                d = d + parseInt($.cookie("screen"))
            }
            window.scroll(0, d);
            f = document.documentElement.scrollTop || document.body.scrollTop;
            if (d != f) {
                e()
            }
        }
        function e() {
            clearInterval(g)
        }
        return {
            start: c,
            stop: e
        }
    })();
    jQuery(document).dblclick(a.start);
    jQuery(document).mousedown(a.stop)
});
function readCookStyle() {
    if ($.cookie("screen") != null && $.cookie("screen") != "") {
        $("#screen").val($.cookie("screen"))
    } else {
        $("#screen").val("婊氬睆")
    }
    if ($.cookie("fontSize") != null && $.cookie("fontSize") != "") {
        $(".yd_text2").addClass($.cookie("fontSize"));
        size = $.cookie("fontSize").replace("fon_", "");
        size += "px";
        $("#fontSize").val(size);
        $("#fontSize2").val($.cookie("fontSize"))
    }
    if ($.cookie("background") != null && $.cookie("background") != "") {
        var b = "鑳屾櫙";
        if ($.cookie("background") == "bg_lan") {
            b = "娣¤摑"
        }
        if ($.cookie("background") == "bg_huang") {
            b = "鏄庨粍"
        }
        if ($.cookie("background") == "bg_lv") {
            b = "娣＄豢"
        }
        if ($.cookie("background") == "bg_fen") {
            b = "绾㈢矇"
        }
        if ($.cookie("background") == "bg_bai") {
            b = "鐧借壊"
        }
        if ($.cookie("background") == "bg_hui") {
            b = "鐏拌壊"
        }
        if ($.cookie("background") == "bg_hei") {
            b = "婕嗛粦"
        }
        if ($.cookie("background") == "bg_cao") {
            b = "鑽夌豢"
        }
        if ($.cookie("background") == "bg_cha") {
            b = "鑼惰壊"
        }
        if ($.cookie("background") == "bg_yin") {
            b = "閾惰壊"
        }
        if ($.cookie("background") == "bg_mi") {
            b = "绫宠壊"
        }
        $("#background2").val($.cookie("background"));
        $("#background").val(b);
        $("body").addClass($.cookie("background"));
        $(".ydleft").addClass($.cookie("background"));
        $(".yd_text2").addClass($.cookie("background"))
    }
    if ($.cookie("fontColor") != null && $.cookie("fontColor") != "") {
        var a = "瀛楄壊";
        if ($.cookie("fontColor") == "z_hei") {
            a = "榛戣壊"
        }
        if ($.cookie("fontColor") == "z_red") {
            a = "绾㈣壊"
        }
        if ($.cookie("fontColor") == "z_lan") {
            a = "钃濊壊"
        }
        if ($.cookie("fontColor") == "z_lv") {
            a = "缁胯壊"
        }
        if ($.cookie("fontColor") == "z_hui") {
            a = "鐏拌壊"
        }
        if ($.cookie("fontColor") == "z_li") {
            a = "鏍楄壊"
        }
        if ($.cookie("fontColor") == "z_wu") {
            a = "闆剧櫧"
        }
        if ($.cookie("fontColor") == "z_zi") {
            a = "鏆楃传"
        }
        if ($.cookie("fontColor") == "z_he") {
            a = "鐜"
        }
        $("#fontColor2").val($.cookie("fontColor"));
        $("#fontColor").val(a);
        $(".yd_text2").addClass($.cookie("fontColor"))
    }
    if ($.cookie("fontFamily") != null && $.cookie("fontFamily") != "") {
        var c = "瀛椾綋";
        if ($.cookie("fontFamily") == "fam_song") {
            c = "瀹嬩綋"
        }
        if ($.cookie("fontFamily") == "fam_hei") {
            c = "榛戜綋"
        }
        if ($.cookie("fontFamily") == "fam_kai") {
            c = "妤蜂綋"
        }
        if ($.cookie("fontFamily") == "fam_qi") {
            c = "鍚綋"
        }
        if ($.cookie("fontFamily") == "fam_ya") {
            c = "闆呴粦"
        }
        $("#fontFamily2").val($.cookie("fontFamily"));
        $("#fontFamily").val(c);
        $(".yd_text2").addClass($.cookie("fontFamily"))
    }
}
String.prototype.format = function() {
    var c = this;
    for (var b = 0,
    a = arguments.length; b < a; b++) {
        c = c.replace("{" + (b) + "}", arguments[b])
    }
    return (c)
};
var Cookie = {
    Set: function() {
        var name = arguments[0],
        value = escape(arguments[1]),
        days = (arguments.length > 2) ? arguments[2] : 365,
        path = (arguments.length > 3) ? arguments[3] : "/";
        with(new Date()) {
            setDate(getDate() + days);
            days = toUTCString()
        }
        document.cookie = "{0}={1};expires={2};path={3}".format(name, value, days, path)
    },
    Get: function() {
        var a = document.cookie.match(new RegExp("[\b^;]?" + arguments[0] + "=([^;]*)(?=;|\b|$)", "i"));
        return a ? unescape(a[1]) : a
    },
    Delete: function() {
        var a = arguments[0];
        document.cookie = a + "=1 ; expires=Fri, 31 Dec 1900 23:59:59 GMT;"
    }
};
var stTransform = function(d) {
    var b = "涓囦笌涓戜笓涓氫笡涓滀笣涓袱涓ヤ抚涓脯涓颁复涓轰附涓句箞涔変箤涔愪箶涔犱埂涔︿拱涔变簤浜庝簭浜戜簶浜氫骇浜╀翰浜典焊浜夸粎浠庝粦浠撲华浠环浼椾紭浼欎細浼涗紴浼熶紶浼や讥浼︿姬浼极浣撲綑浣ｄ渐渚犱荆渚ヤ睛渚т鲸渚╀惊渚浚淇︿卡淇╀开淇€哄€惧伂鍋诲伨鍋垮偉鍌у偍鍌╁効鍏戝厲鍏氬叞鍏冲叴鍏瑰吇鍏藉唩鍐呭唸鍐屽啓鍐涘啘鍐㈠啹鍐插喅鍐靛喕鍑€鍑勫噳鍑屽噺鍑戝嚊鍑犲嚖鍑嚟鍑嚮鍑煎嚳鍒嶅垝鍒樺垯鍒氬垱鍒犲埆鍒埈鍒藉埧鍓€鍓傚墣鍓戝墺鍓у姖鍔炲姟鍔㈠姩鍔卞姴鍔冲娍鍕嬪嫄鍕氬寑鍖﹀尞鍖哄尰鍗庡崗鍗曞崠鍗㈠崵鍗у崼鍗村嵑鍘傚巺鍘嗗帀鍘嬪帉鍘嶅帟鍘㈠帲鍘﹀帹鍘╁幃鍘垮弬鍙嗗弴鍙屽彂鍙樺彊鍙犲彾鍙峰徆鍙藉悂鍚庡悡鍚曞悧鍚ｅ惃鍚惎鍚村憭鍛撳憰鍛栧憲鍛樺憴鍛涘憸鍜忓挃鍜欏挍鍜濆挙鍜村捀鍝屽搷鍝戝搾鍝撳摂鍝曞摋鍝欏摐鍝濆摕鍞涘敐鍞犲敗鍞㈠敚鍞ゅ斂鍟у暚鍟暜鍟板暣鍟稿柗鍠藉柧鍡懙鍡冲槝鍢ゅ槺鍣滃櫦鍤ｅ毌鍥㈠洯鍥卞洿鍥靛浗鍥惧渾鍦ｅ湽鍦哄潅鍧忓潡鍧氬潧鍧滃潩鍧炲潫鍧犲瀯鍨呭瀱鍨掑灕鍨у灘鍨灜鍨灡鍨插灤鍩樺煓鍩氬煗鍩爲鍫曞澧欏．澹板３澹跺８澶勫澶嶅澶村じ澶瑰ず濂佸濂嬪濂ュ濡囧濡╁Κ濡濮滃▌濞呭▎濞囧▓濞卞ú濞村┏濠村┑濠跺瀚掑珨瀚卞瀛欏瀛畞瀹濆疄瀹犲瀹瀹藉瀵濆瀵诲瀵垮皢灏斿皹灏у按灏稿敖灞傚眱灞夊眾灞炲薄灞﹀笨宀佸矀宀栧矖宀樺矙宀氬矝宀渤宀藉部宄冨硠宄″常宄ゅ偿宄﹀磦宕冨磩宕禈宓氬禌宓濆荡宸呭珐宸竵甯呭笀甯忓笎甯樺笢甯﹀抚甯副甯诲讣骞傚篂骞插苟骞垮簞搴嗗簮搴戝簱搴斿簷搴炲簾搴煎华寮€寮傚純寮犲讥寮集寮瑰己褰掑綋褰曞綗褰﹀交寰勫緯寰″繂蹇忓咖蹇炬€€鎬佹€傛€冩€勬€呮€嗘€滄€绘€兼€挎亱鎭虫伓鎭告伖鎭烘伝鎭兼伣鎮︽偒鎮偔鎮儕鎯ф儴鎯╂儷鎯儹鎯儻鎰嶆劆鎰ゆ劍鎰挎厬鎱喎鎳戞噿鎳旀垎鎴嬫垙鎴楁垬鎴埛鎵庢墤鎵︽墽鎵╂壀鎵壃鎵版姎鎶涙姛鎶犳姟鎶㈡姢鎶ユ媴鎷熸嫝鎷ｆ嫢鎷︽嫥鎷ㄦ嫨鎸傛寶鎸涙寽鎸濇尀鎸熸尃鎸℃將鎸ｆ尋鎸ユ對鎹炴崯鎹℃崲鎹ｆ嵁鎹绘幊鎺存幏鎺告幒鎺兼徃鎻芥徔鎼€鎼佹悅鎼呮惡鎽勬憛鎽嗘憞鎽堟憡鎾勬拺鎾垫挿鎾告捄鎿炴敀鏁屾暃鏁版枊鏂撴枟鏂╂柇鏃犳棫鏃舵椃鏃告槞鏄兼樈鏄炬檵鏅掓檽鏅旀檿鏅栨殏鏆ф湱鏈湸鏈烘潃鏉傛潈鏉℃潵鏉ㄦ潻鏉版瀬鏋勬灋鏋㈡灒鏋ユ灖鏋ㄦ灙鏋灜鏌滄煚鏌芥爛鏍呮爣鏍堟爥鏍婃爧鏍屾爭鏍忔爲鏍栨牱鏍炬妗犳　妗㈡。妗ゆˉ妗︽¨妗ㄦ々姊︽⒓姊炬妫傛妞熸妞ゆき妤兼姒囨姒夋妲涙妲犳í妯ū姗ユ┍姗规┘妾愭娆㈡娆ф娈佹畤娈嬫畳娈撴畾娈℃姣佹瘋姣曟瘷姣℃姘囨皵姘㈡癌姘叉眹姹夋薄姹ゆ惫娌撴矡娌℃玻娌ゆ播娌︽钵娌ㄦ博娌驳娉炴唱娉舵撤娉告澈娉绘臣娉芥尘娲佹磼娲兼祪娴呮祮娴囨祱娴夋祳娴嬫祶娴庢祻娴愭祽娴掓祿娴旀禃娑傛秾娑涙稘娑炴稛娑犳丁娑㈡叮娑ゆ鼎娑ф定娑╂穩娓婃笇娓嶆笌娓愭笐娓旀笘娓楁俯娓告咕婀挎簝婧呮簡婧囨粭婊氭粸婊熸粻婊℃虎婊ゆ互婊︽花婊╂华婕ゆ絾娼囨綃娼嶆綔娼存緶婵戞繏鐏忕伃鐏伒鐏剧伩鐐€鐐夌倴鐐滅倽鐐圭偧鐐界儊鐑傜儍鐑涚儫鐑︾儳鐑ㄧ儵鐑儸鐑剷鐒栫剺鐓呯叧鐔樼埍鐖风墠鐗︾壍鐗虹妸鐘熺姸鐘风姼鐘圭媹鐙嶇嫕鐙炵嫭鐙嫯鐙嫲鐙辩嫴鐚冪寧鐚曠尅鐚尗鐚尞鐛帒鐜欑帤鐜涚幃鐜幇鐜辩幒鐝夌弿鐝愮彂鐝扮彶鐞庣悘鐞愮惣鐟剁懛鐠囩拵鐡掔摦鐡數鐢荤晠鐣茬暣鐤栫枟鐤熺枲鐤＄柆鐤柉鐤辩柎鐥堢棄鐥掔棖鐥ㄧ棯鐥棿鐦呯槅鐦楃槝鐦槴鐦剧樋鐧炵櫍鐧櫙鐨戠毐鐨茬洀鐩愮洃鐩栫洍鐩樼湇鐪︾湰鐫€鐫佺潗鐫戠瀿鐬╃煫鐭剁熅鐭跨爛鐮佺爾鐮楃牃鐮滅牶鐮荤牼纭€纭佺纭曠纭楃纭氱‘纭风纰涚纰辩⒐纾欑ぜ绁庣ア绁シ绁哥绂勭绂荤绉嗙绉О绉界Ь绋嗙◣绋ｇǔ绌戠┓绐冪獚绐戠獪绐濈绐︾绔栫珵绗冪瑡绗旂瑫绗虹绗剧瓚绛氱瓫绛滅瓭绛圭绠€绠撶绠х绠╃绠瘧绡撶绡辩皷绫佺贝绫荤奔绮滅矟绮ょ勃绮硜绯囩揣绲风簾绾犵骸绾㈢海绾ょ亥绾︾骇绾ㄧ憨绾韩绾涵绾函绾扮罕绾茬撼绾寸旱绾剁悍绾哥汗绾虹夯绾肩航绾剧嚎缁€缁佺粋缁冪粍缁呯粏缁囩粓缁夌粖缁嬬粚缁嶇粠缁忕粣缁戠粧缁撶粩缁曠粬缁楃粯缁欑粴缁涚粶缁濈粸缁熺粻缁＄虎缁ｇ护缁ョ沪缁х花缁╃华缁滑缁划缁话缁辩徊缁崇淮缁电欢缁风桓缁圭缓缁荤患缁界痪缁跨紑缂佺紓缂冪紕缂呯紗缂囩紙缂夌紛缂嬬紝缂嶇紟缂忕紣缂戠紥缂撶紨缂曠紪缂楃紭缂欑細缂涚紲缂濈紴缂熺紶缂＄饥缂ｇ激缂ョ鸡缂х绩缂╃吉缂棘缂籍缂及缂辩疾缂崇即缂电絺缃戠綏缃氱舰缃寸緛缇熺尽缈樼繖缈氳€㈣€ц€歌€昏亗鑱嬭亴鑱嶈仈鑱╄仾鑲冭偁鑲よ偡鑲捐偪鑳€鑳佽儐鑳滆儳鑳ㄨ儶鑳兌鑴夎剭鑴忚剱鑴戣創鑴旇剼鑴辫劧鑴歌厞鑵岃厴鑵吇鑵艰吔鑵捐啈鑷滆垎鑸ｈ埌鑸辫埢鑹拌壋鑹硅壓鑺傝妶鑺楄姕鑺﹁媮鑻囪媹鑻嬭媽鑻嶈嫀鑻忚嫎鑻硅寧鑼忚寫鑼旇寱鑼ц崋鑽愯崣鑽氳崨鑽滆崬鑽熻崰鑽¤崳鑽よ崶鑽﹁崸鑽ㄨ崺鑽崼鑽嵀鑽嵂鑾呰帨鑾辫幉鑾宠幋鑾惰幏鑾歌幑鑾鸿幖钀氳悵钀よ惀钀﹁惂钀ㄨ懕钂囪拤钂嬭拰钃濊摕钃犺摚钃ヨ摝钄疯敼钄鸿敿钑茶暣钖梺钘撹檹铏戣櫄铏櫖铏櫧铏捐櫩铓€铓佽殏铓曡殱铓泭铔庤洀铔洶铔辫洸铔宠洿铚曡湕铚¤潎铦堣潐铦庤澕铦捐瀫铻ㄨ煆琛呰琛ヨ‖琛琚呰琚滆琚瑁嗚瑁㈣＃瑁よ％瑜涜ご瑗佽瑙佽瑙冭瑙呰瑙囪瑙夎瑙嬭瑙嶈瑙忚瑙戣瑙﹁Н瑭熻獕瑾婅疇璁¤璁ｈ璁ヨ璁ц璁╄璁璁璁拌璁茶璁磋璁惰璁歌璁鸿璁艰璁捐璇€璇佽瘋璇冭瘎璇呰瘑璇囪瘓璇夎瘖璇嬭瘜璇嶈瘞璇忚瘣璇戣瘨璇撹瘮璇曡瘱璇楄瘶璇欒瘹璇涜瘻璇濊癁璇熻癄璇¤璇ｈ璇ヨ璇ц璇╄璇璇璇璇辫璇宠璇佃璇疯璇硅璇昏璇借璇胯皜璋佽皞璋冭皠璋呰皢璋囪皥璋婅皨璋岃皪璋庤皬璋愯皯璋掕皳璋旇皶璋栬皸璋樿皺璋氳皼璋滆皾璋炶盁璋犺啊璋㈣埃璋よ哎璋﹁哀璋ㄨ癌璋矮璋碍璋隘璋拌氨璋茶俺璋磋暗璋惰胺璞礉璐炶礋璐犺础璐㈣矗璐よ触璐﹁揣璐ㄨ穿璐传璐喘璐疮璐拌幢璐茶闯璐磋吹璐惰捶璐歌垂璐鸿椿璐艰唇璐捐纯璧€璧佽祩璧冭祫璧呰祮璧囪祱璧夎祳璧嬭祵璧嶈祹璧忚祼璧戣祾璧撹禂璧曡禆璧楄禈璧欒禋璧涜禍璧濊禐璧熻禒璧¤耽璧ｈ氮璧佃刀瓒嬭侗瓒歌穬璺勮窎璺炶返璺惰贩璺歌饭璺昏笂韪岃釜韪腐韫戣箳韫拌箍韬忚簻韬溅杞ц建杞╄姜杞浆杞疆杞桨杞辫讲杞宠酱杞佃蕉杞疯礁杞硅胶杞昏郊杞借骄杞胯線杈佽緜杈冭緞杈呰締杈囪緢杈夎緤杈嬭緦杈嶈編杈忚緪杈戣緬杈撹緮杈曡緰杈楄緲杈欒練杈炶京杈竟杈借揪杩佽繃杩堣繍杩樿繖杩涜繙杩濊繛杩熻咯杩宠抗閫傞€夐€婇€掗€﹂€婚仐閬ラ倱閭濋偓閭偣閭洪偦閮侀儎閮忛儛閮戦儞閮﹂儳閮搁厺閰﹂叡閰介吘閰块噴閲岄墔閴撮姰閷鹃拞閽囬拡閽夐拪閽嬮拰閽嶉拵閽忛拹閽戦拻閽撻挃閽曢挅閽楅挊閽欓挌閽涢挐閽為挓閽犻挕閽㈤挘閽ら挜閽﹂挧閽ㄩ挬閽挮閽挱閽挴閽伴挶閽查挸閽撮挼閽堕挿閽搁捁閽洪捇閽奸捊閽鹃捒閾€閾侀搨閾冮搫閾呴搯閾堥搲閾婇搵閾嶉搸閾忛搻閾戦搾閾曢摋閾橀摍閾氶摏閾滈摑閾為摕閾犻摗閾㈤摚閾ら摜閾﹂摟閾ㄩ摢閾摤閾摦閾摪閾遍摬閾抽摯閾甸摱閾烽摳閾归摵閾婚摷閾介摼閾块攢閿侀攤閿冮攧閿呴攩閿囬攬閿夐攰閿嬮攲閿嶉攷閿忛攼閿戦敀閿撻敂閿曢敄閿楅敊閿氶敎閿為敓閿犻敗閿㈤敚閿ら敟閿﹂敤閿╅敨閿敪閿敮閿伴敱閿查敵閿撮數閿堕敺閿搁敼閿洪敾閿奸斀閿鹃斂闀€闀侀晜闀冮晢闀囬晥闀夐晩闀岄晬闀庨晱闀愰晳闀掗晻闀栭晽闀欓暁闀涢暅闀濋暈闀熼暊闀￠暍闀ｉ暏闀ラ暒闀ч暔闀╅暘闀暚闀暜闀暟闀遍暡闀抽暣闀堕暱闂ㄩ棭闂棲闂棴闂棷闂伴棻闂查棾闂撮椀闂堕椃闂搁椆闂洪椈闂奸椊闂鹃椏闃€闃侀槀闃冮槃闃呴槅闃囬槇闃夐槉闃嬮槍闃嶉槑闃忛槓闃戦槖闃撻様闃曢槚闃楅槝闃欓槡闃涢槦闃抽槾闃甸樁闄呴檰闄囬檲闄夐檿闄ч櫒闄╅殢闅愰毝闅介毦闆忛洜闆抽浘闇侀湁闇潛闈欓潵闉戦瀿闉灤闊﹂煣闊ㄩ煩闊煫闊煹椤甸《椤烽「椤归『椤婚〖椤介【椤块棰侀棰冮棰呴棰囬棰夐棰嬮棰嶉棰忛棰戦棰撻棰曢棰楅棰欓棰涢棰濋棰熼棰￠ⅱ棰ｉⅳ棰ラⅵ棰ч椋忛椋戦椋撻椋曢椋楅椋欓椋為（椁嶉イ楗ラウ楗чエ楗╅オ楗ガ楗ギ楗グ楗遍ゲ楗抽ゴ楗甸ザ楗烽ジ楗归ズ楗婚ゼ楗介ゾ楗块棣侀棣冮棣呴棣囬棣夐棣嬮棣嶉棣忛棣戦棣撻棣曢┈椹┊椹┌椹遍┎椹抽┐椹甸┒椹烽└椹归┖椹婚┘椹介┚椹块獉楠侀獋楠冮獎楠呴獑楠囬獔楠夐獖楠嬮獙楠嶉獛楠忛獝楠戦獟楠撻獢楠曢獤楠楅獦楠欓獨楠涢獪楠濋獮楠熼獱楠￠楠ｉ楠ラ楠ч珔楂嬮珜楝撻瓏榄夐奔楸介本楸块瞼椴侀矀椴勯矃椴嗛矅椴堥矇椴婇矉椴岄矋椴庨矎椴愰矐椴掗矒椴旈矔椴栭矖椴橀矙椴氶矝椴滈矟椴為矡椴犻病椴㈤玻椴ら播椴﹂钵椴ㄩ博椴搏椴箔椴帛椴伴脖椴查渤椴撮驳椴堕卜椴搁补椴洪不椴奸步椴鹃部槌€槌侀硞槌冮硠槌呴硢槌囬硤槌夐硦槌嬮硨槌嶉硯槌忛硱槌戦硳槌撻硵槌曢硸槌楅硺槌欓硾槌滈碀槌為碂槌犻场槌㈤常楦熼笭楦￠涪楦ｉ袱楦ラ甫楦ч辅楦╅釜楦脯楦府楦赴楦遍覆楦抽复楦甸付楦烽父楦归负楦婚讣楦介妇楦块箑楣侀箓楣冮箘楣呴箚楣囬箞楣夐箠楣嬮箤楣嶉箮楣忛箰楣戦箳楣撻箶楣曢箹楣楅箻楣氶箾楣滈節楣為篃楣犻埂楣㈤梗楣ら攻楣﹂恭楣ㄩ供楣公楣弓楣拱楣遍共楣抽勾楣鹃害楹搁粍榛夐弧榛╅华榛鹃紜榧岄紞榧楅脊榻勯綈榻戦娇榫€榫侀緜榫冮緞榫呴締榫囬緢榫夐緤榫嬮緦榫欓練榫涢緹蹇楀埗鍜ㄥ彧閲岀郴鑼冩澗娌″皾灏濋椆闈㈠噯閽熷埆闂插共灏借剰鎷�";
    var a = "钀垏閱滃皥妤彚鏉辩挡涓熷叐鍤村柂鍊嬬埧璞愯嚚鐐洪簵鑸夐杭缇╃儚妯傚柆缈掗剦鏇歌卜浜傜埈鏂艰櫑闆蹭簷浜炵敘鐣濊Κ瑜诲毑鍎勫儏寰炰緰鍊夊剙鍊戝児鐪惧劒澶ユ渻鍌村倶鍋夊偝鍌峰€€鍊倴鍋戒絿楂旈鍌儔淇犱径鍍ュ伒鍋村儜鍎堝剷鍎備縼鍎斿劶鍊嗗劮鍎夊偟鍌惧偗鍍傚儴鍎熷劵鍎愬劜鍎哄厭鍏屽厳榛ㄨ槶闂滆垐鑼查鐛稿泤鍏у病鍐婂杌嶈静濉氶Ξ琛濇焙娉佸噸娣ㄦ窉娑兼珐娓涙箠鍑滃咕槌抽厂鎲戝嚤鎿婃肮閼胯娀鍔冨妷鍓囧墰鍓靛埅鍒ュ墬鍓勫妸鍔屽壌鍔戝壆鍔嶅墲鍔囧嫺杈﹀嫏鍕卞嫊鍕靛媮鍕炲嫝鍕崇寷鍕╁嫽鍖尡鍗€閱彲鍗斿柈璩ｇ洤楣佃嚗琛涘嵒宸瑰粻寤虫泦鍘插鍘帣寤佸粋鍘村粓寤氬粍寤濈福鍙冮潐闈嗛洐鐧艰畩鏁樼枈钁夎櫉姝庡槹绫插緦鍤囧憘鍡庡敋鍣歌伣鍟熷惓鍢稿泩鍢斿殾鍞勫摗鍜煎梿鍡氳鍝㈠毃鍤€鍣濆悞鍣呴构鍛遍熆鍟炲櫊鍢靛椂鍣﹀槱鍣插殞鍣ュ柌鍢滃棅鍢暍鍡╁敃鍠氬懠鍢栧棁鍥€榻у泬鍢藉槸鍣村槏鍤冲泚鍡櫙鍣撳毝鍥戝殨鍔堝泜璎斿湗鍦掑洩鍦嶅渿鍦嬪湒鍦撹仏澹欏牬闃濉婂爡澹囧＂澹╁、澧冲澹熷澹氬澧惧澃鍫婂鍩″⒍澹嬪鍫栧濉ゅ牆澧婂灥濉瑰澹墕澹伈娈煎：澹艰檿鍌欒澶犻牠瑾囧ぞ濂ォ濂愬ギ鐛庡ェ濡濆│濯藉瀚楀濮嶈枒濠佸┉瀣堝瑢瀛屽濯у瀚垮瀣嬪濯煎瀣瑱瀣ゅ瀛稿瀵у瀵﹀瀵╂啿瀹璩撳灏嶅皨灏庡＝灏囩埦濉靛牤灏峰睄鐩″堡灞睖灞嗗爆灞㈠报宥兼璞堝秶宕楀炒宥村祼宄跺逗宥藉礌宸嬪定宥у辰宥㈠稜宕㈠窉宥楀磵宥秳宥稿稊宕冲秮鑴婂窋闉忓钒骞ｅ弗甯箖甯崇熬骞熷付骞€骞宫骞樺箺鍐骞逛甫寤ｈ帄鎱跺滑寤″韩鎳夊粺榫愬虎寤庡哗闁嬬暟妫勫嫉褰屽汲褰庡綀寮锋鐣堕寗褰犲渐寰瑰緫寰犵Ζ鎲舵嚭鎲傛劸鎳锋厠鎱啴鎱偟鎰存啇绺芥嚐鎳屾垁鎳囨儭鎱熸嚚鎰锋兓鎯辨儾鎮呮劏鎳告叧鎲鎳兼厴鎳叉唺鎰滄厷鎲氭叄婀ｆ厤鎲ゆ啋椤樻嚲鎲栨€垫嚕鎳舵噸鎴囨垟鎴叉埀鎴版埄鎴剁串鎾叉墶鍩锋摯鎹巸鎻氭摼鎾媼鎽舵懗鎺勬惗璀峰牨鎿旀摤鏀忔弨鎿佹敂鎿版挜鎿囨帥鎽敚鎺楁捑鎾绘尵鎾撴搵鎾熸帣鎿犳彯鎾忔拡鎼嶆捒鎻涙悧鎿氭挌鎿勬憫鎿叉挘鎽绘憸鎽ｆ敩鎾虫敊鎿辨憻鏀敎鏀濇攧鎿烘悥鎿敜鏀栨拹鏀嗘摲鎿兼敍鎿绘敘鏁垫杺鏁搁綃鏂曢鏂柗鐒¤垔鏅傛洜鏆樻泧鏅濇洦椤檳鏇泬鏇勬殘鏆夋毇鏇栧妱琛撴ǜ姗熸闆滄瑠姊濅締妤婃Κ鍌戞サ妲嬫▍妯炴娅妫栨妤撴娅冩妾夋鏌垫妫ф珱娅虫娅ㄦ珶娆勬ü妫叉ǎ娆掓，妞忔﹫妤ㄦ獢姒挎妯烘獪妲虫▉澶㈡妫舵娆炴Ж娅濇Ё娆忔妯撴瑬娅珰娅告獰妾绘娅ф┇妾ｆ娅娅撴珵绨锋獊姝℃瓱姝愭姝挎娈樻疄娈娈瘑姣€杞傜暍鏂冩皥姣挎皩姘ｆ矮姘俺褰欐饥姹欐汞娲堕仢婧濇矑鐏冩細鐎濇藩婊勬涪婧堟滑婵旀繕娣氭京鐎х€樻考鐎夋綉婢ゆ秶娼旂亼绐倒娣烘伎婢嗘篂婧縼娓井婵熺€忔换娓炬桓婵冩蒋婵滃婀ф郡婢囨范婕ｆ娇娓︽撼娓欐粚娼ゆ緱婕叉線婢辨返娣ユ棘鐎嗘几婢犳紒鐎嬫徊婧亰鐏ｆ繒娼版亢婕垫紛娼锋痪婊仼鐏勬豢鐎呮烤婵仱婵辩仒婢︽揩鐎犵€熺€叉堪娼涚€︾€剧€ㄧ€曠仢婊呯噲闈堢伣鐕︾叕鐖愮噳鐓掔啑榛炵厜鐔剧垗鐖涚兇鐕厵鐓╃噿鐕佺嚧鐕欑嚰鐔辩叆鐕滅嚲鐓嗙硦婧滄剾鐖虹墭鐘涚壗鐘х姠寮风媭鐛风崄鐚剁嫿楹呯嵁鐛扮崹鐙圭崊鐛寵鐛勭尰鐛嵉鐛肩巰璞矒铦熺嵒鐛虹挘鐠电憭鐟憢鐠扮従鐟茬捊鐟夌帹鐞虹搹鐠惪鐠＄拤鐟ｇ搳鐟ょ挦鐠跨摂鐡氱敃鐢岄浕鐣殺浣樼枃鐧ょ檪鐦х櫂鐦嶉瑏鐦＄構鐨板睓鐧扮棛鐧㈢槀鐧嗙槗鐧囩櫋鐧夌槷鐦炵樅鐧熺櫛鐧櫗鐧╃櫖鐧茶噿鐨氱毢鐨哥洖楣界洠钃嬬洔鐩ょ灅鐪ョ煋钁楃潨鐫炵灱鐬炵煔鐭／绀う纰⒓纾氱〃纭⒏绀け绀纭滅熃纰╃·纾界绀勭⒑楣肩纾х＃鍫块暉婊剧Ξ绂曠Π绂庣Ρ绂嶇绁跨Κ闆㈢绋堢ó绌嶇ū绌㈢绌▍绌岀┅绌＄绔婄珔绐珓绐╃绔囩璞庣绡ょ瓖绛嗙绠嬬睜绫╃瘔绡崇绨圭畯绫岀敖绨＄睓绨€绡嬬睖绫盀绨埃绨嶇眱绫豹绫熺炒椤炵绯剁巢绮电碁绯х碀椁辩穵绺剁掣绯剧磫绱呯磦绾栫磭绱勭礆绱堢簥绱€绱夌矾绱滅礃绱旂磿绱楃侗绱嶇礉绺辩陡绱涚礄绱嬬础绱电礀绱愮磽绶氱春绲忕幢绶寸祫绱崇窗绻旂祩绺愮祮绱肩祤绱圭构缍撶纯缍佺胆绲愮禎绻炵蛋绲庣躬绲︾耽绲崇怠绲曠禐绲辩秵缍冪倒绻＄秾缍忕禌绻肩秷绺剧窉缍剧窊绾岀逗绶嬬督绶旂穭绻╃董缍跨冬绻冪盯缍豆缍ｇ稖缍荤栋缍犵洞绶囩窓绶楃窐绶簻绶圭凡绶濈笗绻㈢乏缍炵窞绶剁窔绶辩笅绶╃窢绺风法绶＄罚绺夌笡绺熺笣绺笚绺炵簭绺笂绺戠菇绺圭傅绺茬簱绺箚绻呯簣绻氱箷绻掗焷绻剧拱绻钩绾樼綄缍茬緟缃扮椒缇嗙緢缇ョ鲸缈圭拷缈€€伋鎭ヨ伓鑱捐伔鑱硅伅鑱佃伆鑲呰吀鑶氳唩鑵庤叓鑴硅剠鑶藉嫕鏈ц厲鑷氳剾鑶犺剤鑶鹃珤鑷嶈叇鑶胯嚑鑵宠劔鑵¤噳鑷橀唭鑶曢蕉鑶╅潶鑶冮ò鑷忚嚔杓胯墹鑹﹁墮鑹壉璞旇壐钘濈瘈缇嬭枌钑槅钃懄钘惰帶钀囪捈鑻ц槆妾捐構鑾栬槩钄﹀鐓㈢弓鑽婅枽钖樿帰钑樿摻钑庤枅钖鸿暕姒懛婊庣姈鐔掕晛钘庤搥钄晵钁掕懁钘ヨ挒钃ц悐钃挃钀佃枱鐛茶晻鐟╅动钃磋榾铇胯灑鐕熺笀钑柀钄ヨ晢钑㈣敚钄炶棈钖婅樅钑烽帲椹€钖旇槥钘鸿椆铇勮槉钘铇氳櫆鎱櫅锜茶櫙锜ｉ洊铦﹁爢铦曡熁铻炶牰锠旇渾锠辫牐锜惰牷锜勮浐锜瀯锠愯浕铦歌牊锠呰焾锜爫铻昏爲铻胯煄锠ㄩ噥閵滆瑗瑗栧珛瑜樿オ瑗茶瑁濊瑜岃こ瑗濊げ瑗囪じ瑗ょ箞瑗磋瑙€瑕庤瑕撹瑕樿瑕鸿Μ瑕¤瑕ヨΖ瑕Σ瑕疯Т瑙歌Ф璁嬭璎勮▉瑷堣▊瑷冭獚璀忚◥瑷岃◣璁撹〞瑷栬〒璀拌▕瑷樿⊕璎涜璎宠瑷濊ē瑷辫璜栬ī瑷熻瑷í瑷ｈ瓑瑭佽ǘ瑭曡璀樿瑭愯ù瑷鸿﹩璎呰瑭樿瑭栬瑭掕獑瑾勮│瑭胯┅瑭拌┘瑾犺獏瑭佃┍瑾曡┈瑭┉瑭㈣璜嶈┎瑭宠┇璜㈣璀歌瑾ｈ獮瑾氳瑾ヨ獦瑾ㄨ獞瑾瑾掕珛璜歌珡璜捐畝璜戣瑾茶珘璜涜璜楄璜傝珤璜勮璜囪璎€璜惰珳璎婅璜ц瑪璎佽瑐璜よ璜艰畳璜璜鸿璎庤珵璜濊璁滆瑬璎濊瑺璎楄璎欒瑦璎硅璎璎瓪璀栬瓩璁曡瓬璀庤疄璀磋璁栫﹢璞惰矟璨炶矤璨熻并璨¤铂璩㈡晽璩波璩博璨钵璨惰臣璨搏璨宠长璩佽舶璨艰泊璨鸿哺璨胯不璩€璨借硦璐勮硤璩勮膊璩冭硞璐撹硣璩呰磹璩曡硲璩氳硳璩﹁抄榻庤礀璩炶硿璐旇硻璩¤碃璩ц炒璩佃磪璩昏澈璩借尘璐楄畾璐囪磮璐嶈磸璐涜惮瓒欒稌瓒ㄨ恫韬夎簫韫岃範韬掕笎韬傝购韫曡簹韬嬭复韬婅工韬撹簯韬¤梗韬曡亥韬害杌€杌婅粙杌岃粧杌戣粩杞夎粵杓粺杞熻徊杌昏饯杌歌还杌艰护杌舰杌鸿紩杌捐級杓婅綆杓堣紘杓呰純杓掕紨杓涜鸡杓╄紳杓ヨ紴杓紵杓滆汲杓昏集杞€杓歌健杞呰絼杓捐絾杞嶈綌杈警杈倞閬奸仈閬烽亷閭侀亱閭勯€欓€查仩閬曢€ｉ伈閭囬€曡贰閬╅伕閬滈仦閭愰倧閬洪仚閯ч労閯旈兊閯掗劥閯伴閮ら儫閯堕劖閯嗛厛閯栭劜閱為啽閱噮閲冮噣閲嬭閽滈憭閼鹃彣閲撻嚁閲濋嚇閲楅嚈閲曢嚪閲洪嚙閲ら垝閲╅嚕閸嗛嚬閸氶嚨閳冮垼閳堥垿閳嶉垟閸鹃垑閶囬嫾閳戦垚閼版閳為帰閴ら埀閳侀垾閳勯垥閳€閳洪將閴﹂墬閳风冀閳抽墪閳介埜閴為懡閴壄閴€閳块埦閻甸墤閳撮憼閴涢墯閳伴墘閴堥墠閳归惛閴堕姮閵犻壓閵嫃閶ｉ悆閵嶉惡閵呴媮閵遍姦閹ч崢閵栭姂閶岄姪閵涢彽閵撻壙閵氶壔閵橀寶閵壐閵ラ彑閵冮悑閵ㄩ妧閵ｉ憚閻掗嫪閶欓尭閶遍張閺楅姺閹栭嫲閶ラ嫟閸嬮嫰閶ㄩ徑閵奸嫕閶掗媴閶堕惁閻ч姵閵婚媰閶熼嫤閷掗寙閸洪尟閷ㄩ尅閷侀寱閷╅尗閷懠閷橀寪閷﹂崄閷堥寚閷熼尃閸甸嫺閷抽寵閸ラ崍閸囬彉閸堕崝閸ら崿閸鹃崨閹崰閸伴巹閸嶉巶閺ら帯閺岄幃閹涢帢閼烽惈閹抽幙閹﹂幀閹婇幇閹旈彚閺滈弽閺伴彏閺￠彂閺冮弴閺愰悢閽侀悙閺烽懃閻撻懎閻犻懝閺归悪閼婇惓閻堕惒閻惪閼旈懀閼為懖闀烽杸闁傞杻闁嗛枅闁夊晱闂栭枏闂堥枒闁庨枔闁旈枌鎮堕枠楝ч枿鑱為棩闁╅柇闂撻枼闁ｉ枴闁闁遍柆闂嶉柧闁归柖楝╅柨闁介柣闁奸棥闂岄梼闂犻棅闂嬮棓闂愰棐闂曢棡闂ら殜闄介櫚闄ｉ殠闅涢櫢闅撮櫝闄橀櫇闅夐殨闅毃闅遍毟闆嬮洠闆涜畮闈傞湩闇介淮闈勯潥闈滈潹闊冮灲闊夐煗闊嬮煂闊嶉煋闊欓煘闊滈熁闋侀爞闋冮爣闋呴爢闋堥爦闋戦¨闋撻爭闋掗爩闋忛爯椤遍牁闋楅牳闋￠牥闋查牅娼佺啿闋﹂牑闋婚牣闋归牱闋寸椤嗛椤掗椤撻椤嶉〕椤㈤椤欓ˉ绾囬～椤“椤撮ⅷ棰洪棰棰堕⒏棰奸⒒椋€椋勯椋嗛楗楅椋ｉ椋ラこ椋╅ぜ椋＋椋／椋查椋鹃＝椋奸？椋撮楗掗椁勯椁冮椁呴椁栭椁橀椁曢椁涢ぁ椁ㄩし楗嬮ざ椁块楗侀椁洪ぞ楗堥楗呴楗岄ア棣Ν棣遍Υ棣抽﹨棣归椹㈤椐涢椐欓楱堕椐濋椐曢椐橀缃甸О椹曢椐遍Л椐㈤┇椹▉椹楅▊椐搁Э楱忛◣楱嶉▍楱岄椹傞楱à楱烽椹侀ó楱ǜ椹冮ň椹勯椹熼━椹﹂─楂忛珫楂曢榄橀瓗榄氶瓫榄㈤榄ㄩ榄撮楫侀畠榀伴备楫嬮畵楫掗畩楫戦睙楫嶉異楫畾楫抽楫為榘傞疁楸犻杯楫楫洪瘲楸橀瘉楸洪氨榘归瘔榘ｉ胺榀€榀婇瘒楫堕榀掗瘱榀瘯榀榀ら榀濋榀伴瘺榀ㄩ榀撮瘮楸濋皥榘忛报榀烽爱榘冮皳楸烽皪榘掗皦榘侀眰榀块盃榧囬碍榘ㄩ哎榘╅盁榘滈俺榘鹃眻楸夐盎榘甸眳榘奸睎楸旈睏楸掗悲楸ら抱楸ｉ偿槌╅洖槌堕炒槌查窏榇夐冬榇囬磫榇ｉ秶楦曢川榇為处榇掗礋榇濋礇榇磿榉ラ窓榇窗榈傞创榈冮纯楦為椿榈愰祿楦濋祽榈犻禎榈掗烦榈滈怠榈查稉榈钉榈惮榈秹槎婇捣榉稑槎￠稓槎婚犊槎ラ订榉婇穫槎查豆槎洪穪槎奸洞榉栭笟榉撻窔榉乏榉查犯榉洪竾榉归笇楦忛笡楦橀购楹ラ憨榛冮粚榛堕环榛查唤榛块紓榧夐瀫榧撮絿榻婇綇榻掗綌榻曢綏榻熼健榻欓綘榻滈溅榻姜榻查椒榫嶉緮榫曢緶瑾岃＝璋橀毣瑁′總绡勯瑔鍐囧殣鍢楅楹垫簴閻樺絾闁掍咕鍎樿嚐鎷�";
    d = !!d || false;
    Cookie.Set("l", d ? "t": "s");
    var c = function(l) {
        var h = "",
        g, f, e, m;
        for (g = 0, f = l.length; g < f; g++) {
            m = l.charAt(g);
            e = (d) ? b.indexOf(m) : a.indexOf(m);
            h += (e == -1) ? m: (d) ? a.charAt(e) : b.charAt(e)
        }
        return h
    };
    return (function(g) {
        if (!g) {
            return
        }
        if (g.nodeType == 3) {
            g.nodeValue = c(g.nodeValue);
            return
        }
        if (g.nodeType != 1) {
            return
        }
        if (g.tagName && ",OBJECT,FRAME,FRAMESET,IFRAME,SCRIPT,EMBD,STYLE,BR,HR,TEXTAREA,".indexOf("," + g.tagName.toUpperCase() + ",") > -1) {
            return
        }
        if (g.title) {
            g.title = c(g.title)
        }
        if (g.alt) {
            g.alt = c(g.alt)
        }
        if (g.tagName && g.type && g.tagName.toUpperCase() == "INPUT" && ",button,submit,reset,".indexOf(g.type.toLowerCase()) > -1) {
            g.value = c(g.value)
        }
        for (var f = 0,
        e = g.childNodes.length; f < e; f++) {
            arguments.callee(g.childNodes[f])
        }
    })(document.body)
};
var st = function() {
    var a = Cookie.Get("l") == "t";
    stTransform(!a);
    document.getElementById("st").innerHTML = a ? "绻侀珨涓枃": "绠€浣撲腑鏂�"
};
window.onload = function() {
    if (Cookie.Get("l") == "t") {
        setTimeout(function() {
            stTransform(true);
            document.getElementById("st").innerHTML = "绠€浣撲腑鏂�"
        },
        100)
    }
};
function $_() {
    var c = new Array();
    for (var b = 0; b < arguments.length; b++) {
        var a = arguments[b];
        if (typeof a == "string") {
            a = document.getElementById(a)
        }
        Method.Element.apply(a);
        if (arguments.length == 1) {
            return a
        }
        c.push(a)
    }
    return c
}
var Method = {
    Element: function() {
        this.hide = function() {
            this.style.display = "none";
            return this
        };
        this.show = function() {
            this.style.display = "";
            return this
        };
        this.getValue = function() {
            if (this.value === undefined) {
                return this.innerHTML
            } else {
                return this.value
            }
        };
        this.setValue = function(a) {
            if (this.value === undefined) {
                this.setInnerHTML(a)
            } else {
                this.value = a
            }
        };
        this.subTag = function() {
            return $A(this.getElementsByTagName(arguments[0])).each(function(a) {
                $_(a)
            })
        };
        this.remove = function() {
            return this.parentNode.removeChild(this)
        };
        this.nextElement = function() {
            var b = this;
            for (var a = 0,
            b; b = b.nextSibling; a++) {
                if (b.nodeType == 1) {
                    return $_(b)
                }
            }
            return null
        };
        this.previousElement = function() {
            var b = this;
            for (var a = 0,
            b; b = b.previousSibling; a++) {
                if (b.nodeType == 1) {
                    return $_(b)
                }
            }
            return null
        };
        this.getPosition = function() {
            var c = this;
            var b = c.offsetTop;
            var a = c.offsetLeft;
            while (c = c.offsetParent) {
                if ($_(c).getStyle("position") == "absolute" || $_(c).getStyle("position") == "relative") {
                    break
                }
                b += c.offsetTop;
                a += c.offsetLeft
            }
            return {
                x: a,
                y: b
            }
        };
        this.getStyle = function(a) {
            if (this.style[a]) {
                return this.style[a]
            } else {
                if (this.currentStyle) {
                    return this.currentStyle[a]
                } else {
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        a = a.replace(/([A-Z])/g, "-$1").toLowerCase();
                        var b = document.defaultView.getComputedStyle(this, "");
                        return b && b.getPropertyValue(a)
                    } else {
                        return null
                    }
                }
            }
        };
        this.setInnerHTML = function(b) {
            var a = navigator.userAgent.toLowerCase();
            b = b.replace(/<script([^>]+)src\s*=\s*\"([^>\"\']*)\"([^>]*)>\s*<\/script>/gi, "");
            if (a.indexOf("msie") >= 0 && a.indexOf("opera") < 0) {
                b = '<div style="display:none">for IE</div>' + b;
                b = b.replace(/<script([^>]*)>/gi, "<script$1 defer>");
                this.innerHTML = "";
                this.innerHTML = b;
                this.removeChild(this.firstChild)
            } else {
                var c = this.nextSibling;
                var d = this.parentNode;
                d.removeChild(this);
                this.innerHTML = b;
                if (c) {
                    d.insertBefore(this, c)
                } else {
                    d.appendChild(this)
                }
            }
        }
    },
    Array: function() {
        this.indexOf = function() {
            for (i = 0; i < this.length; i++) {
                if (this[i] == arguments[0]) {
                    return i
                }
            }
            return - 1
        };
        this.each = function(c) {
            for (var b = 0,
            a = this.length; b < a; b++) {
                c(this[b], b)
            }
            return this
        }
    },
    String: function() {
        this.trim = function() {
            var b, a = arguments[0] || " ";
            typeof(a) == "string" ? (a == " " ? b = /(^\s*)|(\s*$)/g: b = new RegExp("(^" + a + "*)|(" + a + "*$)", "g")) : b = a;
            return this.replace(b, "")
        };
        this.stripTags = function() {
            return this.replace(/<\/?[^>]+>/gi, "")
        };
        this.cint = function() {
            return this.replace(/\D/g, "") * 1
        };
        this.hasSubString = function(a, b) {
            if (!b) {
                b = ""
            }
            return (b + this + b).indexOf(b + a + b) == -1 ? false: true
        }
    }
};
Method.Array.apply(Array.prototype);
Method.String.apply(String.prototype);
function jieqi_ajax() {
    this.init = function() {
        this.handler = null;
        this.method = "POST";
        this.queryStringSeparator = "?";
        this.argumentSeparator = "&";
        this.URLString = "";
        this.encodeURIString = true;
        this.execute = false;
        this.requestFile = null;
        this.vars = new Object();
        this.responseStatus = new Array(2);
        this.failed = false;
        this.response = "";
        this.asynchronous = true;
        this.onLoading = function() {};
        this.onLoaded = function() {};
        this.onInteractive = function() {};
        this.onComplete = function() {};
        this.onError = function() {};
        this.onFail = function() {};
        try {
            this.handler = new ActiveXObject("Msxml2.XMLHTTP")
        } catch(e) {
            try {
                this.handler = new ActiveXObject("Microsoft.XMLHTTP")
            } catch(e) {
                this.handler = null
            }
        }
        if (!this.handler) {
            if (typeof XMLHttpRequest != "undefined") {
                this.handler = new XMLHttpRequest()
            } else {
                this.failed = true
            }
        }
    };
    this.setVar = function(name, value, encoded) {
        this.vars[name] = Array(value, encoded)
    };
    this.encVar = function(name, value, returnvars) {
        if (true == returnvars) {
            return Array(encodeURIComponent(name), encodeURIComponent(value))
        } else {
            this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), true)
        }
    };
    this.processURLString = function(string, encode) {
        regexp = new RegExp(this.argumentSeparator);
        varArray = string.split(regexp);
        for (i = 0; i < varArray.length; i++) {
            urlVars = varArray[i].split("=");
            if (true == encode) {
                this.encVar(urlVars[0], urlVars[1], false)
            } else {
                this.setVar(urlVars[0], urlVars[1], true)
            }
        }
    };
    this.createURLString = function(urlstring) {
        if (urlstring) {
            if (this.URLString.length) {
                this.URLString += this.argumentSeparator + urlstring
            } else {
                this.URLString = urlstring
            }
        }
        this.setVar("ajax_request", new Date().getTime(), false);
        urlstringtemp = new Array();
        for (key in this.vars) {
            if (false == this.vars[key][1] && true == this.encodeURIString) {
                encoded = this.encVar(key, this.vars[key][0], true);
                delete this.vars[key];
                this.vars[encoded[0]] = Array(encoded[1], true);
                key = encoded[0]
            }
            urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0]
        }
        if (urlstring) {
            this.URLString += this.argumentSeparator + urlstringtemp.join(this.argumentSeparator)
        } else {
            this.URLString += urlstringtemp.join(this.argumentSeparator)
        }
    };
    this.runResponse = function() {
        eval(this.response)
    };
    this.runAJAX = function(urlstring) {
        if (this.failed) {
            this.onFail()
        } else {
            if (this.requestFile.indexOf(this.queryStringSeparator) > 0) {
                var spoint = this.requestFile.indexOf(this.queryStringSeparator);
                this.processURLString(this.requestFile.substr(spoint + this.queryStringSeparator.length), false);
                this.requestFile = this.requestFile.substr(0, spoint)
            }
            this.createURLString(urlstring);
            if (this.handler) {
                var self = this;
                if (this.method == "GET") {
                    totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString;
                    this.handler.open(this.method, totalurlstring, this.asynchronous)
                } else {
                    this.handler.open(this.method, this.requestFile, this.asynchronous);
                    try {
                        this.handler.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                    } catch(e) {}
                }
                this.handler.onreadystatechange = function() {
                    switch (self.handler.readyState) {
                    case 1:
                        self.onLoading();
                        break;
                    case 2:
                        self.onLoaded();
                        break;
                    case 3:
                        self.onInteractive();
                        break;
                    case 4:
                        self.response = self.handler.responseText;
                        self.responseXML = self.handler.responseXML;
                        self.responseStatus[0] = self.handler.status;
                        self.responseStatus[1] = self.handler.statusText;
                        if (self.execute) {
                            self.runResponse()
                        }
                        if (self.responseStatus[0] == "200") {
                            self.onComplete()
                        } else {
                            self.onError()
                        }
                        self.URLString = "";
                        break
                    }
                };
                this.handler.send(this.method == "GET" ? null: this.URLString)
            }
        }
    };
    this.submitForm = function(form) {
        if (this.requestFile == null) {
            this.requestFile = $_(form).attributes.action.value
        }
        this.runAJAX(Form.serialize(form))
    };
    this.init()
}
var Ajax = {
    Request: function(c, d) {
        var b = new jieqi_ajax();
        var e = {
            method: "",
            parameters: "",
            asynchronous: true,
            onLoading: function() {},
            onLoaded: function() {},
            onInteractive: function() {},
            onComplete: function() {},
            onError: function() {},
            onFail: function() {}
        };
        for (var a in d) {
            e[a] = d[a]
        }
        if (e.parameters != "") {
            b.processURLString(e.parameters, false)
        }
        b.asynchronous = e.asynchronous;
        b.onLoading = e.onLoading;
        b.onLoaded = e.onLoaded;
        b.onInteractive = e.onInteractive;
        b.onError = e.onError;
        b.onFail = e.onFail;
        b.onComplete = e.onComplete;
        if ($_(c) != null && typeof $_(c).tagName != "undefined" && $_(c).tagName.toLowerCase() == "form") {
            b.method = e.method == "" ? "POST": e.method;
            b.submitForm(c)
        } else {
            b.method = e.method == "" ? "GET": e.method;
            b.requestFile = c;
            b.runAJAX()
        }
    },
    Update: function(h, f) {
        var c = {
            outid: "",
            tipid: "",
            onLoading: "",
            outhide: 0,
            cursor: "wait",
            parameters: ""
        };
        for (var j in f) {
            c[j] = f[j]
        }
        var d = ($_(h) != null && typeof $_(h).tagName != "undefined" && $_(h).tagName.toLowerCase() == "form") ? true: false;
        if (typeof c.onLoading == "function") {
            var a = c.onLoading
        } else {
            var a = function() {
                if (c.cursor != "") {
                    document.body.style.cursor = c.cursor
                }
                if (c.tipid != null && c.tipid != "") {
                    $_(c.tipid).setValue(c.onLoading);
                    $_(c.tipid).show()
                }
                if (d) {
                    Form.disable(h)
                }
            }
        }
        var b = function() {
            if (c.cursor != "") {
                document.body.style.cursor = "auto"
            }
            if (c.tipid != null && c.tipid != "") {
                $_(c.tipid).setValue("");
                $_(c.tipid).hide()
            }
            if (c.outid != "") {
                $_(c.outid).setValue(this.response);
                $_(c.outid).show()
            }
            if (c.outhide != "") {
                setTimeout(function() {
                    $_(c.outid).hide()
                },
                c.outhide)
            }
            if (d) {
                Form.enable(h)
            }
        };
        var g = function() {
            if (c.outid != "") {
                $_(c.outid).setValue("ERROR:" + this.responseStatus[1] + "(" + this.responseStatus[0] + ")")
            }
            if (d) {
                Form.enable(h)
            }
        };
        var e = function() {
            alert("Your browser does not support AJAX!");
            if (d) {
                Form.enable(h)
            }
        };
        Ajax.Request(h, {
            onLoading: a,
            onComplete: b,
            onError: g,
            onFail: e,
            parameters: c.parameters
        })
    },
    Tip: function(a, b, h) {
        a = a ? a: (window.event ? window.event: null);
        h = h ? h: 3000;
        var c = a.srcElement ? a.srcElement.id: a.target.id;
        var e = c + "_tip";
        var k = $_(c);
        var g = k.getPosition();
        var f = $_(e);
        if (!f) {
            f = document.createElement("div");
            f.id = e;
            f.style.display = "none";
            f.className = "ajaxtip";
            document.body.appendChild(f);
            f.onclick = function() {
                $_(e).hide()
            }
        }
        var d = window.innerWidth ? window.innerWidth: document.documentElement.clientWidth;
        var j = window.innerHeight ? window.innerHeight: document.documentElement.clientHeight;
        f.style.top = (j - 150) / 2 + document.documentElement.scrollTop + "px";
        f.style.left = (d - 300) / 2 + document.documentElement.scrollLeft + "px";
        f.innerHTML = "";
        f.style.display = "";
        this.Update(b, {
            outid: e,
            tipid: e,
            onLoading: "Loading...",
            outhide: h,
            cursor: "wait"
        })
    }
};
function gotop() {
    var a = {
        setting: {
            startline: 300,
            scrollto: 0,
            scrollduration: 400,
            fadeduration: [500, 100]
        },
        controlHTML: '<img src="http://www.txt2.cc/Public/img/top.gif" style="width:40px; height:40px; border:0;" />',
        controlattrs: {
            offsetx: 10,
            offsety: 80
        },
        anchorkeyword: "#top",
        state: {
            isvisible: false,
            shouldvisible: false
        },
        scrollup: function() {
            if (!this.cssfixedsupport) {
                this.$control.css({
                    opacity: 0
                })
            }
            var b = isNaN(this.setting.scrollto) ? this.setting.scrollto: parseInt(this.setting.scrollto);
            if (typeof b == "string" && jQuery("#" + b).length == 1) {
                b = jQuery("#" + b).offset().top
            } else {
                b = 0
            }
            this.$body.animate({
                scrollTop: b
            },
            this.setting.scrollduration)
        },
        keepfixed: function() {
            var d = jQuery(window);
            var c = d.scrollLeft() + d.width() - this.$control.width() - this.controlattrs.offsetx;
            var b = d.scrollTop() + d.height() - this.$control.height() - this.controlattrs.offsety;
            this.$control.css({
                left: c + "px",
                top: b + "px"
            })
        },
        togglecontrol: function() {
            var b = jQuery(window).scrollTop();
            if (!this.cssfixedsupport) {
                this.keepfixed()
            }
            this.state.shouldvisible = (b >= this.setting.startline) ? true: false;
            if (this.state.shouldvisible && !this.state.isvisible) {
                this.$control.stop().animate({
                    opacity: 1
                },
                this.setting.fadeduration[0]);
                this.state.isvisible = true
            } else {
                if (this.state.shouldvisible == false && this.state.isvisible) {
                    this.$control.stop().animate({
                        opacity: 0
                    },
                    this.setting.fadeduration[1]);
                    this.state.isvisible = false
                }
            }
        },
        init: function() {
            jQuery(document).ready(function(d) {
                var b = a;
                var c = document.all;
                b.cssfixedsupport = !c || c && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
                b.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? d("html") : d("body")) : d("html,body");
                b.$control = d('<div id="topcontrol">' + b.controlHTML + "</div>").css({
                    position: b.cssfixedsupport ? "fixed": "absolute",
                    bottom: b.controlattrs.offsety,
                    right: b.controlattrs.offsetx,
                    opacity: 0,
                    cursor: "pointer"
                }).attr({
                    title: "杩斿洖椤堕儴"
                }).click(function() {
                    b.scrollup();
                    return false
                }).appendTo("body");
                if (document.all && !window.XMLHttpRequest && b.$control.text() != "") {
                    b.$control.css({
                        width: b.$control.width()
                    })
                }
                b.togglecontrol();
                d('a[href="' + b.anchorkeyword + '"]').click(function() {
                    b.scrollup();
                    return false
                });
                d(window).bind("scroll resize",
                function(f) {
                    b.togglecontrol()
                })
            })
        }
    };
    a.init()
} (function() {
    var c = document.createElement("script");
    var b = window.location.protocol.split(":")[0];
    if (b === "https") {
        c.src = "https://zz.bdstatic.com/linksubmit/push.js"
    } else {
        c.src = "http://push.zhanzhang.baidu.com/push.js"
    }
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(c, a)
})();