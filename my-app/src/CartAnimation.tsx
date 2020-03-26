import * as React from 'react';
import { Modal } from 'pivotal-ui/react/modal';
import { DefaultButton, PrimaryButton } from 'pivotal-ui/react/buttons';
import 'pivotal-ui/css/colors';
import './cartanimation.css';
import { Icon } from 'pivotal-ui/react/iconography';

export interface CartAnimationState {
    show: boolean,
    disableAnimation: boolean,
    windowWidth: number
}

export default class CartAnimation extends React.Component<{}, CartAnimationState> {
    constructor(props?: any) {
        super(props);
        this.state = {
            show: true,
            disableAnimation: false,
            windowWidth: window.innerWidth,
        };
        this.updateScreenSize = this.updateScreenSize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateScreenSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenSize);
    }

    updateScreenSize() {
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    render() {
        let timeoutID;
        return (
            <div>
                <ButtonWithProgress />
                <DefaultButton onClick={() => this.setState({ show: true })}>
                    Add to cart
                </DefaultButton>
                <Modal animationDuration={this.state.disableAnimation ? 0 : undefined}
                    title="Successfully added item to cart!"
                    size={this.state.windowWidth <= 481 ? "calc(80% + 2rem)" : "auto"}
                    dialogClassName="display-flex center paxl aligner txt-c"
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                >
                    {clearTimeout(timeoutID)}
                    {timeoutID = setTimeout(() => {
                        this.setState({
                            show: false
                        })
                    }, 2000)}
                    <PrimaryButton large flat className="aligner-item" onClick={() => this.setState({ show: false })}>Close</PrimaryButton>
                </Modal>
            </div>
        );
    }
}

function ButtonWithProgress() {
    const [inProgress, setInProgress] = React.useState(false);
  
    function doAsyncAction() {
      setInProgress(true);
      setTimeout(() => setInProgress(false), 3000);
    }
  
    return (
      <PrimaryButton
        disabled={inProgress}
        icon={inProgress ? <Icon src="spinner-lg"/> : null}
        onClick={doAsyncAction}>
          {inProgress ? 'Saving...' : 'Add to cart'}
      </PrimaryButton>
    );
  }