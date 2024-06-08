module.exports = ({ env }) => ({
    "transformer":{
      enable:true,
      config:{
        responseTransforms:{
          removeAttributesKey: true,
          removeDataKey: true,
        }
      }
    }
});
