import React, {useState, useContext} from 'react';
import './index.css';

export default class Wheel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: null,
        };
        this.selectItem = this.selectItem.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.resultIndex !== this.props.resultIndex){
            this.selectItem() 
        }
    }
  
    selectItem() {
        if (this.state.selectedItem === null) {
            const selectedItem = this.props.resultIndex;
            if (this.props.onSelectItem) {
                this.props.onSelectItem(selectedItem);
            }
            this.setState({ selectedItem });
        } else {
            this.setState({ selectedItem: null });
            setTimeout(this.selectItem, 500);
        }
    }

    checkViewPoint(){
        const width = typeof window !== `undefined` ? window.innerWidth : null
        const breakpoint = 1367
        if(width>breakpoint) return true
        if(width<breakpoint) return false
    }
  
    render() {
        const { selectedItem } = this.state;
        const { items } = this.props;

        const wheelVars1 = {
            '--nb-item': items.length,
            '--selected-item': selectedItem,
            '--wheel-size': '350px',
            '--font-size-wheel': '1rem',
        };

        const wheelVars2 = {
            '--nb-item': items.length,
            '--selected-item': selectedItem,
            '--wheel-size': '250px',
            '--font-size-wheel': '0.8rem',
        };

        const randomColor = (no) => Math.floor(Math.random()*no*16777215).toString(16);

        const spinning = selectedItem !== null ? 'spinning' : '';
  
        return (
            <div className="wheel-container">
                <div className={`wheel ${spinning}`} style={this.checkViewPoint() ? wheelVars1 : wheelVars2}>
                    {items.map((item, index) => (
                        <div className="wheel-item" key={index} style={{ '--item-nb': index, 'color': "#" + '6D2E46'}}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
