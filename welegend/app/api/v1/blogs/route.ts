import { RequestContext } from 'next/dist/server/next-server';
import { NextRequest } from 'next/server';
import APIRouter from '~/app/api/_externals/api.handler';
import prisma from '~/app/_externals/lib/prisma';

const APIHandler = new APIRouter();
const router = APIHandler.route();

// get all blogs
router.get(async (req) => {
  const data = await prisma.blog.findMany();

  return Response.json({
    message: "Get Successfully",
    data
  });
});

// get blog detail by id
router.get('/:id', async (req) => {
  const id = req.nextUrl.searchParams.get('id');
  const data = await prisma.blog.findUnique({
    where: { id: parseInt(id as string) }
  });

  return Response.json({
    message: "Get Successfully",
    data
  });
});

// post a blog
router.post(async (req) => {
  const body = await req.json();
  const { authorId, title, summary, content, thumbnail } = body;

  const existingUser = await prisma.user.findUnique({
    where: {
      id: authorId
    }
  });

  if (!existingUser) {
    return Response.json({
      message: "User does not exist",
      error: true
    }, { status: 404 });
  }

  // check authorId exist
  const newBlog = await prisma.blog.create({
    data: {
      authorId: authorId,
      title,
      summary,
      content,
      thumbnail
    }
  });

  return Response.json({
    message: "Create Successfully",
    data: newBlog
  });
});

// update blog by id
router.patch('/:id', async (req) => {
  const idParam = req.nextUrl.searchParams.get('id');
  
  if (!idParam) {
    return Response.json({
      message: "ID is required",
      error: true
    }, { status: 400 });
  }

  const id = parseInt(idParam);

  if (isNaN(id)) {
    return Response.json({
      message: "Invalid ID format",
      error: true
    }, { status: 400 });
  }

  const body = await req.json();
  const { author, title, summary, content, thumbnail } = body;

  const updatedBlog = await prisma.blog.update({
    where: { id },
    data: {
      author,
      title,
      summary,
      content,
      thumbnail
    }
  });

  return Response.json({
    message: "Update Successfully",
    data: updatedBlog
  });
});


// delete blog by id
router.delete('/:id', async (req) => {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return Response.json({
      message: "Error: id is required",
      data: null
    });
  }

  await prisma.blog.delete({
    where: { id: parseInt(id) }
  });

  return Response.json({
    message: "Delete Successfully"
  });
});

// search blog by title
router.get('/search/:title', async (req) => {
  const title = req.nextUrl.searchParams.get('title');
  if (!title) {
    return Response.json({
      message: "Error: title is required",
      data: null
    });
  }

  const data = await prisma.blog.findMany({
    where: { title: { contains: title } }
  });

  return Response.json({
    message: "Search Successfully",
    data
  });
});

export function GET(request: NextRequest, ctx: RequestContext) {
  return APIHandler.run(request, ctx);
}

export function POST(request: NextRequest, ctx: RequestContext) {
  return APIHandler.run(request, ctx);
}