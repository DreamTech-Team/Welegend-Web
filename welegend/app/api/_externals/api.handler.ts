import { createEdgeRouter } from 'next-connect';
import { RequestContext } from 'next/dist/server/next-server';
import { NextRequest, NextResponse } from 'next/server';
import AppError from './utils/app.error';

class APIRouter {
  private router = createEdgeRouter<NextRequest, RequestContext>();

  public route() {
    return this.router;
  }

  public run(req: NextRequest, ctx: RequestContext) {
    return this.router.handler({
      onError: (err: any, req, event) => {
        console.error(err.stack);

        return new NextResponse(err.message, {
          status: err.statusCode || 500,
          statusText: err.status || 'error',
        });
      },
      onNoMatch: (req, event) => {
        throw new AppError(`Can't find ${req.url} on this server!`, 404);
      },
    })(req, ctx);
  }
}

export default APIRouter;
