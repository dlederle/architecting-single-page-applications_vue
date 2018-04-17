# Introduction

This repo is a re-implementation of [@intojs/architecting-single-page-applications](https://github.com/intojs/architecting-single-page-applications) in Vue.
I read [Daniel Dughy's article](https://hackernoon.com/architecting-single-page-applications-b842ea633c2e) describing this architecture and had to try it out.

# Using Vue

Vue lived up to its ["progressive framework"]() label, and worked as a drop in replacement for the React code in `components/`.
The rest of the application's domain, services and store worked identically.
Other than a bit of trouble getting Flow up and running for the first time, the port was very straightforward.
Since the 'backend' (business logic?) was mostly kept out of the view components thats where I started.
I made the mistake of starting to implement the store with Vuex before actually reading the code and realizing that `ArticleStore` was a minimal reimplementation of Flux ideas.
For next steps I'd like to see how hard it would be to swap it out for a Vuex implementation.

For the components, I began by copying the markup for the presentational components without any of the Vue / React stuff.
Next I made the container components, stubbing out their functionality and importing the necessary interactions with the services / store.
Finally, I got into enabling all the Vue functionality.

This ended up being mostly syntactic changes.
Everything in a React constructor became properties in the Vue components data().
There's no difference in readability between having methods in an explicit `methods` block (in a Vue component) versus having them declared on the class (in a React component).

One difference between React and Vue is their available [lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle) [hooks](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks).
Sadly this application only made use of them in one place, so it was hard to get much a feel for their differences.
In `ArticleListContainer`, the React version unsubscribed on `componentWillUnmount`.
I chose `beforeDestroyed` as the closest Vue equivalent.
For this usecase they seem equivalent, but I could imagine there might be other situations where I would need to do further reading on the precise differences.

#Takeaways

I was very impressed with the separation of concerns this architecture gives by pulling domain logic out of the views themselves.

It seems like it would scale up well, although it was tough to tell with this small of an example.
One question I have is where to put API interactions.
They should probably live in the domain, and return promises for container components to consume, but I'd be interested to hear if anyone has found other solutions.

I'm also curious if anyone has alternatives to the [container / presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) component setup.
I don't have any specific criticisms of it, just interested in trying out other options.
