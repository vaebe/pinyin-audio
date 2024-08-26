/**
 * 声母：23个。分别是：b p m f d t n l g k h j q x zh ch sh r z c s y w
 */
const shengMu = ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x", "zh", "ch", "sh", "r", "z", "c", "s", "y", "w"]
/**
 * 韵母：24个。单韵母：a o e i u ü
  复韵母：ai ei ui ao ou iu ie üe
  特殊韵母：er
  鼻韵母：an en in un ün ang eng ing ong
  单韵母6个，复韵母8个，鼻韵母9个，特殊韵母1个。
  ü 使用 v 代替
 */
const yunMu = ["a", "o", "e", "i", "u", "v", "ai", "ei", "ui", "ao", "ou", "iu", "ie", "ve", "er", "an", "en", "in", "un", "vn", "ang", "eng", "ing", "ong"]

/**
 * 整体认读音节：16个，分别是：zhi chi shi ri zi ci si yi wu yu ye yue yin yun yuan ying
 */
const zhengTi = ["zhi", "chi", "shi", "ri", "zi", "ci", "si", "yi", "wu", "yu", "ye", "yue", "yin", "yun", "yuan", "ying"]

/**
 * 全部拼音
 */
const allList = [...shengMu, ...yunMu, ...zhengTi]

export function playPinYinMp3(url: string) {
  const audio = new Audio(url)
  audio.play()
}

export {
  shengMu,
  yunMu,
  zhengTi,
  allList
}