import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

// const contactDetails = {
//     Harry: {Address : 'Gryffindor Tower, Hogwarts'},
//     Ron: {Address : 'Gryffindor Tower, Hogwarts'}
// };

const contactDetails = ['Gryffindor Tower, Hogwarts','Gryffindor Tower, Hogwarts'];


const contacts = ['Harry', 'Ron'];

const myContacts = {

    1 : [['Harry'], ['Gryffindor Tower, Hogwarts']],
    2 : [['Malfoy'], ['Dungeon, Hogwarts']]
};



export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 1,
            showMyContact: false

        };
        // this.nextContact = this.nextContact.bind(this);
        // this.showContact = this.showContact.bind(this);
    }

    nextContact() {


        let numberOfContacts = Object.values(myContacts).length;
        // console.log("length of myContacts: " + numberOfContacts);
        if(this.state.count !== numberOfContacts && this.state.showMyContact === true) {
            this.setState({count: this.state.count + 1});
        } else if(this.state.count === numberOfContacts && this.state.showMyContact === true) {
            this.setState({count: 1});
        }


        // let contactComponents = [contacts[this.state.count], contactDetails[this.state.count]];

        // let contactOne = contacts.map((item, key) => contactComponents[key]);
        // // console.log(key)
        // console.log(contactOne)

    }

    showContact() {
        this.setState({showMyContact: !this.state.showMyContact})
    };



    render() {

        let cssList = [
            "List",
            this.state.showMyContact ? "ListShow" : "ListHide"
        ];

        return (
            <div>
                <div className={"container"}>

                    <div className={cssList.join(' ')} >
                        <List myContent={myContacts[this.state.count]}/>
                        <button className={"btn"} onClick={ this.nextContact.bind(this) }>Next</button>
                    </div>
                    <div className={"btn"}>
                        <button onClick={ this.showContact.bind(this) }>show/hide</button>

                    </div>
                </div>
            </div>
        )
    }
}

// const List = (props) => {
//
//     return (
//         <div>
//             <h1 className={"h1"}> { props.myContent[0] } </h1>
//             <h1 className={"h1"}> { props.myContent[1] } </h1>
//         </div>
//     )
// };

const List = (props) => {

    return (

        <TransitionGroup component={null}>

            {props.myContent.map((item, key) =>
                <CSSTransition
                    in={true}
                    key={key}
                    timeout={800}
                    classNames={"fade"}
                >
                <h1 className={"h1"}> { item } </h1>

                </CSSTransition>
            )}
        </TransitionGroup>
    )
};

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
