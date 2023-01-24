var loaderOptions = {
    // you can put the chatbot UI config in a JSON file
    configUrl: './chatbot-ui-loader-config.json',

    // the full page chatbot UI that will be iframed
    iframeSrcPath: './chatbot-index.html#/?lexWebUiEmbed=true'
  };

  // The following statement instantiates the IframeLoader
  var iframeLoader = new ChatBotUiLoader.IframeLoader(loaderOptions);

  // chatbot UI config
  // The loader can also obtain these values from other sources such
  // as a JSON file or events. The configUrl variable in the
  // loaderOptions above can be used to put these config values in a file
  // instead of explicitly passing it as an argument.
  var chatbotUiConfig = {
    ui: {
      // origin of the parent site where you are including the chatbot UI
      // set to window.location.origin since hosting on same site
      parentOrigin: window.location.origin,
    },
    iframe: {
      // origin hosting the HTML file that will be embedded in the iframe
      // set to window.location.origin since hosting on same site
      iframeOrigin: window.location.origin,
    },
    cognito: {
      // Your Cognito Pool Id - this is required to provide AWS credentials
      poolId: 'us-east-1:98aca28d-4e15-431b-8e0b-fa75ee18c693'
    },
    connect: {
      contactFlowId : '<your contact flow id>',
      instanceId : '<your instance id>',
      apiGatewayEndpoint : '<your api gateway endpoint>',
    },
    lex: {
      // Lex Bot Name in your account
      botName: 'WebUiOrderFlowers'
    }
  };

  // Call the load function which returns a promise that is resolved
  // once the component is loaded or is rejected if there is an error
  iframeLoader.load(chatbotUiConfig)
    .then(function () {
      console.log('iframe loaded');
    })
    .catch(function (err) {
      console.error(err);
    });