import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

// const contactDetails = {
//     Harry: {Address : 'Gryffindor Tower, Hogwarts'},
//     Ron: {Address : 'Gryffindor Tower, Hogwarts'}
// };

const contactDetails = ['Gryffindor Tower, Hogwarts','Gryffindor Tower, Hogwarts'];


const contacts = ['Harry', 'Ron'];


export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            showMyContact: false

        };
        // this.nextContact = this.nextContact.bind(this);
        this.showContact = this.showContact.bind(this);
    }

    // nextContact() {
    //
    //     let numberOfContacts = contacts.length - 1;
    //     if(this.state.count !== numberOfContacts) {
    //         this.setState({count: this.state.count + 1});
    //     } else {
    //         this.setState({count: 0});
    //     }
    //
    //     // let contactComponents = [contacts[this.state.count], contactDetails[this.state.count]];
    //
    //     // let contactOne = contacts.map((item, key) => contactComponents[key]);
    //     // // console.log(key)
    //     // console.log(contactOne)
    //
    // }

    showContact() {
        this.setState({showMyContact: !this.state.showMyContact})
    }



    render() {

        const styles = {
            container: { display: 'flex', justifyContent: 'center', width: '100vw', height: 100, flexDirection: 'column', padding: 100 },
            btn: { width: '100%', display: 'flex', justifyContent: 'center'},
            h1: { border: '2px solid blue', padding: 5, display: 'flex'}
        };

        let contactComponents = [contacts[this.state.count], contactDetails[this.state.count]];

        console.log(this.state.showMyContact)

        return (
            <div>
                <div style={ styles.container }>

                     <TransitionGroup component={null}>
                        { contactComponents.map((item, key) =>
                            // ({id, item}) => (
                            <CSSTransition
                                in={this.state.showMyContact}
                                // appear={true}
                                key={key}
                                timeout={800}
                                classNames={"fade"}>
                                    <h1 style={styles.h1}>
                                        {
                                            item
                                        }
                                    </h1>
                            </CSSTransition>

                        )}
                    </TransitionGroup>

                    <div style={ styles.btn }>
                        <button onClick={ this.showContact }>show/hide</button>
                    </div>
                </div>
            </div>
        )
    }
}

// const Slide = (props) => (
//     <TransitionGroup component={ null }>
//         <CSSTransition
//             in={true}
//             appear={true}
//             key={props.count}
//             timeout={900}
//             classNames={"slide"}>
//             { props.children }
//         </CSSTransition>
//
//
//     </TransitionGroup>
// );

// const MultipleComponentTransition = (props) => (
//     <TransitionGroup>
//         { props.children.map(item =>
//             // ({id, item}) => (
//                 <CSSTransition
//                 in={props.visible}
//                 appear={true}
//                 key={props.count}
//                 timeout={900}
//                 classNames={"slide"}>
//                     {item}
//                 </CSSTransition>
//             // )
//         )};
//     </TransitionGroup>
// );
//
// const Slide = (props) => (
//     <TransitionGroup component={ null }>
//         { props.contacts.map(contact =>
//         <CSSTransition
//             in={true}
//             appear={true}
//             key={props.count}
//             timeout={900}
//             classNames={"slide"}>
//             { contact }
//         </CSSTransition>
//
//         )}
//
//     </TransitionGroup>
// );
