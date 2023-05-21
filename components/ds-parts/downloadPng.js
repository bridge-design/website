import { toPng } from 'html-to-image';
import format from 'date-fns/format';

export const downloadPng = (ref) => {
    const getFileName = (fileType) => `${format(new Date(), "'PartsOfDesignSystem-'HH-mm-ss")}.${fileType}`;

    if (ref.current === null) {
        return;
    }

    toPng(ref.current, { cacheBust: true, backgroundColor: 'white' })
        .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = getFileName('png');
            link.href = dataUrl;
            link.click();
        })
        .catch((err) => {
            console.log(err);
        });
};