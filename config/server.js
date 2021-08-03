module.exports = ({ env }) => ({
  
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '811e2a11d980106899067f5fcfe2a5fc'),
    },
  },
});
