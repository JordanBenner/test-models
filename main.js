

YUI.add('rubik-queue', function (Y) {

    Queue = function (config) {
        config = config || {};
        this.size = 0;
        this.current = -1;
        this._queue = [];
    };

    Queue.prototype = {

        add: function (m) {
            if(++this.current == this.size){
                this._queue.push(m);
                this.size++;
            }else{
                this._queue = this._queue.slice(0,this.current);
                this.size = this.current + 1;
                this._queue.push(m);
            }
        },
        undo: function () {
            var m;
            if(this.current >= 0){
                m = this._queue[this.current];
                m.rotate = m.rotate === 'left'? 'right' : 'left';
                this.current--;
                return m;
            }
        },
        redo: function () {
            if (this.current + 1 < this.size){
                var m = this._queue[++this.current];
                m.rotate = m.rotate === 'left'? 'right' : 'left';
                return m;
            }
        }

    };
    Y.Queue = Queue;
});
