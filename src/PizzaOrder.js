import React,{Component} from 'react'

class Pizzaorder extends Component
{
    
    state=
    {
        small:0, medium:1, large:0, adult:1, child:0, total:200, message:""
    }
            
    increment_small=()=>
    {
        if(this.state.total <= 850)
        {
            this.setState({
                child:this.state.child+1,
                message:""
                },this.calculate_total)

            if(this.state.small === 0)
            { 
                
                    this.setState({
                        small:this.state.small+1,
                        message:""
                        },this.calculate_total)
                
            }

            else 
            {
                if((this.state.medium) === 0)
                {
                    this.setState({
                        medium:this.state.medium+1,
                        small:this.state.small-1,
                        message:""
                    },this.calculate_total)
                }

                else{
                    this.setState({
                        large:this.state.large+1,
                        medium:this.state.medium-1,
                        small:this.state.small-1,
                        message:""
                    },this.calculate_total)
                }
            }
        }

        else{
            this.setState({
                message:"Warning: Max purchase allowed is 1000"
            },this.calculate_total)
        }
    }

    increment_medium=()=>{

        if(this.state.total <= 800)
        {
            this.setState({
                adult:this.state.adult+1,
                message:""
                },this.calculate_total)
            
            if((this.state.medium) === 0)
            {
                this.setState({
                    medium:this.state.medium+1,
                    message:""
                    },this.calculate_total)
            }

            else{
                this.setState({
                    large:this.state.large+1,
                    medium:this.state.medium-1,
                    message:""
                },this.calculate_total)
            }
        }

        else{
            this.setState({
                message:"Warning: Max purchase allowed is 1000"
            },this.calculate_total)
        }
    }

    increment_large=()=>{
        if(this.state.total <= 700)
        {
            this.setState({
                large:this.state.large+1,
                adult:this.state.adult+2,
                message:""
            },this.calculate_total)
        }

        else{
            this.setState({
                message:"Warning: Max purchase allowed is 1000"
            },this.calculate_total)
        }

    }

    
    decrement_child=()=>{
        if(this.state.child > 0)
        {
            if(this.state.small>0)
            {
                this.setState({
                    small:this.state.small-1,
                    child:this.state.child-1,
                    message:""
                },this.calculate_total)
            }

            else if(this.state.medium > 0)
            {
                this.setState({
                    small:this.state.small+1,
                    medium:this.state.medium-1,
                    child:this.state.child-1,
                    message:""
                },this.calculate_total)
            }

            else if(this.state.large > 0)
            {
                this.setState({
                    medium:this.state.medium+1,
                    large:this.state.large-1,
                    small:this.state.small+1,
                    child:this.state.child-1,
                    message:""
                },this.calculate_total)
            }
        }

    }

    decrement_adult=()=>{
        if(this.state.adult > 1)
        {
            if(this.state.medium > 0)
            {
                this.setState({
                    medium:this.state.medium-1,
                    adult:this.state.adult-1,
                    message:""
                },this.calculate_total)
            }

            else if(this.state.large > 0)
            {
                this.setState({
                    medium:this.state.medium+1,
                    large:this.state.large-1,
                    adult:this.state.adult-1,
                    message:""
                },this.calculate_total)
            }
        }

        else{
            this.setState({
                message:"Warning: Sorry! Atleast 1 adult should be there"
            },this.calculate_total)
        }
    }

    decrement_small=()=>{
        if(this.state.small>0)
        {
            this.setState({
                small:this.state.small-1,
                child:this.state.child-1,
                message:""
            },this.calculate_total)
        }
    }

    decrement_medium=()=>{
        if(this.state.medium>0)
        {
            if(this.state.adult>1)
            {
                this.setState({
                    medium:this.state.medium-1,
                    adult:this.state.adult-1,
                    message:""
                },this.calculate_total)
            }  
            
            else if(this.state.adult===1){
                if(this.state.child>2)
                {
                    this.setState({
                        medium:this.state.medium-1,
                        child:this.state.child-2,
                        message:""
                    },this.calculate_total)
                }

                else{

                    this.setState({
                        message:"Warning: Sorry! Atleast 1 adult should be there"
                    },this.calculate_total)

                    // this.setState({
                    //     medium:this.state.medium-1,
                    //     adult:this.state.adult-1
                    // },this.calculate_total)
                }
                
            }

            else if(this.state.child>=2)
            {
                this.setState({
                    medium:this.state.medium-1,
                    child:this.state.child-2,
                    message:""
                },this.calculate_total)
            } 
        }
    }

    decrement_large=()=>{
        if(this.state.large>0)
        {
            if(this.state.adult>2)
            {
                this.setState({
                    adult:this.state.adult-2,
                    large:this.state.large-1,
                    message:""
                },this.calculate_total)
            }  
            
            else if(this.state.adult===2)
            {
                if(this.state.child>=2)
                {
                    this.setState({
                        adult:this.state.adult-1,
                        child:this.state.child-2,
                        large:this.state.large-1,
                        message:""
                    },this.calculate_total)
                }
                
                else{
                    this.setState({
                        message:"Warning: Sorry! Atleast 1 adult should be there"
                    },this.calculate_total)
                }
            }

            else if(this.state.adult===1)
            {
                if(this.state.child>4)
                {
                    this.setState({
                        child:this.state.child-4,
                        large:this.state.large-1,
                        message:""
                    },this.calculate_total)
                }
                
                else{
                    this.setState({
                        message:"Warning: Sorry! Atleast 1 adult should be there"
                    },this.calculate_total)
                }
                

                // else{
                //     this.setState({
                //         child:this.state.child-2,
                //         adult:this.state.adult-1,
                //         large:this.state.large-1
                //     },this.calculate_total)
                // }
                
            } 
            
        }
    }

    calculate_total=()=>{
        this.setState({
            total:(this.state.small*150)+(this.state.medium*200)+(this.state.large*300)
        },this.enable_disable_button)
    }

    enable_disable_button=()=>{
        if(this.state.child=0)
        {
            //child -  : Gray
        }
        else{
            //child -  : Blue
        }

        if(this.state.adult=0)
        {
            //adult -  : Gray
        }
        else{
            //adult -  : Blue
        }

        if(this.state.small=0)
        {
            //small -  : Gray
        }
        else{
            //small -  : Blue
        }

        if(this.state.medium=0)
        {
            //medium -  : Gray
        }
        else{
            //medium -  : Blue
        }

        if(this.state.large=0)
        {
            //large -  : Gray
        }
        else{
            //large -  : Blue
        }

        //////////////////////////////

        if(this.state.total<=700)
        {
            //large +  : Red
            //medium +  : Red
            //small +   : red
        }

        else{
            //large +  : Gray
        }

        if(this.state.total<=800)
        {
            //medium +  : Red
            //small +   : red
        }

        else{
            //large +  : Gray
        }
    }

    // decrement_medium=()=>{
    //     if(this.state.medium>=1)
    //     {
    //         if(this.state.adult >= 2)
    //         {
    //             this.setState({
    //                 medium:this.state.medium-1,
    //                 adult:this.state.adult-1
    //             })
    //         }

    //         else{
    //             this.setState({
    //                 medium:this.state.medium-1,
    //                 child:this.state.child-2
    //             })
    //         }
    //     }

    //     // else if(this.state.large>=1)
    //     // {
    //     //     this.setState({
    //     //         large:this.state.large-1,
    //     //         medium:this.state.medium+1,
    //     //     })

    //     //     if(this.state.adult >= 2)
    //     //     {
    //     //         this.setState({
    //     //             medium:this.state.medium-1,
    //     //             adult:this.state.adult-1
    //     //         })
    //     //     }

    //     //     else{
    //     //         this.setState({
    //     //             medium:this.state.medium-1,
    //     //             child:this.state.child-2
    //     //         })
    //     //     }
    //     // }
    // }

   

    // increment_adult=()=>{
    //     this.setState({
    //         adult:this.state.adult+1
    //     })
    // }


    render(){

        return(
            <div>
                <h2>Pizza Order</h2>
                <div>
                    <div>
                        <h3>Small</h3>
                        <button onClick={this.increment_small} >+</button>
                        <span>{this.state.small}</span>
                        <button onClick={this.decrement_small}>-</button>
                    </div>
                    <div>
                        <h3>Medium</h3>
                        <button onClick={this.increment_medium}>+</button>
                        <span>{this.state.medium}</span>
                        <button onClick={this.decrement_medium}>-</button>
                    </div>
                    <div>
                        <h3>Large</h3>
                        <button onClick={this.increment_large}>+</button>
                        <span>{this.state.large}</span>
                        <button onClick={this.decrement_large}>-</button>
                    </div>
                    <div>
                        <h3>Adults</h3>
                        <button onClick={this.increment_medium}>+</button>
                        <span>{this.state.adult}</span>
                        <button onClick={this.decrement_adult}>-</button>
                    </div>
                    <div>
                        <h3>Children</h3>
                        <button onClick={this.increment_small}>+</button>
                        <span>{this.state.child}</span>
                        <button onClick={this.decrement_child}>-</button>
                    </div>

                    <div>
                        <h1>TOTAL COST</h1>
                        <h1>{this.state.total}</h1>
                    </div>

                    <div>
                        <h6>{this.state.message}</h6>
                    </div>
                </div>

            </div>
        )
    }
}
export default Pizzaorder