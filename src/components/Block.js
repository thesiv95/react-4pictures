import React from "react";

class Block extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFullSize: false
        }
    }

    onClick = () => {
       let targetImg = this.myImg; // or height, doesn't matter 'cuz it's square :)

       // this.setState({isFullSize: !this.state.isFullSize});
        if (!this.state.isFullSize){
            this.setState({isFullSize: true});
            targetImg.style.width = 400 + 'px';
            targetImg.style.height = 400 + 'px';
            targetImg.style.position = 'absolute';
            targetImg.style.top = 0 + 'px';
            targetImg.style.left = 0 + 'px';
            targetImg.style.zIndex = '10';
        } else {
            this.setState({isFullSize: false});
            targetImg.style.width = 200 + 'px';
            targetImg.style.height = 200 + 'px';
            targetImg.style.position = 'relative';
            targetImg.style.zIndex = '0';
        }


    };


    render() {
        // ${this.state.isFullSize ? ' hidden' : ''}
        return (
            <div className={`container__block_item`}>
                <img ref={img => this.myImg = img}
                     className="container__block_item-img"
                     src={this.props.imgSrc}
                     alt={this.props.imgAlt}
                    onClick={this.onClick.bind(this)}/>
            </div>
        )
    }
}


export default Block;