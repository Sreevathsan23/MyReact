const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", {id: "child"}, [
            React.createElement("h1", {}, "Child H1 tag"),
            React.createElement("h2", {}, "Child H2 tag"),
            React.createElement("h3", {}, "Child H3 tag"),
            React.createElement("h4", {}, "Child H4 tag"),
            React.createElement("h5", {}, "Child H5 tag"),
            React.createElement("h6", {}, "Child H6 tag")
        ]
    )
);

// const element = React.createElement(
//     'h1',
//     { className: 'heading' },
//     'Sreevathsan'
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);