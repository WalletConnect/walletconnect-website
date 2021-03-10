import { LOGO_BASE_URI } from "../../../common/Constants";

export default async (req, res) => {
  const { pid, size } = req.query;
  let imgData;
  let isPng = true;
  let small = false;

  // defensive on the req.parms, req.query(especially)

  if (size) small = true;


  if (small) {
    imgData = await fetch(`${LOGO_BASE_URI}small/${pid}.png`);
  } else {
    imgData = await fetch(`${LOGO_BASE_URI}${pid}.png`);
  }


  // not a png, try jpg
  if (imgData.status === 404) {

    if (small) {
      imgData = await fetch(`${LOGO_BASE_URI}small/${pid}.jpg`);
    } else {
      imgData = await fetch(`${LOGO_BASE_URI}${pid}.jpg`);
    }

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

