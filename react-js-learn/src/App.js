import React, {useState} from "react";
import Counter from "./component/Counter";
import PostItem from "./component/PostItem";

function App() {

    let [value, setValue] = useState('Текст');



    return (
        <div className="App">
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        </div>
    );
}

export default App;
