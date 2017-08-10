import React from 'react';
import Navbar from './navbar';
import './reading.css';
import * as actions from '../actions';
import * as Cookies from 'js-cookie';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class Reading extends React.Component {

  componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            this.props.dispatch(actions.getUsers(accessToken));
            this.props.dispatch(actions.fetchQuestions())
        }
    }

  render() {
    return (
      <div>
        <Navbar />
        <div className="reading-box">
          <p className="reading">
            <p className="reading-opening">
            So you want to know more about coffee?
            </p>
            <p></p>

            Ever feel intimidated by what you see in on the menu at the super hipster coffee shop in town? Let’s begin by breaking that down!
            <p></p>

            Here are a few beverages you might see on their menu:
            Latte, Cappuccino, Espresso, the Cortado (or Gibraltar), the Macchiato, Americanos, and pour overs.
            <p></p>

            The first two, in the United States, are very similar. Most coffee shops may prepare them in any and all sizes, with the only difference being that the cappuccino contains more foam than a latte. In some higher end shops, you might order a cappuccino, and be surprised to find a small spoon placed to the side of your cup. This is to, “prove it’s a cappuccino” (while giving some a handy sugar stirrer). As soon as one begins to define exactly what a cappuccino is, people tend to get upset. It’s safe to say however, that a cappuccino is usually 7 ounces, and contains at least a small spoon’s “push” of foam. What this means is, if you take that small spoon the barista handed you and dragged the end of the spoon across the surface, you should see only foam in the trench of foamy goodness you have formed.
            A latte, on the other hand, can range in size anywhere between 8oz - 20oz, and contain very little foam.
            <p></p>

            The espresso shot definition is also up for debate, as are most things in the coffee world, as there are two very different schools of thought competing for the definition. The first is Italian style, which the average Starbucks goer might be familiar with, e.g. the dark, caramelly, bold shot of espresso. That idea is currently being opposed by another: the “3rd wave” definition, or the “Hipster” definition to some, really focuses on how the coffee was processed and the region it came from rather than the roast itself. While Italian espresso is often very dark, 3rd wave espresso is often very light, which allows the natural flavors of the bean to shine. The longer you roast a bean, the more the natural flavors are replaced with more roasty toasty ones. While common flavor profiles of an Italian roast contain caramel, dark chocolate, and nougat, 3rd wave espresso contains fruitier flavors such as: blueberries, stone fruit, or milk chocolate.
            <p></p>

            It’s also important to note that the longer you roast beans, the less caffeine they contain. This means that the “extra dark super bold macho man xtreme addition” your dad might drink every morning contains less caffeine than the light, balanced, fruity cup at the local hipster coffee shop.
            <p></p>

            The Cortado (or Gibraltar):
            While the Cortado started over seas, the Gibraltar got its roots in San Francisco at a shop named Blue Bottle (which now can be found all over). As the story goes, a barista at Blue Bottle accidently ordered the wrong type of glass from the manufacturer (the Gibraltar). Rather than waste the glasses, they then started making  each other a unique drink that wasn’t on the menu. The idea being that when the new barista faced a nice fresh wall of drinks to make, there was this small glass of espresso goodness waiting for him to enjoy before starting. Over time customers caught wind of this magical lil’ guy and began requesting them as well. From a preparation standpoint, a cortado & gibraltar are essentially smaller cappuccinos, around 4.5 ounces. 
            <p></p>


            The smallest of the espresso based milk drinks is the macchiato.
            The macchiato is a wonderful little thing, containing equal parts espresso and steamed milk. It goes down quick, tastes delicious, and is often regarded as a respectable drink in the barista’s eyes (if you’re ever trying to impress a barista, order the smallest drink on the menu). One of the cardinal sins of pissing off your barista is ordering one of these to-go (same goes for a shot of espresso). Since their size is so small, usually the barista hates putting them in a paper cup, considering that often, you’ll have finished it by the time you make it to the door.
            <p></p>

            To step away from the espresso based drinks for a minute, we have the pour over menu.
            Pour overs are a beautiful thing when done correctly. Allow me to explain. The concept of a pour over, at the most basic level, is simple: you put ground coffee in a filter above a cup or serving carafe, and pour hot water over the top to brew an individual cup of coffee. This is heavily expanded upon in the 3rd wave (hipster) coffee scene. To begin, the barista grinds the beans fresh (always do this if possible). The barista then places a filter inside a specialty container (which go by many different names, the most common being V60s, Kalitas, and Chemexs), and then rinse the paper filter with hot water. This process removes any unwanted material from the filter, most commonly a distinct bleach like smell (seriously, if you ever ask a barista to allow you to smell the water that comes out of that thing, you may never want to drink coffee that didn’t use a rinsed filter). From there, the barista pours the grinds that were just ground into the filter, keeping an eye on the weight. In coffee preparation, weight and time are crucial (If you ever order a pour over at a cafe and they aren’t using a scale of some kind, this should be a red flag). They then pour between 30-50 grams of water on the bed of coffee, and pause for 30 seconds. This allows the coffee to “bloom”, similar to sweating onions or toasting spices  when cooking, it allows the flavors to expand while letting CO2 that formed in the roasting process to release from the beans. The barista then continues to pour water over the grinds, moving with a circular motion, to ensure the bed of coffee stays as flat as possible. This is important because a pause in this motion will allow a hole in the bed of coffee to form. Water follows the path of least resistance, so the water will begin to “channel” through that hole, avoiding parts of the coffee bed and leaving them under extracted, while leaving the coffee near that newly formed hole over extracted. After two to three minutes of this, the coffee is done. Most specialty cafes really take the time to dial in their coffees for the pour over bar, so this should be a treat.
            <p></p>

            To cap it all off, we have the americano.
            The americano originated in Italy, and was designed for americans who expected their coffee to be large and watery, similar to drip coffee which was nowhere to be seen in cafes in Italy. In a way, this was a jab at the annoying American customer who was always requesting something that wasn’t on the menu, but it was a hit and the drink made its way to the United States, where it was become a staple on the menu ever since. The drink is straightforward with several shots of espresso mixed into a glass of hot water.
            <p></p>

            Ready to test your knowledge?
          </p>
          <Link to="/questions">
            <button className="test-button">Take me to the test!</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect()(Reading);