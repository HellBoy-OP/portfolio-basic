var myEnv = (() => {
    const environment = {
        // create your own api key from: https://web3forms.com/
        // this api key can be public.
        web3FormsApiKey: "de7ffb6e-9b44-41be-8163-3f3902eeeb65",
    }
    return {
        getVariable: (key) => {
            return environment[key];
        }
    }
})();
