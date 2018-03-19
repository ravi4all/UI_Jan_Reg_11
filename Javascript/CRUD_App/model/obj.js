var obj = {

    itemList : [],
    id : 0,

    addItem : function(name,price,desc){
        this.id++;
        var itemObj = new Item(this.id, name, price, desc);
        this.itemList.push(itemObj);
        // console.log(this.itemList);
    },

    toggleItem : function(id){
        var toggleList = this.itemList.filter(function(obj){
            return obj.id == id;
        })
        toggleList[0].selected = !toggleList[0].selected;
        // console.log(this.itemList);
    },

    deleteItem : function(){
        this.itemList = this.itemList.filter(function(obj){
            return obj.selected == false;
        })
        // console.log(this.itemList);
    }

}