


export const item = (state={},action) =>{
     console.log('item list',action.item)
     console.log('prvious',state)
        switch (action.type){
        case 'ADD_ITEM':
            return action.item;
            default :
            return state;
                      }
    
        
};