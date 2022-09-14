/*
 * @Author: 粟雄
 * @Date: 2022-09-08 14:51:17
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-13 11:13:37
 * @Description:
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
  endOfLine: 'auto',
}
