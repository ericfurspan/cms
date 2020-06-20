
module.exports = ({ env }) => {
  const inProduction = env('NODE_ENV') === 'production';

  // in production, use the aws s3 bucket for media uploads
  // see: https://github.com/strapi/strapi/tree/master/packages/strapi-provider-upload-aws-s3
  if(inProduction) {
    return {
      upload: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: 'us-east-2',
          params: {
            Bucket: env('AWS_UPLOAD_BUCKET'),
          },
        },
      }
    }
  }
};
