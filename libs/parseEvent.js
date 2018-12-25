module.exports = {
    parseEvent: function(event) {
        return parseEvent(event);
    }   
};

function parseEvent(event){
    return {
        data: event.data,
        body: event.body,
        path: event.path,
        //id: event.path.id,
        stage: event.stage,
        params: JSON.parse(event.params || "{}")
    };
};