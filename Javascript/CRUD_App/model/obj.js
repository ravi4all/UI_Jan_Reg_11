var obj = {

    itemList : [],
    id : 0,

    addItem : function(name,price,desc){
        this.id++;
        var itemObj = new Item(this.id, name, price, desc);
        this.itemList.push(itemObj);
        console.log(this.itemList);
    },

    toggleItem : function(){
        var toggle = this.itemList.filter(function(){
            
        })
    }

}