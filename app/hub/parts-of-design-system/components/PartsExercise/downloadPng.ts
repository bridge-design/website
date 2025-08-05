import { format } from 'date-fns'
import { toPng } from 'html-to-image'

export const downloadPng = (ref: React.RefObject<HTMLElement>) => {
  const getFileName = (fileType: string) =>
    `${format(new Date(), "'PartsOfDesignSystem-'HH-mm-ss")}.${fileType}`

  if (ref.current === null) {
    return
  }

  toPng(ref.current, { cacheBust: true, backgroundColor: 'white' })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = getFileName('png')
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}
