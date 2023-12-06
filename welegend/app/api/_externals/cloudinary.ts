import { ConfigOptions, UploadApiOptions, v2 as cloud } from 'cloudinary';

class Cloudinary {
  public config(options: ConfigOptions) {
    cloud.config(options);
  }

  public upload = async (file: any, options?: UploadApiOptions) => {
    return await cloud.uploader.upload(file, options);
  };

  public destroy = async (publicId: string) => {
    return await cloud.uploader.destroy(publicId);
  };

  public delete = async (publicIds: string[]) => {
    return await cloud.api.delete_resources(publicIds, {
      type: 'upload',
      resource_type: 'raw',
    });
  };

  public crop = (id: string, h: number, w: number) => {
    return cloud.url(id, {
      height: h,
      width: w,
      crop: 'scale',
    });
  };
}

const cloudinary = new Cloudinary();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
