import margherita from '../src/images/peperroni.png'
import Vegetarian from '../src/images/vegetarian.png'
import Sausage from '../src/images/sausage.png'
import Margherita from '../src/images/margherita.png'
import Kebab from '../src/images/kebab.png'
import sushi from '../src/images/sushi.png'
const data={pizzas:[{
    id:0,
    name:" Pepperoni",
    image:margherita,
    price:13.42,
    size: "small",
  },{
    id:1,
    name: "Vegetarian",
    image:Vegetarian,
    price:15.77,
    size: "medium"
  },{
    id:2,
    name: "Margherita",
    image:Margherita,
    price:16.8,
    size: "medium"
  },{
    id:3,
    name: "Sushi",
    image:sushi,
    price:25,
    size: "medium",
    qty:1
  },{
    id:4,
    name: "Sausage",
    image:Sausage,
    price:17,
    size: "medium",
    qty:1
  },{
    id:5,
    name: "Kebab",
    image:Kebab,
    price:15.88,
    size: "medium",
    qty:1
  }]
};
export default data;