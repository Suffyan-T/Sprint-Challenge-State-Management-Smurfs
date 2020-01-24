1. What problem does the context API help solve?

	It enables us to share specific forms of data across all levels of the application. Basically we no longer have to use props drilling to get state down all of the levels of components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

		Actions in Redux are packets of information that contain an action type and associated data.
		Store stores the data
		Reducers calculate the new version of state based on the current state and a given Action.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

		Scope, Application state is state wide while Component State only exists inside a certain Component and children component via props


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
		It is middleware
		It allows us to perform acync operations so that we return functions rather than objects
		
1. What is your favorite state management system you've learned and this sprint? Please explain why!

	I prefer Context in situations where it can be used. It is simpler and less complex to impliment and i personally beleive reducing complexity reduces errors. However while Context is easier to impliment Redux is more scalable and easier to manage at scale.