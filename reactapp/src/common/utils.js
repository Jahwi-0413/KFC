export const checkFileType = (file, exts) =>
{
  const type = file.name.slice(-3)
  return exts.find(e => e === type) ? true : false // 원하는 파일 타입 체크 및 결과 반환
}