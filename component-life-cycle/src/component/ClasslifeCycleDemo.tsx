import React, { Component } from "react";
type IState={count:number;};
type IProps={}
class LifecycleDemo extends Component <IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={count:0};
        console.log("Constructor:Component is Being Created");
    }
    static getDerivedStateFromProps(props:any,state:any){
        console.log("getDerivedStateFromProps: Sync state with props if needed")
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount:Componenet mounted to DOM")
    }

    shouldComponentUpdate(nextProps:any,nextState:any){
        console.log("shouldComponentUpdate:","Yes")
        return true
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
        console.log("getSnapshotBeforeUpdate:Just before DOM is Updated")
        return null
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
        console.log("componentDidUpdate:component Updated")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount:component is removed")
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    };

    render(){
        console.log("Render: REndering Component")
        return(
            <div>
                <h2>LifeCycle Demo Component</h2>
                <p>count:{this.state.count}</p>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }

    

}
export default LifecycleDemo




// import React, { Component } from "react";

// // ✅ Define types for props and state
// type IState = { count: number };
// type IProps = {};

// // ✅ Class Component
// class LifecycleDemo extends Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = { count: 0 };
//     console.log("🧱 Constructor: Component is being created");
//   }

//   static getDerivedStateFromProps(props: any, state: any) {
//     console.log("🔄 getDerivedStateFromProps: Sync state with props if needed");
//     return null; // always return an object or null
//   }

//   componentDidMount() {
//     console.log("✅ componentDidMount: Component mounted to DOM");
//   }

//   shouldComponentUpdate(nextProps: any, nextState: any) {
//     console.log("🤔 shouldComponentUpdate:", "Yes — allow re-render");
//     return true; // ✅ must return true or false
//   }

//   getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
//     console.log("📸 getSnapshotBeforeUpdate: Just before DOM is updated");
//     return null;
//   }

//   componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any) {
//     console.log("🔁 componentDidUpdate: Component updated");
//   }

//   componentWillUnmount() {
//     console.log("🧹 componentWillUnmount: Component will be removed");
//   }

//   // ✅ render() is required
//   render() {
//     console.log("🎨 render: Rendering UI");

//     return (
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <h2>React Lifecycle Demo</h2>
//         <p>Count: {this.state.count}</p>
//         <button
//           onClick={() => this.setState({ count: this.state.count + 1 })}
//           style={{
//             padding: "10px 20px",
//             borderRadius: "8px",
//             backgroundColor: "teal",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// export default LifecycleDemo;
