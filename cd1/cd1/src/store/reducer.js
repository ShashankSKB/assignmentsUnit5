import {  ADD_SHOW, SHOW_DETAILS } from "./actionTypes.js";

const intistate={
    user:
    {
        loading:false,
        action:[{
            id:1,
            image:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+",
            title:"Krrish",
            time:"9am 12pm 5pm"
        },
        {
            id:2,
            image:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+",
            title:"Bang Bang",
            time:"10am 2pm 6pm"
        }],
        horror:[
            {
                id:1,
                image:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+",
                title:"RAAZ",
                time:"9am 12pm 5pm"
            },
            {
                id:2,
                image:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+",
                title:"GRUDGE",
                time:"10am 2pm 6pm"
            }
        ],
        tickets:[
            {
                id:1,
                image:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+",
                title:"Krrish",
                time:"9am 12pm 5pm"

            }
        ],
        show:"",
    }
};

const reducer =(state =intistate,action)=>
{
    switch (action.type)
    {
        case ADD_SHOW:{
            return {
                ...state.user,
                user:{
                    ...state.user,
                    tickets:[...state.user.tickets,action.payload]
                }
                
            }
        }

        case SHOW_DETAILS:{
            
            return {
                ...state.user,
                user:{
                   ...state.user,
                    show:action.payload
                }
                
            }
    }

        default:
            return state
    }
}

export {reducer}