class Player {
    constructor(){
        this.name=null
        this.distance=0
        this.index=null
        this.rank=null
    }
    getCount()
    {
        database.ref("playerCount").on("value",(data)=>
        {
            playerCount= data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update()
    {
        var playerIndex="Player/player"+ this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo()
    {
        database.ref("Player").on("value",(data)=>
        {
            allplayer=data.val()
        })
        
    }
    getcarsAtEnd()
    {
        database.ref('carsAtEnd').on("value",(data)=>{
            this.rank=data.val()
        })
    }
    static updatecarsAtEnd(rank)
    {
        database.ref('/').update(
            {
              carsAtEnd:rank
            })
    }
}
