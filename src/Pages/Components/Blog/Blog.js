import React from 'react';

const Blog = () => {
    return (
        <div className='px-12 mt-12 pb-12'>
            <h1 className="text-center text-3xl font-bold"> 1.How will you improve the performance of a React Application? </h1>
            <p className="text-xl mt-5">   During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected. However, React could end up re-rendering all components in the DOM tree, even though not all are affected. This will result in longer loading time, wasted time, and even wasted CPU resources. We need to prevent this from happening. In this situation, we could configure every component to only render or diff when necessary, to avoid wasting resources and time and improve the performance of a React Application.  </p>
            <h1 className="text-center text-3xl">2. What are the different ways to manage a state in a React application? </h1>
            <p className="text-xl mt-5"> There are different ways to manage a state in a React application:
                <li> •Local state  </li>
                <li> •Global state</li>
                <li>•	Server state </li>
                <li>•	URL state </li>
            </p>
            <h1 className="text-center text-3xl">   3.  How does prototypical inheritance work? </h1>
            <p className="text-xl mt-5"> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object .setPrototypeOf.  </p>
            <h1 className="text-center text-3xl">     4.  Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts` </h1> 
            <p className="text-xl mt-5">
                One should never set the state directly because of the following reasons:
                1) If i update it directly, calling the setState() afterward may just replace the update i made.
                2) When i directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                3)  i will lose control of the state across all components.
                 if i modify state directy, call this.setState ( ) or even this.forceUpdate(), then everything might appear to be just fine. */
                this.state.cart.push(item.id);
                this.setState(); 
                This is a bad idea for two reasons (even though it would work in this example, and many others).
                (other patterns to avoid are things like this.state.something = x and this.state = x)
                Mutating state directly can lead to odd bugs, and components that are hard to optimize.

            </p>
            <h1 className="text-center text-3xl">
                5.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
            </h1>
            <p className="text-xl mt-5">
                With these array methods, i don't need to use a for loop to search an array of element. Depending on what i need, i can decide which of the methods is best suited for my  case.
                there have many away like:-
                Use filter: if i want to find all items in an array that meet a specific condition.
                Use find: if i want to check if that at least one item meets a specific condition.
                Use includes: if i want to check if an array contains a particular value.
                Use indexOf: if i want to find the index of a particular item in an array.

                for mentioned case i can use
                const products = ['name','description','price'];
                console.log(products.includes('name'));



            </p>
            <h1 className="text-center text-3xl"> 6.  What is a unit test? Why should write unit tests?</h1>
            <p className="text-xl mt-5"> A unit test is a method of testing a unit, which is the least unit of code in a system that can be logically isolated. It is a single testable component of a software system that is tested during the application software development phase. The objective of unit testing is to ensure that unit components work as expected. It ensures that the isolated code is correct and the developer's source code fits the requirements and acts as intended. </p>

        </div>
    );
};

export default Blog;