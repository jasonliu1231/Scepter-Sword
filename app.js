// ===== 規則定義：兩種模式 =====
const MODES = {
  // ---- S1 ----
  S1: {
    badge: "S1",
    sub: "請輸入「目前等級」。計分規則：角色/裝備/技能/寵物只計算 <b>&gt; 100級</b> 的部分；遺物只計算 <b>&gt; 10級</b> 的部分。",
    labels: {
      char: "角色賽季等級（>100 才計分：＋100/級）",
      equip: "裝備（>100 只計超過的級數 ×38）",
      skill: "技能（>100 只計超過的級數 ×13）",
      beast: "寵物（>100 只計超過的級數 ×14）",
      relic: "遺物（>10 只計超過的級數 ×57）"
    },
    C: { char: 100, equip: 38, skill: 13, beast: 14, relic: 57 },
    TH: { char: 100, equip: 100, skill: 100, beast: 100, relic: 10 },
    DIV: 100,
    BASE: 10
  },

  // ---- S2 ----
  S2: {
    badge: "S2",
    sub: "評分規則：角色、裝備、技能、寵物超過 130 級才開始計分；遺物超過 13 級才開始計分。",
    labels: {
      char: "角色賽季等級（>130 才計分：＋100/級）",
      equip: "裝備（>130 才計分 ×18）",
      skill: "技能（>130 才計分 ×7）",
      beast: "寵物/幻獸（>130 才計分 ×8）",
      relic: "遺物/古遺物（>13 才計分 ×33）"
    },
    C: { char: 100, equip: 18, skill: 7, beast: 8, relic: 33 },
    TH: { char: 130, equip: 130, skill: 130, beast: 130, relic: 13 },
    DIV: 27,
    BASE: 45,
    COST_PER_POINT: {
      equip: {
        150: 10944,
        151: 11056,
        152: 11167,
        153: 11222,
        154: 11333,
        155: 11444,
        156: 11500,
        157: 11611,
        158: 11722,
        159: 11778,
        160: 11889,
        161: 12000,
        162: 12056,
        163: 12167,
        164: 12278,
        165: 12333,
        166: 12444,
        167: 12556,
        168: 12611,
        169: 12722,
        170: 12833,
        171: 12889,
        172: 13000,
        173: 13111,
        174: 13167,
        175: 13278,
        176: 13389,
        177: 13444,
        178: 13556,
        179: 13667,
        180: 13722,
        181: 13833,
        182: 13944,
        183: 14000,
        184: 14111,
        185: 14222,
        186: 14278,
        187: 14389,
        188: 14500,
        189: 14556,
        190: 14667,
        191: 14778,
        192: 14833,
        193: 14944,
        194: 15056,
        195: 15111,
        196: 15222,
        197: 15333,
        198: 15389,
        199: 15500,
        200: 15611,
        201: 15667,
        202: 15778,
        203: 15889,
        204: 15944,
        205: 16056,
        206: 16167,
        207: 16222,
        208: 16333,
        209: 16444,
        210: 16500,
        211: 16611,
        212: 16722,
        213: 16778,
        214: 16889,
        215: 17000,
        216: 17056,
        217: 17167,
        218: 17278,
        219: 17333,
        220: 17444,
        221: 17500,
        222: 17611,
        223: 17722,
        224: 17778,
        225: 17889,
        226: 18000
      },
      skill: {
        150: 16343,
        151: 16457,
        152: 16571,
        153: 16686,
        154: 16800,
        155: 17029,
        156: 17143,
        157: 17257,
        158: 17371,
        159: 17486,
        160: 17714,
        161: 17829,
        162: 17943,
        163: 18057,
        164: 18171,
        165: 18400,
        166: 18514,
        167: 18629,
        168: 18743,
        169: 18857,
        170: 19086,
        171: 19200,
        172: 19314,
        173: 19429,
        174: 19543,
        175: 19771,
        176: 19886,
        177: 20000,
        178: 20114,
        179: 20229,
        180: 20457,
        181: 20571,
        182: 20686,
        183: 20800,
        184: 20914,
        185: 21143,
        186: 21257,
        187: 21371,
        188: 21486,
        189: 21600,
        190: 21829,
        191: 21943,
        192: 22057,
        193: 22171,
        194: 22286,
        195: 22514,
        196: 22629,
        197: 22743,
        198: 22857,
        199: 22971,
        200: 23200,
        201: 23314,
        202: 23429,
        203: 23543,
        204: 23771,
        205: 23886,
        206: 24000,
        207: 24229,
        208: 24343,
        209: 24457,
        210: 24571,
        211: 24686,
        212: 24914,
        213: 25029,
        214: 25143,
        215: 25257,
        216: 25371,
        217: 25600,
        218: 25714,
        219: 25829,
        220: 25943,
        221: 26057,
        222: 26286,
        223: 26400,
        224: 26514,
        225: 26629,
        226: 26743
      },
      beast: {
        150: 19775,
        151: 20075,
        152: 20350,
        153: 20650,
        154: 20925,
        155: 21225,
        156: 21500,
        157: 21800,
        158: 22075,
        159: 22375,
        160: 22650,
        161: 22925,
        162: 23500,
        163: 23800,
        164: 24075,
        165: 24100,
        166: 24375,
        167: 24650,
        168: 24950,
        169: 25000,
        170: 25500,
        171: 25750,
        172: 26000,
        173: 26250,
        174: 26500,
        175: 26750,
        176: 27250,
        177: 27500,
        178: 27750,
        179: 28000,
        180: 28250,
        181: 28500
      },
      relic: {
        14: 12273,
        15: 13500,
        16: 14727,
        17: 15955,
        18: 17182,
        19: 18409,
        20: 19636,
        21: 20864,
        22: 22091,
        23: 23318
      }
    }
  },

  S3: {
    badge: "S3",
    sub: "評分計算規則：角色賽季等級每提升1級，養成評分提升100。裝備+14，技能+5，幻獸+6，古遺物+26。角色祝福依填充比例換算加分。",
    labels: {
      char: "角色賽季等級（>160 才計分：＋100/級）",
      equip: "裝備總賽季強化等級（>160 每級＋14）",
      skill: "技能總賽季等級（>160 每級＋5）",
      beast: "幻獸總賽季等級（>160 每級＋6）",
      relic: "古遺物總賽季等級（>16 每級＋26）"
    },
    // 係數（你截圖上的那組）
    C: {
      char: 100,
      equip: 14,
      skill: 5,
      beast: 6,
      relic: 26
    },
    // 門檻：超過才計分
    TH: {
      char: 160,
      equip: 160,
      skill: 160,
      beast: 160,
      relic: 16
    },
    // 星數：先沿用 S2 規則，之後有新情報再改
    DIV: 13, // 總分除以 27
    BASE: 65, // 再 +111
    COST_PER_POINT: {
      equip: {
        161: 14444,
        162: 14556,
        163: 14722,
        164: 14833,
        165: 15000,
        166: 15167,
        167: 15278,
        168: 15444,
        169: 15556,
        170: 15722,
        171: 15889,
        172: 16000,
        173: 16167,
        174: 16278,
        175: 16444,
        176: 16611,
        177: 16722,
        178: 16889,
        179: 17000,
        180: 17167,
        181: 17308,
        182: 17452,
        183: 17596,
        184: 17740,
        185: 17884,
        186: 18028,
        187: 18172,
        188: 18316,
        189: 18460,
        190: 18605,
        191: 18749,
        192: 18893,
        193: 19037,
        194: 19181,
        195: 19325,
        196: 19469,
        197: 19613,
        198: 19757,
        199: 19902,
        200: 20046,
        201: 20190,
        202: 20334,
        203: 20478,
        204: 20622,
        205: 20766,
        206: 20910,
        207: 21054,
        208: 21199,
        209: 21343,
        210: 21487,
        211: 21631,
        212: 21775,
        213: 21919,
        214: 22063,
        215: 22207,
        216: 22351,
        217: 22496,
        218: 22640,
        219: 22784,
        220: 22928,
        221: 23072,
        222: 23216,
        223: 23360,
        224: 23504,
        225: 23648,
        226: 23793,
        227: 23937,
        228: 24081,
        229: 24225,
        230: 24369,
        231: 24513,
        232: 24657,
        233: 24801,
        234: 24945,
        235: 25090,
        236: 25234,
        237: 25378,
        238: 25522,
        239: 25666,
        240: 25810,
        241: 25954,
        242: 26098,
        243: 26242,
        244: 26387,
        245: 26531,
        246: 26675,
        247: 26819,
        248: 26963,
        249: 27107,
        250: 27251,
        251: 27395,
        252: 27539,
        253: 27684,
        254: 27828,
        255: 27972,
        256: 28116,
        257: 28260,
        258: 28404,
        259: 28548,
        260: 28692,
        261: 28836,
        262: 28981,
        263: 29125,
        264: 29269,
        265: 29413,
        266: 29557,
        267: 29701,
        268: 29845,
        269: 29989,
        270: 30133,
        271: 30278,
        272: 30422,
        273: 30566,
        274: 30710,
        275: 30854,
        276: 30998,
        277: 31142,
        278: 31286,
        279: 31430,
        280: 31575,
        281: 31719,
        282: 31863,
        283: 32007,
        284: 32151,
        285: 32295,
        286: 32439,
        287: 32583,
        288: 32727,
        289: 32872,
        290: 33016,
        291: 33160,
        292: 33304,
        293: 33448,
        294: 33592,
        295: 33736,
        296: 33880,
        297: 34024,
        298: 34169,
        299: 34313,
        300: 34457,
        301: 34601,
        302: 34745,
        303: 34889,
        304: 35033,
        305: 35177,
        306: 35321,
        307: 35465,
        308: 35610,
        309: 35754,
        310: 35898,
        311: 36042,
        312: 36186,
        313: 36330,
        314: 36474,
        315: 36618,
        316: 36762,
        317: 36907,
        318: 37051,
        319: 37195,
        320: 37339,
        321: 37483,
        322: 37627,
        323: 37771,
        324: 37915,
        325: 38059,
        326: 38204,
        327: 38348,
        328: 38492,
        329: 38636,
        330: 38780,
        331: 38924,
        332: 39068,
        333: 39212,
        334: 39356,
        335: 39501,
        336: 39645,
        337: 39789,
        338: 39933,
        339: 40077,
        340: 40221,
        341: 40365,
        342: 40509,
        343: 40653,
        344: 40798,
        345: 40942,
        346: 41086,
        347: 41230,
        348: 41374,
        349: 41518,
        350: 41662,
        351: 41806,
        352: 41950,
        353: 42095,
        354: 42239,
        355: 42383,
        356: 42527,
        357: 42671,
        358: 42815,
        359: 42959,
        360: 43103,
        361: 43247,
        362: 43392,
        363: 43536,
        364: 43680,
        365: 43824,
        366: 43968,
        367: 44112,
        368: 44256,
        369: 44400,
        370: 44544,
        371: 44689,
        372: 44833,
        373: 44977,
        374: 45121,
        375: 45265,
        376: 45409,
        377: 45553,
        378: 45697,
        379: 45841,
        380: 45986,
        381: 46130,
        382: 46274,
        383: 46418,
        384: 46562,
        385: 46706,
        386: 46850,
        387: 46994,
        388: 47138,
        389: 47283,
        390: 47427,
        391: 47571,
        392: 47715,
        393: 47859,
        394: 48003,
        395: 48147,
        396: 48291,
        397: 48435,
        398: 48580,
        399: 48724,
        400: 48868,
        401: 49012,
        402: 49156,
        403: 49300,
        404: 49444,
        405: 49588,
        406: 49732,
        407: 49877,
        408: 50021,
        409: 50165,
        410: 50309
      },
      skill: {
        161: 21943,
        162: 22171,
        163: 22400,
        164: 22629,
        165: 22743,
        166: 22971,
        167: 23200,
        168: 23429,
        169: 23657,
        170: 23886,
        171: 24114,
        172: 24343,
        173: 24571,
        174: 24800,
        175: 25029,
        176: 25257,
        177: 25486,
        178: 25600,
        179: 25829,
        180: 26057,
        181: 26302,
        182: 26521,
        183: 26739,
        184: 26958,
        185: 27177,
        186: 27395,
        187: 27614,
        188: 27833,
        189: 28051,
        190: 28270,
        191: 28489,
        192: 28708,
        193: 28926,
        194: 29145,
        195: 29364,
        196: 29582,
        197: 29801,
        198: 30020,
        199: 30238,
        200: 30457,
        201: 30676,
        202: 30894,
        203: 31113,
        204: 31332,
        205: 31551,
        206: 31769,
        207: 31988,
        208: 32207,
        209: 32425,
        210: 32644,
        211: 32863,
        212: 33081,
        213: 33300,
        214: 33519,
        215: 33737,
        216: 33956,
        217: 34175,
        218: 34393,
        219: 34612,
        220: 34831,
        221: 35050,
        222: 35268,
        223: 35487,
        224: 35706,
        225: 35924,
        226: 36143,
        227: 36362,
        228: 36580,
        229: 36799,
        230: 37018,
        231: 37236,
        232: 37455,
        233: 37674,
        234: 37893,
        235: 38111,
        236: 38330,
        237: 38549,
        238: 38767,
        239: 38986,
        240: 39205,
        241: 39423,
        242: 39642,
        243: 39861,
        244: 40079,
        245: 40298,
        246: 40517,
        247: 40735,
        248: 40954,
        249: 41173,
        250: 41392,
        251: 41610,
        252: 41829,
        253: 42048,
        254: 42266,
        255: 42485,
        256: 42704,
        257: 42922,
        258: 43141,
        259: 43360,
        260: 43578,
        261: 43797,
        262: 44016,
        263: 44235,
        264: 44453,
        265: 44672,
        266: 44891,
        267: 45109,
        268: 45328,
        269: 45547,
        270: 45765,
        271: 45984,
        272: 46203,
        273: 46421,
        274: 46640,
        275: 46859,
        276: 47077,
        277: 47296,
        278: 47515,
        279: 47734,
        280: 47952,
        281: 48171,
        282: 48390,
        283: 48608,
        284: 48827,
        285: 49046,
        286: 49264,
        287: 49483,
        288: 49702,
        289: 49920,
        290: 50139,
        291: 50358,
        292: 50576,
        293: 50795,
        294: 51014,
        295: 51233,
        296: 51451,
        297: 51670,
        298: 51889,
        299: 52107,
        300: 52326,
        301: 52545,
        302: 52763,
        303: 52982,
        304: 53201,
        305: 53419,
        306: 53638,
        307: 53857,
        308: 54076,
        309: 54294,
        310: 54513,
        311: 54732,
        312: 54950,
        313: 55169,
        314: 55388,
        315: 55606,
        316: 55825,
        317: 56044,
        318: 56262,
        319: 56481,
        320: 56700,
        321: 56918,
        322: 57137,
        323: 57356,
        324: 57575,
        325: 57793,
        326: 58012,
        327: 58231,
        328: 58449,
        329: 58668,
        330: 58887,
        331: 59105,
        332: 59324,
        333: 59543,
        334: 59761,
        335: 59980,
        336: 60199,
        337: 60418,
        338: 60636,
        339: 60855,
        340: 61074,
        341: 61292,
        342: 61511,
        343: 61730,
        344: 61948,
        345: 62167,
        346: 62386,
        347: 62604,
        348: 62823,
        349: 63042,
        350: 63260,
        351: 63479,
        352: 63698,
        353: 63917,
        354: 64135,
        355: 64354,
        356: 64573,
        357: 64791,
        358: 65010,
        359: 65229,
        360: 65447,
        361: 65666,
        362: 65885,
        363: 66103,
        364: 66322,
        365: 66541,
        366: 66760,
        367: 66978,
        368: 67197,
        369: 67416,
        370: 67634,
        371: 67853,
        372: 68072,
        373: 68290,
        374: 68509,
        375: 68728,
        376: 68946,
        377: 69165,
        378: 69384,
        379: 69602,
        380: 69821,
        381: 70040,
        382: 70259,
        383: 70477,
        384: 70696,
        385: 70915,
        386: 71133,
        387: 71352,
        388: 71571,
        389: 71789,
        390: 72008,
        391: 72227,
        392: 72445,
        393: 72664,
        394: 72883,
        395: 73102,
        396: 73320,
        397: 73539,
        398: 73758,
        399: 73976,
        400: 74195,
        401: 74414,
        402: 74632,
        403: 74851,
        404: 75070,
        405: 75288,
        406: 75507,
        407: 75726,
        408: 75944,
        409: 76163,
        410: 76382
      },
      beast: {
        161: 44250,
        162: 45000,
        163: 46000,
        164: 46750,
        165: 47750,
        166: 48575,
        167: 49450,
        168: 50325,
        169: 51200,
        170: 52075,
        171: 52950,
        172: 53825,
        173: 54700,
        174: 55575,
        175: 56450,
        176: 57325,
        177: 58200,
        178: 59075,
        179: 59950,
        180: 60825,
        181: 61700,
        182: 62575,
        183: 63450,
        184: 64325,
        185: 65200,
        186: 66075,
        187: 66950,
        188: 67825,
        189: 68700,
        190: 69575,
        191: 70450,
        192: 71325,
        193: 72200,
        194: 73075,
        195: 73950,
        196: 74825,
        197: 75700,
        198: 76575,
        199: 77450,
        200: 78325,
        201: 79200,
        202: 80075,
        203: 80950,
        204: 81825,
        205: 82700,
        206: 83575,
        207: 84450,
        208: 85325,
        209: 86200,
        210: 87075,
        211: 87950,
        212: 88825,
        213: 89700,
        214: 90575,
        215: 91450,
        216: 92325,
        217: 93200,
        218: 94075,
        219: 94950,
        220: 95825,
        221: 96700,
        222: 97575,
        223: 98450,
        224: 99325,
        225: 100200,
        226: 101075,
        227: 101950,
        228: 102825,
        229: 103700,
        230: 104575,
        231: 105450,
        232: 106325,
        233: 107200,
        234: 108075,
        235: 108950,
        236: 109825,
        237: 110700,
        238: 111575,
        239: 112450,
        240: 113325,
        241: 114200,
        242: 115075,
        243: 115950,
        244: 116825,
        245: 117700,
        246: 118575,
        247: 119450,
        248: 120325,
        249: 121200,
        250: 122075,
        251: 122950,
        252: 123825,
        253: 124700,
        254: 125575,
        255: 126450,
        256: 127325,
        257: 128200,
        258: 129075,
        259: 129950,
        260: 130825,
        261: 131700,
        262: 132575,
        263: 133450,
        264: 134325,
        265: 135200,
        266: 136075,
        267: 136950,
        268: 137825,
        269: 138700,
        270: 139575,
        271: 140450,
        272: 141325,
        273: 142200,
        274: 143075,
        275: 143950,
        276: 144825,
        277: 145700,
        278: 146575,
        279: 147450,
        280: 148325,
        281: 149200,
        282: 150075,
        283: 150950,
        284: 151825,
        285: 152700,
        286: 153575,
        287: 154450,
        288: 155325,
        289: 156200,
        290: 157075,
        291: 157950,
        292: 158825,
        293: 159700,
        294: 160575,
        295: 161450,
        296: 162325,
        297: 163200,
        298: 164075,
        299: 164950,
        300: 165825,
        301: 166700,
        302: 167575,
        303: 168450,
        304: 169325,
        305: 170200,
        306: 171075,
        307: 171950,
        308: 172825,
        309: 173700,
        310: 174575,
        311: 175450,
        312: 176325,
        313: 177200,
        314: 178075,
        315: 178950,
        316: 179825,
        317: 180700,
        318: 181575,
        319: 182450,
        320: 183325,
        321: 184200,
        322: 185075,
        323: 185950,
        324: 186825,
        325: 187700,
        326: 188575,
        327: 189450,
        328: 190325,
        329: 191200,
        330: 192075,
        331: 192950,
        332: 193825,
        333: 194700,
        334: 195575,
        335: 196450,
        336: 197325,
        337: 198200,
        338: 199075,
        339: 199950,
        340: 200825,
        341: 201700,
        342: 202575,
        343: 203450,
        344: 204325,
        345: 205200,
        346: 206075,
        347: 206950,
        348: 207825,
        349: 208700,
        350: 209575,
        351: 210450,
        352: 211325,
        353: 212200,
        354: 213075,
        355: 213950,
        356: 214825,
        357: 215700,
        358: 216575,
        359: 217450,
        360: 218325,
        361: 219200,
        362: 220075,
        363: 220950,
        364: 221825,
        365: 222700,
        366: 223575,
        367: 224450,
        368: 225325,
        369: 226200,
        370: 227075,
        371: 227950,
        372: 228825,
        373: 229700,
        374: 230575,
        375: 231450,
        376: 232325,
        377: 233200,
        378: 234075,
        379: 234950,
        380: 235825,
        381: 236700,
        382: 237575,
        383: 238450,
        384: 239325,
        385: 240200,
        386: 241075,
        387: 241950,
        388: 242825,
        389: 243700,
        390: 244575,
        391: 245450,
        392: 246325,
        393: 247200,
        394: 248075,
        395: 248950,
        396: 249825,
        397: 250700,
        398: 251575,
        399: 252450,
        400: 253325,
        401: 254200,
        402: 255075,
        403: 255950,
        404: 256825,
        405: 257700,
        406: 258575,
        407: 259450,
        408: 260325,
        409: 261200,
        410: 262075
      },
      relic: {
        17: 20909,
        18: 23000,
        19: 25091,
        20: 27182,
        21: 29273,
        22: 31364,
        23: 33455,
        24: 35545,
        25: 37636,
        26: 39727,
        27: 41818,
        28: 43909,
        29: 46000,
        30: 48091,
        31: 50182,
        32: 52273,
        33: 54364,
        34: 56455,
        35: 58545,
        36: 60636,
        37: 62727,
        38: 64818,
        39: 66909,
        40: 69000,
        41: 71091,
        42: 73182,
        43: 75273,
        44: 77364,
        45: 79455,
        46: 81545,
        47: 83636,
        48: 85727,
        49: 87818,
        50: 89909
      }
    }
  }
};
// ===== 其它常數 =====
const N = { equip: 5, skill: 8, beast: 4, relic: 20 };

// ===== DOM =====
const el = (id) => document.getElementById(id);
const lvChar = el("lvChar");
const blessCur = el("blessCur"),
  blessMax = el("blessMax");
const equipWrap = el("equipInputs"),
  skillWrap = el("skillInputs"),
  beastWrap = el("beastInputs"),
  relicWrap = el("relicInputs");
const totalEl = el("total"),
  kpiChar = el("kpiChar"),
  kpiOther = el("kpiOther"),
  breakdown = el("breakdown"),
  starsEl = el("stars");
const btnCopy = el("btnCopy"),
  btnReset = el("btnReset");
const modeBadge = el("modeBadge"),
  subText = el("subText");
const equipTitle = el("equipTitle"),
  skillTitle = el("skillTitle"),
  beastTitle = el("beastTitle"),
  relicTitle = el("relicTitle");
const charLabel = el("charLabel");
const recommendLine = el("recommendLine"); // ★ 新增：顯示推薦用

// 生成多欄位
function renderGroup(wrapper, prefix, count) {
  const nodes = [];
  for (let i = 1; i <= count; i++) {
    const id = `${prefix}-${i}`;
    const div = document.createElement("div");
    div.className = "inputItem";
    div.innerHTML = `<label for="${id}">${prefix.toUpperCase()}-${i}</label>
      <input id="${id}" type="number" min="0" step="1" value="0" />`;
    wrapper.appendChild(div);
    nodes.push(div.querySelector("input"));
  }
  return nodes;
}
const inputs = {
  equip: renderGroup(equipWrap, "equip", N.equip),
  skill: renderGroup(skillWrap, "skill", N.skill),
  beast: renderGroup(beastWrap, "beast", N.beast),
  relic: renderGroup(relicWrap, "relic", N.relic)
};

// 全欄位
const allInputs = [lvChar, blessCur, blessMax, ...inputs.equip, ...inputs.skill, ...inputs.beast, ...inputs.relic];
const LS_KEY = "origin-heart-calc__values";
const LS_MODE = "origin-heart-calc__mode";

// 載入 localStorage
try {
  const saved = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
  allInputs.forEach((f) => {
    if (saved[f.id] != null) f.value = saved[f.id];
  });
} catch (e) {}

let MODE = MODES[localStorage.getItem(LS_MODE) || "S1"];

// ===== 小工具 =====
function normInt(input) {
  input.value = Math.max(0, parseInt(input.value || 0, 10));
}
function clamp() {
  normInt(lvChar);
  normInt(blessCur);
  blessMax.value = Math.max(1, parseInt(blessMax.value || 1, 10));
  [...inputs.equip, ...inputs.skill, ...inputs.beast, ...inputs.relic].forEach(normInt);
}
function sumGroup(arr, threshold, coeff) {
  let sum = 0;
  for (const inp of arr) {
    const lv = parseInt(inp.value || 0, 10);
    const add = Math.max(0, lv - threshold);
    sum += add * coeff;
  }
  return sum;
}

// 取得一組欄位中的「最低等級」
function getMinLevel(arr) {
  if (!arr || !arr.length) return 0;
  let min = Infinity;
  for (const inp of arr) {
    const v = parseInt(inp.value || 0, 10);
    if (!isNaN(v)) {
      min = Math.min(min, v);
    }
  }
  return min === Infinity ? 0 : min;
}

// 從當前模式的 COST_PER_POINT 拿「一分價值」
function getCostPerPointFor(mode, type, level) {
  if (!mode || !mode.COST_PER_POINT) return null;
  const table = mode.COST_PER_POINT[type];
  if (!table) return null;

  const keys = Object.keys(table)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);
  if (!keys.length) return null;

  if (level <= keys[0]) return table[keys[0]];
  if (level >= keys[keys.length - 1]) return table[keys[keys.length - 1]];

  if (table[level] != null) return table[level];

  let best = keys[0];
  for (const k of keys) {
    if (Math.abs(k - level) < Math.abs(best - level)) best = k;
  }
  return table[best];
}

// 更新「建議優先升級」
function updateRecommendation() {
  const mode = MODE;
  if (!mode || !mode.COST_PER_POINT) {
    if (recommendLine) recommendLine.textContent = "";
    return;
  }

  const costs = [];

  // ★ 改成取最低等級
  const lvEquip = getMinLevel(inputs.equip);
  const lvSkill = getMinLevel(inputs.skill);
  const lvBeast = getMinLevel(inputs.beast);
  const lvRelic = getMinLevel(inputs.relic);

  const cEquip = getCostPerPointFor(mode, "equip", lvEquip + 1);
  if (cEquip != null) costs.push({ key: "equip", label: "裝備", cost: cEquip });

  const cSkill = getCostPerPointFor(mode, "skill", lvSkill + 1);
  if (cSkill != null) costs.push({ key: "skill", label: "技能", cost: cSkill });

  const cBeast = getCostPerPointFor(mode, "beast", lvBeast + 1);
  if (cBeast != null) costs.push({ key: "beast", label: "寵物", cost: cBeast });

  const cRelic = getCostPerPointFor(mode, "relic", lvRelic + 1);
  if (cRelic != null) costs.push({ key: "relic", label: "遺物", cost: cRelic });

  if (!costs.length || !recommendLine) {
    if (recommendLine) recommendLine.textContent = "";
    return;
  }

  costs.sort((a, b) => a.cost - b.cost); // 一分價值越小越便宜
  const best = costs[0];

  const detail = costs
    .map((c) => `${c.label}（最低等級 ${c.key === "relic" ? lvRelic : c.key === "beast" ? lvBeast : c.key === "skill" ? lvSkill : lvEquip}）：一分約 ${c.cost.toLocaleString("zh-TW")}`)
    .join("<br>");

  recommendLine.innerHTML = `建議優先升級：<b>${best.label}</b><br><span class="hint">${detail}</span>`;
}

// ===== 主計算 =====
function calc() {
  clamp();
  const vChar = parseInt(lvChar.value || 0, 10);
  const curBless = parseInt(blessCur.value || 0, 10);
  const maxBless = Math.max(1, parseInt(blessMax.value || 1, 10));
  const blessPercent = Math.min(100, (curBless / maxBless) * 100);

  let scoreCharLv, sEquip, sSkill, sBeast, sRelic;
  if (MODE.badge === "S1") {
    scoreCharLv = Math.max(0, vChar - 100) * MODE.C.char;
    sEquip = sumGroup(inputs.equip, 100, MODE.C.equip);
    sSkill = sumGroup(inputs.skill, 100, MODE.C.skill);
    sBeast = sumGroup(inputs.beast, 100, MODE.C.beast);
    sRelic = sumGroup(inputs.relic, 10, MODE.C.relic);
  } else {
    scoreCharLv = Math.max(0, vChar - MODE.TH.char) * MODE.C.char;
    sEquip = sumGroup(inputs.equip, MODE.TH.equip, MODE.C.equip);
    sSkill = sumGroup(inputs.skill, MODE.TH.skill, MODE.C.skill);
    sBeast = sumGroup(inputs.beast, MODE.TH.beast, MODE.C.beast);
    sRelic = sumGroup(inputs.relic, MODE.TH.relic, MODE.C.relic);
  }

  const scoreBless = Math.floor((blessPercent / 100) * MODE.C.char);
  const subtotalChar = scoreCharLv + scoreBless;
  const subtotalOther = sEquip + sSkill + sBeast + sRelic;
  const sum = subtotalChar + subtotalOther;

  const stars = Math.floor(sum / MODE.DIV) + MODE.BASE;

  totalEl.textContent = sum.toLocaleString("zh-TW");
  starsEl.textContent = stars.toLocaleString("zh-TW");
  kpiChar.textContent = subtotalChar.toLocaleString("zh-TW");
  kpiOther.textContent = subtotalOther.toLocaleString("zh-TW");

  const charRule = MODE.badge === "S1" ? `max(0, ${vChar}−100) ×${MODE.C.char}` : `max(0, ${vChar}−${MODE.TH.char}) ×${MODE.C.char}`;
  breakdown.innerHTML = `
    角色等級：${charRule} = ${scoreCharLv}<br/>
    祝福進度：${curBless} / ${maxBless} 萬 ⇒ ${blessPercent.toFixed(2)}% → +${scoreBless}<br/>
    ${MODE.labels.equip}：${sEquip}<br/>
    ${MODE.labels.skill}：${sSkill}<br/>
    ${MODE.labels.beast}：${sBeast}<br/>
    ${MODE.labels.relic}：${sRelic}
  `;

  // ★ 每次計算後更新推薦
  updateRecommendation();

  const data = {};
  allInputs.forEach((f) => (data[f.id] = f.value));
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch (e) {}

  return { sum, stars };
}

// ===== UI 更新 =====
function applyModeText() {
  modeBadge.textContent = MODE.badge;
  subText.innerHTML = MODE.sub;
  charLabel.textContent = MODE.labels.char;
  equipTitle.childNodes[0].nodeValue = MODE.labels.equip + " ";
  skillTitle.childNodes[0].nodeValue = MODE.labels.skill + " ";
  beastTitle.childNodes[0].nodeValue = MODE.labels.beast + " ";
  relicTitle.childNodes[0].nodeValue = MODE.labels.relic + " ";
}

// 綁定輸入事件
const allInputsArr = [lvChar, blessCur, blessMax, ...inputs.equip, ...inputs.skill, ...inputs.beast, ...inputs.relic];
allInputsArr.forEach((f) => {
  f.addEventListener("input", calc);
  f.addEventListener("change", calc);
});

// 清空
btnReset.addEventListener("click", () => {
  allInputsArr.forEach((f) => (f.value = f === blessMax ? 1 : 0));
  calc();
});

// 複製
btnCopy.addEventListener("click", () => {
  const r = calc();
  const text = `【原初之心計算機（${MODE.badge}）】\n合計：${r.sum}\n原初之星：${r.stars} 顆`;
  navigator.clipboard?.writeText(text).then(() => {
    btnCopy.textContent = "已複製！";
    setTimeout(() => (btnCopy.textContent = "複製結果"), 1200);
  });
});

// 模式切換
function setMode(key) {
  MODE = MODES[key] || MODES.S1;
  document.querySelectorAll(".nav button").forEach((b) => b.classList.toggle("on", b.dataset.mode === key));
  try {
    localStorage.setItem(LS_MODE, key);
  } catch (e) {}
  applyModeText();
  calc();
}
document.querySelectorAll(".nav button").forEach((btn) => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

// 初次計算
applyModeText();
setMode(localStorage.getItem(LS_MODE) || "S1");

// 彈窗（1~4.png）
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const spanClose = modal.querySelector(".close");
document.querySelectorAll(".infoBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.dataset.img;
    modal.style.display = "block";
    modalImg.src = imgSrc;
  });
});
spanClose.onclick = () => (modal.style.display = "none");
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
