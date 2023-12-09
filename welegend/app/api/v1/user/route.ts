import { RequestContext } from 'next/dist/server/next-server';
import { NextRequest } from 'next/server';
import APIRouter from '~/app/api/_externals/api.handler';
import cloudinary from '../../_externals/cloudinary';
import { UploadApiResponse } from 'cloudinary';

const APIHandler = new APIRouter();
const router = APIHandler.route();

// example get api
router.get((req) => {
  return Response.json({
    message: 'Hello World!',
  });
});

// example upload file
router.post(async (req) => {
  const body = await req.json();
  if (body.file) {
    const result: UploadApiResponse = await cloudinary.upload(body.file, {
      folder: 'welegend',
      resource_type: 'auto',
    });

    return Response.json({
      message: result,
    });
  }

  return Response.json({
    message: {
      error: 'File not found',
    },
  });
});

export function POST(request: NextRequest, ctx: RequestContext) {
  return APIHandler.run(request, ctx);
}

export function GET(request: NextRequest, ctx: RequestContext) {
  return APIHandler.run(request, ctx);
}
