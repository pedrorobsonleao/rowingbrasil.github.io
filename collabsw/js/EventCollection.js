var EventCollection = function(events = []) {

    var event_list = events;

    var events = (event_list) => {
        var data = [];
        var head = ['date','name','itens','distance','status'];
        
        event_list.forEach((event) => {
            var line = [];
            
            head.forEach( (key) => {
                
                var value = event[key];
                
                if(key === 'status') {
                    value = (event[key] == 'E');
                } else if(key === 'date') {
                    value = new Date(event[key]);
                }
                
                line.push(value);
            });
            data.push(line);
        });
        
        var ret =  { 'head': head, 'data': data };
        //console.log('private events', ret);
        
        return ret;
    };

    this.table = () => {
        
        var type = {
            'date': 'date',
            'name': 'string',
            'participants': 'number',
            'distance': 'number',
            'completed': 'boolean'
        };
        
        var out = new google.visualization.DataTable(); /* global google */

        for (var key in type) {
            out.addColumn(type[key], key);
        }
        
        var ev = events(event_list);
        out.addRows(ev.data);
        
        return out;
    };
    
    this.get = () => {
        return event_list;
    };
    
    this.set = (events) => {
        event_list = events;
    };
};