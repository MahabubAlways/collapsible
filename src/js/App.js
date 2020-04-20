import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Overview">
                            <p> Nulla mollit consectetur minim sit adipisicing labore voluptate est in nulla eiusmod ut magna. Laborum consectetur eu ea id adipisicing aliqua nulla Lorem dolore cillum. Ullamco consequat deserunt laboris eiusmod ea id irure. Pariatur laborum amet ex non commodo esse dolore qui excepteur ad laboris. Nisi dolore dolor reprehenderit ipsum fugiat quis velit eiusmod mollit. Sunt ad enim ex voluptate ut occaecat occaecat exercitation.</p>
                        </Collapsible>
                        <Collapsible title="Features">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                        </Collapsible>
                        <Collapsible title="Software">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
