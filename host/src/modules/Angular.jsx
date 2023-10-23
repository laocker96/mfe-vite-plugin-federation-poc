import React, {useEffect, useRef} from "react";
import {mount} from "angularRemote/angularRemote";

const Angular = () => {
    const ref = useRef(null);
    useEffect(() => {
        mount();
    }, []);
    return <div>
        <app-root></app-root>
    </div>;
};

export default Angular;