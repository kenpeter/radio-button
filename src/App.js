import React from "react";
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import fileUrl from './test_pdf.pdf';

/*
FileViewer supported type
----------------
Images: png, jpeg, gif, bmp, including 360-degree images
pdf
csv
xslx
docx
Video: mp4, webm
Audio: mp3

*/

export function convertDataToBinary(base64Data) {
  // win.atob === raw char
  const raw = window.atob(base64Data);
  // arr[unit_8][buffer]
  const array = new Uint8Array(new ArrayBuffer(raw.length));

  // arr[0]['a']
  // arr[1]['b']
  for (let i = 0; i < raw.length; i++) {
    array[i] = raw.charCodeAt(i);
  }

  // re
  return array;
}

// return blob
export function convertDataToBlob(data, mimeType) {
  // 1. data === base64
  // 2. mineType === application/pdf
  const arr = convertDataToBinary(data);
  // blob([2d_arr], mime_type)
  return new Blob([arr], {type: mimeType});
}

function App() {
  //const fileUrl = 'http://www.pdf995.com/samples/pdf.pdf';

  


  //const file = require('./file.json');
  const mimeType = 'pdf';
  //const data = convertDataToBlob(file, mimeType);
  //const tmpPath = window.URL.createObjectURL(data);

  const onError = (e) => {
    console.error(e);
  }

  return <div className="App">
    <FileViewer
      fileType={mimeType}
      //filePath={tmpPath}
      filePath={fileUrl}
      errorComponent={CustomErrorComponent}
      onError={onError}/>
    );
  </div>;
}

export default App;
