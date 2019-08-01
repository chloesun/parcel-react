import React, { Component } from 'react';
import { sampleModel1 } from './models';
import GLTFViewer from './GLTFViewer';

const sampleNavCubeSettings = {
  canvasId: "myNavCubeCanvas",
  visible: true,
  cameraFly: true,
  cameraFitFOV: 45,
  cameraFlyDuration: 0.5,
  canvasWidth: 250,
  canvasHeight: 250
};

class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleViewerToggle = this.handleViewerToggle.bind(this);
  }

  handleViewerToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleViewerToggle}>
          Open/close viewer
        </button>

        {this.state.isOpen ? (
          <GLTFViewer
            canvasID="canvas-6"
            width={600}
            height={600}
            models={[sampleModel1]}
            navCubeSettings={sampleNavCubeSettings}
          />
        ) : null}
      </div>
    );
  }
}

export default ConditionalRender;
