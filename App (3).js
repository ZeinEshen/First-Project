import React, {Component} from 'react';
import {render} from 'react-dom';
import {RadioGroup, Radio} from 'react-radio-group';




class App extends Component {
    constructor(props) {
        super(props);
            this.handleSubmit = this.handleSubmit.bind(this);

    }
    state = {
        selected: ''
    };

    element = document.getElementById('content');
    element1 = document.getElementById('content');
    handleSubmit(e) {
        alert('User info: ' + ' Name: ' + this.name.value + ' Age: ' + this.age.value + ' Hobbie: ' + document.querySelector('input[name=Hobbie]:checked').value +
            ' Alcohol:' + document.querySelector('input[name=Alc]:checked').value);
        e.preventDefault();
    }
        render() {
        return (
            <div>

                <h1> Questionnaire </h1>
            <form onSubmit={this.handleSubmit}>

            <label>
                Name:
                <input type="text" ref={(input) => this.name = input} /><br/>
            </label>
            <label>
                Age:
                <input type="text" ref={(input) => this.age = input} /><br/><br/>

            </label>
                <div>
                <fieldset>
                <h3> Choose your hobbie </h3>
                <input type='radio'  name='Hobbie' value='Drawing'
                       checked={this.state.selected === 'Drawing'} onChange={(e) => this.setState({ selected: e.target.value })} />Drawing<br/>
                <input type='radio'  name='Hobbie' value='Dansing'
                       checked={this.state.selected === 'Dansing'} onChange={(e) => this.setState({ selected: e.target.value })} />Dansing<br/>
                <input type='radio'  name='Hobbie' value='Singing'
                       checked={this.state.selected === 'Singing'} onChange={(e) => this.setState({ selected: e.target.value })} />Singing<br/>
            </fieldset>
                </div>

                <div>
                <fieldset>
                    <h3> What alcohol do you like </h3>
                    <input type='radio'  name='Alc' value='Vine'
                           checked={this.state.selected === 'Vine'} onChange={(e) => this.setState({ selected: e.target.value })} />Vine<br/>
                    <input type='radio'  name='Alc' value='Beer'
                           checked={this.state.selected === 'Beer'} onChange={(e) => this.setState({ selected: e.target.value })} />Beer<br/>
                    <input type='radio'  name='Alc' value='Vodka'
                           checked={this.state.selected === 'Vodka'} onChange={(e) => this.setState({ selected: e.target.value })} />Vodka<br/>
                </fieldset>
                </div>




        <input type="submit" value="Submit" />
            </form>
    </div>

    );
    }
}

export default App;
