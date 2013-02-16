/// <reference path="../../Shared/TypeScriptDefinitions/Firebase.d.ts" />

class DocumentIndex {
    constructor() {
        var myDataRef = new Firebase('https://tsc97at8imc.firebaseio-demo.com/');
    }
}

new DocumentIndex();