const JavaScriptObfuscator = require('webpack-obfuscator');
const path = require('path');

module.exports = {
    // ! note: try to use a mode (development or production).
    // Idk why but if I enable one of this modes, I get broken code... but this stuff for second issue from me :d ... maybe later...
    // mode: "development",   // "development" || "production" || "none" => by default.
    entry: {
        app: ['./index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new JavaScriptObfuscator({
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,  
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 1,     
            debugProtection: false,
            debugProtectionInterval: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            log: true,
            numbersToExpressions: true,
            optionsPreset: 'default',
            renameGlobals: true,
            renameProperties: true,
            rotateStringArray: true,
            seed: 0,
            selfDefending: true,
            shuffleStringArray: true,
            simplify: true,
            splitStrings: true,
            // Note: I test with 1 and with 5 values. But in currently moment bug didn't resolve by inc this value to 5 or greater... IDK WHY. Fuck this.
            // IDK. This obfuscator ... maybe ... break this world :eyes:
            splitStringsChunkLength: 1, 
            stringArray: true,
            stringArrayEncoding: "rc4",
            stringArrayThreshold: 1,  
            target: 'browser',
            transformObjectKeys: true,
            unicodeEscapeSequence: true
        }, [])
    ]
};