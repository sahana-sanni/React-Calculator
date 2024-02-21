import React, { Component } from 'react'
import Screen from './Screen'
import Btn from './Btn'

 class Calc extends Component {
    constructor(props){
        super(props)
        this.state ={
            inp: '',
            out: ''
        }
        this.getIn = this.getIn.bind(this) //bind the function
    }
    getIn(val){
        console.log(`val =`, val)
        if(val === 'CE'){
            this.setState({
                out: "",
                inp: ""
            })

        }else if(val === 'C'){
            this.setState({
                inp: ""
            })

        }else if (val === '<-'){
            //to clear individual input character
            let x = this.state.inp.substring(0,this.state.inp.length-1)
            console.log(`x =`, x)
            this.setState({
                inp:x
            })
            // let str = this.state.inp.length
            // this.setState({
            //     inp: str
            // })
        }else if(val === "="){
            let res = eval(this.state.inp)
            this.setState({
                out: res.toString()
            })
        }
        else{
            this.setState({
                inp: this.state.inp + val
            })
        }
        
    }
  render() {
    return (
      <div className='block'>
        <h1>Calculator</h1>
        <div className='calculator'>
            <Screen finp = {this.state.inp} fout = {this.state.out}/>
            <section className='ops'>
                <Btn title={'%'} cls={'op'} read={ this.getIn }/>
                <Btn title={'CE'} cls={'op'} read={ this.getIn }/>
                <Btn title={'C'} cls={'op'} read={ this.getIn }/>
                <Btn title={'<-'} cls={'op'} read={ this.getIn }/>

                <Btn title={'7'} cls={'num'} read={ this.getIn }/>
                <Btn title={'8'} cls={'num'} read={ this.getIn }/>
                <Btn title={'9'} cls={'num'} read={ this.getIn }/>
                <Btn title={'/'} cls={'op'} read={ this.getIn }/>

                <Btn title={'4'} cls={'num'} read={ this.getIn } />
                <Btn title={'5'} cls={'num'} read={ this.getIn }/>
                <Btn title={'6'} cls={'num'} read={ this.getIn }/>
                <Btn title={'*'} cls={'op'} read={ this.getIn }/>

                <Btn title={'1'} cls={'num'} read={ this.getIn }/>
                <Btn title={'2'} cls={'num'} read={ this.getIn }/>
                <Btn title={'3'} cls={'num'} read={ this.getIn }/>
                <Btn title={'-'} cls={'op'} read={ this.getIn }/>

                <Btn title={'0'} cls={'num'} read={ this.getIn }/>
                <Btn title={'.'} cls={'op'}  read={ this.getIn }/>
                <Btn title={'+'} cls={'op'} read={ this.getIn }/>
                <Btn title={'='} cls={'equal'} read={ this.getIn }/>


            </section>
        </div>
      </div>
    )
  }
}
export default Calc
