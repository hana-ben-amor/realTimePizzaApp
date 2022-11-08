import React from 'react'

function pizzaCard(props) {
const{pizza,onAdd}=props;
  return (
    <div class="w-full md:w-64">
          <img class="h-40 mb-4 mx-auto" src={pizza.image} alt=""/>
                    <div class="text-center">
                        <h2 class="mb-4 text-lg">{pizza.name}</h2>
                        <div>
          
                    </div>
                        <span class="size py-1 px-4 rounded-full uppercase text-xs">{pizza.size}</span>
                            <div class="flex items-center justify-around mt-6">
                                <span class="font-bold text-lg">£{pizza.price}</span>
                                <button class="add-to-cart py-1 px-6 rounded-full flex items-center font-bold" onClick={() => onAdd(pizza)}><span>+</span>
                                    <span class="ml-4">Add</span></button>
                                
                                
                            </div>
                      </div>
                      </div>
  )
}

export default pizzaCard;
