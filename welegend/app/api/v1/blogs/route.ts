import { RequestContext } from 'next/dist/server/next-server';
import { NextRequest } from 'next/server';
import APIRouter from '~/app/api/_externals/api.handler';
import prisma from '~/app/_externals/lib/prisma';

const APIHandler = new APIRouter();
const router = APIHandler.route();

// get all blogs
router.get(async (req) => {
  console.log("cc");
  
  const data = await prisma.blog.findMany()

  return Response.json({
    message: "Get Successfully",
    data
  });
});

export function GET(request: NextRequest, ctx: RequestContext) {
  return APIHandler.run(request, ctx);
}

export function POST(request: NextRequest, ctx: RequestContext) {
  return APIHandler.run(request, ctx);
}