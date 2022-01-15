(function () {
    if ((typeof cocosAnalytics) !== 'undefined'){
        var initArgs = {
            appID: '622772617',
            storeID: 'H5',
            engine: 'cocos',
            callNumber: ''
        };
        if (!initArgs.appID || !initArgs.storeID) return console.error('');
        cocosAnalytics.init(initArgs);
    }
})();