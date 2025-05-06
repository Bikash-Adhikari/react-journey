
//step 4: Define work of customRender function
function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type) //blank element created
    domElement.innerHTML = reactElement.children //added html from reactElement in blank element
    domElement.setAttribute('href', reactElement.props.href)  //attribute 1 in HTML
    domElement.setAttribute('target', reactElement.props.target) //attribute 2 in HTML

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children //every child of reactElement object

    for (const prop in reactElement.props) {
        if (prop === "children") continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)  //injected domElement inside the mainContainer/container
}



// step 2: Define <a> tag as an OBJECT
const reactElement = {
    type: 'a',
    props: {
        href: 'https://bikashadhikari.com',
        target: '_blank'
    },
    children: 'Click me to visit my portfolio'
}



//step 1: get HTML in JS by ID
const mainContainer = document.querySelector('#root');

//step 3: method that adds the reactElement in mainContainer 
customRender(reactElement, mainContainer)


