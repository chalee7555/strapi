module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:"https://api.vercel.com/v1/integrations/deploy/prj_3NkaFIRBqyxDiz4RhA0rnH1E3H0b/6HesBJ8AyB",
        apiToken: "7Ao0xKRJ6FoogA3Qk70NSfUa",
        appFilter: "strapi",
       roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });
