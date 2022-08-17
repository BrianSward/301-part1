import React from 'react';
import HornedBeast from './HornedBeast.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: null
    }
  }
  
  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});
  
  handleClick = ((beast) => {
    this.setState({selectedBeast: beast});
    this.handleShow();
  }
  )

  render() {
    return (
      <>
     
      <div>
        {this.props.data.map((x,i)=>(
          <HornedBeast key={i}
          title = {x.title}
          image_url = {x.image_url}
          desc = {x.description}
          onClick = {() => this.handleClick(x)}
          /> 
          ))
        }
      </div>
    {(this.state.selectedBeast) &&
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.state.selectedBeast.image_url} width="400" alt="" />          
          <br></br>{this.state.selectedBeast.description}               
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    }
     </>
        )
  }
}

export default Main;