import * as React from "react";
class User extends React.Component {
    state = {
        count: 1000,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ count: this.state.count + 1000 });
        }, 2000);
    }
    buttonClickHandle() {
        this.setState((state, props) => {
            return {
                count: state.count + props.count,
            };
        });
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.buttonClickHandle.bind(this)}>
                        button
                    </button>
                </div>
                {this.state.count}
                {this.props.name}
                {this.props.count}
            </div>
        );
    }
}
export default class App extends React.Component {
    state = {
        name: "React",
        count: 1,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ count: this.state.count + 100 });
        }, 1000);
    }

    componentDidUpdate(prevProps) {
        console.log("update", this);
    }
    render() {
        return (
            <div>
                Hello Word
                <User name={this.state.name} count={this.state.count}></User>
            </div>
        );
    }
}
