import React,{Component} from 'react'

class Pizzaorder extends Component
{
    
    state=
    {
        small:0, medium:1, large:0, adult:1, child:0, total:200, message:"",
        small_p:false, small_m:true, med_p:false, med_m:true, large_p:false, large_m:true, ch_p:false, ch_m:true, ad_p:false, ad_m:true
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
                if(this.state.child>=4)
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

    calculate_total=()=>
    {
        // this.state.child==0?this.state.ch_m=true:this.state.ch_m=false
        // this.state.adult==0?this.state.ad_m=true:this.state.ad_m=false
        // this.state.small==0?this.state.small_m=true:this.state.small_m=false
        // this.state.medium==0?this.state.med_m=true:this.state.med_m=false
        // this.state.large==0?this.state.large_m=true:this.state.large_m=false


        // this.state.total<=850?this.state.small_p=false:this.state.small_p=true

        this.setState({
            total:(this.state.small*150)+(this.state.medium*200)+(this.state.large*300),
           
        },this.freeze_button)
        
    }

    freeze_button=()=>
    {
        this.state.child===0?this.setState({ch_m:true}):this.setState({ch_m:false})
        this.state.adult>1?this.setState({ad_m:false}):this.setState({ad_m:true})
        this.state.small===0?this.setState({small_m:true}):this.setState({small_m:false})
        this.state.medium===0?this.setState({med_m:true}):this.setState({med_m:false})
        this.state.large===0?this.setState({large_m:true}):this.setState({large_m:false})

        this.state.total<=850?this.setState({small_p:false}):this.setState({small_p:true})
        this.state.total<=800?this.setState({med_p:false}):this.setState({med_p:true})
        this.state.total<=700?this.setState({large_p:false}):this.setState({large_p:true})

        this.state.total<=800?this.setState({ad_p:false}):this.setState({ad_p:true})
        this.state.total<=850?this.setState({ch_p:false}):this.setState({ch_p:true})

        if(this.state.adult===1)
        {
            if((this.state.medium === 1) && (this.state.child >= 2))
            {
                this.setState({med_m:false})
            }

            else{
                this.setState({med_m:true})
            }
        }

        if(this.state.adult <= 2)
        {
            
            
            if((this.state.large >= 1) && (this.state.child >= 4))
            {
                this.setState({large_m:false})
            }

            else if((this.state.large >= 1) && (this.state.adult === 2) && (this.state.child < 2))
            {
                this.setState({large_m:true})
            }

            else{
                this.setState({large_m:true})
            }
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
                <h2 className="fa header">Order <b>Pizza</b></h2>
                <div className="container border p-3">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-2"><h3 class='fas fa-pizza-slice fa-sm ad'></h3></div>
                        <div className="col-md-3 ad">SMALL</div>
                        
                        <button  className='fa fa-minus' disabled={this.state.small_m}  onClick={this.decrement_small}></button>
                        <span ><i className="fa ad">{this.state.small}</i></span>
                        <button  className='fa fa-plus' disabled={this.state.small_p}  onClick={this.increment_small}></button>
                    </div>
                    <br/>
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2"><h3  class='fas fa-pizza-slice fa-lg ad'></h3></div>
                    <div className="col-md-3 medium">MEDIUM</div>
                    
                        <button  className='fa fa-minus' disabled={this.state.med_m}  onClick={this.decrement_medium}></button>
                        
                        <span ><i className="fa ad">{this.state.medium}</i></span>
                        
                        <button className='fa fa-plus' disabled={this.state.med_p}  onClick={this.increment_medium}></button>
                    
                    </div>
                    <br/>
                    
                    <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2"><h3  class='fas fa-pizza-slice fa-1.5X medium'></h3></div>
                    <div className="col-md-3 large">LARGE</div>
                    
                    
                        <button className='fa fa-minus' disabled={this.state.large_m}  onClick={this.decrement_large}></button>
                        <span ><i className="fa ad">{this.state.large}</i></span>
                        <button className='fa fa-plus' disabled={this.state.large_p}  onClick={this.increment_large}></button>
                    
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-md-4"><i class="fa fa-user adult" aria-hidden="true">ADULTS</i></div>
                    <div className="col-md-4 adult"></div>              
                        <button className='fa fa-minus' disabled={this.state.ad_m}  onClick={this.decrement_adult}></button>
                        <span ><i className="fa ad">{this.state.adult}</i></span>
                        <button className='fa fa-plus' disabled={this.state.ad_p}  onClick={this.increment_medium}></button>
                    
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-md-4"><i class="fa fa-child child" aria-hidden="true">CHILDREN</i></div>  
                            <div className="col-md-4 child"></div>
                                <button className='fa fa-minus' disabled={this.state.ch_m}  onClick={this.decrement_child}></button>
                                <span ><i className="fa ad">{this.state.child}</i></span>
                                <button className='fa fa-plus' disabled={this.state.ch_p}  onClick={this.increment_small}></button>
                            
                            </div>
  
                </div>
                <div className="row">
                <div className="col-md-1"></div>
                <h1 className="trans">Order <b> Total</b></h1>   
                <div className="col-md-5 total"></div> 
                <h1 className="total"><i className="fa fa-sm">{this.state.total}</i></h1>
                
                
                </div>
                    

                    <div>
                        <h6>{this.state.message}</h6>
                    </div>

            </div>
        )
    }
}
export default Pizzaorder