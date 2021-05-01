export const checkFileType = (file, exts) =>
{
  const type = file.name.slice(-3)
  return exts.find(e => e === type) ? true : false //파일 타입이 ttf라면 true
}