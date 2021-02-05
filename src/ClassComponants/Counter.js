import React, {Component} from 'react'
import Action from '../Componants/Action'
import Result from '../Componants/Result'

class Counter extends Component {
   state = {
       counter: this.props.counter,
       componentName: "counter",
       isPlus: true
   }
    handlePlusCount = () => {
       this.setState({
           counter: this.state.counter = this.state.counter + 1
       })
   }
    handleMinusCount = () => {
        this.setState({
            counter: this.state.counter = this.state.counter - 1
        })
    }

    render () {
       const {counter} = this.state;
       return (
           <div className="counterClass">
               <Result counter={this.state.counter} />
               <Action handlePlusCount={this.handlePlusCount} handleMinusCount={this.handleMinusCount} />
           </div>
       )
   }
}

export default Counter
