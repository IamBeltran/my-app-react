//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
    import React from 'react';
    import { Route, Switch } from 'react-router-dom';

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
    import App      from './components/App';
    import About    from './components/About';
    import Contact  from './components/Contact';
    import Library  from './components/Library';
    import Home     from './components/Home';
    import Page404  from './components/Page404';

    const AppRoutes = () =>
        <App>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/library" component={Library} />
                <Route exact path="/library/:id" component={Library} />
                <Route exact path="/" component={Home} />
                <Route component={Page404} />
            </Switch>
        </App>
    
    export default AppRoutes;