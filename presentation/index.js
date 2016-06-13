import React from "react";

import {
    Appear,
    CodePane,
    Deck,
    Heading,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text,
    Code
} from "spectacle";

import createTheme from "spectacle/lib/themes/default";
import Interactive from "../assets/interactive";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
    primary: "#ff4081"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>

                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            ECMAScript
                        </Heading>
                        <Text textSize="2em" textColor="white" fit caps>
                            Quoi de neuf?
                        </Text>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Heading size={2} caps textColor="primary" textFont="primary">
                            Note
                        </Heading>
                        <Heading size={2} caps fit textColor="primary" textFont="primary">
                            100% des slides ont été écrites avec ES6+
                        </Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} caps fit textColor="tertiary">
                            La preuve
                        </Heading>
                        <Interactive/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} caps textColor="black" textFont="primary">
                            Comment coder avec
                        </Heading>
                        <List>
                            <Appear><ListItem textSize="2em">Babel</ListItem></Appear>
                            <Appear><ListItem textSize="2em">Transcompiler vers...</ListItem></Appear>
                            <Appear><ListItem textSize="2em">ES2015 vs ES6</ListItem></Appear>
                            <Appear><ListItem textSize="2em">Stage? Version courante?</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">var, const, let</Heading>
                        <CodePane
                            textSize="1em"
                            lang="jsx"
                            source={require("raw!../assets/variables.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} caps textColor="black" textFont="primary">Fat arrow</Heading>
                        <CodePane
                            textSize="1em"
                            lang="jsx"
                            source={require("raw!../assets/fatArrow.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} caps textColor="black" textFont="primary">Fat arrow (suite)</Heading>
                        <CodePane
                            textSize="0.8em"
                            lang="jsx"
                            source={require("raw!../assets/fatArrowContinue.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} caps textColor="black" textFont="primary">Template string</Heading>
                        <CodePane
                            textSize="1em"
                            lang="jsx"
                            source={require("raw!../assets/templateString.example")}
                            margin="20px auto" />
                    </Slide>


                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">class</Heading>
                        <CodePane
                            textSize="0.55em"
                            lang="jsx"
                            source={require("raw!../assets/class.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">class (suite)</Heading>
                        <CodePane
                            textSize="0.5em"
                            lang="jsx"
                            source={require("raw!../assets/classContinue.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} caps textColor="black" textFont="primary">Property shorthand</Heading>
                        <CodePane
                            textSize="0.55em"
                            lang="jsx"
                            source={require("raw!../assets/shorthand.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={3} caps textColor="black" textFont="primary">Spread operator (array)</Heading>
                        <CodePane
                            textSize="0.8em"
                            lang="jsx"
                            source={require("raw!../assets/spreadArray.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={3} caps textColor="black" textFont="primary">Spread operator (objet)</Heading>
                        <CodePane
                            textSize="0.7em"
                            lang="jsx"
                            source={require("raw!../assets/spreadObject.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">import, export</Heading>
                        <CodePane
                            textSize="0.8em"
                            lang="jsx"
                            source={require("raw!../assets/importExport.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">promise</Heading>
                        <CodePane
                            textSize="0.6em"
                            lang="jsx"
                            source={require("raw!../assets/promise.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">Generator</Heading>
                        <CodePane textSize="0.8em" lang="jsx" source={require("raw!../assets/generator.example")} margin="20px auto" />
                        <Appear>
                            <div>
                                <Code textSize="1em" bgColor="white">const generator = numbers();</Code>
                                <Appear><Code textSize="1em" bgColor="white">{"  {}"}</Code></Appear>
                            </div>
                        </Appear>
                        <Appear>
                            <div>
                                <Code textSize="1em" bgColor="white">generator.next();</Code>
                                <Appear><Code textSize="1em" bgColor="white">{'{"value":2, "done":false}'}</Code></Appear>
                            </div>
                        </Appear>
                        <Appear>
                            <div>
                                <Code textSize="1em" bgColor="white">generator.next();</Code>
                                <Appear><Code textSize="1em" bgColor="white">{'{"value":null, "done":true}'}</Code></Appear>
                            </div>
                        </Appear>
                        <Appear>
                            <div>
                                <Code textSize="1em" bgColor="white">generator.next(10);</Code>
                                <Appear><Code textSize="1em" bgColor="white">{'{"value":30, "done":true}'}</Code></Appear>
                            </div>
                        </Appear>
                        <Appear>
                            <div>
                                <Code textSize="1em" bgColor="white">generator.next();</Code>
                                <Appear><Code textSize="1em" bgColor="white">{'{"done":true}'}</Code></Appear>
                            </div>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">En vrac</Heading>
                        <CodePane
                            textSize="0.8em"
                            lang="jsx"
                            source={require("raw!../assets/bulk.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">En vrac 2</Heading>
                        <CodePane
                            textSize="0.8em"
                            lang="jsx"
                            source={require("raw!../assets/bulkTwo.example")}
                            margin="20px auto" />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} textColor="black" textFont="primary">À venir</Heading>
                        <List>
                            <ListItem textSize="2em">Async</ListItem>
                            <ListItem textSize="2em">Readonly et property decorator</ListItem>
                            <ListItem textSize="2em">Observable</ListItem>
                            <ListItem textSize="2em">Cancel promise</ListItem>
                            <ListItem textSize="2em">Private fields</ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            Merci
                        </Heading>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
