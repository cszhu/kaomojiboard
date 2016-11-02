window.addEventListener('load', function() {

  for (var j = 0; j < kaomojiJSON.angry.length; j++) {
    var kaomoji = kaomojiJSON.angry[j];
    var kaomojiID = kaomoji;
    appendTextOntoDoc("angry", kaomoji, kaomojiID);
  }

  for (var j = 0; j < kaomojiJSON.happy.length; j++) {
    var kaomoji = kaomojiJSON.happy[j];
    var kaomojiID = kaomoji;
    appendTextOntoDoc("happy", kaomoji, kaomojiID);
  }

  for (var j = 0; j < kaomojiJSON.sad.length; j++) {
    var kaomoji = kaomojiJSON.sad[j];
    var kaomojiID = kaomoji;
    appendTextOntoDoc("sad", kaomoji, kaomojiID);
  }

  for (var j = 0; j < kaomojiJSON.animals.length; j++) {
    var kaomoji = kaomojiJSON.animals[j];
    var kaomojiID = kaomoji;
    appendTextOntoDoc("animals", kaomoji, kaomojiID);
  }

  for (var j = 0; j < kaomojiJSON.funny.length; j++) {
    var kaomoji = kaomojiJSON.funny[j];
    var kaomojiID = kaomoji;
    appendTextOntoDoc("funny", kaomoji, kaomojiID);
  }
  
  var kaomojiClasses = document.getElementsByClassName('kaomoji');
  for (var i = 0; i < kaomojiClasses.length; i++) {
      kaomojiClasses[i].addEventListener('click', copyTextToClipboard, false);
  }

  function copyTextToClipboard(e) {
    var text = document.getElementById(e.target.id);
    text = text.innerText;
    console.log(text);

    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    tempAlert("✓");
  }
});

function appendTextOntoDoc(elementId, text, textID) {
  var source = document.getElementById(elementId);
  var pNode = document.createElement("div");
  var textNode = document.createTextNode(text);
  pNode.appendChild(textNode);
  pNode.setAttribute("id", textID);
  pNode.setAttribute("class", "kaomoji");
  source.appendChild(pNode);
}

function tempAlert(msg)
{
  var el = document.createElement("div");
  el.setAttribute("class", "alert");
  el.setAttribute("id", "alert");
  el.innerHTML = msg;
  document.body.appendChild(el);
  $(el).fadeOut(1750, function() { $(this).remove(); });
}


var kaomojiJSON={
  "angry": [
    "( ≧Д≦)",
    "o(-`д´- ｡)",
    "((╬ಠิ﹏ಠิ))",
    "(；￣ Д ￣）",
    "ಠ_ರೃ",
    "(」゜ロ゜)」",
    "(;¬_¬)",
    "凸(｀0´)凸",
    "(*｀へ´*)",
    "（；¬＿¬)",
    "-`д´-",
    "(*≧m≦*)",
    "(｡+･`ω･´)",
    "｡゜(｀Д´)゜｡",
    "(/ﾟДﾟ)/",
    "(*￣m￣)",
    "( •̀ω•́ )σ",
    "(＃｀д´)ﾉ",
    "(>人<)",
    "( ꒪Д꒪)ノ",
    "(#ಠQಠ#)",
    "(¬_¬)",
    "(　ﾟДﾟ)＜!!",
    "(‡▼益▼)",
    "(¬､¬)",
    "( ಠ ಠ )",
    "(´･益･｀*)",
    "(¬▂¬)",
    "(･｀ｪ´･)つ",
    "(´Д｀)",
    "(⋋▂⋌)",
    "(,,#ﾟДﾟ)",
    "(҂⌣̀_⌣́)",
    "＼(｀0´)／",
    "(； ｀ｪ´ ；)b三b",
    "(>_<)",
    "ヽ(｀⌒´メ)ノ",
    "(；¬д¬)",
    "（＞д＜）",
    "ヽ(●-`Д´-)ノ",
    "（;≧皿≦）",
    "(¬д¬。)",
    "ヽ༼ ಠ益ಠ ༽ﾉ",
    "(((p(>o<)q)))",
    "（≧▼≦；)",
    "(≧σ≦)",
    "(◣_◢)",
    "(ᇂ∀ᇂ╬)",
    "(╬ﾟ◥益◤ﾟ)",
    "(ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू)",
    "(ノ≧┏Д┓≦)ノ",
    "(╬⓪益⓪)",
    "(ू˃̣̣̣̣̣̣o˂̣̣̣̣̣̣ ू)⁼³₌₃",
    "(ノಠ ∩ಠ)ノ彡( o°o)",
    "(╯°□°）╯︵ ┻━┻",
    "凸ಠ益ಠ)凸",
    "(ノಠ益ಠ)ノ",
    "(╯°Д°）╯︵/(.□ . )",
    "凸(⊙▂⊙✖ )",
    "(ノಠ益ಠ)ノ彡┻━┻",
    "（▼へ▼メ）",
    "(ಠ⌣ಠ)",
    "[○･｀Д´･○]",
    "(◞≼◉ื≽◟ ;益;◞≼◉ื≽◟)",
    "(ಥ⌣ಥ)",
    "{{|└(>o< )┘|}}",
    "｢(#Φ益 Φo)∩",
    "＼(・｀(ｪ)・)/",
    "＼(〇O〇)／",
    "/( .□.) ︵╰(゜益゜)╯︵ /(.□. /)",
    "＼(＠O＠)／",
    "┌П┐(►˛◄’!)",
    "( #`⌂´)/┌┛",
    "＼(`O´θ／",
    "╭(๑¯д¯๑)╮",
    "＼( ｀.∀´)／",
    "＼(>o<)ノ",
    "ヾ( ･`⌓´･)ﾉﾞ",
    "ヾ(。◣∀◢。)ﾉ",
    "ヽ(≧Д≦)ノ",
    "o(≧o≦)o",
    "ヽ(#`Д´)ﾉ",
    "ヽ(ｏ`皿′ｏ)ﾉ",
    "ŎUŎ",
    "ヽ(#ﾟДﾟ)ﾉ┌┛",
    "٩(╬ʘ益ʘ╬)۶",
    "s(・｀ヘ´・；)",
    "ヽ(#ﾟДﾟ)ﾉ┌┛Σ(ノ´Д`)ノ",
    "٩(๑`ȏ´๑)۶",
    "s(・｀ヘ´・;)ゞ",
    "ヽ(｀◇´)/",
    "ｏ( ><)o",
    "θ＼(；￢_￢)",
    "ヽ(￣д￣;)ノ",
    "o(>< )o",
    "Σ(-`Д´-ﾉ；)ﾉ",
    "Σ(▼□▼メ)",
    "щ(ºДºщ)",
    "щ(ಠ益ಠщ)",
    "щ(ಥДಥщ)",
    "ლ (#｀ﾛ＾;)>",
    "ლ(ಠ_ಠლ)",
    "ლ(ಠ益ಠ)ლ",
    "ლ(ಠ益ಠლ",
    "ლಠ益ಠ)ლ",
    "ಠ_ಠ",
    "ಠ▃ಠ",
    "ಥ⌣ಥ",
    "ᕙ(⇀‸↼‶)ᕗ",
    "ᕦ(ò_óˇ)ᕤ",
    "눈_눈",
    "凸(-0-メ)",
    "凸(｀⌒´メ)凸",
    "凸(｀△´＋）",
    "☜(:♛ฺ;益;♛ฺ;)☞",
    "૮( ᵒ̌▱๋ᵒ̌ )ა",
    "(⁎˃ᆺ˂)",
    "(⁎ૢ⚈ै೧⚈ै⁎ૢ)",
    "໒(•න꒶̭න•)७",
    "(ᗒᗣᗕ)՞"
  ],
  "sad": [
    "(｡•́︿•̀｡)",
    "(o╭╮o)",
    "⊙︿⊙",
    "ᵟຶᴖ ᵟຶ",
    "●︿●",
    "(٭°̧̧̧꒳°̧̧̧٭)",
    "( ´•̥̥̥ω•̥̥̥` )",
    "(ᵕ̣̣̣̣̣̣﹏ᵕ̣̣̣̣̣̣)",
    "( ͒˃̩̩⌂˂̩̩ ͒)",
    "°(ಗдಗ。)°.",
    "｡･ﾟ(ﾟ⊃ω⊂ﾟ)ﾟ･｡",
    "｡:ﾟ(;´∩`;)ﾟ:｡",
    "(′︿‵｡)",
    "(´-﹏-`；)",
    "•(◐﹏◐)•",
    "(๑ó⌓ò๑)",
    "(●´⌓`●)",
    "( •᷄⌓•᷅ )",
    "(◕⌓◕;)",
    "ಠ╭╮ಠ",
    "(;*△*;)",
    "(٭°̧̧̧꒳°̧̧̧٭)",
    "( ͒˃̩̩⌂˂̩̩ ͒)",
    "・゜・(ノД`)",
    ".·´¯`(>▂<)´¯`·.",
    "˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚",
    "｡･ﾟ(ﾟ⊃ω⊂ﾟ)ﾟ･｡",
    "｡･ﾟﾟ･(>д<)･ﾟﾟ･｡",
    "o(╥﹏╥)o",
    "(⁎•̛̣̣꒶̯•̛̣̣⁎)",
    "(๑ ⁍̥̥̥᷅ ᴈ⁍̥̥̥᷅)人(⁌̥̥̥᷄ε ⁌̥̥̥᷄ ๑)ｰ",
    "(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)",
    "(´•̥̥̥д•̥̥̥`̀ू๑)",
    "ヾ( •́д•̀ ;)ﾉ",
    "ヽ ( ꒪д꒪ )ﾉ",
    "゛(●ﾉ´・Д・｀)ﾉ",
    ",､’`( ꒪Д꒪),､’`’`,､",
    "ｍ（＿　＿；；ｍ",
    "_:(´□`」 ∠):_",
    "(シ_ _)シ",
    "（ﾉ´д｀）",
    "<(_ _)>",
    "＜(。_。)＞",
    "m(_ _)m",
    "m(._.)m",
    "ｍ（．＿．）ｍ",
    "m(￢0￢)m",
    "( .. )",
    "๑•́ㅿ•̀๑) ᔆᵒʳʳᵞ",
    "ｍ（｡≧ _ ≦｡）ｍ",
    "ｍ(｡≧Д≦｡)ｍ",
    "m(@´ё｀@)m",
    "m(*- -*)m",
    "･ﾟ･(〃´∩｀p◇SΟЯЯΥ◆q´∩｀〃)･ﾟ･",
    "･ﾟ･δояяу･ﾟ･(○ﾉдﾉ)",
    "o(_ _)o"
  ],
  "animals": [
    "“(`(エ)´)ノ",
    "(/-(ｴ)-＼)",
    "(｀(エ)´)ﾉ",
    "(´(エ)｀)",
    "(✪㉨✪)",
    "(ó㉨ò)",
    "・㉨・",
    "( (ﾐ´ω`ﾐ))",
    "( ´ิ(ꈊ) ´ิ)",
    "(｡･ω･｡)",
    "(*￣(ｴ)￣*)",
    "(*ノ・ω・）",
    "(／(ｴ)＼)",
    "(／￣(ｴ)￣)／",
    "(^(I)^)",
    "(^(エ)^)",
    "(￣(エ)￣)",
    "(￣(エ)￣)ゞ",
    "(￣(ｴ)￣)ﾉ",
    "(∪￣ ㋓ ￣∪)",
    "(●｀･(ｴ)･´●)",
    "(●￣(ｴ)￣●)",
    "(♥ó㉨ò)ﾉ♡",
    "(✪㉨✪)",
    "《/(￣(ｴ)￣)ゞ》",
    "＼(・｀(ｪ)・)/",
    "°◦=͟͟͞͞ʕ̡̢̡ु•̫͡•ʔ̡̢̡ु ☏",
    "⊂(・(ェ)・)⊃",
    "⊂(^(工)^)⊃",
    "⊂(￣(ｴ)￣)⊃",
    "⊂(￣(工)￣)⊃",
    "⊂(◎(工)◎)⊃",
    "ʕ̡̢̡̡̢̡̡̢̡✩˃̶͈̀ ॢ³˂̴`͈ॢʔ̢̡̢̢̡̢̢̡̢♡⃛",
    "ʕ̡̢̡̡̢̡̡̢♡ᵒ̴̷͈艸ᵒ̴̷͈॰ʔ̢̡̢̢̡̢̢̡̢✧",
    "✧ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོɁ̡̣̣̣̣̩̩̩̩✧",
    "ヾ(T(エ)Tヽ)",
    "٩ʕ•͡×•ʔ۶",
    "ヽ(￣(ｴ)￣)ﾉ",
    "v.ʕʘ‿ʘʔ.v",
    "ʔ•̫͡•ʔ",
    "ʕ ⁎❛ั ुꈊ͒ੁ❛ั ु)",
    "ʕ •́؈•̀ ₎",
    "ʕ·͡ˑ·ཻʔ",
    "ʕ”̮ुॽु✚⃞ྉ*✲ﾟ*｡⋆",
    "ʕ̡̢̡*✪௰✪ૢʔ̢̡̢",
    "ʕ•͡-•ʔ",
    "ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ",
    "ʕ•̫͡•ʔ♡*:.✧",
    "ʕ•̫͡•ིʔྀ",
    "ʕ•͡ɛ•͡ʼʼʔ",
    "ʕ•͡ω•ʔ",
    "ʕ•̀ω•́ʔ✧",
    "ʕ•ӫ̫͡•ʔ",
    "ʕ•͡દ•ʔ",
    "ʕง•ᴥ•ʔง",
    "ヾ(;￫㉨￩)ﾉ",
    "ヾ(´(ｴ)｀ﾉﾞ",
    "ʕʽɞʼʔ",
    "ʕʘ̅͜ʘ̅ʔ",
    "ʕु-̫͡-ʔु”",
    "ʕु•̫͡•ʔु ✧",
    "ʕु•̫͡•ʔु☂",
    "ʢٛ•ꇵٛ•ʡ",
    "Ψ(￣(ｴ)￣)Ψ",
    "ก็็็็็็็็็็็็็ʕ•͡ᴥ•ʔ ก้้้้้้้้้้้",
    "ฅʕ•̫͡•ʔฅ",
    "川´･ω･`川",
    "┏((＝￣(ｴ)￣=))┛",
    "⊂(ο･㉨･ο)⊃",
    "ᶘ ᵒᴥᵒᶅ",
    "ʕ•̫͡•ʔ♬✧",
    "ʕ•ᴥ•ʔ",
    "ʕ•͡౪•ʔ",
    "ᵋ₍⚬ɷ⚬₎ᵌ",
    "ˁ˙͡˟˙ˀ",
    "✧(๑•́ᄌ⃝ก̀๑)⋆*ೃ:.",
    "ʕ•̫͡•ʕ*̫͡*ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ*̫͡*ʔ",
    "( ͒•ㅈ• ͒)",
    "(´ᄌ⃝`๑)",
    "｡•ﻌ•｡ฅ ✩",
    "✧.*◌̗·͡˔·ོᵔ̩̩͔·͡˔·◌̖*·✧",
    "ʕథ౪థʔ",
    "ʕ￫ᴥ￩ʔ",
    "ʕ•̫๑͡•ʔ∣ժ̅ʒ∾ෆ⃛",
    "ʕ•༘͡.•ʔ",
    "ʕ͙•̫͑͡•ʔͦʕͮ•̫ͤ͡•ʔ͙",
    "ʕ·͡ˑ·ཻʔෆ⃛ʕ•̫͡•ོʔ",
    "=͟͟͞͞•̫͡•ʔ",
    "ʕ•ི̮͡•ྀʕ•̹͡-ʔ•ི̬͡•ྀʔ",
    "（・⊝・）",
    "（・⊝・∞）",
    "（・θ・）",
    "（＠◇＠）",
    "(•∋•)",
    "（`･⊝･´ ）",
    "(`･⊝･´)",
    "(｀Θ´)",
    "(°<°)",
    "（ﾟ∈ﾟ）",
    "(◉Θ◉)",
    "(●∈∋●)",
    "⊹⋛⋋( ՞ਊ ՞)⋌⋚⊹",
    "◎▼◎",
    " ˏ₍•ɞ•₎ˎ",
    "ˎ₍•ʚ•₎ˏ",
    "♡(㋭ ਊ ㋲)♡",
    "꜀( ˊ̠˂˃ˋ̠ )꜆",
    "ꉂ (๑¯ਊ¯)σ",
    "(•ө•)",
    "(｡･ө･｡)",
    "(￣･Θ･￣)",
    "♩є(･Θ･｡)э",
    "ㄟ( ･ө･ )ㄏ",
    "є(･Θ･｡)э››",
    "♫ꉂ (๑¯ਊ¯)σ",
    "_:(‘Θ’ 」 ∠):_",
    "(⁰▿⁰三⁰▿⁰ ‧̣̥̇)",
    "o(ŎㅿŎ o≡o ŎㅿŎ)o",
    "ヾ(*ㅿ*๑)ﾂ",
    "ヾ(๑ ³ㅿ³)ﾉ",
    "（ꉺ▿ꉺ）",
    "ლ(⁰⊖⁰ლ)",
    "ლ(◉◞⊖◟◉｀ლ)",
    "( ˙Θ˙(˙Θ˙)˙Θ˙ )",
    "（´◉◞⊖◟◉｀）",
    "( ˘⊖˘)",
    "(灬㋭ ਊ ㋲灬)",
    "( ˊ̱˂˃ˋ̱ )◞⸜₍ ˍ́˱˲ˍ̀ ₎⸝◟( ˊ̱˂˃ˋ̱ )",
    "ξ(｡◕ˇ◊ˇ◕｡)ξ",
    "━=͟͟͞͞(Ŏ◊Ŏ ‧̣̥̇)━",
    "(ฅˊ̱˂˃ˋ̱ฅ)♪",
    "＜(´ ՞)ਊ( ՞ )＞",
    "⸜₍๑•⌔•๑ ₎⸝",
    "(๑ŏ⋖⋗ŏ)",
    "⋛⋋( ‘Θ’)⋌⋚",
    "(•͈⌔•͈⑅)",
    "(ּ⌔̀௰ּ⌔́)",
    "(ꀹʚ ꀹ)",
    "˂⁽ˈ₍ ⁾˲₎₌",
    "ʚ(ȉˬȉ⁎)ɞ˒˒",
    "⚈̤꒫⚈̤",
    "(∘❛ั⌔❛ั∘)",
    "๏ ⌔̮ ๏",
    "⋆ඹ͈⌔ඹ͈⋆",
    "ʚ(•”̮•)ɞ",
    "(○∇○)",
    "(･Θ･)",
    "ϵ( ‘Θ’ )϶",
    "(･Θ･;)",
    "( ˊ̱˂˃ˋ̱ )",
    "˱(ْ۬ ˂̵ْ۬ )˲",
    "(ʾ̌ˆʿ̌)",
    "(⁽ؔ˙⁾⊝⁽ؔ˙⁾)",
    "ε(*´･∀･)з",
    "˳⚆ɞ⚆˳",
    "୯ૃ(⁎⁾̵ ਊ ⁽̵)੭ુ⁼³₌₃",
    "（´≝◞⊖◟≝｀)",
    "o(｀Θ´)○",
    "(ؔᶿ̷⌔ؔᶿ̷)",
    "(^._.^)ﾉ",
    "(^人^)",
    "(=；ェ；=)",
    "(=｀ω´=)",
    "(=｀ェ´=)",
    "（=´∇｀=）",
    "(=^･^=)",
    "(=^･ｪ･^=)",
    "(=^‥^=)",
    "(=ＴェＴ=)",
    "(=ｘェｘ=)",
    "(=ΦｴΦ=)",
    "(ΦωΦ)",
    "(Ф∀Ф)",
    "(ФДФ)",
    "(ㅇㅅㅇ❀)",
    "（三ФÅФ三）",
    "＼(=^‥^)/’`",
    "<(*ΦωΦ*)>",
    "|ΦωΦ|",
    "~(=^‥^)/",
    "~(=^‥^)ノ",
    "└(=^‥^=)┐",
    "ヾ(*ΦωΦ)ﾉ",
    "ヾ(=ﾟ･ﾟ=)ﾉ",
    "ヽ(=^･ω･^=)丿",
    "٩(ↀДↀ)۶",
    "d(=^･ω･^=)b",
    "o(^・x・^)o",
    "V(=^･ω･^=)v",
    "ㅇㅅㅇ",
    "ミ๏ｖ๏彡",
    "((≡^⚲͜^≡))",
    "(⁎˃ᆺ˂)",
    "(,,◕　⋏　◕,,)",
    "(*✧×✧*)",
    "] ‘͇̂•̩̫’͇̂ ͒)ฅ ﾆｬ❣",
    "(ٛ₌டுͩ ˑ̭ டுͩٛ₌)ฅ",
    "‘`ﾛｰヽ(⊡ㅂ⊡｡ Ξ ｡⊡ㅂ⊡)ﾉ ‘`ﾛｰ",
    "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛",
    "₍˄·͈༝·͈˄₎ฅ˒˒",
    "₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒",
    "✩⃛( ͒ ु•·̫• ू ͒)",
    "( ͒ ु- •̫̮ – ू ͒)",
    "ฅ(⌯͒• ɪ •⌯͒)ฅ❣",
    "ฅ⃛(⌯͒꒪ั ˑ̫ ꒪ั ⌯͒) ﾆｬｯ❣",
    "(ะ☫ω☫ะ)",
    "(ꀄꀾꀄ)",
    "(ะ`♔´ะ)",
    "(ٛ⁎꒪̕ॢ ˙̫ ꒪ٛ̕ॢ⁎)",
    "( ͒ ˘̩̩̩̩̩̩ꇵ͒˘̩̩̩̩̩̩ ͒)",
    "ฅ ̂⋒ิ ˑ̫ ⋒ิ ̂ฅ",
    "(≚ᄌ≚)ƶƵ",
    "(≚ᄌ≚)ℒℴѵℯ❤",
    "(✦థ ｪ థ)",
    "(ↀДↀ)✧",
    "(ↀДↀ)",
    "(ↀДↀ)⁼³₌₃",
    "(=ↀωↀ=)✧",
    "(●ↀωↀ●)✧",
    "(๑ↀᆺↀ๑)✧",
    "(=ↀωↀ=)",
    "(●ↀωↀ●)",
    "(๑ↀᆺↀ๑)☄"
  ],
  "happy": [
    "ᕕ( ᐛ )ᕗ",
    "(*^▽^*)",
    "(ノ￣▽￣)ノ",
    "(●⌒∇⌒●)",
    "°˖✧◝(⁰▿⁰)◜✧˖°",
    "∩(︶▽︶)∩",
    "೭੧(❛▿❛✿)੭೨",
    "(ノ・∀・)ノ",
    "(*´･∀･)",
    "੭व(๑• .̫ •๑) ✧",
    "((⚆·̫⚆‧̣̥̇ ))",
    "( •⌄• ू )✧",
    "♡✧( ु•⌄• )",
    "(｡･ω･｡)",
    "（　＾ω＾）",
    "( ⋂‿⋂’)",
    "(◡‿◡✿)",
    "(◕‿◕✿)",
    "(✿◠‿◠)",
    "(๑✧◡✧๑)",
    "(๑•͈ᴗ•͈)",
    "⊂(◉‿◉)つ",
    "(ㆁᴗㆁ✿)",
    "／人◕ ‿‿ ◕人＼",
    "(ᗒᗨᗕ)",
    "(´◉◞౪◟◉｀)",
    "(*＾ワ＾*)",
    "(((o(*ﾟ▽ﾟ*)o)))",
    "o((*^▽^*))o",
    "Ｏ(≧▽≦)Ｏ",
    "o(〃＾▽＾〃)o",
    "σ(≧ε≦ｏ)",
    "o(≧∇≦o)",
    "⌒°(❛ᴗ❛)°⌒",
    "《《o(≧◇≦)o》》",
    "ლ(́◉◞౪◟◉‵ლ)",
    "ლ(๏‿๏ ◝ლ)",
    "˓˓(๑ॢ₎ӧ ͜ ӧ₍๑ॢ)˒˒",
    "〜(￣▽￣〜)",
    "o(*≧□≦)o",
    "(ﾉ´ヮ´)ﾉ*:･ﾟ✧",
    "(ﾉ^ヮ^)ﾉ*:・ﾟ✧",
    "˭̡̞(◞⁎˃ᆺ˂)◞*✰",
    "ヾ(｡･ω･)ｼ",
    "ヾ（〃＾∇＾）ﾉ♪",
    "⤴︎ ε=ε=(ง ˃̶͈̀ᗨ˂̶͈́)۶ ⤴︎",
    "୧༼✿ ͡◕ д ◕͡ ༽୨",
    ".+:｡(ﾉ･ω･)ﾉﾞ",
    "⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽",
    "ヽ(´ω｀○)ﾉ.+ﾟ*｡:ﾟ+",
    "ヾ(０∀０*★)ﾟ*･.｡",
    "ヾ（＠＾▽＾＠）ノ",
    "ヾ(*Őฺ∀Őฺ*)ﾉ",
    "╰(◉ᾥ◉)╯",
    "✧⁺⸜(●′▾‵●)⸝⁺✧",
    "*。ヾ(｡>ｖ<｡)ﾉﾞ*。",
    "ヾ(o✪‿✪o)ｼ",
    "｡;+*(★`∪´☆)*+;｡",
    "（๑✧∀✧๑）",
    "⁽⁽٩(๑˃̶͈̀ ᗨ ˂̶͈́)۶⁾⁾",
    "٩(♡ε♡ )۶",
    "٩(θ‿θ)۶",
    "୧( , ＾  ＾ , )୨",
    "٩(๑❛ᴗ❛๑)۶",
    "✧(๑✪д✪)۶ㅂ٩(✪д✪๑)✧",
    "꒳ᵃ꒳ᵃ꒳ᵃ~(๑°ᗨૢ°๑)♡ӵᵉ੨ᑋ✧",
    "ლ(*꒪ヮ꒪*)ლ",
    "*✲ﾟ*｡✧٩(･ิᴗ･ิ๑)۶*✲ﾟ*｡✧",
    "ﾟ･✿ヾ╲(｡◕‿◕｡)╱✿･ﾟ",
    "☆*･゜ﾟ･*(^O^)/*･゜ﾟ･*☆",
    "☆*:.｡. o(≧▽≦)o .｡.:*☆",
    "｡:.ﾟヽ(´∀`｡)ﾉﾟ.:｡+ﾟ"
  ],
  "funny": [
    "(╯°□°）╯︵ ┻━┻",
    "(ノಠ益ಠ)ノ彡┻━┻",
    "(┛ಠДಠ)┛彡┻━┻",
    "(ﾉ＾◡＾)ﾉ︵ ┻━┻",
    "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
    "┬──┬◡ﾉ(° -°ﾉ)",
    "┬─┬ノ(ಠ_ಠノ)",
    "(ヘ･_･)ヘ┳━┳",
    "(╯°Д°）╯︵/(.□ . )",
    "(╯°□°）╯︵ /( ‿⌓‿ )\\",
    "( ͡° ͜ʖ ͡°)",
    "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
    "( ͡☉ ͜ʖ ͡☉)",
    "(☞ ͡° ͜ʖ ͡°)☞",
    "(´༎ຶ ͜ʖ ༎ຶ `)♡",
    "	° ͜ʖ ͡ –	✧",
    "( ͡~ ͜ʖ ͡°)",
    "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
    "*:..｡o○( ͡° ͜ʖ ͡°)○o｡..:*",
    "( ͡° ͜ʖ ͡°)━☆ﾟ.*･｡ﾟ",
    "︵‿︵(´ ͡༎ຶ ͜ʖ ͡༎ຶ `)︵‿︵",
    "✺◟( ͡° ͜ʖ ͡°)◞✺",
    "✧･ﾟ: *✧･ﾟ:*( ͡ᵔ ͜ʖ ͡ᵔ )*:･ﾟ✧*:･ﾟ✧",
    "（╯°□°）╯︵ ( ͜。 ͡ʖ ͜。) ",
    "(╭ರ_⊙)",
    "ᕙ〳 ರ ︿ ರೃ 〵ᕗ",
    "╰〳˵ ✖ Д ✖ ˵〵⊃━☆ﾟ.*･｡ﾟ"
  ]}
