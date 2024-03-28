function clone(o) {
    if (o === null) return null;
    if (typeof o !== 'object') 
        return o; // копирование примитива
    if (o instanceof Date) 
        return new Date(o); // копирование даты
    if (Array.isArray(o)) 
        return o.map(item => clone(item)); // копирование массива
    let clone = Object.assign({}, o);
    Object.keys(clone).forEach( // ркурсивное копирование свойств
        key => clone[key] = typeof o[key] === 'object' ? clone(o[key]) : o[key]
    );
    return clone;
}