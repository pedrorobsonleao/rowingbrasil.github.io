var TimeCollection = function(times = []) {
    
    //"use strict";
    
    var time_list = times;
    
    var times = (time_list) => {
        var data = [];
        var head = [];
        
        time_list.forEach((time) => {
            var pos = time.position - 1;
            var tim = time.time;
            
            if(head.indexOf(time.distance) < 0) {
                head.push(time.distance);
            }
            try {
                if(tim.length == 0) {
                    tim = data[pos][0];
                }
                
                data[pos].push(tim);
            } catch (err) {
                data[pos] = [tim];
            }
        });
        
        data.forEach( (d) => {
            while(d.length < head.length) {
                // d.push(d[d.length - 1]);
                d.push(d[0]);
            }
        });
        var ret =  { 'head': head, 'data': data };
        //console.log('private times', ret);
        return ret;
    };
    
    var toTimeOfDay = (time) => {
        
        var dt = new Date(time);
                
        return [
            dt.getUTCHours(), 
            dt.getUTCMinutes(), 
            dt.getUTCSeconds(),
            dt.getUTCMilliseconds() 
            ];
    };
    
    this.allTimes = () => {
        var ret = [];
        
        var out = new google.visualization.DataTable(); /* global google */
        out.addColumn('string', '#'); 
        
        var t = times(time_list);
        t.head.forEach( (h) => {
            out.addColumn('timeofday', (h + '') );
        });
        
        t.data.forEach( (d,i) => {
            var l = [];
            l.push((i+1)+'');
            
            d.forEach( (t) => {
                l.push(toTimeOfDay(t));
            });
            
            ret.push(l);
        });
        //console.log('allTimes',ret, out);
        out.addRows(ret);
        return out;
    };
    
    this.totalTimes = () => {
        var ret = [];
        
        var out = new google.visualization.DataTable(); /* global google */
        out.addColumn('string', '#'); 
        
        var t = times(time_list);
        
        t.head.splice(0,0,'time');
        
        t.head.forEach( (h) => {
            out.addColumn('timeofday', (h + '') );
        });
        out.addColumn('boolean', 'completed');
        
        t.data.forEach( (d,i) => {
            var l = [];
            
            l.push((i+1)+'');
            
            var etime = d[d.length - 1]  - d[0];
            l.push(toTimeOfDay( etime ));
            
            d.forEach( (t,idx) => {
                l.push(toTimeOfDay(t));
            });
            
            l.push( etime !=  0 );
            
            ret.push(l);
        });
        //console.log('totalTimes',ret, out);
        out.addRows(ret);
        return out;
    };
    
    this.timeline = () => {
        var ret = [];
        
        var t = times(time_list);
        t.data.forEach( (time,idx) => {
            var l = [];
            l.push( (idx+1)+'' );
            l.push( (idx+1)+'' );
            l.push( new Date(time[0]) ); //start
            l.push( new Date(time[time.length - 1]) ); //end
            ret.push(l);
        });
        var out = new google.visualization.DataTable(); /* global google */
        
        out.addColumn('string', 'Term'); 
        out.addColumn('string', 'Name'); 
        out.addColumn('datetime', 'Start');
        out.addColumn('datetime', 'End');
        
        out.addRows(ret);
        
        //console.log('timeline',ret,out);
        return out;
    };
    
    this.set = function(times) {
        ////console.log(times);
        time_list = times;   
    };
    
    this.get = function() {
        return time_list;
    };
};
