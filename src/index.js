// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
    
};

const createNotEnumerableProperty = function (property) {
    return Symbol.for(property);
};

const createProtoMagicObject = () => {
    let f = function() {
    }
    f.prototype = null;
    f.__proto__ = null;

    return f;
};


const incrementor = () => {
    incrementor.count++;

    function f() {
        incrementor.count++;
        return f;
    }

    f.toString = function() {
        return incrementor.count;
    }

    return f;
};
incrementor.count = 0;

const asyncIncrementor = () => {
    asyncIncrementor.count++;

    function f() {
        asyncIncrementor.count++;
        return f;
    }

    f.toString = function() {
        return asyncIncrementor.count;
    }

    return f;
};
asyncIncrementor.count = 0;

const createIncrementer = function* () {
    let i = 1;
    
    while (i < i + 1)
        yield i++;
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {

    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(param), 1000);
    });

};

const getDeepPropertiesCount = function propertyCount(obj) {

    let i = 0;

    for (key in obj) {
        if (typeof obj[key] == 'object') {
            i += propertyCount(obj[key]);
        }
        i++;
    }

    return i;
};

const createSerializedObject = () => {
    return null;
};

const toBuffer = () => {};

const sortByProto = (array) => {
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;