import * as React from "react";
import {Dispatch} from "react";
import axios from "axios";
import {connect} from "react-redux";

interface IProps {
    data: string;
    dispatch: Dispatch<any>;
}

class About extends React.Component<IProps> {


    static loadData = (store) => {
        return new Promise(resolve => {
            axios.get('http://localhost:3000/getData').then((res) => {
                store.dispatch({
                    type: 'CHANGE_STATE',
                    payload: {
                        data: res.data.data
                    }
                })
                resolve(res.data.data)
            })
        })
    }

    async componentDidMount() {
        if (!this.props.data) {
            await About.loadData(this.props);
            console.log(this.props)
        }
    }

    render() {
        return <div>About:{this.props.data}</div>
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        dispatch: dispatch
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)