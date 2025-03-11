import React from 'react' //al importar debemos llamar igual que la libreria 
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))
//siempre debe de existir un elemento padre que contenga al resto sde elementos
function Greeting(){
    const married = true
    return <h1>{married ? 'esta casado 😆':'no esta casado 🫠'}</h1>
}
root.render( <div>
    <Greeting/>
</div>)