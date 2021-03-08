import { LOGO_BASE_URI } from "../../../common/Constants";

export default async (req, res) => {
  const { pid } = req.query;
  let imgData;
  let isPng = true;

  imgData = await fetch(`${LOGO_BASE_URI}${pid}.png`);

  // console.log('[imgData:]', imgData.status);

  // not a png, try jpg
  if (imgData.status === 404) {
    // console.log('no png, trying jpg');
    imgData = await fetch(`${LOGO_BASE_URI}${pid}.jpg`);
    isPng = false;
  }

  if (imgData.status === 404) {
    console.error('niether png or jpg resolved, error response to user');
    //error response
  }

  const imgBlob = await imgData.blob();
  const imgBuffer = await imgBlob.arrayBuffer();

  // res.setHeader('Content-Type', )

  isPng ? res.setHeader('Content-Type', 'image/png') :
    res.setHeader('Content-Type', 'image/jpeg');
  res.statusCode = 200;
  res.send(Buffer.from(imgBuffer));
}

