import { LOGO_BASE_URI } from "../../../common/Constants";

export default async (req, res) => {
  const { pid, size } = req.query;
  let imgData;
  let small = false;

  // defensive on the req.parms, req.query(especially)

  if (size) small = true;


  if (small) {
    imgData = await fetch(`${LOGO_BASE_URI}small/${pid}.jpeg`);
  } else {
    imgData = await fetch(`${LOGO_BASE_URI}large/${pid}.jpeg`);
  }


  if (imgData.status === 404) {
    console.error('jpeg did not resolve, error response to user');
    //error response
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.send({ error: 'uri did not resolve to a jpeg, please check the path' })
  } else {
    const imgBlob = await imgData.blob();
    const imgBuffer = await imgBlob.arrayBuffer();

    res.setHeader('Content-Type', 'image/jpeg');
    res.statusCode = 200;
    res.send(Buffer.from(imgBuffer));
  }
}

