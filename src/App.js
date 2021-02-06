import React, {Component} from 'react';
import Contacts from './components/contacts';
import * as Constants from './Constants';

class App extends Component {
  
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

   

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        contacts: []
      };
    }
    componentDidMount() {

      fetch(Constants.getMyHomeProperty, { 
   headers: new Headers({
    'Funguo': Constants.Funguo
   })
 })
       
            .then(res => res.json())
            .then((data) => {
                this.setState({ 
                  isLoaded: true,
                  contacts: data 
                })
            })
            .catch(console.log)
    }
    
}

export default App;